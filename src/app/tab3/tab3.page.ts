import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  battleResults: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.battleResults = this.sharedService.getBattleResults();
  }
}
