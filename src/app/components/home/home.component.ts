import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { PagingObject } from 'src/app/models/paging-object.model';
import { Track } from 'src/app/models/track.model';
import { TracksObject } from 'src/app/models/tracks-object.model';
import { User } from 'src/app/models/user.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User
  topArtist: Artist;
  topTrackForTopArtist: Track;
  topTrack: Track;
  audio: HTMLAudioElement;
  playing: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getMe()
      .then((user: User) => {
        this.user = user;

        this.spotifyService.getTopArtists(1)
          .then((results: PagingObject) => {
            this.topArtist = <Artist>results.items[0];
            this.spotifyService.getArtistTopTracks(this.topArtist.id)
              .then((result: TracksObject) => this.topTrackForTopArtist = result.tracks[0]);
          });

        this.spotifyService.getTopTracks(1)
          .then((results: PagingObject) => this.topTrack = <Track>results.items[0]);
      });
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
