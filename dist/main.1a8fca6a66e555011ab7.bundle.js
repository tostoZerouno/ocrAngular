webpackJsonp([1,4],{217:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this.text="Clicca sull'immagine per cominciare",this.description="no description",this.enableCapture=!1,this.log="",this.faces={},this.faceToPerson={},this.orizzontale=!0,this.bright=.5,this.contrast=.5}return t.prototype.onClick=function(){var t=this,e="^.*",n="([A-Z]{3})",i="(I|\\||l|\\\\|\\/|i|1|J|\\[|\\]|j|\\s\\')",r="(.)",o="(.{2})",s="([0-9]{4})",_="([0-9]{3})",h="([0-9]{8})",a=".*$",c=e+n+i+r+i+o+i+s+i+_+i+h+a,l=new RegExp(c),u=document.getElementsByTagName("video")[0],p=document.getElementById("canvas");p.width=u.videoWidth,p.height=u.videoHeight;var d=p.getContext("2d");t.detectmob()?(d.save(),d.scale(1,-1),d.drawImage(u,0,0,p.width,-1*p.height),d.restore()):d.drawImage(u,0,0);var g=p.toDataURL("image/jpeg",1),f=document.getElementById("testCanvas"),y=new Image;y.src=g,y.onload=function(){var e=Math.max(50,y.width*t.rettangolo.h),n=Math.max(50,y.width*t.rettangolo.w);f.width=n,f.height=e,f.getContext("2d").drawImage(y,y.width*t.rettangolo.x,y.height*t.rettangolo.y,n,e,0,0,n,e);var i=t.dataURItoBlob(f.toDataURL("image/jpeg",1)).size,r=4194304/i;r=Math.min(r,1),g=f.toDataURL("image/jpeg",r),t.analyzeImage(g).then(function(e){console.log(e[0]);var n=l.test(e[0]);if(console.log(e+" "+n),n){var i=e[0].replace(l,"$1|C|IT|$7|$9|$11");console.log(i.toUpperCase()),t.printLog(i.toUpperCase());document.getElementsByTagName("button")[0].click()}else setTimeout(function(){return t.onClick()},3e3)})}},t.prototype.onResize=function(){var t=document.getElementsByTagName("video")[0],e=document.getElementsByName("videoCanvas")[0];t.width=parent.innerWidth;var n=t.videoHeight/t.videoWidth;t.height=t.width*n,e.height=t.height,e.width=t.width;var i=e.getContext("2d");this.orizzontale=n<1,i.strokeStyle="#FF0000";var r={x:.1875,y:.4375,w:.625,h:1/12};this.rettangolo=r,i.strokeRect(t.width*this.rettangolo.x,t.height*this.rettangolo.y,t.width*this.rettangolo.w,t.width*this.rettangolo.h);var o=document.getElementById("testCanvas");o.width=t.videoWidth,o.height=t.videoHeight},t.prototype.analyzeImage=function(t){var e=this,n=this.dataURItoBlob(t),i="";return new Promise(function(t,r){e.computerVision(n).then(function(n){e.log="";var r=n.regions;if(r.length>0){console.log(r[0]);var o=r[0].lines;Object.keys(o).map(function(t){return o[t]}).forEach(function(t){var n=t.words;Object.keys(n).map(function(t){return n[t]}).forEach(function(t){console.log(t.text),e.log+=t.text+"\n",i+=t.text})})}t([i])})})},t.prototype.computerVision=function(t){return new Promise(function(e,n){var i=new XMLHttpRequest;i.open("POST","https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk",!0),i.setRequestHeader("content-type","application/octet-stream"),i.setRequestHeader("Ocp-Apim-Subscription-Key","b10fb5b057fe4f9cbeac59dcf0f5727f"),i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var t=JSON.parse(i.response);console.log(t),e(t)}else console.log(i.status)},i.send(t)})},t.prototype.dataURItoBlob=function(t){for(var e=atob(t.split(",")[1]),n=new ArrayBuffer(e.length),i=new Uint8Array(n),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return new Blob([n],{type:"image/jpeg"})},t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this,e=setInterval(function(){t.onResize();var n=document.getElementsByTagName("video")[0];console.log("gira"),n.height>0&&(clearInterval(e),console.log("stop"))},100)},t.prototype.videoButtonClick=function(t){var e=this;this.clearCanvas(),console.log(t),setTimeout(function(){e.onResize()},1e3),"stop"==t&&(this.enableCapture=!1)},t.prototype.clearCanvas=function(){var t=document.getElementsByName("videoCanvas")[0];t.getContext("2d").clearRect(0,0,t.width,t.height)},t.prototype.detectmob=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},t.prototype.printLog=function(t){this.log=t},t.prototype.addLog=function(t){this.log+=t},t.ctorParameters=function(){return[]},t}()},218:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return r});var r=function(){function t(){this.stop=new i.K,this.videoSelect=document.getElementsByName("videoSelect")[0],this.bottone="Ferma il Video"}return t.prototype.selectSource=function(){var t=document.getElementsByName("videoSelect")[0],e=t.value;this.vid=""+t.value,console.log("vid: "+this.vid);var n={video:{deviceId:e}};this.stopStream(),setTimeout(this.startStream(n),150)},t.prototype.ngAfterViewInit=function(){var t={video:!0};this.startStream(t)},t.prototype.onClick=function(){var t=this.video.nativeElement,e=document.getElementsByName("videoSelect")[0],n=e.value;console.log(n);var i={video:{deviceId:{exact:n}}};t.paused?(this.startStream(i),this.bottone="Ferma il Video",this.stop.emit("start")):(this.stopStream(),this.bottone="Avvia il Video",this.stop.emit("stop"))},t.prototype.startStream=function(t){var e=this,n=this.video.nativeElement;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia(t).then(function(t){n.src=window.URL.createObjectURL(t),console.log(n.src),e.localstream=t,n.load()})},t.prototype.stopStream=function(){var t=this.video.nativeElement;t.paused||(console.log("not paused"),t.pause(),t.src="",this.localstream.getTracks().forEach(function(t){t.stop()})),console.log("Video off")},t.prototype.enumerate=function(){function t(t){for(var e=0;e!==t.length;++e){var i=t[e],r=document.createElement("option");r.value=i.deviceId,"videoinput"===i.kind&&(r.text=i.label||"Camera "+(n.length+1),n.appendChild(r))}}function e(t){console.log(t)}navigator.mediaDevices.enumerateDevices().then(t).catch(e);var n=document.getElementsByName("videoSelect")[0]},t.prototype.ngOnInit=function(){this.enumerate()},t.ctorParameters=function(){return[]},t}()},261:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=261},262:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n(341),o=n(212),s=n(331);r.a.production&&n.i(i.a)(),n.i(o.a)().bootstrapModuleFactory(s.a)},329:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[""]},330:function(t,e,n){"use strict";var i=n(339),r=n(83),o=n(17),s=n(63),_=n(38),h=n(37),a=n(49),c=n(329),l=n(217),u=n(333),p=n(23);n.d(e,"a",function(){return m});var d=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},g=function(){function t(){this._changed=!1,this.context=new i.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),f=o.createRenderComponentType("",0,s.b.None,[],{}),y=function(t){function e(n,i,r,o){t.call(this,e,f,_.a.HOST,n,i,r,o,h.b.CheckAlways)}return d(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"app-root",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new b(this.viewUtils,this,0,this._el_0),this._AppComponent_0_3=new g,this.compView_0.create(this._AppComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._AppComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._AppComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._AppComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),m=new a.b("app-root",y,i.a),v=[c.a],x=o.createRenderComponentType("",0,s.b.Emulated,v,{}),b=function(t){function e(n,i,r,o){t.call(this,e,x,_.a.COMPONENT,n,i,r,o,h.b.CheckAlways),this._expr_7=p.b}return d(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);return this._el_0=o.createRenderElement(this.renderer,e,"h1",o.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"",null),this._text_2=this.renderer.createText(e,"\n",null),this._el_3=o.createRenderElement(this.renderer,e,"app-photo",o.EMPTY_INLINE_ARRAY,null),this.compView_3=new u.a(this.viewUtils,this,3,this._el_3),this._PhotoComponent_3_3=new u.b,this.compView_3.create(this._PhotoComponent_3_3.context),this._text_4=this.renderer.createText(e,"\n",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2,this._el_3,this._text_4],null),null},e.prototype.injectorGetInternal=function(t,e,n){return t===l.a&&3===e?this._PhotoComponent_3_3.context:n},e.prototype.detectChangesInternal=function(t){this._PhotoComponent_3_3.ngDoCheck(this,this._el_3,t);var e=o.inlineInterpolate(1,"\n  ",this.context.title,"\n");o.checkBinding(t,this._expr_7,e)&&(this.renderer.setText(this._text_1,e),this._expr_7=e),this.compView_3.internalDetectChanges(t),t||0===this.numberOfChecks&&this._PhotoComponent_3_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_3.destroy()},e}(r.a)},331:function(t,e,n){"use strict";var i=n(125),r=n(340),o=n(170),s=n(182),_=n(142),h=n(199),a=n(312),c=n(314),l=n(58),u=n(77),p=n(86),d=n(78),g=n(48),f=n(99),y=n(41),m=n(100),v=n(98),x=n(147),b=n(114),C=n(17),w=n(143),R=n(65),E=n(139),A=n(93),O=n(208),I=n(140),k=n(330),D=n(124),S=n(59),T=n(144),P=n(145),N=n(64),M=n(97),V=n(80),H=n(122),B=n(68),U=n(96),j=n(85),L=n(128),z=n(116),G=n(117),F=n(67),X=n(210);n.d(e,"a",function(){return Q});var Y=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},q=function(t){function e(e){t.call(this,e,[k.a],[k.a])}return Y(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_7",{get:function(){return null==this.__LOCALE_ID_7&&(this.__LOCALE_ID_7=s.a(this.parent.get(D.a,null))),this.__LOCALE_ID_7},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new l.a(this._LOCALE_ID_7)),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ApplicationRef_13",{get:function(){return null==this.__ApplicationRef_13&&(this.__ApplicationRef_13=this._ApplicationRef__12),this.__ApplicationRef_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new g.a),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=S.a()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DOCUMENT_16",{get:function(){return null==this.__DOCUMENT_16&&(this.__DOCUMENT_16=_.a()),this.__DOCUMENT_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_17",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_17&&(this.__HAMMER_GESTURE_CONFIG_17=new f.a),this.__HAMMER_GESTURE_CONFIG_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_18",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_18&&(this.__EVENT_MANAGER_PLUGINS_18=[new T.a,new P.a,new f.b(this._HAMMER_GESTURE_CONFIG_17)]),this.__EVENT_MANAGER_PLUGINS_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_19",{get:function(){return null==this.__EventManager_19&&(this.__EventManager_19=new y.a(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(N.a))),this.__EventManager_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationDriver_21",{get:function(){return null==this.__AnimationDriver_21&&(this.__AnimationDriver_21=_.b()),this.__AnimationDriver_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomRootRenderer_22",{get:function(){return null==this.__DomRootRenderer_22&&(this.__DomRootRenderer_22=new v.a(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)),this.__DomRootRenderer_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RootRenderer_23",{get:function(){return null==this.__RootRenderer_23&&(this.__RootRenderer_23=M.a(this._DomRootRenderer_22,this.parent.get(M.b,null),this.parent.get(d.a,null))),this.__RootRenderer_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_24",{get:function(){return null==this.__DomSanitizer_24&&(this.__DomSanitizer_24=new x.a),this.__DomSanitizer_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_25",{get:function(){return null==this.__Sanitizer_25&&(this.__Sanitizer_25=this._DomSanitizer_24),this.__Sanitizer_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationQueue_26",{get:function(){return null==this.__AnimationQueue_26&&(this.__AnimationQueue_26=new b.a(this.parent.get(N.a))),this.__AnimationQueue_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ViewUtils_27",{get:function(){return null==this.__ViewUtils_27&&(this.__ViewUtils_27=new C.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)),this.__ViewUtils_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=s.b()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=s.c()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SharedStylesHost_30",{get:function(){return null==this.__SharedStylesHost_30&&(this.__SharedStylesHost_30=this._DomSharedStylesHost_20),this.__SharedStylesHost_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_31",{get:function(){return null==this.__Title_31&&(this.__Title_31=new w.a),this.__Title_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_32",{get:function(){return null==this.__RadioControlRegistry_32&&(this.__RadioControlRegistry_32=new R.a),this.__RadioControlRegistry_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_33",{get:function(){return null==this.__BrowserXhr_33&&(this.__BrowserXhr_33=new E.a),this.__BrowserXhr_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_34",{get:function(){return null==this.__ResponseOptions_34&&(this.__ResponseOptions_34=new A.a),this.__ResponseOptions_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_35",{get:function(){return null==this.__XSRFStrategy_35&&(this.__XSRFStrategy_35=c.a()),this.__XSRFStrategy_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_36",{get:function(){return null==this.__XHRBackend_36&&(this.__XHRBackend_36=new O.a(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)),this.__XHRBackend_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_37",{get:function(){return null==this.__RequestOptions_37&&(this.__RequestOptions_37=new I.a),this.__RequestOptions_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_38",{get:function(){return null==this.__Http_38&&(this.__Http_38=c.b(this._XHRBackend_36,this._RequestOptions_37)),this.__Http_38},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.a,this._ApplicationModule_1=new s.d,this._BrowserModule_2=new _.c(this.parent.get(_.c,null)),this._InternalFormsSharedModule_3=new h.a,this._FormsModule_4=new a.a,this._HttpModule_5=new c.c,this._AppModule_6=new r.a,this._ErrorHandler_9=_.d(),this._ApplicationInitStatus_10=new u.a(this.parent.get(u.b,null)),this._Testability_11=new p.a(this.parent.get(N.a)),this._ApplicationRef__12=new d.b(this.parent.get(N.a),this.parent.get(V.a),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(p.b,null),this._Testability_11),this._DomSharedStylesHost_20=new m.a(this._DOCUMENT_16),this._AppModule_6},e.prototype.getInternal=function(t,e){return t===o.a?this._CommonModule_0:t===s.d?this._ApplicationModule_1:t===_.c?this._BrowserModule_2:t===h.a?this._InternalFormsSharedModule_3:t===a.a?this._FormsModule_4:t===c.c?this._HttpModule_5:t===r.a?this._AppModule_6:t===D.a?this._LOCALE_ID_7:t===l.b?this._NgLocalization_8:t===H.a?this._ErrorHandler_9:t===u.a?this._ApplicationInitStatus_10:t===p.a?this._Testability_11:t===d.b?this._ApplicationRef__12:t===d.c?this._ApplicationRef_13:t===g.a?this._Compiler_14:t===S.b?this._APP_ID_15:t===B.a?this._DOCUMENT_16:t===f.c?this._HAMMER_GESTURE_CONFIG_17:t===y.b?this._EVENT_MANAGER_PLUGINS_18:t===y.a?this._EventManager_19:t===m.a?this._DomSharedStylesHost_20:t===U.a?this._AnimationDriver_21:t===v.b?this._DomRootRenderer_22:t===j.a?this._RootRenderer_23:t===x.b?this._DomSanitizer_24:t===L.a?this._Sanitizer_25:t===b.a?this._AnimationQueue_26:t===C.ViewUtils?this._ViewUtils_27:t===z.a?this._IterableDiffers_28:t===G.a?this._KeyValueDiffers_29:t===m.b?this._SharedStylesHost_30:t===w.a?this._Title_31:t===R.a?this._RadioControlRegistry_32:t===E.a?this._BrowserXhr_33:t===A.b?this._ResponseOptions_34:t===F.a?this._XSRFStrategy_35:t===O.a?this._XHRBackend_36:t===I.b?this._RequestOptions_37:t===X.a?this._Http_38:e},e.prototype.destroyInternal=function(){this._ApplicationRef__12.ngOnDestroy(),this._DomSharedStylesHost_20.ngOnDestroy()},e}(i.a),Q=new i.b(q,r.a)},332:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[".videoCanvas[_ngcontent-%COMP%]{position:absolute;z-index:10}.black_and_white[_ngcontent-%COMP%]{filter:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\");filter:gray;-webkit-filter:grayscale(100%);filter:grayscale(100%);-moz-filter:grayscale(100%)}"]},333:function(t,e,n){"use strict";var i=n(217),r=n(83),o=n(17),s=n(63),_=n(38),h=n(37),a=n(49),c=n(332),l=n(218),u=n(335),p=n(23);n.d(e,"b",function(){return g}),n.d(e,"a",function(){return x});var d=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},g=function(){function t(){this._changed=!1,this.context=new i.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),f=o.createRenderComponentType("",0,s.b.None,[],{}),y=function(t){function e(n,i,r,o){t.call(this,e,f,_.a.HOST,n,i,r,o,h.b.CheckAlways)}return d(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"app-photo",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new x(this.viewUtils,this,0,this._el_0),this._PhotoComponent_0_3=new g,this.compView_0.create(this._PhotoComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._PhotoComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._PhotoComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._PhotoComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t),t||0===this.numberOfChecks&&this._PhotoComponent_0_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),m=(new a.b("app-photo",y,i.a),[c.a]),v=o.createRenderComponentType("",0,s.b.Emulated,m,{}),x=function(t){function e(n,i,r,o){t.call(this,e,v,_.a.COMPONENT,n,i,r,o,h.b.CheckAlways),this._expr_23=p.b,this._expr_24=p.b,this._expr_25=p.b}return d(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._el_0=o.createRenderElement(this.renderer,e,"h1",new o.InlineArray2(2,"id","text"),null),this._text_1=this.renderer.createText(this._el_0,"",null),this._text_2=this.renderer.createText(e,"\n",null),this._el_3=o.createRenderElement(this.renderer,e,"div",o.EMPTY_INLINE_ARRAY,null),this._text_4=this.renderer.createText(this._el_3,"\n    ",null),this._el_5=o.createRenderElement(this.renderer,this._el_3,"canvas",new o.InlineArray8(6,"class","videoCanvas","id","videoCanvas","name","videoCanvas"),null),this._text_6=this.renderer.createText(this._el_3,"\n    ",null),this._el_7=o.createRenderElement(this.renderer,this._el_3,"app-video",new o.InlineArray2(2,"id","videocomponent"),null),this.compView_7=new u.a(this.viewUtils,this,7,this._el_7),this._VideoComponent_7_3=new u.b,this.compView_7.create(this._VideoComponent_7_3.context),this._text_8=this.renderer.createText(this._el_3,"\n",null),this._text_9=this.renderer.createText(e,"\n",null),this._el_10=o.createRenderElement(this.renderer,e,"canvas",new o.InlineArray8(6,"id","canvas","name","canvas","style","display:none;"),null),this._text_11=this.renderer.createText(e,"\n",null),this._text_12=this.renderer.createText(e,"\n",null),this._text_13=this.renderer.createText(e,"\n",null),this._el_14=o.createRenderElement(this.renderer,e,"p",new o.InlineArray2(2,"name","description"),null),this._text_15=this.renderer.createText(this._el_14,"",null),this._text_16=this.renderer.createText(e,"\n",null),this._el_17=o.createRenderElement(this.renderer,e,"p",o.EMPTY_INLINE_ARRAY,null),this._text_18=this.renderer.createText(this._el_17,"",null),this._text_19=this.renderer.createText(e,"\n",null),this._el_20=o.createRenderElement(this.renderer,e,"canvas",new o.InlineArray2(2,"id","testCanvas"),null);var n=o.subscribeToRenderElement(this,this._el_3,new o.InlineArray4(4,"resize","window","load","document"),this.eventHandler(this.handleEvent_3)),i=o.subscribeToRenderElement(this,this._el_5,new o.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_5)),r=o.subscribeToRenderElement(this,this._el_7,new o.InlineArray2(2,"stop",null),this.eventHandler(this.handleEvent_7));return this._VideoComponent_7_3.subscribe(this,this.eventHandler(this.handleEvent_7),!0),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2,this._el_3,this._text_4,this._el_5,this._text_6,this._el_7,this._text_8,this._text_9,this._el_10,this._text_11,this._text_12,this._text_13,this._el_14,this._text_15,this._text_16,this._el_17,this._text_18,this._text_19,this._el_20],[n,i,r]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===l.a&&7===e?this._VideoComponent_7_3.context:n},e.prototype.detectChangesInternal=function(t){this._VideoComponent_7_3.ngDoCheck(this,this._el_7,t);var e=o.inlineInterpolate(1,"",this.context.text,"");o.checkBinding(t,this._expr_23,e)&&(this.renderer.setText(this._text_1,e),this._expr_23=e);var n=o.inlineInterpolate(1,"",this.context.description,"");o.checkBinding(t,this._expr_24,n)&&(this.renderer.setText(this._text_15,n),this._expr_24=n);var i=o.inlineInterpolate(1,"",this.context.log,"");o.checkBinding(t,this._expr_25,i)&&(this.renderer.setText(this._text_18,i),this._expr_25=i),this.compView_7.internalDetectChanges(t),t||0===this.numberOfChecks&&this._VideoComponent_7_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_7.destroy(),this._VideoComponent_7_3.ngOnDestroy()},e.prototype.handleEvent_3=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("window:resize"==t){n=this.context.onResize()!==!1&&n}if("document:load"==t){n=this.context.onResize()!==!1&&n}return n},e.prototype.handleEvent_5=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.onClick()!==!1&&n}return n},e.prototype.handleEvent_7=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("stop"==t){n=this.context.videoButtonClick(e)!==!1&&n}return n},e}(r.a)},334:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[""]},335:function(t,e,n){"use strict";var i=n(218),r=n(83),o=n(17),s=n(63),_=n(38),h=n(37),a=n(49),c=n(334),l=n(190),u=n(338),p=n(337),d=n(336),g=n(23),f=n(62),y=n(66),m=n(18),v=n(90),x=n(39),b=n(88);n.d(e,"b",function(){return w}),n.d(e,"a",function(){return I});var C=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},w=function(){function t(){this._changed=!1,this.context=new i.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.subscription0&&this.subscription0.unsubscribe()},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.stop.subscribe(e.bind(t,"stop")))},t}(),R=o.createRenderComponentType("",0,s.b.None,[],{}),E=function(t){function e(n,i,r,o){t.call(this,e,R,_.a.HOST,n,i,r,o,h.b.CheckAlways)}return C(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"app-video",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new I(this.viewUtils,this,0,this._el_0),this._VideoComponent_0_3=new w,this.compView_0.create(this._VideoComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._VideoComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._VideoComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._VideoComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t),t||0===this.numberOfChecks&&this._VideoComponent_0_3.context.ngAfterViewInit()},e.prototype.destroyInternal=function(){this.compView_0.destroy(),this._VideoComponent_0_3.ngOnDestroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),A=(new a.b("app-video",E,i.a),[c.a]),O=o.createRenderComponentType("",0,s.b.Emulated,A,{}),I=function(t){function e(n,i,r,o){t.call(this,e,O,_.a.COMPONENT,n,i,r,o,h.b.CheckAlways),this._expr_15=g.b}return C(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._viewQuery_video_0=new l.a,this._el_0=o.createRenderElement(this.renderer,e,"video",new o.InlineArray8(6,"autoplay","","height","480","width","640"),null),this._text_1=this.renderer.createText(e,"\n",null),this._el_2=o.createRenderElement(this.renderer,e,"br",o.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(e,"\n",null),this._el_4=o.createRenderElement(this.renderer,e,"select",new o.InlineArray2(2,"name","videoSelect"),null),this._SelectControlValueAccessor_4_3=new u.a(this.renderer,new f.a(this._el_4)),this._NG_VALUE_ACCESSOR_4_4=[this._SelectControlValueAccessor_4_3.context],this._NgModel_4_5=new p.a(null,null,null,this._NG_VALUE_ACCESSOR_4_4),this._NgControl_4_6=this._NgModel_4_5.context,this._NgControlStatus_4_7=new d.a(this._NgControl_4_6),this._text_5=this.renderer.createText(e,"\n",null),this._el_6=o.createRenderElement(this.renderer,e,"button",new o.InlineArray2(2,"name","bottone"),null),this._text_7=this.renderer.createText(this._el_6,"",null),this._text_8=this.renderer.createText(e,"\n",null);var n=o.subscribeToRenderElement(this,this._el_4,new o.InlineArray8(6,"ngModelChange",null,"change",null,"blur",null),this.eventHandler(this.handleEvent_4));this._NgModel_4_5.subscribe(this,this.eventHandler(this.handleEvent_4),!0);var i=o.subscribeToRenderElement(this,this._el_6,new o.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_6));return this._viewQuery_video_0.reset([new f.a(this._el_0)]),this.context.video=this._viewQuery_video_0.first,this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._text_8],[n,i]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===y.a&&4===e?this._SelectControlValueAccessor_4_3.context:t===m.a&&4===e?this._NG_VALUE_ACCESSOR_4_4:t===v.a&&4===e?this._NgModel_4_5.context:t===x.a&&4===e?this._NgControl_4_6:t===b.a&&4===e?this._NgControlStatus_4_7.context:n},e.prototype.detectChangesInternal=function(t){this._SelectControlValueAccessor_4_3.ngDoCheck(this,this._el_4,t),this._NgModel_4_5.check_name("videoSelect",t,!1);var e=this.context.selectedDevice;this._NgModel_4_5.check_model(e,t,!1),this._NgModel_4_5.ngDoCheck(this,this._el_4,t),this._NgControlStatus_4_7.ngDoCheck(this,this._el_4,t),this._NgControlStatus_4_7.checkHost(this,this,this._el_4,t);var n=o.inlineInterpolate(1,"",this.context.bottone,"");o.checkBinding(t,this._expr_15,n)&&(this.renderer.setText(this._text_7,n),this._expr_15=n)},e.prototype.destroyInternal=function(){this._NgModel_4_5.ngOnDestroy()},e.prototype.handleEvent_4=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if(n=this._SelectControlValueAccessor_4_3.handleEvent(t,e)&&n,"ngModelChange"==t){n=this.context.selectSource()!==!1&&n}return n},e.prototype.handleEvent_6=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.onClick()!==!1&&n}return n},e}(r.a)},336:function(t,e,n){"use strict";var i=n(88),r=n(23),o=n(17);n.d(e,"a",function(){return s});var s=function(){function t(t){this._changed=!1,this.context=new i.a(t),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b,this._expr_4=r.b,this._expr_5=r.b,this._expr_6=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){var r=this.context.ngClassUntouched;o.checkBinding(i,this._expr_0,r)&&(t.renderer.setElementClass(n,"ng-untouched",r),this._expr_0=r);var s=this.context.ngClassTouched;o.checkBinding(i,this._expr_1,s)&&(t.renderer.setElementClass(n,"ng-touched",s),this._expr_1=s);var _=this.context.ngClassPristine;o.checkBinding(i,this._expr_2,_)&&(t.renderer.setElementClass(n,"ng-pristine",_),this._expr_2=_);var h=this.context.ngClassDirty;o.checkBinding(i,this._expr_3,h)&&(t.renderer.setElementClass(n,"ng-dirty",h),this._expr_3=h);var a=this.context.ngClassValid;o.checkBinding(i,this._expr_4,a)&&(t.renderer.setElementClass(n,"ng-valid",a),this._expr_4=a);var c=this.context.ngClassInvalid;o.checkBinding(i,this._expr_5,c)&&(t.renderer.setElementClass(n,"ng-invalid",c),this._expr_5=c);var l=this.context.ngClassPending;o.checkBinding(i,this._expr_6,l)&&(t.renderer.setElementClass(n,"ng-pending",l),this._expr_6=l)},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}();!function(){function t(t){this._changed=!1,this.context=new i.b(t),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b,this._expr_4=r.b,this._expr_5=r.b,this._expr_6=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){var r=this.context.ngClassUntouched;o.checkBinding(i,this._expr_0,r)&&(t.renderer.setElementClass(n,"ng-untouched",r),this._expr_0=r);var s=this.context.ngClassTouched;o.checkBinding(i,this._expr_1,s)&&(t.renderer.setElementClass(n,"ng-touched",s),this._expr_1=s);var _=this.context.ngClassPristine;o.checkBinding(i,this._expr_2,_)&&(t.renderer.setElementClass(n,"ng-pristine",_),this._expr_2=_);var h=this.context.ngClassDirty;o.checkBinding(i,this._expr_3,h)&&(t.renderer.setElementClass(n,"ng-dirty",h),this._expr_3=h);var a=this.context.ngClassValid;o.checkBinding(i,this._expr_4,a)&&(t.renderer.setElementClass(n,"ng-valid",a),this._expr_4=a);var c=this.context.ngClassInvalid;o.checkBinding(i,this._expr_5,c)&&(t.renderer.setElementClass(n,"ng-invalid",c),this._expr_5=c);var l=this.context.ngClassPending;o.checkBinding(i,this._expr_6,l)&&(t.renderer.setElementClass(n,"ng-pending",l),this._expr_6=l)},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}()},337:function(t,e,n){"use strict";var i=n(90),r=n(23),o=n(17);n.d(e,"a",function(){return s});var s=function(){function t(t,e,n,o){this._changed=!1,this._changes={},this.context=new i.a(t,e,n,o),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.context.ngOnDestroy(),this.subscription0&&this.subscription0.unsubscribe()},t.prototype.check_name=function(t,e,n){(n||o.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.name=t,this._changes.name=new r.e(this._expr_0,t),this._expr_0=t)},t.prototype.check_isDisabled=function(t,e,n){(n||o.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.isDisabled=t,this._changes.isDisabled=new r.e(this._expr_1,t),this._expr_1=t)},t.prototype.check_model=function(t,e,n){(n||o.checkBinding(e,this._expr_2,t))&&(this._changed=!0,this.context.model=t,this._changes.model=new r.e(this._expr_2,t),this._expr_2=t)},t.prototype.check_options=function(t,e,n){(n||o.checkBinding(e,this._expr_3,t))&&(this._changed=!0,this.context.options=t,this._changes.options=new r.e(this._expr_3,t),this._expr_3=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||i&&(this.context.ngOnChanges(this._changes),this._changes={}),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.update.subscribe(e.bind(t,"ngModelChange")))},t}()},338:function(t,e,n){"use strict";var i=n(66),r=n(23),o=n(17);n.d(e,"a",function(){return s});var s=(function(){function t(t,e,n){this._changed=!1,this.context=new i.b(t,e,n),this._expr_0=r.b,this._expr_1=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.context.ngOnDestroy()},t.prototype.check_ngValue=function(t,e,n){(n||o.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.ngValue=t,this._expr_0=t)},t.prototype.check_value=function(t,e,n){(n||o.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.value=t,this._expr_1=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),function(){function t(t,e){this._changed=!1,this.context=new i.a(t,e)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;if("change"==t){n=this.context.onChange(e.target.value)!==!1&&n}if("blur"==t){n=this.context.onTouched()!==!1&&n}return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}())},339:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this.title="Ricerca Codice"}return t.prototype.ngOnInit=function(){},t.ctorParameters=function(){return[]},t}()},340:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},341:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},504:function(t,e,n){t.exports=n(262)}},[504]);