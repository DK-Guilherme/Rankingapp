import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  }

  getUser() {
    // return this.service.getUserByemail(this.form.get(email).subscribe({
      // next: (user) => {
        // this.user = user;
        // console.log(this.user);
      // },
    // });

    console.log(this.form);
  }

  send(): void {
    console.log(this.form);
    //if (this.form == getail())
  }
}
function email(email: any) {
  throw new Error('Function not implemented.');
}

