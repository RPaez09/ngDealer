export class Car {
    make: string;
    model: string;
    year: number;
    price: number;

    constructor( { "make": make, "model": model, "year": year, "price": price } ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    public changePrice(newPrice):void {
        this.price = newPrice;
    }

}