import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalysisModule } from './analysis/analysis.module';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ManageModule } from './manage/manage.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnalysisModule,
    HeaderModule,
    SidenavModule,
    ManageModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'ExperimentTool',
      actionSanitizer: (action: any) =>
        action.type === '[Analysis] Results for analyze received' &&
        action.resultsForAnalyse
          ? {
              type: '[Analysis] Results for analyze received',
              data: '<<LONG_BLOB>>',
            }
          : action,
      stateSanitizer: (state: any) => {
        if (state?.analysis?.other) {
          return {
            ...state,
            analysis: {
              ...state.analysis,
              other: {
                ...state.analysis.other,
                resultsForAnalyse: '<<LONG_BLOB>>',
              },
            },
          };
        }
      },
    }),
    EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
