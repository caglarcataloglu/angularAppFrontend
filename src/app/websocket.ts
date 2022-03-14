import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:3333/ws';
    topic: string = "/auth/signout";
    stompClient: any;
    appComponent: AppComponent;
    authService: any;
    constructor(appComponent: AppComponent, authService:AuthService){
        this.appComponent = appComponent;
    }
    _connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function () {
            _this.stompClient.subscribe(_this.topic, function () {
                _this.onMessageReceived('connected');
            });
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

    onMessageReceived(message: string) {
        console.log("Message Recieved from Server :: " + message);
        this.authService.logOut();
    }
}