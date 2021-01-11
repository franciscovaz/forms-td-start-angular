import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submittedForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];

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
  }
}
