import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icon-module/icon-module.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { RegistryComponent } from './registry/registry.component';
import { TotalAmountPipe } from './total-amount.pipe';
import { SearchPipePipe } from './search-pipe.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ClaimListComponent,
    RegistryComponent,
    TotalAmountPipe,
    SearchPipePipe,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IconsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SnotifyModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
