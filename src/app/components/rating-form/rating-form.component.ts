import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RatingControlComponent } from '../rating-control/rating-control.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [ReactiveFormsModule, RatingControlComponent],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss'
})
export class RatingFormComponent implements OnInit{

  public ratingForm: FormGroup = new FormGroup({});
  private toastr = inject(ToastrService);

  ngOnInit(): void {
      this.initForm();
  }

  initForm(){
    this.ratingForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      rating: new FormControl(3, Validators.min(3))
    })
  }

  sendValues(){
    console.log('value -->', this.ratingForm.value);
    this.toastr.success('Rating send success', 'Success');
    this.initForm();
  }

  getValidator(control: string, type: string = 'required'): boolean {
    return (this.ratingForm.get(control)?.touched && this.ratingForm.get(control)?.hasError(type)) ? true : false; 
  }

}
