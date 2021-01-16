import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submittedForm: NgForm;
  @ViewChild('f2') submittedForm2: NgForm;

  defaultQuestion: string = 'teacher';
  defaultSubscription: string = "Advanced";

  answer: string = '';
  genders: string[] = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  subscriptionInfo = {
    email2: '',
    subscription: '',
    password: ''
  };

  submitted: boolean = false;
  submitted2: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    /* this.submittedForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */
    this.submittedForm.form.patchValue( {
      userData: {
        username: suggestedName
      }
    })
  }


  /* onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {

    console.log(this.submittedForm);
    this.submitted = true;
    this.user.username = this.submittedForm.value.userData.username;
    this.user.email = this.submittedForm.value.userData.email;
    this.user.secretQuestion = this.submittedForm.value.secret;
    this.user.answer = this.submittedForm.value.questionAnswer;
    this.user.gender = this.submittedForm.value.gender;

    this.submittedForm.reset();
  }

  onSubmitForm2() {
    this.submitted2 = true;
    this.subscriptionInfo.email2 = this.submittedForm2.value.email2;
    this.subscriptionInfo.subscription = this.submittedForm2.value.subscription;
    this.subscriptionInfo.password = this.submittedForm2.value.password;

  }
}
