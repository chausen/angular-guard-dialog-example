import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BarComponent } from './components/bar/bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuestionContentComponent } from './src/app/components/question-content/question-content.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BarComponent,
    ModalComponent,
    QuestionContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
