import { Component, OnInit } from '@angular/core';
import { Player } from "../../interfaces/player";
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number;
  players: Player[];
  player: Player;

  constructor(private service: PlayerService, private route: ActivatedRoute) 
  { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.id = 47;
    this.getPlayers();
    this.getPlayerById();
  }

  getPlayers(){
    this.service.getTable()
    .subscribe(players => {
      this.players = players
    });

    this.players.forEach(element => {
      console.log(element);
    });
  }
  
  getPlayerById(){
    console.log("here");
    this.service.getPlayerById(this.id).subscribe(result => {
      this.player = result;
      console.log(result);
    })
  }

}
