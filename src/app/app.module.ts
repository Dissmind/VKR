import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { MainPageRoutingModule } from './pages/main-page/main-page-routing.module'
import { MainPageModule } from './pages/main-page/main-page.module'
import { OurStoryComponent } from './pages/our-story/our-story.component'
import { MenuComponent } from './pages/menu/menu.component'
import { LocationsComponent } from './pages/locations/locations.component'
import { CateringComponent } from './pages/catering/catering.component'
import { ContactComponent } from './pages/contact/contact.component'
import { ProductListComponent } from './pages/product/product-list.component'
import { HttpClientModule } from '@angular/common/http'
import { YandexMapComponent } from './components/yandex-map/yandex-map.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OurStoryComponent,
    MenuComponent,
    LocationsComponent,
    CateringComponent,
    ContactComponent,
    ProductListComponent,
    YandexMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageRoutingModule,
    MainPageModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
