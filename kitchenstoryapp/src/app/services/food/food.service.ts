import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAll():Foods[]{

    return [
        {
          id:1,
          name: 'Pizza Pepperoni',
          cookTime:'10-20',
          price:10,
          favourite:false,
          origins:['italy'],
          stars:4.5,
          imageUrl:'/assets/images/burger1.jpg',
          tags:['FastFood','Pizza','Lunch']
        },
        {
          id:2,
          name: 'Burger',
          cookTime:'10-20',
          price:10,
          favourite:false,
          origins:['italy','India'],
          stars:4,
          imageUrl:'/assets/images/burger2.jpg',
          tags:['FastFood','Pizza','Lunch']
        },
        {
          id:3,
          name: 'Pizza Pepper Hot',
          cookTime:'10-20',
          price:10,
          favourite:false,
          origins:['italy'],
          stars:3.5,
          imageUrl:'/assets/images/burger3.jpg',
          tags:['FastFood','Pizza','Lunch']          
        }

    ];
  }
}
