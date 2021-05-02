import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { MemoryStorageService } from './memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private memoryStorageService: MemoryStorageService) {

  }

  buildHref(): string {
    return "https://accounts.spotify.com/authorize?" +
      `client_id=${environment.clientId}&` +
      "response_type=token&" +
      `redirect_uri=${location.origin}/auth&` +
      `state=${this.generateState()}&` +
      `scope=${environment.scopes}`
  }

  private generateState(): string {
    let randomArray = new Uint32Array(10);
    randomArray = crypto.getRandomValues(randomArray);
    this.memoryStorageService.state = "fruity-spotify" + randomArray.join("");
    return this.memoryStorageService.state;
  }

  storeToken(fragment: string) {
    const tokenBits = fragment.split("&");
    this.memoryStorageService.token = new Token({
      access_token: tokenBits[0].split("=")[1],
      token_type: tokenBits[1].split("=")[1],
      expires_in: parseInt(tokenBits[2].split("=")[1]),
      state: tokenBits[3].split("=")[1]
    });
  }
}
