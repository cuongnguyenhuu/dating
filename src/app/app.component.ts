import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images = [
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/210114652_374093354071388_6997650203568635632_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=-GqsfMXSZSAAX9omYVv&_nc_ht=scontent-hkg4-1.xx&oh=764bfcb584e50afc227a5af38f16d94c&oe=6123A4AB",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/157864742_195089051954148_77811095995198372_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MJDp1FASPjcAX_muvTO&_nc_ht=scontent-hkt1-2.xx&oh=729368d89a4518ee9a38d35f1af6d8c4&oe=60FD4646",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/161728195_208066584406644_9179322075528897974_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=tpDjxh6AP-QAX8AZ8Nn&_nc_ht=scontent-hkg4-1.xx&oh=a22776ab68d1ff9cc6924033bffd9943&oe=60FD7699",
    "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/211801267_953617795182176_2964638749707447320_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=zDhDAZxUZLYAX_urIcn&tn=J23Wi5DriEvRae87&_nc_ht=scontent-hkt1-1.xx&oh=73d1badc55fa7f315b12e8377c3dda52&oe=60FD17A3",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/134056259_1577661659088742_1169921139806117259_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=K1OUxUOIdNEAX8ndY1J&_nc_ht=scontent-hkt1-2.xx&oh=6527ea2b55ca313cdd2f04340872ef51&oe=60FD7DB4",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/215219702_186893510076214_525854707597137388_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Isev0dimoaUAX9pc5dx&_nc_ht=scontent-hkt1-2.xx&oh=021b10adfa54524e0585803775425728&oe=60FD45ED",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/213078628_504447047283218_8251220788384455421_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=HKN1wjS_7ncAX_8ben5&_nc_ht=scontent-hkt1-2.xx&oh=22699b63df442bf3d58cdfd4984f1f6f&oe=60FD7A47"
  ]

  index = 0

  ngOnInit(): void {
    this.playAudio();
    throw new Error('Method not implemented.');
  }
  title = 'dating';
  
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/test.mp3";
    audio.load();
    // audio.play();
  }
  
  next(){
    if (this.index == this.images.length - 1) 
    {
      this.index = 0
    } else {
      this.index = this.index + 1
    }
  }
}
