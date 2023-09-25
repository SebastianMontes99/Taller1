import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    models,
    MoviesTableComponent,
    HomeViewComponent
  ],
  imports: [
    MatIconModule,
    FormsModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
