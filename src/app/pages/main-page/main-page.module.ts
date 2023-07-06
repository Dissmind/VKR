import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MainPageRoutingModule } from './main-page-routing.module'
import { MainNavComponent } from './main-nav/main-nav.component'
import { MainBannerComponent } from './main-banner/main-banner.component'
import { MainNutritionComponent } from './main-nutrition/main-nutrition.component'
import { MainFooterComponent } from './main-footer/main-footer.component'
import { MclComponent } from './main-mcl/mcl.component'
import { MainGiftCardComponent } from './main-gift-card/main-gift-card.component'

@NgModule({
  declarations: [
    MainNavComponent,
    MainBannerComponent,
    MainNutritionComponent,
    MainFooterComponent,
    MclComponent,
    MainGiftCardComponent
  ],
  exports: [
    MainNavComponent,
    MainBannerComponent,
    MainNutritionComponent,
    MainFooterComponent,
    MclComponent,
    MainGiftCardComponent
  ],
  imports: [CommonModule, MainPageRoutingModule]
})
export class MainPageModule {}
