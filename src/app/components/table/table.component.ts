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
  displayedColumns: any = [
    {def: 'pos', label: 'Position', showMobile: true },
    {def: 'name', label: 'Name', showMobile: true },
    {def: 'wins', label: 'wins', showMobile: true },
    {def: 'losses', label: 'losses', showMobile: true },
    {def: 'draws', label: 'draws', showMobile: false },
    {def: 'attented', label: 'attented', showMobile: false },
    {def: 'games', label: 'games', showMobile: false },
    {def: 'difference', label: 'difference', showMobile: true },
    {def: 'lastFive', label: 'lastFive', showMobile: true },
  ];
  innerWidth: any;


  constructor(private service: PlayerService) 
  { 
    
  }

  ngOnInit() {
    this.id = 47;
    this.getPlayers();
    this.getPlayerById();
    this.innerWidth = window.innerWidth;

    console.log("width:" + this.innerWidth);
  }

  getDisplayedColumns(): string[] {
    const isMobile = this.innerWidth < 500;
    console.log(isMobile);
    return this.displayedColumns
      .filter(cd => !isMobile || cd.showMobile)
      .map(cd => cd.def);
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
