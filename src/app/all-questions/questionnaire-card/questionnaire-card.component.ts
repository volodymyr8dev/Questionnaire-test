import {Component, Input, OnInit} from '@angular/core';
import {QuestionI} from "../../interfaces/question";
import {QuestionEnum} from "../../enum/question.enum";
import {QuestionService} from "../../question.service";

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss']
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() public question?: QuestionI;
  public isOpen: boolean = false;
  public type = 'radio'
  public answer = ''

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    if (this.question?.type === QuestionEnum.MULTIPLE){
      this.type = 'checkbox'
    }

    this.isOpen = this.question?.type === QuestionEnum.OPEN

    if ( this.question?.answer && !this.question?.isAnswered){
      this.question.answer = ''
    }

    this.answer = this.question?.answer || ''
  }

   submitCard() {
    let allQuestions = this.questionService.questionLit$.getValue()
    allQuestions =  allQuestions.filter(question=> question.id !== this.question?.id)

    if (this.question){
      this.question.isAnswered = !this.question.isAnswered;
      this.question.answer = this.answer;
      allQuestions.push(this.question)
    }

    this.questionService.questionLit$.next(allQuestions)
  }

   inputAnswer(answer: string) {
    this.answer = answer;
  }

   selectAnswer(option: string, optionEl: HTMLInputElement) {
    if (this.type === 'radio'){
      this.answer = option;
    }

    if (this.type === 'checkbox' && optionEl.checked){
      this.answer += option+ ',';
    }

    if (this.type === 'checkbox' && !optionEl.checked){
      this.answer = this.answer.split(',').filter(item=> item !== option).join(',')
    }
  }
}
