class car{
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    displaydetails()
    {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}
const car1= new car("Toyato","civic","2000");
const car2= new car("Honda","civic","2002");
const car3= new car("Audi","civic","2003");

car1.displaydetails();
car2.displaydetails();
car3.displaydetails();
