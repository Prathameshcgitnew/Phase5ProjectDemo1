import { Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
   cart!: Cart;
   constructor(private cartService: CartService)
   {
     this.setCart();
   }

   ngOnInit(): void{
   }
   setCart(){
    this.cart=this.cartService.getCart();
   }

   removeFromCart(cartItem: CartItem){
       this.cartService.removeFromCart(cartItem.food.id);
       this.setCart();//Instance load data
   }

   changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity)
    this.setCart();
  }
}
