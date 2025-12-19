import { Component, Input, OnInit } from '@angular/core';
//import { Employee } from '../../Employee';
import { NgFor } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../common.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  @Input() userForm: any;
  constructor(public fb: FormBuilder,private service:CommonService) {
    this.userForm = this.fb.group({
      Name: [""],
      Age: [""],
      Mobile: [""],
      Email:[""],
    })
  }

  ngOnInit(): void{}
  SubmitForm() {    
    this.service.addUpdateUser(this.userForm.value).subscribe(data => {
      alert("Added");
      console.log(data);
    })
  }
}
