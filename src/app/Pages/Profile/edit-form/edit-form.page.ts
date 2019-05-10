import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PhoneValidator } from './phone.validator';
import { CountryPhone } from './country-phone.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.page.html',
  styleUrls: ['./edit-form.page.scss'],
})
export class EditFormPage implements OnInit {

  validations_form: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;
  genders: Array<string>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
     this.countries = [
      new CountryPhone('PH', 'Philippines'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];

    this.genders = [
      "Male",
      "Female"
    ];

    

    let country = new FormControl(this.countries[0], Validators.required);
    let phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      midIn: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      addr: new FormControl('', Validators.required),
      web: new FormControl('', Validators.required),
      sms: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
   
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'midIn': [
      { type: 'required', message: 'Middle Initial is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'addr': [
      { type: 'required', message: 'Address is required.' }
    ],
    'sms': [
      { type: 'required', message: 'SMS is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
    ],
    'web': [
      { type: 'required', message: 'Website is required.' }
    ],
   
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(values){
    console.log(values);
    this.router.navigate(["/user"]);
  }

}
