import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { DeflistComponent } from './deflist/deflist.component';



@NgModule({
  declarations: [
    TabsComponent,
    SearchFormComponent,
    CardComponent,
    ButtonComponent,
    DeflistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TabsComponent,
    SearchFormComponent,
    CardComponent,
    ButtonComponent,
    DeflistComponent
  ],
})
export class UiModule { }
