const {EatException} = require("./eat-exception");


class Ingestion {
    constructor(meal_type, id, day_of_diet=0, products=new Array ){
        this.meal_type = meal_type;
        this.id = id;
        this.day_of_diet =day_of_diet;
        this.products = products;
    }

    getFromFridge(product){
        for(let x = 0; x < this.products.length; x++){
            if(this.products[x].name === product){
                if(this.products[x].kcal_per_portion > 200){
                    throw new EatException();
                }
            }
        }
    }

    setProduct(value){
        this.products.push(value);
    }

    getProductInfo(product){
        for(let x = 0; x < this.products.length; x++){
            if(this.products[x].name === product){
                return this.products[x];
            }
        }
    }

}


module.exports.Ingestion= Ingestion;
