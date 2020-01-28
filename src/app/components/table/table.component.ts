import { Component, OnInit } from '@angular/core';
import { Player } from "../../interfaces/player";
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number;
  players: Player[] = [];
  player: Player;
  displayedColumns: string[] = ['pos', 'name', 'wins', 'losses', 'draws', 'attented', 'gamesWon', 'gamesLost', 'difference', 'lastFive'];

  constructor(private service: PlayerService) 
  { 
    
  }

  ngOnInit() {
    this.id = 47;
    this.getPlayers();
    this.getPlayerById();
  }

  getPlayers(){
    let pos = 1;
    this.service.getTable()
    .subscribe(players => {
      this.players = players
      players.forEach(player => {
        player.pos = pos;
        player.difference = player.gamesWon - player.gamesLost;
        var x = player.lastFive.split(',');
        x.pop();
        
        
        player.lFive = []
        if(x.length > 5)
          x = x.slice(Math.max(x.length - 5, 1));
        x.forEach(el => {          
          if(el === "w")
            player.lFive.push(true);
          else if(el === "l")
            player.lFive.push(false);
        })
        console.log(player.lFive);
        pos++;        
      });
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
