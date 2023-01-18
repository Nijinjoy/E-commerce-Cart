import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]
  grand:Number=0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data;
        
      }
    )

  }
  removeitem(product:any){
   this.cart.removecart(product)
   this.grand=this.cart.gettotal();
  }
  removeall(){
    this.cart.removeall()
  }

}
