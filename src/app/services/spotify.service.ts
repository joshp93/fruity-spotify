import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { PagingObject } from '../models/paging-object.model';
import { Track } from '../models/track.model';
import { TracksObject } from '../models/tracks-object.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { MemoryStorageService } from './memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private memoryStorageService: MemoryStorageService, private authService: AuthService, private httpClient: HttpClient) { }

  getMe(): Promise<string | User> {
    return new Promise<string | User>((resolve, reject) => {
      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.memoryStorageService.token.access_token);

      this.httpClient.get<User>("https://api.spotify.com/v1/me", { headers: headers }).subscribe(
        (response: User) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        }
      );
    });
  }

  getTopTracks(limit: number, timeRange: string): Promise<string | PagingObject> {
    return new Promise<string | PagingObject>((resolve, reject) => {

      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.memoryStorageService.token.access_token);
      const params = new HttpParams()
        .set("time_range", timeRange)
        .set("limit", limit.toString());

      this.httpClient.get<PagingObject>("https://api.spotify.com/v1/me/top/tracks", { headers: headers, params: params }).subscribe(
        (response: PagingObject) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        });

    });
  }

  getTopArtists(limit: number, timeRange: string): Promise<string | PagingObject> {
    return new Promise<string | PagingObject>((resolve, reject) => {

      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.memoryStorageService.token.access_token);
      const params = new HttpParams()
        .set("time_range", timeRange)
        .set("limit", limit.toString());

      this.httpClient.get<PagingObject>("https://api.spotify.com/v1/me/top/artists", { headers: headers, params: params }).subscribe(
        (response: PagingObject) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        });

    });
  }

  getAlbum(id: string): Promise<String | Album> {
    return new Promise<string | Album>((resolve, reject) => {

      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.memoryStorageService.token.access_token);

      this.httpClient.get<Album>(`https://api.spotify.com/v1/albums/${id}`, { headers: headers }).subscribe(
        (response: Album) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        });

    });
  }

  getArtistTopTracks(id: string) {
    return new Promise<string | TracksObject>((resolve, reject) => {

      const headers = new HttpHeaders().set("Authorization", "Bearer " + this.memoryStorageService.token.access_token);
      const params = new HttpParams()
        .set("market", "GB");

      this.httpClient.get<TracksObject>(`https://api.spotify.com/v1/artists/${id}/top-tracks`, { headers: headers, params: params }).subscribe(
        (response: TracksObject) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        });

    });
  }
}
