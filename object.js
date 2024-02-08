//Task CRUD operation in object

const storeData={
    shopName:'Abc store',
    revenue:100000,
    isOpen:true,
    products:['Biscuits','Chocolate','Soap','Washing Powder','Sambar Masala','Vegetables','Fruits'],
    getProducts(){
        this.products.forEach(val=>console.log(val));
    }
}
//Create
storeData.location='Chennai';
console.log(storeData.location);

//Read
console.log(storeData.shopName);


//update
storeData.shopName='ABC store';
console.log(storeData.shopName);

//Delete
delete storeData.isOpen;
console.log(storeData);