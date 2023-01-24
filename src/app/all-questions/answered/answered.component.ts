import {Component, Input, OnInit} from '@angular/core';
import {QuestionI} from "../../interfaces/question";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-answered',
  templateUrl: './answered.component.html',
  styleUrls: ['./answered.component.scss']
})
export class AnsweredComponent implements OnInit {
  public questionList: QuestionI[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.questionLit$.subscribe(list=> {
      this.questionList = list
      this.questionList = this.questionList.filter(quest =>  quest.isAnswered)
    })

  }

}
