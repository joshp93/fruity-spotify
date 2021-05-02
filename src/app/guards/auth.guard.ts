import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { MemoryStorageService } from '../services/memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private memoryStorageService: MemoryStorageService, private router: Router, private route: ActivatedRoute) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.memoryStorageService.token) {
      return (new Date() > this.memoryStorageService.token.expires_at) ? this.redirectToRoot() : true;
    } else {
      return this.redirectToRoot();
    }
  }

  redirectToRoot(): boolean {
    this.router.navigate([""]);
    return false;
  }
}
