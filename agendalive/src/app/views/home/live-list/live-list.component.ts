import { WebSocketConnector } from './../../../shared/websocket/websocket-connector';
import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css'],
})
export class LiveListComponent implements OnInit {
  private webSocketConnector: WebSocketConnector;
  livesPrevious: Live[];
  livesNext: Live[];
  previous = false;
  next = false;

  constructor(
    private liveService: LiveService,
    private sanitize: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.connector();
    this.getLives();
  }

  connector(): void {
    this.webSocketConnector = new WebSocketConnector(
      'http://localhost:8080/socket',
      '/liveProcessor',
      this.onMessage.bind(this)
    );
  }

  onMessage(message: any): void {
    const liveMessage = JSON.parse(message.body);
    liveMessage.urlSafe = this.sanitize.bypassSecurityTrustResourceUrl(liveMessage.liveLink);
    this.livesPrevious.push(liveMessage);
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe((data) => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach((live) => {
        live.urlSafe = this.sanitize.bypassSecurityTrustResourceUrl(
          live.liveLink
        );
      });
      this.previous = true;
    });
    this.liveService.getLivesWithFlag('next').subscribe((data) => {
      this.livesNext = data.content;
      this.livesNext.forEach((live) => {
        live.urlSafe = this.sanitize.bypassSecurityTrustResourceUrl(
          live.liveLink
        );
      });
      this.next = true;
    });
  }
}
