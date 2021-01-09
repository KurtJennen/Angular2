import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MessageService {
    /* private handler: (m: Message) => void;

    reportMessage(msg: Message) {
        if (this.handler != null) {
            this.handler(msg);
        }
    }
    
    registerMessageHandler(handler: (m: Message) => void) {
        this.handler = handler;
    } */

    private subject = new Subject<Message>();

    reportMessage(msg: Message) {
        this.subject.next(msg);
    }

    get messages(): Subject<Message> {
        return this.subject;
    }
}