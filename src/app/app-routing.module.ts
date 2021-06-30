import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';
import { TestComponent } from './components/test/test.component';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'Test',
    component: TestComponent,
    canDeactivate: [CanDeactivateGuardService]
  },
  {
    path: 'Bar',
    component: BarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
