// Створіть обʼєкт таксі Парку З методами додавання авто,  видалення авто, оновлення пробігу
//  Отримання всіх авто

const taxiPark = {
  cars: [
    { brand: "Mazda", mileage: 17 },
    { brand: "Honda", mileage: 80 },
    { brand: "Nissan", mileage: 50 },
  ],
  getCars() {
    return this.cars;
  },
  addCar(newCar) {
    const limit = 60;
    for (const car of this.cars) {
      if (car.brand === newCar.brand || newCar.mileage >= limit) {
        return `Sorry! We don't need ${newCar.brand}!`;
      }
    }
    this.cars.push(newCar);
  },
  deleteCar(carName) {
    for (const car of this.cars) {
      let idx = this.cars.indexOf(car);
      if (carName === this.cars[idx].brand) {
        console.log(idx);
        return this.cars.splice(idx, 1);
      }
    }
    return `We don't have ${carName} in our taxi Park!;`;
  },
  updateMileage(carName, newMileage) {
    for (const car of this.cars) {
      let idx = this.cars.indexOf(car);
      if (carName === this.cars[idx].brand) {
        return (this.cars[idx].mileage = newMileage);
      }
    }
    return `No such ${carName} in our taxi Park - can't update mileage!;`;
  },
};
console.log(taxiPark.getCars());
console.log(taxiPark.addCar({ brand: "Toyota", mileage: 40 }));
console.log(taxiPark.getCars());
console.log(taxiPark.addCar({ brand: "Mazda", mileage: 10 }));
console.log(taxiPark.deleteCar("Audi"));
console.log(taxiPark.deleteCar("Honda"));
console.log(taxiPark.getCars());
console.log(taxiPark.updateMileage("Nissan", 75));
console.log(taxiPark.updateMileage("BMW", 36));
console.log(taxiPark.getCars());
