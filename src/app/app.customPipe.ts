import { Pipe, PipeTransform } from '@angular/core';
import { food } from './food';
import { foodsList } from './food-list';

@Pipe({
    name: 'search'
})
export class Search implements PipeTransform {
    foodsList: food[];
    foodItem: food;

    transform(name: string): string {
        this.foodsList = foodsList;
        console.log("ggg" + this.foodsList);
        return 'working';
    }
}