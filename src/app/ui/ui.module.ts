import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { DeflistComponent } from './deflist/deflist.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroPlusCircle, heroMinusCircle, heroMagnifyingGlass, heroArrowPath, heroPencil, heroTrash, heroXCircle } from '@ng-icons/heroicons/outline';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    TabsComponent,
    SearchFormComponent,
    CardComponent,
    ButtonComponent,
    DeflistComponent,
    IconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgIconsModule.withIcons({ heroPlusCircle, heroMinusCircle, heroMagnifyingGlass, heroArrowPath, heroPencil, heroTrash, heroXCircle }),
  ],
  exports: [
    TabsComponent,
    SearchFormComponent,
    CardComponent,
    ButtonComponent,
    DeflistComponent,
    IconComponent,
  ],
})
export class UiModule { }
