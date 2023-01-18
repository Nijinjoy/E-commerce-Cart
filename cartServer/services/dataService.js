const db = require('./db')

//get all the products feom db

const getProducts = ()=>{
    return db.Product.find().then(
     (result)=>{
        if(result){
        return{
            status:true,
            statusCode:200,
            products:result
        }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'No product found'
            }
        }
     }
    )
}


const addtowishlist=(  id,title,price, image, description)=>{
  //data addede to mongodb -- create a model in db.js
   return db.Wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"product already exists"
            }
        }
        else{
            const newProduct = new db.Wishlist({id,title,price,image,description})
            newProduct.save() //save data into mongodb
            return{
                status:true,
                statusCode:200,
                message:"product added to wishlist"
            }
        }
    }
   )

}
//to get wishlist
const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your wishlist is empty'
                }
            }
        }
    )
}

deletewish=(id)=>{
     return db.Wishlist.deleteOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:true,
                        statusCode:200,
                        products:result,
                        message:"product added to cart"
                    }
                }
                else{
                    return{
                        status:false,
                        statusCode:404,
                        message:'Your wishlist is empty'
                    }
                }
            }
        )
}

module.exports = {
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
    
}