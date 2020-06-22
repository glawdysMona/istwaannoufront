import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm :FormGroup;
  public username: string;
  public email: string;
  public message: string;
  public error: boolean;


  emailControlContact: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
