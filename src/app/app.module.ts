import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsSectionComponent,
    WorkSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
