import { WebSocketConnector } from './../../shared/websocket/websocket-connector';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from '../form/live-form-dialog/live-form-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private webSocketConnector: WebSocketConnector;
  itens: any[] = [];

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    // this.webSocketConnector = new WebSocketConnector(
    //   'http://localhost:8080/socket',
    //   '/statusProcessor',
    //   this.onMessage.bind(this)
    // );
  }

  start() {
    this.http
      .put('http://localhost:8080/api', {})
      .subscribe((response) => console.log(response));
  }

  onMessage(message: any): void {
    this.itens.push(message.body);
  }

  openDialog() {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
