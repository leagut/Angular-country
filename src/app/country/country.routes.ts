import { By } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layout/country-layout/country-layout.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';



export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
      children:[{
      path:'by-capital',
      component: ByCapitalPageComponent
    },
    {
      path:'by-country',
      component: ByCountryComponent
    },
    {
      path:'by-region',
      component: ByRegionComponent
    }
    ,{
      path:'**',
      redirectTo: 'by-capital'
    }],
  },
 // {
   // path: 'country',
  //}
  //,


];

export default countryRoutes;



