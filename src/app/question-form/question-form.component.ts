import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {QuestionI} from "../interfaces/question";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {QuestionEnum} from "../enum/question.enum";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @ViewChild('chipsetInput')  chipsetInput!: ElementRef;
  @Input()  buttonType: string = 'save';
  @Output()  onFormValue: EventEmitter<QuestionI> =
    new EventEmitter<QuestionI>();
   questionTypesList = Object.values(QuestionEnum);
   currentType: string = QuestionEnum.OPEN;
   isMenuOpen: boolean = false;
   isTypeOpen: boolean = false;
   form!: FormGroup;
   options: string[] = [];
   currentInputValue: string = '';
   id: number = 0;

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private questionService: QuestionService) { }

  ngOnInit() {
    this.buildForm();
    this.isTypeOpen = this.currentType !== QuestionEnum.OPEN;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      question: ['', Validators.required],
      type: ['', [Validators.required]],
      correctAnswer: ['', Validators.required],
    });

    this.form.get('type')?.setValue(this.currentType);

    if (this.buttonType.toLowerCase() === 'edit') {
      this.editQuestion();
    }
  }

  private editQuestion(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('questionId');
    let question: QuestionI | undefined;
    if (id) {
      question = this.questionService.questionLit$
        .getValue()
        .find((question: QuestionI) => question.id === +id);
    }

    if (!question) {
      return;
    }

    this.form.patchValue({
      type: question.type,
      question: question.question,
      answer: question.correctAnswer,
      isAnswer: false
    });

    this.id = question.id;
    this.options = question.answerOptions;
    this.isTypeOpen = question.type !== QuestionEnum.OPEN;
  }

   selectType(type: string): void {
    this.currentType = type;
    this.form.get('type')?.setValue(this.currentType);
    this.isTypeOpen = this.currentType !== QuestionEnum.OPEN;
  }

   inputOptions(value: string): void {
    this.currentInputValue = value;
  }

   removeOption(option: string): void {
    this.options = this.options.filter(
      (optionItem: string) => optionItem !== option
    );
  }

   addChip(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !!this.currentInputValue) {
      this.options.push(this.currentInputValue);
      this.currentInputValue = this.chipsetInput.nativeElement.value = '';
    }
  }

   submitForm(): void {
    const isEdited = this.buttonType.toLowerCase() === 'edit';

    if (!this.isTypeOpen) {
      this.options = [];
    }

    if (!isEdited) {
      this.id = this.questionService.questionLit$.getValue().length+1
    }

    const questionData = {
      id: this.id,
      type: this.currentType,
      answerOptions: this.options,
      date: new Date(),
      isAnswered: false,
      isEdited,
      ...this.form.value,
    };

    let questionsList: QuestionI[] =
      this.questionService.questionLit$.getValue();
    questionsList = this.replaceEditedQuestion(questionsList, questionData);

    this.questionService.questionLit$.next(questionsList);
    this.onFormValue.emit(questionData);
    this.router.navigate(['/']);
  }

  replaceEditedQuestion(
    allQuestions: QuestionI[],
    editedQuestion: QuestionI
  ): QuestionI[] {
    allQuestions = allQuestions.filter(
      (question: QuestionI) => question.id !== editedQuestion.id
    );

    allQuestions.unshift(editedQuestion);
    return allQuestions;
  }
}
