import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.component.html',
  styleUrls: ['./players-detail.component.css']
})
export class PlayersDetailComponent implements OnInit {

  id: number;
  player: Player;
  lastFive: boolean[];

  constructor(private service: PlayerService, private route: ActivatedRoute) 
  { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getPlayerById();
  }


  getPlayerById(){
    console.log("here");
    console.log(this.id);
    this.service.getPlayerById(this.id).subscribe(result => {
      this.player = result;
      console.log(this.player.lastFive);
      var x = this.player.lastFive.split(',');
      x.pop();
      if(x.length > 5)
        x = x.slice(Math.max(x.length - 5, 1));
      
        console.log(x);
    })

  }

}
