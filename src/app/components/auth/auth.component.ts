import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  error: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, router: Router) {
    this.route.fragment.subscribe(fragment => {
      this.authService.storeToken(fragment);
      router.navigate(["../home"], { relativeTo: this.route });
    });
  }

  ngOnInit(): void {
  }
}
