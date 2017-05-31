export class Car {
    make: string;
    model: string;
    year: number;
    price: number;
    _id: string;

    constructor( { "make": make, "model": model, "year": year, "price": price, "_id": _id } ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this._id = _id;
    }

    public changePrice(newPrice):void {
        this.price = newPrice;
    }

}