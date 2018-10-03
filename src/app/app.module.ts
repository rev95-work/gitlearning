import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustdirectDirective } from './custdirect.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgformComponent } from './ngform/ngform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { KavyaComponent } from './kavya/kavya.component';
import {HttpModule} from '@angular/http';
import { KavyaService } from './kavya/kavya.service';

@NgModule({
  declarations: [
    AppComponent,
    NgcontentComponent,
    DirectivesComponent,
    CustdirectDirective,
    ContactFormComponent,
    NgformComponent,
    ReactiveformComponent,
    KavyaComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [KavyaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
