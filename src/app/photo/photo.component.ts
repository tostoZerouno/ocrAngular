import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';

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
  //faces = {};
  //faceToPerson = {};
  orizzontale = true;
  rettangolo = { x: (1 - 1 / 1.6) / 2, y: (1 - 1 / 8) / 2, w: 1 / 1.6, h: 1 / 12 };
  //bright = 0.5;
  //contrast = 0.5;
  first = {};
  C = {};
  IT = {};
  anno = {};
  tre = {};
  nove = {};

  calls = { tesseract: null, api: null };

  found = false;

  constructor() { }


  onClick() {

    this.first = {};
    this.C = {};
    this.IT = {};
    this.anno = {};
    this.tre = {};
    this.nove = {};
    this.printTime();

    this.calls.tesseract = 1;
    this.calls.api = 1;
    this.found = false;
    this.cercaCodice("");

  }

  cercaCodice(chiamante) {
    let component = this;

    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementById('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');

    if (component.detectmob()) {
      context.save();
      context.scale(1, -1);
      context.drawImage(video, 0, 0, canvas.width, -1 * canvas.height);
      context.restore();
    } else {
      context.drawImage(video, 0, 0);
    }

    var image = canvas.toDataURL('image/png');
    const testCanvas = <any>document.getElementById('testCanvas');
    var img = new Image;
    img.src = image;
    img.onload = function () {
      var h = Math.max(50, img.height * component.rettangolo.h);
      var w = Math.max(50, img.width * component.rettangolo.w);

      testCanvas.width = w;
      testCanvas.height = h;
      testCanvas.getContext('2d').drawImage(img, img.width * component.rettangolo.x, img.height * component.rettangolo.y,
        w, h,
        0, 0, w, h);
      //const size = component.dataURItoBlob(testCanvas.toDataURL('image/jpeg', 1)).size;
      //var rapp = 4194304 / size;
      //rapp=1;
      //this.log += size + " " + rapp;
      //rapp = Math.min(rapp, 1);

      image = testCanvas.toDataURL('image/png');
      var image2 = testCanvas.toDataURL('image/jpg', 1);

      //component.analyzeImage(image).then(text => {
      if (chiamante == "tesseract" || chiamante == "") {
        console.log(new Date());
        Tesseract.recognize(image).progress(prog => {
          //console.log(prog);
        })
          .then(result => {
            var text = [result.text.replace(/(\r\n|\n|\r)/gm, "")];
            component.analisiStringa(text, "tesseract");
          });

      }

      if (chiamante == "API" || chiamante == "") {
        component.analyzeImage(image2).then(text => {
          component.analisiStringa(text, "API");
        });
      }

    }

  }

  analisiStringa(text, chiamante) {

    let component = this;

    console.log("analisi " + chiamante);

    const start = "^.*";
    const first = "([A-Z]{3})";
    const pipe = "(I|\\||l|\\\\|\\/|i|1|J|\\[|\\]|j|\\s\\')";
    const C = "([A-Z])";
    const IT = "([a-zA-Z]{2})";
    const anno = "([0-9]{4})";
    const tre = "([0-9]{3})";
    const nove = "([0-9]{8})";
    const end = ".*$";
    const rest = start + first + pipe + C + pipe + IT + pipe + anno + pipe + tre + pipe + nove + end;
    const re = new RegExp(rest);

    const rest1 = start + first + pipe + C + pipe + IT + end;
    const re1 = new RegExp(rest1);

    const rest2 = start + C + pipe + IT + pipe + anno + end;
    const re2 = new RegExp(rest2);

    const rest3 = start + IT + pipe + anno + pipe + tre + end;
    const re3 = new RegExp(rest3);

    const rest4 = start + anno + pipe + tre + pipe + nove + end;
    const re4 = new RegExp(rest4);

    const rest4plus = start + pipe + tre + pipe + nove + end;
    const re4plus = new RegExp(rest4plus);

    console.log(text);
    //component.printLog(text[0]);

    var out = re.test(text[0]);
    var out1 = re1.test(text[0]);
    var out2 = re2.test(text[0]);
    var out3 = re3.test(text[0]);
    var out4 = re4.test(text[0]);
    var out4plus = re4plus.test(text[0]);
    console.log(text + " " + out + " 1:" + out1 + " 2:" + out2 + " 3:" + out3 + " 4:" + out4 + " 4+:" + out4plus);

    if (out1) {
      let match = re1.exec(text[0]);
      let firstmatch = match[1];
      let Cmatch = match[3];
      let ITmatch = match[5];
      component.addFirst(firstmatch);
      component.addC(Cmatch);
      component.addIT(ITmatch);
    }
    if (out2) {
      let match = re2.exec(text[0]);
      let Cmatch = match[1];
      let ITmatch = match[3];
      let annomatch = match[5];
      if (!out1) {
        component.addC(Cmatch);
        component.addIT(ITmatch);
      }
      component.addAnno(annomatch);
    }
    if (out3) {
      let match = re3.exec(text[0]);
      let ITmatch = match[1];
      let annomatch = match[3];
      let trematch = match[5];
      if (!out2) {
        component.addAnno(annomatch);
        if (!out1) {
          component.addIT(ITmatch);
        }
      }
      component.addTre(trematch);
    }
    if (out4) {
      let match = re4.exec(text[0]);
      let annomatch = match[1];
      let trematch = match[3];
      let novematch = match[5];
      if (!out3) {
        component.addTre(trematch);
        if (!out2) {
          component.addAnno(annomatch);
        }
      }
      component.addNove(novematch);
    } else if (out4plus) {
      let match = re4plus.exec(text[0]);
      let trematch = match[2];
      let novematch = match[4];
      if (!out3) {
        component.addTre(trematch);
      }
      component.addNove(novematch);
    }

    console.log(component.first, component.C, component.IT, component.anno, component.tre, component.nove);
    if (!component.found) {
      if (component.gotIt()) {
        console.log(component.first, component.C, component.IT, component.anno, component.tre, component.nove);

        const names = ["first", "C", "IT", "anno", "tre", "nove"];
        let nuovo = "";
        names.forEach(name => {
          var max = Math.max.apply(null, Object.keys(component[name]).map(function (x) { return component[name][x] }));
          var maxName = (Object.keys(component[name]).filter(function (x) { return component[name][x] == max; })[0]);
          if (name != "nove") {
            nuovo += maxName + "|";
          } else {
            nuovo += maxName;
          }

        });
        nuovo += " tesseract: " + component.calls.tesseract + " api: " + component.calls.api;


        console.log(nuovo.toUpperCase());
        component.printLog(nuovo.toUpperCase());
        component.printTime();
        component.found = true;
        const button = document.getElementsByTagName('button')[0];
        button.click();
      } else {
        const names = ["first", "C", "IT", "anno", "tre", "nove"];
        let nuovo = "";
        names.forEach(name => {
          if (Object.getOwnPropertyNames(component[name]).length > 0) {
            var max = Math.max.apply(null, Object.keys(component[name]).map(function (x) { return component[name][x] }));
            var maxName = (Object.keys(component[name]).filter(function (x) { return component[name][x] == max; })[0]);
            nuovo += maxName + " " + max + " ";
          }

        });
        nuovo += " tesseract: " + component.calls.tesseract + " api: " + component.calls.api;
        console.log(nuovo.toUpperCase());
        component.printLog(nuovo.toUpperCase());

        //setTimeout(() => component.cercaCodice(), 3000);
        if (chiamante == "tesseract") {
          component.cercaCodice(chiamante);
          component.calls.tesseract++;
        }
        if (chiamante == "API") {
          setTimeout(() => { component.cercaCodice(chiamante); }, 500);
          component.calls.api++;
        }
      }
    }

  }

  onResize() {
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByName('videoCanvas')[0];
    video.width = parent.innerWidth * 0.8;
    var ratio = video.videoHeight / video.videoWidth;
    video.height = video.width * ratio;
    canvas.height = video.height;
    canvas.width = video.width;
    const ctx = canvas.getContext('2d');

    this.orizzontale = (ratio < 1);

    ctx.strokeStyle = "#FF0000";

    ctx.strokeRect(video.width * this.rettangolo.x, video.height * this.rettangolo.y,
      video.width * this.rettangolo.w, video.height * this.rettangolo.h);

    const tCanvas = <any>document.getElementById('testCanvas');
    tCanvas.width = video.videoWidth;
    tCanvas.height = video.videoHeight;

    var vr = <any>document.getElementById("h");
    var vc = <any>document.getElementById("video-container");
    //console.log(vc);
    vr.setAttribute('style', 'top:' + video.height / 2 + 'px; left:' + video.width * 1.1 + 'px');

  }

  analyzeImage(stream) {
    const blob = this.dataURItoBlob(stream);
    var out = "";

    return new Promise((resolve, reject) => {
      this.computerVision(blob).then(resp => {
        //this.log = "";
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
              //this.log += w.text + "\n";
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

        //FIXME come lo inizializzo?
        var canvas = <any>document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.drawImage(video, 0, 0);
        var dataurl = canvas.toDataURL("image/png");
        Tesseract.recognize(dataurl);
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

  setH(value) {
    this.clearCanvas();
    this.rettangolo.y = (1 - 1 / 12 * value) / 2;
    this.rettangolo.h = 1 / 12 * value;
    this.onResize();

  }

  setW(value) {
    this.clearCanvas();
    this.rettangolo.x = (1 - 1 / 1.6 * value) / 2;
    this.rettangolo.w = 1 / 1.6 * value;
    this.onResize();

  }

  printTime() {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    console.log(datetime);
  }
  printLog(text) {
    this.log = text;
  }

  addLog(text) {
    this.log += text;
  }

  addFirst(match) {
    this.addMatch("first", match);
  }
  addC(match) {
    //this.addMatch("C", match);
    this.addMatch("C", "C");
  }
  addIT(match) {
    //this.addMatch("IT", match.toUpperCase());
    this.addMatch("IT", "IT");
  }
  addAnno(match) {
    this.addMatch("anno", match);
  }
  addTre(match) {
    this.addMatch("tre", match);
  }
  addNove(match) {
    this.addMatch("nove", match);
  }

  addMatch(field, match) {
    if (this[field][match]) {
      this[field][match] = this[field][match] + 1;
    } else {
      this[field][match] = 1;
    }

  }

  gotIt() {
    let first = this.first;
    let C = this.C;
    let IT = this.IT;
    let anno = this.anno;
    let tre = this.tre;
    let nove = this.nove;
    //console.log(Object.getOwnPropertyNames(this.first).length > 0);
    var out = (Object.getOwnPropertyNames(first).length > 0) &&
      (Object.getOwnPropertyNames(C).length > 0) &&
      (Object.getOwnPropertyNames(IT).length > 0) &&
      (Object.getOwnPropertyNames(anno).length > 0) &&
      (Object.getOwnPropertyNames(tre).length > 0) &&
      (Object.getOwnPropertyNames(nove).length > 0);

    let minmax = 1;
    if (out) {

      var max = Math.max.apply(null, Object.keys(first).map(function (x) { return first[x] }));
      minmax = max;

      max = Math.max.apply(null, Object.keys(C).map(function (x) { return C[x] }));
      if (max < minmax) {
        minmax = max;
      }

      max = Math.max.apply(null, Object.keys(IT).map(function (x) { return IT[x] }));
      if (max < minmax) {
        minmax = max;
      }

      max = Math.max.apply(null, Object.keys(anno).map(function (x) { return anno[x] }));
      if (max < minmax) {
        minmax = max;
      }

      max = Math.max.apply(null, Object.keys(tre).map(function (x) { return tre[x] }));
      if (max < minmax) {
        minmax = max;
      }

      max = Math.max.apply(null, Object.keys(nove).map(function (x) { return nove[x] }));
      if (max < minmax) {
        minmax = max;
      }
    }

    return out && minmax > 1;
  }

}