import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js'

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

  constructor() { }



  onClick() {
    let component = this;
    //this.enableCapture = !(this.enableCapture);
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByName('canvas')[0];
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    //canvas.getContext('2d').drawImage(video, 0, 0);
    var found = false;
    var count = 0;
    while (!found && count < 10) {
      count++;
      if (component.detectmob()) {
        //var deg = Number(window.orientation);
        context.save();
        context.scale(1, -1);
        context.drawImage(video, 0, 0, canvas.width, -1 * canvas.height);
        context.restore();

      } else {
        context.drawImage(video, 0, 0);
      }
      const size = this.dataURItoBlob(canvas.toDataURL('image/jpeg', 1)).size;
      var rapp = 4194304 / size;
      this.log += size + " " + rapp;
      rapp = Math.min(rapp, 1);
      //console.log(size*rapp);
      var image = canvas.toDataURL('image/jpeg', rapp);
      const testCanvas = <any>document.getElementById('testCanvas');
      var img = new Image;
      img.src = image;
      img.onload = function () {
        //this.rettangolo.x, this.rettangolo.y, this.rettangolo.w, this.rettangolo.h
        testCanvas.width = img.width * component.rettangolo.w;
        testCanvas.height = img.height * component.rettangolo.h;
        testCanvas.getContext('2d').drawImage(img, img.width * component.rettangolo.x, img.height * component.rettangolo.y,
          img.width * component.rettangolo.w, img.height * component.rettangolo.h,
          0, 0, img.width * component.rettangolo.w, img.height * component.rettangolo.h);

        image = testCanvas.toDataURL('image/jpeg', 1);
        //component.analyzeImage(image);
        //Tesseract.SetRectangle(0,0,img.width*component.rettangolo.w, img.height*component.rettangolo.h);
        Tesseract.recognize(image)
          //.progress(function (p) { console.log('progress', p) })
          .then(function (result) {
            //console.log('result', result)
            component.log = result.text;
            var re = /([A-Z]{3})(I|\||l)([A-Z])(I|\||l)(I|\||l)(T|7)(I|\||l)([0-9]{4})(I|\||l)([0-9]{3})(I|\||l)([0-9]{8})/;
            var out = re.test(result.text);
            //console.log(out);
            found = out;
            
          });
      }
    }
    if(found){
      this.log+="found";
    }else{
      this.log+="NOTfound";
    }

    //const vc = document.getElementById('videocomponent');
    //const mediastreamTrack = vc.localstream.getVideoTracks()[0];

    //this.analyzeImage(image);
    //this.analyzeImage();
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
    //console.log(this.orizzontale);

    ctx.strokeStyle = "#FF0000";

    if (this.orizzontale) {
      let rettangolo = { x: (1 - 1 / 1.8) / 2, y: (1 - 1 / 10) / 2, w: 1 / 1.8, h: 1 / 10 };
      this.rettangolo = rettangolo;

    } else {
      let rettangolo = { x: (1 - 1 / 10) / 2, y: (1 - 1 / 1.8) / 2, w: 1 / 10, h: 1 / 1.8 };
      this.rettangolo = rettangolo;
    }
    ctx.strokeRect(video.width * this.rettangolo.x, video.height * this.rettangolo.y, video.width * this.rettangolo.w, video.height * this.rettangolo.h);


    const tCanvas = <any>document.getElementById('testCanvas');
    tCanvas.width = video.videoWidth;
    tCanvas.height = video.videoHeight;

    //this.log = video.height + "x" + video.width + " c:" + canvas.height + "x" + canvas.width;
  }

  analyzeImage(stream) {
    const blob = this.dataURItoBlob(stream);

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
          })

        });
      }
      //this.description = captions[0].text;
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

}