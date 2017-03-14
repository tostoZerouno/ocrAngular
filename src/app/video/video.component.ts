import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  @Output() stop: EventEmitter<string> = new EventEmitter<string>();

  videoSelect = (<HTMLSelectElement>document.getElementsByName("videoSelect")[0]);
  vid;
  localstream;
  bottone = "Ferma il Video"

  constructor() { }

  selectSource() {
    var videoSelect = (<HTMLSelectElement>document.getElementsByName("videoSelect")[0]);
    var videoSource = videoSelect.value;
    this.vid = "" + (videoSelect.value);
    console.log("vid: " + this.vid);
    //var constraints  = { video: { deviceId: { exact: videoSource } } };
    var constraints = { video: { deviceId: videoSource } };
    this.stopStream();
    setTimeout(this.startStream(constraints), 150);
  }

  @ViewChild('video') video: any;
  // note that "#video" is the name of the template variable in the video element

  ngAfterViewInit() {
    var constraints = { video: true };
    //FIXME
    //var videoSource = this.videoSelect.value;
    //var constraints = { video: { deviceId: { exact: videoSource } } }
    this.startStream(constraints);
  }

  onClick() {
    let _video = this.video.nativeElement;
    var videoSelect = (<HTMLSelectElement>document.getElementsByName("videoSelect")[0]);
    var videoSource = videoSelect.value;
    console.log(videoSource);
    var constraints = { video: { deviceId: { exact: videoSource } } };
    if (!_video.paused) {
      this.stopStream();
      this.bottone = "Avvia il Video";
      this.stop.emit("stop");
    } else {
      this.startStream(constraints);
      this.bottone = "Ferma il Video";
      this.stop.emit("start");
    }
  }

  startStream(constraints) {
    let _video = this.video.nativeElement;
    /*let nav = <any>navigator;
    nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkit.GetUserMedia;*/
    //if(navigator.mozGetUserMedia)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          console.log(_video.src);
          this.localstream = stream;
          _video.load();

        })
    }
  }

  stopStream() {
    let _video = this.video.nativeElement;
    //console.log(this.localstream);
    if (!_video.paused) {
      console.log("not paused");
      _video.pause();
      _video.src = "";
      this.localstream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    console.log("Video off");
  }


  enumerate() {
    navigator.mediaDevices.enumerateDevices()
      .then(gotDevices)
      .catch(errorCallback);
    var videoSelect = (<HTMLSelectElement>document.getElementsByName("videoSelect")[0]);

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
  }

  ngOnInit() {
    this.enumerate();
    /*    this.enumerate();*/
  }

}
