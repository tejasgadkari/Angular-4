import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('amount') inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const inputName = this.inputNameRef.nativeElement.value;
    const inputAmount = this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(inputName, inputAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
