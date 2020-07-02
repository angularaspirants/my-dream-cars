import { Injectable } from '@angular/core';
import {CarModel} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  carList = [
    new CarModel('HONDA', 'ACCORD', 2019, 12000, 10000, ''),
    new CarModel('HONDA', 'CIVIC', 2014, 14000, 20000, ''),
    new CarModel('HONDA', 'CRV', 2012, 8000, 11000, ''),
    new CarModel('TOYOTA', 'CAMRY', 2013, 5000, 15000, ''),
    new CarModel('TOYOTA', 'COROLLA', 2019, 10000, 12000, ''),
    new CarModel('TOYOTA', 'RAV4', 2015, 15000, 21000, ''),
    new CarModel('TOYOTA', 'HIGHLANDER', 2013, 12000, 190000, ''),
    new CarModel('NISSAN', 'ALTIMA', 2018, 17000, 190000, ''),
    new CarModel('NISSAN', 'ROGUE', 2011, 11000, 140000, ''),
    new CarModel('NISSAN', 'SENTRA', 2014, 16000, 140000, ''),
    new CarModel('FORD', 'MUSTANG', 2019, 18000, 22000, ''),
    new CarModel('FORD', 'FIESTA', 2012, 13000, 11000, ''),
    new CarModel('FORD', 'FUSION', 2014, 18000, 15000, ''),
    new CarModel('FORD', 'ESCAPE', 2016, 15000, 14000, ''),
    new CarModel('BMW', 'M5', 2013, 20000, 23000, ''),
    new CarModel('BMW', 'M4', 2017, 19000, 27000, ''),
  ];

  // tslint:disable-next-line:typedef
  getAllBrands() {
    return this.carList.map((car) => car.brand)
      .filter((value, index, self) => self.indexOf(value) === index );
  }

  // tslint:disable-next-line:typedef
  getAllModels() {
    return this.carList.map((car) => car.model)
      .filter((value, index, self) => self.indexOf(value) === index );
  }

  // tslint:disable-next-line:typedef
  getModelNamesByBrand(selectedBrand: string) {
    return this.carList.filter(car => car.brand === selectedBrand )
      .map(car => car.model);
  }

}
