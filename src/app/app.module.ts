import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { MarketViewComponent } from './components/views/market-view/market-view.component';
import { ProductsViewComponent } from './components/views/products-view/products-view.component';
import { MapComponent } from './components/map/map.component';
import { SupplierViewComponent } from './components/views/supplier-view/supplier-view.component';
import { ProfileViewComponent } from './components/views/profile-view/profile-view.component';
import { OrdersViewComponent } from './components/views/orders-view/orders-view.component';
import { ProductDetailsViewComponent } from './components/views/product-details-view/product-details-view.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EditProductViewComponent } from './components/views/edit-product-view/edit-product-view.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SearchComponent } from './components/search/search.component';
import { ProductFeedComponent } from './components/product-feed/product-feed.component';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketViewComponent,
    ProductsViewComponent,
    MapComponent,
    SupplierViewComponent,
    ProfileViewComponent,
    OrdersViewComponent,
    ProductDetailsViewComponent,
    NavigationComponent,
    EditProductViewComponent,
    EditProductFormComponent,
    SearchComponent,
    ProductFeedComponent,
    CategoryCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
