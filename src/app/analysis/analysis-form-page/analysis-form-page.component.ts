import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AnalysisFormComponent } from '../analysis-form/analysis-form.component';
import { AnalysisActions } from '../state+/analysis.actions';

interface AnalysisFormConfig {
  from: number;
  to: number;
}

@Component({
  selector: 'app-analysis-form-page',
  template: `
    <div class="header">
      <button mat-raised-button (click)="test()">Submit</button>
      <i
        class="material-icons md-dark md-30"
        *ngIf="comparisionCount < config.to"
        (click)="addComparision()"
        >add_circle_outline</i
      >

      <i
        class="material-icons md-dark md-30"
        *ngIf="comparisionCount > config.from"
        (click)="removeComparision()"
        >remove_circle_outline</i
      >
    </div>
    <div class="container">
      <app-analysis-form *ngFor="let form of getArray()"></app-analysis-form>
    </div>
  `,
  styleUrls: ['./analysis-form-page.component.scss'],
})
export class AnalysisFormPageComponent implements OnInit {
  @ViewChildren(AnalysisFormComponent) forms: QueryList<AnalysisFormComponent>;
  @Input() comparisionCount: number;

  config: AnalysisFormConfig = {
    from: 1,
    to: 3,
  };

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  addComparision(): void {
    this.store.dispatch(AnalysisActions.addComparisionForm());
  }
  removeComparision(): void {
    this.store.dispatch(AnalysisActions.removeComparisionForm());
  }
  getArray(): any[] {
    return Array(this.comparisionCount);
  }
  test(): void {
    console.log(this.forms);
  }
}
