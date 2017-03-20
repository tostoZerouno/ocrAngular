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
        this.rettangolo = { x: (1 - 1 / 1.6) / 2, y: (1 - 1 / 8) / 2, w: 1 / 1.6, h: 1 / 12 };
        this.bright = 0.5;
        this.contrast = 0.5;
        this.first = {};
        this.C = {};
        this.IT = {};
        this.anno = {};
        this.tre = {};
        this.nove = {};
        this.found = false;
    }
    PhotoComponent.prototype.onClick = function () {
        this.first = {};
        this.C = {};
        this.IT = {};
        this.anno = {};
        this.tre = {};
        this.nove = {};
        this.printTime();
        this.found = false;
        this.cercaCodice("");
    };
    PhotoComponent.prototype.cercaCodice = function (chiamante) {
        var component = this;
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementById('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var context = canvas.getContext('2d');
        if (component.detectmob()) {
            context.save();
            context.scale(1, -1);
            context.drawImage(video, 0, 0, canvas.width, -1 * canvas.height);
            context.restore();
        }
        else {
            context.drawImage(video, 0, 0);
        }
        var image = canvas.toDataURL('image/png');
        var testCanvas = document.getElementById('testCanvas');
        var img = new Image;
        img.src = image;
        img.onload = function () {
            var h = Math.max(50, img.height * component.rettangolo.h);
            var w = Math.max(50, img.width * component.rettangolo.w);
            testCanvas.width = w;
            testCanvas.height = h;
            testCanvas.getContext('2d').drawImage(img, img.width * component.rettangolo.x, img.height * component.rettangolo.y, w, h, 0, 0, w, h);
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
                __WEBPACK_IMPORTED_MODULE_1_tesseract_js__["recognize"](image).progress(function (prog) {
                    //console.log(prog);
                })
                    .then(function (result) {
                    var text = [result.text.replace(/(\r\n|\n|\r)/gm, "")];
                    component.analisiStringa(text, "tesseract");
                });
            }
            if (chiamante == "API" || chiamante == "") {
                component.analyzeImage(image2).then(function (text) {
                    component.analisiStringa(text, "API");
                });
            }
        };
    };
    PhotoComponent.prototype.analisiStringa = function (text, chiamante) {
        var component = this;
        console.log("analisi " + chiamante);
        var start = "^.*";
        var first = "([A-Z]{3})";
        var pipe = "(I|\\||l|\\\\|\\/|i|1|J|\\[|\\]|j|\\s\\')";
        var C = "([A-Z])";
        var IT = "([a-zA-Z]{2})";
        var anno = "([0-9]{4})";
        var tre = "([0-9]{3})";
        var nove = "([0-9]{8})";
        var end = ".*$";
        var rest = start + first + pipe + C + pipe + IT + pipe + anno + pipe + tre + pipe + nove + end;
        var re = new RegExp(rest);
        var rest1 = start + first + pipe + C + pipe + IT + end;
        var re1 = new RegExp(rest1);
        var rest2 = start + C + pipe + IT + pipe + anno + end;
        var re2 = new RegExp(rest2);
        var rest3 = start + IT + pipe + anno + pipe + tre + end;
        var re3 = new RegExp(rest3);
        var rest4 = start + anno + pipe + tre + pipe + nove + end;
        var re4 = new RegExp(rest4);
        console.log(text);
        //component.printLog(text[0]);
        var out = re.test(text[0]);
        var out1 = re1.test(text[0]);
        var out2 = re2.test(text[0]);
        var out3 = re3.test(text[0]);
        var out4 = re4.test(text[0]);
        console.log(text + " " + out + " 1:" + out1 + " 2:" + out2 + " 3:" + out3 + " 4:" + out4);
        if (out1) {
            var match = re1.exec(text[0]);
            var firstmatch = match[1];
            var Cmatch = match[3];
            var ITmatch = match[5];
            component.addFirst(firstmatch);
            component.addC(Cmatch);
            component.addIT(ITmatch);
        }
        if (out2) {
            var match = re2.exec(text[0]);
            var Cmatch = match[1];
            var ITmatch = match[3];
            var annomatch = match[5];
            if (!out1) {
                component.addC(Cmatch);
                component.addIT(ITmatch);
            }
            component.addAnno(annomatch);
        }
        if (out3) {
            var match = re3.exec(text[0]);
            var ITmatch = match[1];
            var annomatch = match[3];
            var trematch = match[5];
            if (!out2) {
                component.addAnno(annomatch);
                if (!out1) {
                    component.addIT(ITmatch);
                }
            }
            component.addTre(trematch);
        }
        if (out4) {
            var match = re4.exec(text[0]);
            var annomatch = match[1];
            var trematch = match[3];
            var novematch = match[5];
            if (!out3) {
                component.addTre(trematch);
                if (!out2) {
                    component.addAnno(annomatch);
                }
            }
            component.addNove(novematch);
        }
        console.log(component.first, component.C, component.IT, component.anno, component.tre, component.nove);
        if (component.gotIt() && !component.found) {
            console.log(component.first, component.C, component.IT, component.anno, component.tre, component.nove);
            var names = ["first", "C", "IT", "anno", "tre", "nove"];
            var nuovo_1 = "";
            names.forEach(function (name) {
                var max = Math.max.apply(null, Object.keys(component[name]).map(function (x) { return component[name][x]; }));
                var maxName = (Object.keys(component[name]).filter(function (x) { return component[name][x] == max; })[0]);
                if (name != "nove") {
                    nuovo_1 += maxName + "|";
                }
                else {
                    nuovo_1 += maxName;
                }
            });
            console.log(nuovo_1.toUpperCase());
            component.printLog(nuovo_1.toUpperCase());
            component.printTime();
            component.found = true;
            var button = document.getElementsByTagName('button')[0];
            button.click();
        }
        else {
            //setTimeout(() => component.cercaCodice(), 3000);
            if (chiamante == "tesseract") {
                component.cercaCodice(chiamante);
            }
            if (chiamante == "API") {
                setTimeout(function () { component.cercaCodice(chiamante); }, 500);
            }
        }
    };
    PhotoComponent.prototype.onResize = function () {
        var video = document.getElementsByTagName('video')[0];
        var canvas = document.getElementsByName('videoCanvas')[0];
        video.width = parent.innerWidth * 0.8;
        var ratio = video.videoHeight / video.videoWidth;
        video.height = video.width * ratio;
        canvas.height = video.height;
        canvas.width = video.width;
        var ctx = canvas.getContext('2d');
        this.orizzontale = (ratio < 1);
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(video.width * this.rettangolo.x, video.height * this.rettangolo.y, video.width * this.rettangolo.w, video.height * this.rettangolo.h);
        var tCanvas = document.getElementById('testCanvas');
        tCanvas.width = video.videoWidth;
        tCanvas.height = video.videoHeight;
        var vr = document.getElementById("h");
        var vc = document.getElementById("video-container");
        //console.log(vc);
        vr.setAttribute('style', 'top:' + video.height / 2 + 'px; left:' + video.width * 1.1 + 'px');
    };
    PhotoComponent.prototype.analyzeImage = function (stream) {
        var _this = this;
        var blob = this.dataURItoBlob(stream);
        var out = "";
        return new Promise(function (resolve, reject) {
            _this.computerVision(blob).then(function (resp) {
                //this.log = "";
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
                            //this.log += w.text + "\n";
                            out += w.text;
                        });
                    });
                }
                resolve([out]);
                //this.description = captions[0].text;
            });
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
                //FIXME come lo inizializzo?
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                context.drawImage(video, 0, 0);
                var dataurl = canvas.toDataURL("image/png");
                __WEBPACK_IMPORTED_MODULE_1_tesseract_js__["recognize"](dataurl);
            }
        }, 100);
    };
    PhotoComponent.prototype.videoButtonClick = function (event) {
        var _this = this;
        this.clearCanvas();
        console.log(event);
        setTimeout(function () { _this.onResize(); }, 1000);
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
    PhotoComponent.prototype.setH = function (value) {
        this.clearCanvas();
        this.rettangolo.y = (1 - 1 / 12 * value) / 2;
        this.rettangolo.h = 1 / 12 * value;
        this.onResize();
    };
    PhotoComponent.prototype.setW = function (value) {
        this.clearCanvas();
        this.rettangolo.x = (1 - 1 / 1.6 * value) / 2;
        this.rettangolo.w = 1 / 1.6 * value;
        this.onResize();
    };
    PhotoComponent.prototype.printTime = function () {
        var currentdate = new Date();
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        console.log(datetime);
    };
    PhotoComponent.prototype.printLog = function (text) {
        this.log = text;
    };
    PhotoComponent.prototype.addLog = function (text) {
        this.log += text;
    };
    PhotoComponent.prototype.addFirst = function (match) {
        this.addMatch("first", match);
    };
    PhotoComponent.prototype.addC = function (match) {
        //this.addMatch("C", match);
        this.addMatch("C", "C");
    };
    PhotoComponent.prototype.addIT = function (match) {
        //this.addMatch("IT", match.toUpperCase());
        this.addMatch("IT", "IT");
    };
    PhotoComponent.prototype.addAnno = function (match) {
        this.addMatch("anno", match);
    };
    PhotoComponent.prototype.addTre = function (match) {
        this.addMatch("tre", match);
    };
    PhotoComponent.prototype.addNove = function (match) {
        this.addMatch("nove", match);
    };
    PhotoComponent.prototype.addMatch = function (field, match) {
        if (this[field][match]) {
            this[field][match] = this[field][match] + 1;
        }
        else {
            this[field][match] = 1;
        }
    };
    PhotoComponent.prototype.gotIt = function () {
        var first = this.first;
        var C = this.C;
        var IT = this.IT;
        var anno = this.anno;
        var tre = this.tre;
        var nove = this.nove;
        //console.log(Object.getOwnPropertyNames(this.first).length > 0);
        var out = (Object.getOwnPropertyNames(first).length > 0) &&
            (Object.getOwnPropertyNames(C).length > 0) &&
            (Object.getOwnPropertyNames(IT).length > 0) &&
            (Object.getOwnPropertyNames(anno).length > 0) &&
            (Object.getOwnPropertyNames(tre).length > 0) &&
            (Object.getOwnPropertyNames(nove).length > 0);
        var minmax = 1;
        if (out) {
            var max = Math.max.apply(null, Object.keys(first).map(function (x) { return first[x]; }));
            minmax = max;
            max = Math.max.apply(null, Object.keys(C).map(function (x) { return C[x]; }));
            if (max < minmax) {
                minmax = max;
            }
            max = Math.max.apply(null, Object.keys(IT).map(function (x) { return IT[x]; }));
            if (max < minmax) {
                minmax = max;
            }
            max = Math.max.apply(null, Object.keys(anno).map(function (x) { return anno[x]; }));
            if (max < minmax) {
                minmax = max;
            }
            max = Math.max.apply(null, Object.keys(tre).map(function (x) { return tre[x]; }));
            if (max < minmax) {
                minmax = max;
            }
            max = Math.max.apply(null, Object.keys(nove).map(function (x) { return nove[x]; }));
            if (max < minmax) {
                minmax = max;
            }
        }
        return out && minmax > 1;
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

module.exports = ".videoCanvas {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\n.vertical-range{\r\n  -webkit-transform:rotate(90deg);\r\n  position: absolute;\r\n  z-index: 10;\r\n}"

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

module.exports = "<h1 id=\"text\">{{text}}</h1>\r\n<div (window:resize)=\"onResize()\"  (document:load)=\"onResize()\" id=\"video-container\">\r\n    <canvas id=\"videoCanvas\" name=\"videoCanvas\" class=\"videoCanvas\" (click)=\"onClick()\"></canvas>\r\n    <app-video id=\"videocomponent\" (stop)=\"videoButtonClick($event)\"></app-video>\r\n</div>\r\n<canvas name=\"canvas\" id=\"canvas\" style=\"display:none;\"></canvas>\r\n<!--<button id=\"take\" (click)=\"onClick()\">Take a photo</button><br />-->\r\n<!--<input type=\"range\" [ngModel]=\"range\" min=\"0\" max=\"5\" step=\".01\" (ngModelChange)=\"setBright($event)\">\r\n<input type=\"range\" [ngModel]=\"range\" min=\"0\" max=\"5\" step=\".01\" (ngModelChange)=\"setContrast($event)\">-->\r\n<input id=\"h\" type=\"range\" class=\"vertical-range\" [ngModel]=\"range\" min=\"0\" max=\"12\" step=\".01\" value=\"1\" (ngModelChange)=\"setH($event)\">\r\n<input type=\"range\" [ngModel]=\"range\" min=\"0\" max=\"1.6\" step=\".01\" value= \"1.2\" (ngModelChange)=\"setW($event)\">\r\n<p name=\"description\">{{description}}</p>\r\n<p>{{log}}</p>\r\n<canvas id=\"testCanvas\"></canvas>"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<video  #video width=\"640\" height=\"480\" autoplay></video>\r\n<br>\r\n<select name=\"videoSelect\"  [ngModel]=\"selectedDevice\" (ngModelChange)=\"selectSource()\"></select>\r\n<button name=\"bottone\" (click) = \"onClick()\">{{bottone}}</button>\r\n<!--<p>{{vid}}</p>-->"

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[633]);
//# sourceMappingURL=main.bundle.map