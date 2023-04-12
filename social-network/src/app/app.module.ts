import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './core/component/side-nav/side-nav.component';
import { NotificationListComponent } from './core/component/notification-list/notification-list.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';
import { NoAuthComponent } from './auth/no-auth/no-auth.component';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NotificationListComponent,
    NotFoundComponent,
    NoAuthComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
