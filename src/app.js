export class App {
  constructor() {
    this.message = 'Welcome to Xbox Direct';
  }

  findGamerTag() {
    console.log('Working');
  }

  clearInput() {
    document.querySelector('#gamerTag').value = '';
    document.querySelector('#clearBtn').style.display = "none";
  }
  showClear() {
    var inputText = document.querySelector('#gamerTag').value;
    var clearBtn = document.querySelector('#clearBtn');

    if(inputText.length > 0){
      clearBtn.style.display = "inline";
    }
    else {
      clearBtn.style.display = "none";
    }
  }
}
