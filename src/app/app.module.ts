import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { MapComponent } from './map/map.component';
import { PropertyComponent } from './property/property.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyInfoComponent } from './property-info/property-info.component';
import { PropertyResultsComponent } from './property-results/property-results.component';
import { ToolsComponent } from './tools/tools.component';
import { SketchToolComponent } from './sketch-tool/sketch-tool.component';
import { SelectToolComponent } from './select-tool/select-tool.component';
import { MccColorPickerModule } from 'material-community-components';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    PropertyComponent,
    PropertySearchComponent,
    PropertyInfoComponent,
    PropertyResultsComponent,
    ToolsComponent,
    SketchToolComponent,
    SelectToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MccColorPickerModule.forRoot({
      used_colors: ['#000000', '#123456', '#777666']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
