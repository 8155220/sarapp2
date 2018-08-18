import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { VoluntariosComponent } from './components/package1/voluntarios/voluntarios.component';
import { VoluntarioService } from './services/voluntario.service';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    VoluntariosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'SARFAB'),
    AngularFirestoreModule
  ],
  providers: [VoluntarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
