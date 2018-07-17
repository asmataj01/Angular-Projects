import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatButtonModule, 
  MatCardModule,MatMenuModule, MatListModule } from '@angular/material';
import { UserComponent } from './components/user/user.component';
  
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const appRoutes : Routes = [
  { path:'', component:UserComponent},
  { path:'about', component:AboutComponent},
  { path:'contactus', component:ContactusComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
