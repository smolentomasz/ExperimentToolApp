import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { keyBy } from 'lodash';
import { AnalysisFormComponent } from '../analysis-form/analysis-form.component';
import { AnalysisActions } from '../state+/analysis.actions';
import { RecordRequest } from '../state+/analysis.model';

interface AnalysisFormConfig {
  from: number;
  to: number;
}

@Component({
  selector: 'app-analysis-form-page',
  template: `
    <div class="container">
      <app-analysis-form *ngFor="let form of getArray(); let i = index" [isFirst]="!!!i"></app-analysis-form>
      <div class='icon-container'> <i
        class="material-icons md-dark md-30 analysis-icon"
        *ngIf="comparisionCount < config.to"
        (click)="addComparision()"
        >add_circle_outline</i
      >

      <i
        class="material-icons md-dark md-30 analysis-icon"
        *ngIf="comparisionCount > config.from"
        (click)="removeComparision()"
        >remove_circle_outline</i
      ></div>
    </div>
    <div class="footer">
    <button mat-raised-button (click)="onSubmit()" [disabled]="!isValid()">Analyze</button>
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
  isValid(): boolean{
    return this.forms?.toArray().every(form => form.selectDataForm.valid);
  }
  onSubmit(): void {
    const newRecordRequest = new FormData();
    const recordArray: Array<RecordRequest> = [];
    let iterator = 1;
    this.forms.forEach((children) => {
      if (children.selectDataForm.valid) {
        const request: RecordRequest = {
          testId: children.selectDataForm.controls.researchNameControl.value,
          attemptNumber:
            children.selectDataForm.controls.researchAttemptControl.value,
        };
        recordArray.push(request);
        if (iterator === this.forms.toArray().length) {
          newRecordRequest.append('requestRecords', JSON.stringify(recordArray));
          this.store.dispatch(
            AnalysisActions.getResultsForAnalyse({
              recordList: newRecordRequest,
              researchType: children.selectDataForm.controls.researchTypeControl.value
            })
          );
        }
        iterator++;
      }
    });
  }
}
