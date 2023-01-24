import {Component, Input, OnInit} from '@angular/core';
import {QuestionI} from "../interfaces/question";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()  question?: QuestionI;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  deleteQuestion(): void {
    let questions = this.questionService.questionLit$.getValue();

    questions = questions.filter(
      (questionItem: QuestionI) => questionItem.id !== this.question?.id
    );

    this.questionService.questionLit$.next(questions);
  }
}
