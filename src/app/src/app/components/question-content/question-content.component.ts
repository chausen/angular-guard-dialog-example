import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  choose(choice: boolean): void {
    this.modalService.navigateAwaySelection$.next(choice);
  }

}
