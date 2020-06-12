import { food } from './../food';
import { foodsList } from './../food-list';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  foodsList: food[];
  newFood: any = {};
  searchValue: string;
  x: string[];
  a: string = "";
  value: string = "display:none";

  constructor() { }

  ngOnInit(): void {
    console.log(this.foodsList);
    this.foodsList = foodsList;

  }

  addFood(newFood): void {
    this.foodsList.unshift(newFood);
    newFood = "";
  }

  add(f: food): void {
    this.value = "display:block";
    this.a = f.name + "=" + f.calories;
  }

}
