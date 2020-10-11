import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HrmSharedModule } from 'app/shared/shared.module';
import { HrmCoreModule } from 'app/core/core.module';
import { HrmAppRoutingModule } from './app-routing.module';
import { HrmHomeModule } from './home/home.module';
import { HrmEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HrmSharedModule,
    HrmCoreModule,
    HrmHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HrmEntityModule,
    HrmAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class HrmAppModule {}
