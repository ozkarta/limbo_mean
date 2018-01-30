import {Component, OnInit, AfterViewChecked, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppService} from '../../shared/service/app.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-signup-partial',
  templateUrl: './signup-partial.component.html',
  inputs: ['registrationType']
})

export class SignUpPartialComponent implements OnInit, AfterViewChecked {
  public registrationType: String;
  public user: User;
  public registrationDate: {
    year: number,
    month: number,
    day: number
  }
  private now = new Date();

  private registrationForm: NgForm;
  @ViewChild('registrationForm') viewRegistrationForm: NgForm;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.initUser();
  }

  ngAfterViewChecked():void {
    if (this.viewRegistrationForm === this.registrationForm) {
      return;
    }

    this.registrationForm = this.viewRegistrationForm;
    if (this.registrationForm) {
      this.registrationForm.valueChanges
        .subscribe(data => {
          const form = this.registrationForm.form;

          for (const field in this.registrationFormErrors) {
            // clear previous error message (if any)
            this.registrationFormErrors[field] = '';
            const control = form.get(field);
            console.dir(control);
            if (control && control.dirty &&  !control.valid) {
              const messages = this.registrationValidationMessages[field];
              for (const key in control.errors) {
                this.registrationFormErrors[field] += messages[key] ? messages[key] + ' ' : '';
              }
            }
          }
        });
    }
  }

  initUser() {
    this.user =  <any>{};
    this.user['employeeType'] = false;
    this.registrationDate =  {
      year: this.now.getFullYear(),
      month: this.now.getMonth() + 1,
      day: this.now.getDate()
    };
  }

  clearObjectBeforSave() {
    this.user['registrationDate'] = new Date();
    this.user['registrationDate'].setFullYear(this.registrationDate.year);
    this.user['registrationDate'].setMonth(this.registrationDate.month -1);
    this.user['registrationDate'].setDate(this.registrationDate.day);
  }

  createEmployer() {
    this.clearObjectBeforSave();
    console.dir(this.user);
  }

  createEmployee() {
    this.clearObjectBeforSave();
    console.dir(this.user);
  }

  public registrationFormErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    controlNumber: '',
    businessType: '',
    principalOfficeAddress: '',
    registrationDate: ''
  };

  private registrationValidationMessages = {
    firstName: {
      required: 'First name is required.'
    },
    lastName: {
      required: 'Last name is required.'
    },
    email: {
      required: 'Email is required.',
      pattern:  'Please enter valid email.',
      maxlength: 'Maximum length must be 128'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Minimum length is 6'
    },
    confirmPassword: {
      required: 'Password Confirmation is required.',
      validateEqual: 'Passwords don\'t match.',
      minlength: 'Minimum length is 6'
    },

    businessName: {
      required: 'Business name is required.'
    },
    controlNumber: {
      required: 'Control Number is required.'
    },
    businessType: {
      required: 'Business Type is required.'
    },
    principalOfficeAddress: {
      required: 'Principal Office Address is required.'
    },
    registrationDate: {
      required: 'Registration Date is required.'
    },
  };
}
