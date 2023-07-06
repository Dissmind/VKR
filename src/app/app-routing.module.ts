import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OurStoryComponent } from './pages/our-story/our-story.component'
import { MenuComponent } from './pages/menu/menu.component'
import { LocationsComponent } from './pages/locations/locations.component'

import { CateringComponent } from './pages/catering/catering.component'
import { ContactComponent } from './pages/contact/contact.component'
import { MainGiftCardComponent } from './pages/main-page/main-gift-card/main-gift-card.component'
import { ProductListComponent } from './pages/product/product-list.component'

const routes: Routes = [
  {
    path: 'main-page',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'product-list/:category',
    component: ProductListComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'giftCard',
    component: MainGiftCardComponent
  },
  {
    path: 'catering',
    component: CateringComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'main-page'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
