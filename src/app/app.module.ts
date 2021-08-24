import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './component/create/create.component';
import { UserState } from './states/user.state';
import { IndexComponent } from './component/index/index.component';

import { NgxsModule } from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FormComponent } from './component/form/form.component';
import { TodoState } from './states/todo.state';

@NgModule({
  declarations: [
    AppComponent,

    CreateComponent,
    IndexComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      UserState , TodoState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
