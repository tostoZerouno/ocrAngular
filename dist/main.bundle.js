webpackJsonp([1,4],{

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ricerca Codice';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(615),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_photo_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_video_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__video_video_component__["a" /* VideoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tesseract_js__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tesseract_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoComponent = (function () {
    function PhotoComponent() {
        this.text = "Clicca sull'immagine per cominciare";
        this.description = "no description";
        this.enableCapture = false;
        this.log = "";
        this.faces = {};
        this.faceToPerson = {};
        this.orizzontale = true;
    }
    PhotoComponent.prototype.onClick = function () {
        var component = this;
        //this.enableCapture = !(this.enableCapture);
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementsByName('canvas')[0];
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var context = canvas.getContext('2d');
        //canvas.getContext('2d').drawImage(video, 0, 0);
        var found = false;
        var count = 0;
        var _loop_1 = function() {
            count++;
            if (component.detectmob()) {
                //var deg = Number(window.orientation);
                context.save();
                context.scale(1, -1);
                context.drawImage(video, 0, 0, canvas.width, -1 * canvas.height);
                context.restore();
            }
            else {
                context.drawImage(video, 0, 0);
            }
            var size = this_1.dataURItoBlob(canvas.toDataURL('image/jpeg', 1)).size;
            rapp = 4194304 / size;
            this_1.log += size + " " + rapp;
            rapp = Math.min(rapp, 1);
            //console.log(size*rapp);
            image = canvas.toDataURL('image/jpeg', rapp);
            var testCanvas = document.getElementById('testCanvas');
            img = new Image;
            img.src = image;
            img.onload = function () {
                //this.rettangolo.x, this.rettangolo.y, this.rettangolo.w, this.rettangolo.h
                testCanvas.width = img.width * component.rettangolo.w;
                testCanvas.height = img.height * component.rettangolo.h;
                testCanvas.getContext('2d').drawImage(img, img.width * component.rettangolo.x, img.height * component.rettangolo.y, img.width * component.rettangolo.w, img.height * component.rettangolo.h, 0, 0, img.width * component.rettangolo.w, img.height * component.rettangolo.h);
                image = testCanvas.toDataURL('image/jpeg', 1);
                //component.analyzeImage(image);
                //Tesseract.SetRectangle(0,0,img.width*component.rettangolo.w, img.height*component.rettangolo.h);
                __WEBPACK_IMPORTED_MODULE_1_tesseract_js__["recognize"](image)
                    .then(function (result) {
                    //console.log('result', result)
                    component.log = result.text;
                    var re = /([A-Z]{3})(I|\||l)([A-Z])(I|\||l)(I|\||l)(T|7)(I|\||l)([0-9]{4})(I|\||l)([0-9]{3})(I|\||l)([0-9]{8})/;
                    var out = re.test(result.text);
                    //console.log(out);
                    found = out;
                });
            };
        };
        var this_1 = this;
        var rapp, image, img;
        while (!found && count < 10) {
            _loop_1();
        }
        if (found) {
            this.log += "found";
        }
        else {
            this.log += "NOTfound";
        }
        //const vc = document.getElementById('videocomponent');
        //const mediastreamTrack = vc.localstream.getVideoTracks()[0];
        //this.analyzeImage(image);
        //this.analyzeImage();
    };
    PhotoComponent.prototype.onResize = function () {
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementsByName('videoCanvas')[0];
        video.width = parent.innerWidth;
        var ratio = video.videoHeight / video.videoWidth;
        video.height = video.width * ratio;
        canvas.height = video.height;
        canvas.width = video.width;
        var ctx = canvas.getContext('2d');
        this.orizzontale = (ratio < 1);
        //console.log(this.orizzontale);
        ctx.strokeStyle = "#FF0000";
        if (this.orizzontale) {
            var rettangolo = { x: (1 - 1 / 1.8) / 2, y: (1 - 1 / 10) / 2, w: 1 / 1.8, h: 1 / 10 };
            this.rettangolo = rettangolo;
        }
        else {
            var rettangolo = { x: (1 - 1 / 10) / 2, y: (1 - 1 / 1.8) / 2, w: 1 / 10, h: 1 / 1.8 };
            this.rettangolo = rettangolo;
        }
        ctx.strokeRect(video.width * this.rettangolo.x, video.height * this.rettangolo.y, video.width * this.rettangolo.w, video.height * this.rettangolo.h);
        var tCanvas = document.getElementById('testCanvas');
        tCanvas.width = video.videoWidth;
        tCanvas.height = video.videoHeight;
        //this.log = video.height + "x" + video.width + " c:" + canvas.height + "x" + canvas.width;
    };
    PhotoComponent.prototype.analyzeImage = function (stream) {
        var _this = this;
        var blob = this.dataURItoBlob(stream);
        this.computerVision(blob).then(function (resp) {
            _this.log = "";
            var regions = resp['regions'];
            if (regions.length > 0) {
                console.log(regions[0]);
                var r_1 = regions[0].lines;
                var arr = Object.keys(r_1).map(function (key) { return r_1[key]; });
                arr.forEach(function (element) {
                    var words = element.words;
                    var warr = Object.keys(words).map(function (key) { return words[key]; });
                    warr.forEach(function (w) {
                        console.log(w.text);
                        _this.log += w.text + "\n";
                    });
                });
            }
            //this.description = captions[0].text;
        });
    };
    PhotoComponent.prototype.computerVision = function (blob) {
        return new Promise(function (resolve, reject) {
            var visionApiUrl = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk';
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
                    }
                    else {
                        console.log(xhrvision.status);
                    }
                }
            };
            xhrvision.send(blob);
        });
    };
    PhotoComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    };
    PhotoComponent.prototype.ngOnInit = function () { };
    PhotoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.onResize();
            var video = document.getElementsByTagName('video')[0];
            console.log("gira");
            if (video.height > 0) {
                clearInterval(interval);
                console.log("stop");
            }
        }, 100);
    };
    PhotoComponent.prototype.videoButtonClick = function (event) {
        this.clearCanvas();
        console.log(event);
        if (event == "stop") {
            this.enableCapture = false;
        }
    };
    PhotoComponent.prototype.clearCanvas = function () {
        var vCanvas = document.getElementsByName('videoCanvas')[0];
        var ctx = vCanvas.getContext('2d');
        ctx.clearRect(0, 0, vCanvas.width, vCanvas.height);
    };
    PhotoComponent.prototype.detectmob = function () {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        }
        else {
            return false;
        }
    };
    PhotoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-photo',
            template: __webpack_require__(616),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoComponent);
    return PhotoComponent;
}());
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/photo.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
        this.stop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.videoSelect = document.getElementsByName("videoSelect")[0];
        this.bottone = "Ferma il Video";
    }
    VideoComponent.prototype.selectSource = function () {
        var videoSelect = document.getElementsByName("videoSelect")[0];
        var videoSource = videoSelect.value;
        this.vid = "" + (videoSelect.value);
        console.log("vid: " + this.vid);
        //var constraints  = { video: { deviceId: { exact: videoSource } } };
        var constraints = { video: { deviceId: videoSource } };
        this.stopStream();
        setTimeout(this.startStream(constraints), 150);
    };
    // note that "#video" is the name of the template variable in the video element
    VideoComponent.prototype.ngAfterViewInit = function () {
        var constraints = { video: true };
        //FIXME
        //var videoSource = this.videoSelect.value;
        //var constraints = { video: { deviceId: { exact: videoSource } } }
        this.startStream(constraints);
    };
    VideoComponent.prototype.onClick = function () {
        var _video = this.video.nativeElement;
        var videoSelect = document.getElementsByName("videoSelect")[0];
        var videoSource = videoSelect.value;
        console.log(videoSource);
        var constraints = { video: { deviceId: { exact: videoSource } } };
        if (!_video.paused) {
            this.stopStream();
            this.bottone = "Avvia il Video";
            this.stop.emit("stop");
        }
        else {
            this.startStream(constraints);
            this.bottone = "Ferma il Video";
            this.stop.emit("start");
        }
    };
    VideoComponent.prototype.startStream = function (constraints) {
        var _this = this;
        var _video = this.video.nativeElement;
        /*let nav = <any>navigator;
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkit.GetUserMedia;*/
        //if(navigator.mozGetUserMedia)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints)
                .then(function (stream) {
                _video.src = window.URL.createObjectURL(stream);
                console.log(_video.src);
                _this.localstream = stream;
                _video.load();
            });
        }
    };
    VideoComponent.prototype.stopStream = function () {
        var _video = this.video.nativeElement;
        //console.log(this.localstream);
        if (!_video.paused) {
            console.log("not paused");
            _video.pause();
            _video.src = "";
            this.localstream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        console.log("Video off");
    };
    VideoComponent.prototype.enumerate = function () {
        navigator.mediaDevices.enumerateDevices()
            .then(gotDevices)
            .catch(errorCallback);
        var videoSelect = document.getElementsByName("videoSelect")[0];
        function gotDevices(deviceInfos) {
            for (var i = 0; i !== deviceInfos.length; ++i) {
                var deviceInfo = deviceInfos[i];
                var option = document.createElement('option');
                option.value = deviceInfo.deviceId;
                if (deviceInfo.kind === 'videoinput') {
                    option.text = deviceInfo.label || 'Camera ' +
                        (videoSelect.length + 1);
                    videoSelect.appendChild(option);
                }
            }
        }
        function errorCallback(error) {
            console.log(error);
        }
    };
    VideoComponent.prototype.ngOnInit = function () {
        this.enumerate();
        /*    this.enumerate();*/
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], VideoComponent.prototype, "stop", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('video'), 
        __metadata('design:type', Object)
    ], VideoComponent.prototype, "video", void 0);
    VideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__(617),
            styles: [__webpack_require__(614)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoComponent);
    return VideoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/video.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/stage/github/ocrAngular/src/environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = ".videoCanvas {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<app-photo></app-photo>\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"text\">{{text}}</h1>\n<div (window:resize)=\"onResize()\"  (document:load)=\"onResize()\">\n    <canvas id=\"videoCanvas\" name=\"videoCanvas\" class=\"videoCanvas\" (click)=\"onClick()\"></canvas>\n    <app-video id=\"videocomponent\" (stop)=\"videoButtonClick($event)\"></app-video>\n</div>\n<canvas name=\"canvas\" id=\"canvas\" style=\"display:none;\"></canvas>\n<!--<button id=\"take\" (click)=\"onClick()\">Take a photo</button><br />-->\n<p name=\"description\">{{description}}</p>\n<p>{{log}}</p>\n<canvas id=\"testCanvas\"></canvas>"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<video #video width=\"640\" height=\"480\" autoplay></video>\r\n<br>\r\n<select name=\"videoSelect\"  [ngModel]=\"selectedDevice\" (ngModelChange)=\"selectSource()\"></select>\r\n<button name=\"bottone\" (click) = \"onClick()\">{{bottone}}</button>\r\n<!--<p>{{vid}}</p>-->"

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[633]);
//# sourceMappingURL=main.bundle.map