import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';

@Injectable()
export class MemoryStorageService {
  token: Token;
  state: string;
  
  constructor() { }
}
