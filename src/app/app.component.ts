import { Component } from '@angular/core';
import { MessagingService } from "./messaging.service";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notification';

  message;
  constructor(private messagingService: MessagingService) { }
  
  ngOnInit() {
    const userId = 'user1';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
}
