import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import party from "party-js";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]
  grand:any
  updatetotal:any

  constructor(private cart:CartService,private router:Router) { }

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
  discount3per(source:any){
    party.confetti(source)
  let discount=(this.grand*3)/100
  this.updatetotal=this.grand-discount

  }
  discount10per(){
   let discount=(this.grand*10)/100
   this.updatetotal=this.grand-discount
  }
  discount30per(){
    let discount=(this.grand*30)/100
    this.updatetotal=this.grand-discount
  }
  discount50per(){
    let discount=(this.grand*50)/100
    this.updatetotal=this.grand-discount
  }
  proceed(){
    alert('Your order is placed')
    this.router.navigateByUrl('')
    this.removeall()
  }

}
