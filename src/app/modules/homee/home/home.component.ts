import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: User;

  form!: FormGroup;

  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    console.log(this.form.value)
  }

  getUser() {
    console.log(this.form.value);
    return this.service.getUserByemail(this.form.value).subscribe({
      next: (user:User) => {
        this.user = user;
        console.log(this.user);
      }
    });
  }

  send(): void {
    console.log(this.form);
    //if (this.form == getail())
  }

}
