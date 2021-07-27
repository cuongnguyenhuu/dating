import { animate, state, transition, trigger, style } from '@angular/animations';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeIn', [
      state('in', style({opacity: '1', filter: "blur(0px)"})),
      state('out', style({opacity: '0', filter: "blur(10px)"})),
      transition('* => *', [animate(1000)])
    ])
  ]
})
export class AppComponent implements OnInit {

  state = 'in'
  counter = 0
  enableAnimation = false;

  name = ""
  images = [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
    "./assets/images/6.jpg",
    "./assets/images/7.jpg"
  ]

  strings = [
    `Cục cưng à! ♥️
     Hôm nay là 1 ngày đặt biệt. Lúc trước thì là đặt biệt với em nhưng bây giờ nó đặt biệt với anh nữa.`,
    "Anh biết anh chưa làm em cảm thấy hạnh phúc, những lời a nói nó không ngọt ngào, không cuốn hút nhưng nó xuất phát từ sự chân thành của anh 💟.",
    "Đến bây giờ anh vẫn chưa tin được rằng em đã cho anh có cơ hội để được bên em, chăm sóc em, yêu thương em. Những thứ mà anh chưa từng tưởng tượng ra 😘.",
    "Anh luôn muốn tạo cho em những bất ngờ 😝, nó không chỉ thể hiện tình cảm của anh dành cho em mà anh còn muốn em luôn vui cười mỗi ngày 😍.",
    "Có những lúc đôi ta giận nhau, những lúc đó anh cực kỳ quý trọng vì nó là cơ hội để chúng ta hiểu nhau hơn sau những cuộc nói chuyện 💏.",
    "Anh muốn làm 1 điều gì đó đặt biệt cho em trong ngày sinh nhật đầu tiên anh có mặt này 🤗 để bù đắp lại phần nào cho em (Còn quà thì sau dịch nhaaaa 😜)",
    `Chúc mừng sinh nhật em 🎁, chúc cục cưng của anh tuổi mới tràn đầy năng lượng, xinh đẹp, thành công và chăm sóc bản thân mình hơn nhaaaa. 
Love you ❤️`
  ]

  backMessages=[
    "Không lun à 😓 cho cơ hội chọn lại đó 🤣",
    "Lại chọn không à 😢 Bùn quớ trời ơi huhu",
    "Trời, còn điều gì đau đớn bằng...😢",
    "Cạn lời gòy huhu 😭"
  ]
  backIndex = 0

  index = 0
  audio1 = new Audio()
  audio2 = new Audio()

  ngOnInit(): void {    
    this.audio1.src = "./assets/test.mp3";
    this.audio1.load();
    this.audio1.loop = true
  }
  title = 'dating';

  runAnimation() {
    this.enableAnimation = true
    this.counter = 0
    this.toggleState()
  }

  onDone($event){
    if(this.enableAnimation) {
      if (this.counter === 1){
        this.next()
      }
      this.toggleState();
    }
  }

  toggleState(){
    if(this.counter <2){
      this.state = this.state === 'in' ? 'out' : 'in'
      this.counter++;
    }
  }

  start(){
    console.log(this.name);
    
    if(this.name == "Nguyễn Hữu Cường") {
      this.audio1.play()
      document.getElementById("card-area").style.display = "flex"
      document.getElementById("start-area").style.display = "none"
    } else {
      alert("Nhập sai gòy huhu 😢")
    }
  }

  back(){
    if (this.backIndex < this.backMessages.length - 1) {
      alert(this.backMessages[this.backIndex])
    } else {
      alert(this.backMessages[this.backMessages.length - 1])
    }
    this.backIndex++
  }

  next(){
    if (this.index == this.images.length - 1) 
    {
      document.getElementById("background-image").style.backgroundImage = "url('https://thumbs.gfycat.com/AcrobaticCleverAegeancat-size_restricted.gif')"
      document.getElementById("background-image").style.filter = "blur(0px)"
      document.getElementById("card-area").style.display = "none"
      document.getElementById("birthday-area").style.display = "flex"
      document.getElementById("text-welcome").style.display = "none"
      document.getElementById("text-birthday").style.display = "block"
      this.audio1.pause();

      this.audio2.src = "./assets/birthday.mp3";
      this.audio2.load();
      this.audio2.loop = true
      this.audio2.play();
    } else {
      this.index = this.index + 1
      this.audio1.play()
      this.audio2.play()
    }
  }
}
