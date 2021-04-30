import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  error: string;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.authService.getTokenFromCode(params.code, params.state)
        .catch((reason) => {
          this.error = reason;
        });
    });
  }

  ngOnInit(): void {
  }
}
