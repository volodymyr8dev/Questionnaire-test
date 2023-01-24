import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {QuestionI} from "../interfaces/question";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions$: Observable<QuestionI[]> = new Observable<QuestionI[]>();

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions$ = this.questionService.questionLit$;
  }

}
