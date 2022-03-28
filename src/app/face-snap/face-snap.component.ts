import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonString!: string;

  ngOnInit() {
    this.snapped = false;
    this.buttonString = "Oh SNAP !";
  }

  onSnap() {
    if (!this.snapped) {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.buttonString = "Ho UNsnap !";
    } else {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.buttonString = "Oh SNAP !";
    }
  }
}
