import { Component, OnInit } from '@angular/core';
import {CarService} from '../../../shared/services/car.service';

@Component({
  selector: 'app-buy-car-filters',
  templateUrl: './buy-car-filters.component.html',
  styleUrls: ['./buy-car-filters.component.css']
})
export class BuyCarFiltersComponent implements OnInit {

  constructor(private carService: CarService) { }
  brandList = [];
  modelList = [];
  ngOnInit(): void {
    this.brandList = this.carService.getAllBrands();
    this.modelList = this.carService.getAllModels();
  }

  // tslint:disable-next-line:typedef
  onItemSelection(filterType: string, filterValue: string) {
    console.log(filterType, filterValue)
    if (filterType === 'Brand') {
      this.modelList = this.carService.getModelNamesByBrand(filterValue);
    }else if (filterType === 'Model') {
      console.log(filterValue);
    }
  }

}
