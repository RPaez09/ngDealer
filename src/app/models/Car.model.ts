export interface ICar {
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    color: string;
    trim: string;
    hidden: boolean;
    _id: string;
}

export class Car implements ICar{
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    color: string;
    trim: string;
    hidden: boolean;
    _id: string;

    constructor( {  "make": make, 
                    "model": model, 
                    "year": year, 
                    "price": price,
                    "mileage": mileage,
                    "color": color,
                    "trim":trim,
                    "hidden": hidden,
                    "_id": _id } ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.mileage = mileage;
        this.color = color;
        this.trim = trim;
        this.hidden = hidden;
        this._id = _id;
    }
    
}