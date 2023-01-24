import { Component, OnInit } from '@angular/core';
import {QuestionI} from "../../interfaces/question";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-unanswered',
  templateUrl: './unanswered.component.html',
  styleUrls: ['./unanswered.component.scss']
})
export class UnansweredComponent implements OnInit {
  public questionList: QuestionI[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.questionLit$.subscribe(list=> {
      this.questionList = list
      this.questionList = this.questionList.filter(quest =>  !quest.isAnswered)
    })

  }
}
