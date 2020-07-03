import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SellCarComponent } from './comp/sell-car/sell-car.component';
import { BuyCarComponent } from './comp/buy-car/buy-car.component';
import { CarCardComponent } from './comp/common/car-card/car-card.component';
import {RouterModule, Routes} from '@angular/router';
import { CarCardListComponent } from './comp/common/car-card-list/car-card-list.component';
import { BuyCarFiltersComponent } from './comp/buy-car/buy-car-filters/buy-car-filters.component';
import { FilterComponent } from './comp/common/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

const routes: Routes = [
  { path: 'buy-car', component: BuyCarComponent},
  { path: 'sell-car', component: SellCarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SellCarComponent,
    BuyCarComponent,
    CarCardComponent,
    CarCardListComponent,
    BuyCarFiltersComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
