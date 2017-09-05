import {HttpClient} from 'aurelia-http-client';
import {Axios} from 'axios';

let axios = new Axios();

export class Search {

  constructor() {
    this.message = 'Welcome to Xbox Direct';

    this.root = 'https://xboxapi.com/v2/';

    this.gamerCard = {};

  }

  findGamerTag() {
    console.log('Working');

    var userXUID = '';
    var gamertag = document.querySelector('#gamerTag').value;
    var gtString = gamertag.split(' ').join('+');

    axios.get(this.root + 'xuid/' + gtString, {
      headers: { "X-Auth": "03548db9dc38bfcf5e1002875bb14853cb3f4cde" }
    })
      .then((resp) => {
        console.dir(resp.data.xuid);
        axios.get(this.root + resp.data.xuid + '/profile', {
          headers: { "X-Auth": "03548db9dc38bfcf5e1002875bb14853cb3f4cde" }
        }).then((data) => {
          console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });
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
