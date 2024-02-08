//primitive array
const foods=['Vada','Dosa','Idly','Biriyani'];

// Create
foods[1]='Veg Biriyani'
console.log(foods);

//Read
console.log(foods[1]);
foods.forEach(val=>console.log(val))

//Update
foods[1]='Curd Rice'
console.log(foods);

//Delete
foods.splice(1,1)
console.log(foods);

//Reference array
const mobiles=[
    {
        productId:1,
        productName:'Apple',
        price:70000
    },
    {
        productId:2,
        productName:'Samsung',
        price:50000
    },
    {
        productId:3,
        productName:'Nokia',
        price:10000
    },
    {
        productId:4,
        productName:'Oppo',
        price:15000
    }
]
// create
const createProduct={  
    productId:5,
    productName:'Vivo',
    price:20000
}
mobiles.push(createProduct);
console.log(mobiles);
// Read
const findProduct=mobiles.find(val=>val.productName==='Apple');
console.log(findProduct);
//update
const updatePrice=mobiles.map(val=>{
    let priceChange=val.price+2000;
    return {...val,price:priceChange}
});
console.log(updatePrice);
// console.log(mobiles[0].price=2000);
// console.log(mobiles);

// delete
const deleteEl=mobiles.slice(0,3);
console.log(deleteEl);