import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Me } from '../models/me.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  buildHref(): string {
    return "https://accounts.spotify.com/authorize?" +
      "response_type=code&" +
      `client_id=${environment.clientId}&` +
      `scope=user-read-private user-read-email&` +
      `redirect_uri=http://localhost:4200/auth&` +
      `state=${this.generateState()}`
  }

  private generateState(): string {
    let randomArray = new Uint32Array(10);
    randomArray = crypto.getRandomValues(randomArray);
    localStorage.setItem("state", "fruity-spotify" + randomArray.join(""))
    return localStorage.getItem("state");
  }

  getMe(code: string, state: string): Promise<string | Me> {
    return new Promise<string | Me>((resolve, reject) => {
      this.getTokenFromCode(code, state)
        .then((token: Token) => {
          const body = new URLSearchParams();
          body.set("grant_type", "authorization_code");
          body.set("refresh_token", token.refresh_token);

          const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");

          this.httpClient.post<Me>("https://api.spotify.com/v1/me", body.toString(), { headers: headers }).subscribe(
            (response: Me) => {
              alert(response);
              resolve(response);
            },
            (error: HttpErrorResponse) => {
              console.error(error);
              reject(error.message);
            }
          );
        })
        .catch(reason => reject(reason))
    });
  }

  private getTokenFromCode(code: string, state: string): Promise<string | Token> {
    // TODO add code which determines whether we need a new access token or not. Store the token in local storage

    return new Promise<string | Token>((resolve, reject) => {
      if (state !== localStorage.getItem("state")) {
        reject("State does not match!");
      }

      const body = new URLSearchParams();
      body.set("grant_type", "authorization_code");
      body.set("code", code);
      body.set("redirect_uri", "http://localhost:4200/auth");
      body.set("client_id", environment.clientId);
      body.set("client_secret", "fd155b46bb1145e1a03d924edc25df99");

      const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");

      this.httpClient.post<Token>("https://accounts.spotify.com/api/token", body.toString(), { headers: headers }).subscribe(
        (response) => {
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          reject(error.message);
        }
      );
    });
  }
}
