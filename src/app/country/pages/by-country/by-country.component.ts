import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchImputComponent } from "../../components/search-imput/search-imput.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-country',
  imports: [SearchImputComponent, CountryListComponent],
  templateUrl: './by-country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryComponent { }
