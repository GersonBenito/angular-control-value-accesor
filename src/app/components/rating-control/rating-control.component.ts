import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-control',
  standalone: true,
  imports: [],
  templateUrl: './rating-control.component.html',
  styleUrl: './rating-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingControlComponent),
      multi: true
    }
  ]
})
export class RatingControlComponent implements OnInit, ControlValueAccessor{
  
  private _rating: number = 3;
  public ratingArray: number[] = [];
  private count: number = 5;
  @Input() public isInValid: boolean = false;

  private _onChanged: Function = (_value: number) => {};
  private _onTouch: Function = (_value: number) => {};

  ngOnInit(): void {
    this.initStar();
  }

  initStar(){
    for(let idx = 0; idx < this.count; idx++){
       this.ratingArray.push(idx); 
    }
  }

  showIcon(index: number): string{
    return this._rating >= index + 1 ? 'star' : 'star_border'; 
  }

  onClick(rating: number): void {
    this._rating = rating;

    // send chang in the parent form
    this._onChanged(this._rating);
    this._onTouch(this._rating);
  }

  // Control value accessor
  writeValue(value: number): void {
    if(value){
      this._rating = value;
    }
  }

  registerOnChange(fn: Function): void {
    this._onChanged = fn;
  }

  registerOnTouched(fn: Function): void {
    this._onTouch = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
