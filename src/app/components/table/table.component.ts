import { Component, OnInit } from '@angular/core';
import { Player } from "../../interfaces/player";
import { SerivceService } from 'src/app/services/serivce.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  players: Player[];
  player: Player;

  constructor(private service: SerivceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this.service.getTable()
    .subscribe(players => {
      this.players = players
    });
  }

}
