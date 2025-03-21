import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-imput',
  imports: [],
  templateUrl: './search-imput.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchImputComponent {

  placeholder = input('Buscar');
  value = output<string>();

}
