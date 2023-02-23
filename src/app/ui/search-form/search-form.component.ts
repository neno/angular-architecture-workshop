import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();

  searchTerm = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
