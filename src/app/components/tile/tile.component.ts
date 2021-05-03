import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() title: string;
  @Input() artist: Artist;
  @Input() track: Track;
  @Input() trackPreview: string;
  audio: HTMLAudioElement;
  playing: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  play(url: string) {
    if (this.playing) return;

    this.audio = new Audio(url);
    this.audio.play()
      .then(() => this.playing = true)
      .catch(() => {});
  }

  stop() {
    this.audio.pause();
    this.playing = false;
  }

}
