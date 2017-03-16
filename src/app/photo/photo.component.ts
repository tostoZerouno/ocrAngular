import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  text = "Clicca sull'immagine per cominciare";
  description = "no description";
  enableCapture = false;
  log = "";
  faces = {};
  faceToPerson = {};
  orizzontale = true;
  rettangolo;
  bright = 0.5;
  contrast = 0.5;

  constructor() { }



  onClick() {
    let component = this;

    const start = "^.*";
    const first = "([A-Z]{3})";
    const pipe = "(I|\\||l|\\\\|\\/|i|1|J|\\[|\\]|j|\\s\\')";
    const C = "(.)";
    const IT = "(.{2})";
    const anno = "([0-9]{4})";
    const tre = "([0-9]{3})";
    const nove = "([0-9]{8})";
    const end = ".*$";
    const rest = start + first + pipe + C + pipe + IT + pipe + anno + pipe + tre + pipe + nove + end;
    const re = new RegExp(rest);

    //this.enableCapture = !(this.enableCapture);
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementById('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    //canvas.getContext('2d').drawImage(video, 0, 0);
    var found = false;
    var count = 0;

    if (component.detectmob()) {
      //var deg = Number(window.orientation);
      context.save();
      context.scale(1, -1);
      context.drawImage(video, 0, 0, canvas.width, -1 * canvas.height);
      context.restore();

    } else {
      context.drawImage(video, 0, 0);
    }

    //console.log(size*rapp);
    var image = canvas.toDataURL('image/jpeg', 1);
    const testCanvas = <any>document.getElementById('testCanvas');
    var img = new Image;
    img.src = image;
    img.onload = function () {
      var h = Math.max(50, img.width * component.rettangolo.h);
      var w = Math.max(50, img.width * component.rettangolo.w);

      testCanvas.width = w;
      testCanvas.height = h;
      testCanvas.getContext('2d').drawImage(img, img.width * component.rettangolo.x, img.height * component.rettangolo.y,
        w, h,
        0, 0, w, h);
      const size = component.dataURItoBlob(testCanvas.toDataURL('image/jpeg', 1)).size;
      var rapp = 4194304 / size;
      //this.log += size + " " + rapp;
      rapp = Math.min(rapp, 1);

      image = testCanvas.toDataURL('image/jpeg', rapp);

      component.analyzeImage(image).then(text => {
        console.log(text[0]);
        //console.log(rest);
        //var re = /^.*([A-Z]{3})(I|\||l|\\|\/|i|1|J|\[|\]|j)(.)(I|\||l|\\|\/|i|1|J|\[|\]|j)(.{2})(I|\||l|\\|\/|i|1|J|\[|\]|j)([0-9]{4})(I|\||l|\\|\/|i|1|J|\[|\]|j)([0-9]{3})(I|\||l|\\|\/|i|1|J|\[|\]|j)([0-9]{8}).*$/;
        var out = re.test(text[0]);
        console.log(text + " " + out);
        if (out) {
          var nuovo = text[0].replace(re, "$1|C|IT|$7|$9|$11");
          console.log(nuovo.toUpperCase());
          component.printLog(nuovo.toUpperCase());
          const button = document.getElementsByTagName('button')[0];
          button.click();
        } else {
          setTimeout(() => component.onClick(), 3000);
        }


      });

    }
    found = true;

  }

  onResize() {
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByName('videoCanvas')[0];
    video.width = parent.innerWidth;
    var ratio = video.videoHeight / video.videoWidth;
    video.height = video.width * ratio;
    canvas.height = video.height;
    canvas.width = video.width;
    const ctx = canvas.getContext('2d');

    this.orizzontale = (ratio < 1);

    ctx.strokeStyle = "#FF0000";

    let rettangolo = { x: (1 - 1 / 1.6) / 2, y: (1 - 1 / 8) / 2, w: 1 / 1.6, h: 1 / 12 };
    this.rettangolo = rettangolo;
    ctx.strokeRect(video.width * this.rettangolo.x, video.height * this.rettangolo.y, video.width * this.rettangolo.w, video.width * this.rettangolo.h);

    const tCanvas = <any>document.getElementById('testCanvas');
    tCanvas.width = video.videoWidth;
    tCanvas.height = video.videoHeight;

  }

  analyzeImage(stream) {
    const blob = this.dataURItoBlob(stream);
    var out = "";

    return new Promise((resolve, reject) => {
      this.computerVision(blob).then(resp => {
        this.log = "";
        const regions = resp['regions'];
        if (regions.length > 0) {
          console.log(regions[0]);
          const r = regions[0].lines;
          var arr = Object.keys(r).map(function (key) { return r[key]; });
          arr.forEach(element => {
            const words = element.words;
            var warr = Object.keys(words).map(function (key) { return words[key]; });
            warr.forEach(w => {
              console.log(w.text);
              this.log += w.text + "\n";
              out += w.text;
            })

          });
        }
        resolve([out]);
        //this.description = captions[0].text;
      });
    });


  }

  computerVision(blob) {

    return new Promise((resolve, reject) => {
      const visionApiUrl = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk';

      var xhrvision = new XMLHttpRequest();
      xhrvision.open('POST', visionApiUrl, true);
      xhrvision.setRequestHeader('content-type', 'application/octet-stream');
      xhrvision.setRequestHeader('Ocp-Apim-Subscription-Key', "b10fb5b057fe4f9cbeac59dcf0f5727f");

      xhrvision.onreadystatechange = function () {
        if (xhrvision.readyState == 4) {
          if (xhrvision.status == 200) {
            //console.log(this);
            var resp = JSON.parse(xhrvision.response);
            //console.log(resp.description.captions[0].text);
            console.log(resp);
            resolve(resp);
          } else {
            console.log(xhrvision.status);
          }
        }
      }
      xhrvision.send(blob);
    })
  }
  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    var interval = setInterval(() => {
      this.onResize()
      const video = <any>document.getElementsByTagName('video')[0];
      console.log("gira");
      if (video.height > 0) {
        clearInterval(interval);
        console.log("stop");
      }
    }, 100);
  }

  videoButtonClick(event) {
    this.clearCanvas();
    console.log(event);
    setTimeout(() => { this.onResize() }, 1000);
    if (event == "stop") {
      this.enableCapture = false;
    }
  }

  clearCanvas() {
    const vCanvas = <any>document.getElementsByName('videoCanvas')[0];
    const ctx = vCanvas.getContext('2d');
    ctx.clearRect(0, 0, vCanvas.width, vCanvas.height);
  }


  detectmob() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  /*setBright(value) {
    console.log(value);
    this.bright = value;
    this.setVideoFilter();
  }

  setContrast(value) {
    console.log(value);
    this.contrast = value;
    this.setVideoFilter();

  }

  setVideoFilter() {
    const video = <any>document.getElementsByTagName('video')[0];
    video.setAttribute('style', 'filter:contrast(' + this.contrast + ') brightness(' + this.bright + ') grayscale(100%);' +
      ' -webkit-filter:contrast(' + this.contrast + ') brightness(' + this.bright + ') grayscale(100%);' +
      ' -moz-filter:contrast(' + this.contrast + ') brightness(' + this.bright + ') grayscale(100%)');


  }*/

  printLog(text) {
    this.log = text;
  }

  addLog(text) {
    this.log += text;
  }

}