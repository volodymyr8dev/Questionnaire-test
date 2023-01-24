import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../interfaces/question";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  @Input() public questionList: Question[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
