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
  shortTermTopArtist: Artist;
  shortTermTopTrackForTopArtist: Track;
  shortTermTopTrack: Track;
  mediumTermTopArtist: Artist;
  mediumTermTopTrackForTopArtist: Track;
  mediumTermTopTrack: Track;
  longTermTopArtist: Artist;
  longTermTopTrackForTopArtist: Track;
  longTermTopTrack: Track;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getMe()
      .then((user: User) => {
        this.user = user;
  
        this.getShortTerm();
        this.getMediumTerm();
        this.getLongTerm();
      });
  }

  getShortTerm() {
    this.spotifyService.getTopArtists(1, "short_term")
      .then((results: PagingObject) => {
        this.shortTermTopArtist = <Artist>results.items[0];
        this.spotifyService.getArtistTopTracks(this.shortTermTopArtist.id)
          .then((result: TracksObject) => this.shortTermTopTrackForTopArtist = result.tracks[0]);
      });

    this.spotifyService.getTopTracks(1, "short_term")
      .then((results: PagingObject) => this.shortTermTopTrack = <Track>results.items[0]);
  }

  getMediumTerm() {
    this.spotifyService.getTopArtists(1, "medium_term")
      .then((results: PagingObject) => {
        this.mediumTermTopArtist = <Artist>results.items[0];
        this.spotifyService.getArtistTopTracks(this.mediumTermTopArtist.id)
          .then((result: TracksObject) => this.mediumTermTopTrackForTopArtist = result.tracks[0]);
      });

    this.spotifyService.getTopTracks(1, "medium_term")
      .then((results: PagingObject) => this.mediumTermTopTrack = <Track>results.items[0]);
  }

  getLongTerm() {
    this.spotifyService.getTopArtists(1, "long_term")
      .then((results: PagingObject) => {
        this.longTermTopArtist = <Artist>results.items[0];
        this.spotifyService.getArtistTopTracks(this.longTermTopArtist.id)
          .then((result: TracksObject) => this.longTermTopTrackForTopArtist = result.tracks[0]);
      });

    this.spotifyService.getTopTracks(1, "long_term")
      .then((results: PagingObject) => this.longTermTopTrack = <Track>results.items[0]);
  }

}
