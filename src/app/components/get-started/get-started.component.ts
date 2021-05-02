import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MemoryStorageService } from 'src/app/services/memory-storage.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  href: string;

  constructor(private authService: AuthService, public memoryStorageService: MemoryStorageService) { }

  ngOnInit(): void {
    this.buildHref();
  }

  buildHref() {
    this.href = this.authService.buildHref();
  }
}
