window.onload = () => {
    var perso = document.getElementsByClassName("perso")[0];
    var chat = document.createElement("img");
    chat.src = './assets/sprites/character/tile000.png';
    perso.appendChild(chat);
}

var perso = document.getElementsByClassName("perso")[0];
let Chat = class {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.spriteIdle = sprite[0];
    this.spriteWalkL = sprite[1];
    this.spriteWalkR = sprite[2];
  }
  get pos() {
    return this.x, this.y;
  }
  
  set pos(position) {
    this.x += position[0]; this.y += position[1];
  }

  addToGame(x, y) {
    let character = document.createElement('img');
    character.setAttribute("id", "main_char")
    character.setAttribute("style", "position:absolute; left: "+x+"px; bottom: "+y+"px; width: 500px; height: auto; image-rendering: pixelated; ")
    character.src = this.sprite;
    document.body.appendChild(character);
  }
  
  moveHorizontal(x) {
    this.x = x;
    if (x<0) {
      document.getElementById("main_char").src=this.spriteWalkL
    } else {
      document.getElementById("main_char").src=this.spriteWalkR
    }
    document.getElementById("main_char").style.left = parseInt(document.getElementById("main_char").style.left.split("px")[0]) + this.x+"px"
  }
  moveVertical(y) {
    this.y = y
    document.getElementById("main_char").style.bottom = parseInt(document.getElementById("main_char").style.bottom.split("px")[0]) + this.y+"px"
  }
};

let chat = new Chat(0, 0, ['./assets/sprites/character/cat_idle.png', './assets/sprites/character/cat_walkL.gif', './assets/sprites/character/cat_walkR.gif']);

window.onload = () => {
  chat.addToGame(100, 100);
}


setInterval(gameLoop, 16);

function gameLoop() {
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode == "37") {
      chat.moveHorizontal(-0.4)
    } else if (e.keyCode == "39") {
      chat.moveHorizontal(1)
    } else if (e.keyCode == "38") {
      chat.moveVertical(1)
    } else if (e.keyCode == "40") {
      chat.moveVertical(-1)
    } else {
      console.log(e.keyCode)
    }
  });
}
