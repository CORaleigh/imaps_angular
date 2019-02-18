import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatSelectModule, MatCheckboxModule, MatButtonToggleModule } from '@angular/material';
import { MapComponent } from './map/map.component';
import { PropertyComponent } from './property/property.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyInfoComponent } from './property-info/property-info.component';
import { PropertyResultsComponent } from './property-results/property-results.component';
import { ToolsComponent } from './tools/tools.component';
import { SketchToolComponent } from './sketch-tool/sketch-tool.component';
import { SelectToolComponent } from './select-tool/select-tool.component';
import { MeasureToolComponent } from './measure-tool/measure-tool.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { PrintToolComponent } from './print-tool/print-tool.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AppsComponent } from './apps/apps.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { AddressTableComponent } from './address-table/address-table.component';

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
    SelectToolComponent,
    MeasureToolComponent,
    PrintToolComponent,
    BookmarksComponent,
    AppsComponent,
    PhotoGalleryComponent,
    ServiceInfoComponent,
    AddressTableComponent
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
    MatButtonToggleModule,
    ColorPickerModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
