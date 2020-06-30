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
  livesPrevious: Live[];
  livesNext: Live[];

  constructor(
    private liveService: LiveService,
    private sanitize: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe((data) => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach((live) => {
        live.urlSafe = this.sanitize.bypassSecurityTrustResourceUrl(
          live.liveLink
        );
      });
    });
    this.liveService.getLivesWithFlag('next').subscribe((data) => {
      this.livesNext = data.content;
      this.livesNext.forEach((live) => {
        live.urlSafe = this.sanitize.bypassSecurityTrustResourceUrl(
          live.liveLink
        );
      });
    });
  }
}
