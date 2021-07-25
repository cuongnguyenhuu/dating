import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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

  strings = [
    `Cục cưng à!
     Hôm nay là 1 ngày đặt biệt. Lúc trước thì là đặt biệt với em nhưng bây giờ nó rất đặt biệt với anh.`,
    "Anh biết anh chưa làm em cảm thấy an toàn. Những lời a nói nó không ngọt ngào, không cuốn hút nhưng nó xuất phát từ sự chân thành của anh.",
    "Đến bây giờ anh vẫn chưa tin được rằng em đã cho anh có cơ hội để được bên em, chăm sóc em, yêu thương em. Những thứ mà a chưa từng được cảm nhận bao giờ.",
    "Anh luôn muốn tạo cho em những bất ngờ, nó không chỉ thể hiện tình cảm của anh dành cho em mà anh còn muốn em luôn vui cười mỗi ngày.",
    "Có những lúc đôi ta giận nhau, những lúc đó anh cực kỳ quý trọng vì nó là cơ hội để chúng ta hiểu nhau hơn sau những cuộc nói chuyện.",
    "Anh muốn làm 1 điều gì đó đặt biệt cho em trong ngày sinh nhật đầu tiên anh có mặt này để bù đắp lại phần nào cho em (Còn quà thì sau dịch nhaaaa)",
    "Chúc mừng sinh nhật em, chúc cục cưng của anh tuổi mới tràn đầy năng lượng, xinh đẹp, thành công và chăm sóc bản thân mình hơn nhaaaa."
  ]

  index = 0
  audio1 = new Audio()
  audio2 = new Audio()

  ngOnInit(): void {    
    this.audio1.src = "../../../assets/test.mp3";
    this.audio1.load();
    this.audio1.loop = true

    this.audio2.src = "../../../assets/birthday.mp3";
    this.audio2.load();
    this.audio2.loop = true
    throw new Error('Method not implemented.');
  }
  title = 'dating';

  start(){
    this.audio1.play()
    document.getElementById("card-area").style.display = "flex"
    document.getElementById("start-area").style.display = "none"
  }

  next(){
    if (this.index == this.images.length - 1) 
    {
      document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/AcrobaticCleverAegeancat-size_restricted.gif')"
      document.getElementById("card-area").style.display = "none"
      document.getElementById("birthday-area").style.display = "flex"
      document.getElementById("text-welcome").style.display = "none"
      document.getElementById("text-birthday").style.display = "block"
      this.audio1.pause();
      this.audio2.play();
    } else {
      this.index = this.index + 1
      this.audio1.play()
    }
  }
}