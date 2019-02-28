import { NgModule } from '@angular/core';
import { IconXCircle, IconSun, IconSearch } from 'angular-feather';
 
const icons = [
  IconXCircle,
  IconSun,
  IconSearch
];
 
@NgModule({
  exports: icons
})
export class IconsModule { }