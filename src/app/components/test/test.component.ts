import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeactivationGuarded } from 'src/app/services/can-deactivate-guard.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, DeactivationGuarded {

  constructor(private modalService: ModalService) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    this.modalService.open('guard-modal');
    return this.modalService.navigateAwaySelection$;
  }

  ngOnInit(): void {
  }

}
