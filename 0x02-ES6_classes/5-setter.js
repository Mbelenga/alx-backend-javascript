class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

const myCar = new Car("AMG");
myCar.carname = "Aston Martin";
document.getElementById("demo").innerHTML = myCar.carname;