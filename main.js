(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet><app-nav></app-nav></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'imaps';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _property_search_property_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./property-search/property-search.component */ "./src/app/property-search/property-search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _property_info_property_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./property-info/property-info.component */ "./src/app/property-info/property-info.component.ts");
/* harmony import */ var _property_results_property_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./property-results/property-results.component */ "./src/app/property-results/property-results.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _sketch_tool_sketch_tool_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sketch-tool/sketch-tool.component */ "./src/app/sketch-tool/sketch-tool.component.ts");
/* harmony import */ var _select_tool_select_tool_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select-tool/select-tool.component */ "./src/app/select-tool/select-tool.component.ts");
/* harmony import */ var material_community_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! material-community-components */ "./node_modules/material-community-components/fesm5/material-community-components.js");
/* harmony import */ var _meaasure_tool_meaasure_tool_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./meaasure-tool/meaasure-tool.component */ "./src/app/meaasure-tool/meaasure-tool.component.ts");
/* harmony import */ var _measure_tool_measure_tool_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./measure-tool/measure-tool.component */ "./src/app/measure-tool/measure-tool.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _property_property_component__WEBPACK_IMPORTED_MODULE_11__["PropertyComponent"],
                _property_search_property_search_component__WEBPACK_IMPORTED_MODULE_12__["PropertySearchComponent"],
                _property_info_property_info_component__WEBPACK_IMPORTED_MODULE_14__["PropertyInfoComponent"],
                _property_results_property_results_component__WEBPACK_IMPORTED_MODULE_15__["PropertyResultsComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_16__["ToolsComponent"],
                _sketch_tool_sketch_tool_component__WEBPACK_IMPORTED_MODULE_17__["SketchToolComponent"],
                _select_tool_select_tool_component__WEBPACK_IMPORTED_MODULE_18__["SelectToolComponent"],
                _meaasure_tool_meaasure_tool_component__WEBPACK_IMPORTED_MODULE_20__["MeaasureToolComponent"],
                _measure_tool_measure_tool_component__WEBPACK_IMPORTED_MODULE_21__["MeasureToolComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"],
                material_community_components__WEBPACK_IMPORTED_MODULE_19__["MccColorPickerModule"].forRoot({
                    used_colors: ['#000000', '#123456', '#777666']
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import 'https://js.arcgis.com/4.10/esri/themes/dark/main.css';\n/* import the required JSAPI css */\n/*@import 'https://js.arcgis.com/4.10/esri/css/main.css';*/\n.esri-view {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSw4REFBOEQ7QUFGOUQsa0NBQWtDO0FBQ2xDLDBEQUEwRDtBQUcxRDtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB0aGUgcmVxdWlyZWQgSlNBUEkgY3NzICovXG4vKkBpbXBvcnQgJ2h0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjEwL2VzcmkvY3NzL21haW4uY3NzJzsqL1xuQGltcG9ydCAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTAvZXNyaS90aGVtZXMvZGFyay9tYWluLmNzcyc7XG5cbi5lc3JpLXZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapViewNode></div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../property.service */ "./src/app/property.service.ts");
/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/





var MapComponent = /** @class */ (function () {
    function MapComponent(shared, property) {
        this.shared = shared;
        this.property = property;
        this.mapLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @private _zoom sets map zoom
         * @private _center sets map center
         * @private _basemap sets type of map
         */
        this._id = '4b3cce57b4dd4efa977d559402ff9fcf';
        this._portalUrl = 'https://maps.raleighnc.gov/portal';
        this._zoom = 10;
        this._center = [0.1278, 51.5074];
        this._basemap = 'streets';
    }
    Object.defineProperty(MapComponent.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (zoom) {
            this._zoom = zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (center) {
            this._center = center;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "basemap", {
        get: function () {
            return this._basemap;
        },
        set: function (basemap) {
            this._basemap = basemap;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.initializeMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, WebMap, MapView, config, SimpleFillSymbol_1, Graphic_1, GraphicsLayer_1, ScaleBar_1, Fullscreen_1, Track_1, Compass_1, BasemapGallery_1, LayerList_1, Search_1, Expand_1, mapProperties, map, mapViewProperties, mapView_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])([
                                'esri/WebMap',
                                'esri/views/MapView',
                                'esri/config',
                                'esri/symbols/SimpleFillSymbol',
                                'esri/Graphic',
                                'esri/layers/GraphicsLayer',
                                "esri/widgets/ScaleBar",
                                "esri/widgets/Fullscreen",
                                "esri/widgets/Track",
                                "esri/widgets/Compass",
                                "esri/widgets/BasemapGallery",
                                "esri/widgets/LayerList",
                                "esri/widgets/Search",
                                "esri/widgets/Expand"
                            ])];
                    case 1:
                        _a = _b.sent(), WebMap = _a[0], MapView = _a[1], config = _a[2], SimpleFillSymbol_1 = _a[3], Graphic_1 = _a[4], GraphicsLayer_1 = _a[5], ScaleBar_1 = _a[6], Fullscreen_1 = _a[7], Track_1 = _a[8], Compass_1 = _a[9], BasemapGallery_1 = _a[10], LayerList_1 = _a[11], Search_1 = _a[12], Expand_1 = _a[13];
                        config.portalUrl = this._portalUrl;
                        mapProperties = {
                            portalItem: {
                                id: this._id
                            }
                        };
                        map = new WebMap(mapProperties);
                        mapViewProperties = {
                            container: this.mapViewEl.nativeElement,
                            map: map
                        };
                        mapView_1 = new MapView(mapViewProperties);
                        // All resources in the MapView and the map have loaded.
                        // Now execute additional processes
                        mapView_1.when(function () {
                            _this.mapLoaded.emit(true);
                            var scale = new ScaleBar_1({ view: mapView_1 });
                            mapView_1.ui.add(scale, "bottom-left");
                            var full = new Fullscreen_1({ view: mapView_1 });
                            mapView_1.ui.add(full, "top-left");
                            var track = new Track_1({ view: mapView_1 });
                            mapView_1.ui.add(track, "top-left");
                            var compass = new Compass_1({ view: mapView_1 });
                            mapView_1.ui.add(compass, "top-left");
                            var searchWidget = new Search_1({
                                view: mapView_1
                            });
                            // Adds the search widget below other elements in
                            // the top left corner of the view
                            mapView_1.ui.add(searchWidget, "top-right");
                            var basemap = new BasemapGallery_1({ view: mapView_1,
                                container: document.createElement("div"),
                            });
                            var expand = new Expand_1({
                                view: mapView_1,
                                expandIconClass: "esri-icon-basemap",
                                //@ts-ignore
                                content: basemap.domNode
                            });
                            mapView_1.ui.add(expand, "top-right");
                            var layerList = new LayerList_1({ view: mapView_1,
                                container: document.createElement("div"),
                            });
                            expand = new Expand_1({
                                view: mapView_1,
                                expandIconClass: "esri-icon-layer-list",
                                //@ts-ignore
                                content: layerList.domNode
                            });
                            mapView_1.ui.add(expand, "top-right");
                            _this.shared.mapView.next(mapView_1);
                            var multiGraphics = new GraphicsLayer_1({ title: 'multiGraphics' });
                            var singleGraphics = new GraphicsLayer_1({ title: 'singleGraphics' });
                            mapView_1.map.addMany([multiGraphics, singleGraphics]);
                            mapView_1.map.allLayers.forEach(function (layer) {
                                if (layer.title.indexOf('Property') > -1) {
                                    mapView_1.whenLayerView(layer).then(function (layerView) {
                                        _this._propertyLayer = layerView.layer;
                                        _this.shared.propertyIds.subscribe(function (ids) {
                                            if (ids.length > 0) {
                                                layerView.layer.queryFeatures({ objectIds: ids, returnGeometry: true, outFields: ['*'], outSpatialReference: mapView_1.spatialReference }).then(function (results) {
                                                    mapView_1.goTo({ target: results.features }, { duration: 2000 });
                                                    multiGraphics.removeAll();
                                                    singleGraphics.removeAll();
                                                    results.features.forEach(function (feature) {
                                                        var g = new Graphic_1();
                                                        g.geometry = feature.geometry;
                                                        var symbol = new SimpleFillSymbol_1({
                                                            color: [51, 51, 204, 0],
                                                            style: "solid",
                                                            outline: {
                                                                color: "yellow",
                                                                width: 2
                                                            }
                                                        });
                                                        g.symbol = symbol;
                                                        multiGraphics.add(g);
                                                    });
                                                });
                                            }
                                        });
                                        _this.shared.propertyInfo.subscribe(function (info) {
                                            if (info) {
                                                _this.property.getProperties('https://maps.raleighnc.gov/arcgis/rest/services/Property/Property/FeatureServer/1', info.attributes.OBJECTID, 0).subscribe(function (result) {
                                                    if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                                                        layerView.layer.queryFeatures({ objectIds: result.relatedRecordGroups[0].relatedRecords[0].attributes.OBJECTID, returnGeometry: true, outFields: ['*'], outSpatialReference: mapView_1.spatialReference }).then(function (results) {
                                                            mapView_1.goTo({ target: results.features }, { duration: 2000 });
                                                            var g = new Graphic_1();
                                                            g.geometry = results.features[0].geometry;
                                                            var symbol = new SimpleFillSymbol_1({
                                                                color: [51, 51, 204, 0],
                                                                style: "solid",
                                                                outline: {
                                                                    color: "red",
                                                                    width: 2
                                                                }
                                                            });
                                                            g.symbol = symbol;
                                                            singleGraphics.removeAll();
                                                            singleGraphics.add(g);
                                                            mapView_1.map.reorder(mapView_1.map.findLayerById('singleGraphics'), 0);
                                                            mapView_1.map.reorder(mapView_1.map.findLayerById('multiGraphics'), 1);
                                                            _this.shared.selectedGraphic.next(g);
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                            });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeMap();
        this.shared.sketchEl.subscribe(function (el) {
            if (el) {
                _this.sketchEl = el;
            }
        });
        this.shared.selectEl.subscribe(function (el) {
            if (el) {
                _this.selectEl = el;
            }
        });
        this.shared.bufferDistance.subscribe(function (distance) {
            _this.bufferDistance = distance;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "mapLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapViewNode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapComponent.prototype, "mapViewEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], MapComponent.prototype, "zoom", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], MapComponent.prototype, "center", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], MapComponent.prototype, "basemap", null);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/meaasure-tool/meaasure-tool.component.css":
/*!***********************************************************!*\
  !*** ./src/app/meaasure-tool/meaasure-tool.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWFzdXJlLXRvb2wvbWVhYXN1cmUtdG9vbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/meaasure-tool/meaasure-tool.component.html":
/*!************************************************************!*\
  !*** ./src/app/meaasure-tool/meaasure-tool.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"distance\">Distance</mat-button-toggle>\n  <mat-button-toggle value=\"area\">Area</mat-button-toggle>\n  <mat-button-toggle value=\"coordinates\">Coordinates</mat-button-toggle>\n</mat-button-toggle-group>"

/***/ }),

/***/ "./src/app/meaasure-tool/meaasure-tool.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/meaasure-tool/meaasure-tool.component.ts ***!
  \**********************************************************/
/*! exports provided: MeaasureToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeaasureToolComponent", function() { return MeaasureToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var MeaasureToolComponent = /** @class */ (function () {
    function MeaasureToolComponent(shared) {
        this.shared = shared;
    }
    MeaasureToolComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, AreaMeasurement2D, DistanceMeasurement2D, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])([
                                'esri/widgets/AreaMeasurement2D',
                                'esri/widgets/DistanceMeasurement2D'
                            ])];
                    case 1:
                        _a = _b.sent(), AreaMeasurement2D = _a[0], DistanceMeasurement2D = _a[1];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MeaasureToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.mapView.subscribe(function (mapView) {
            if (mapView) {
                _this._mapView = mapView;
                _this.initialize();
            }
        });
    };
    MeaasureToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meaasure-tool',
            template: __webpack_require__(/*! ./meaasure-tool.component.html */ "./src/app/meaasure-tool/meaasure-tool.component.html"),
            styles: [__webpack_require__(/*! ./meaasure-tool.component.css */ "./src/app/meaasure-tool/meaasure-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], MeaasureToolComponent);
    return MeaasureToolComponent;
}());



/***/ }),

/***/ "./src/app/measure-tool/measure-tool.component.css":
/*!*********************************************************!*\
  !*** ./src/app/measure-tool/measure-tool.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".esri-area-measurement-3d{\n    visibility: hidden;\n}\n\n.esri-coordinate-conversion {\n    visibility: hidden;\n    width: 100%;\n}\n\n.esri-direct-line-measurement-3d {\n    visibility: hidden;\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhc3VyZS10b29sL21lYXN1cmUtdG9vbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7O0FBR3RCIiwiZmlsZSI6InNyYy9hcHAvbWVhc3VyZS10b29sL21lYXN1cmUtdG9vbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcmktYXJlYS1tZWFzdXJlbWVudC0zZHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5lc3JpLWNvb3JkaW5hdGUtY29udmVyc2lvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXNyaS1kaXJlY3QtbGluZS1tZWFzdXJlbWVudC0zZCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/measure-tool/measure-tool.component.html":
/*!**********************************************************!*\
  !*** ./src/app/measure-tool/measure-tool.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" (change)=\"toolChanged($event)\">\n  <mat-button-toggle value=\"distance\">Distance</mat-button-toggle>\n  <mat-button-toggle value=\"area\">Area</mat-button-toggle>\n  <mat-button-toggle value=\"coordinates\">Coordinates</mat-button-toggle>\n</mat-button-toggle-group>\n<div #lineDiv></div>\n\n<div #areaDiv></div>\n\n<div #coordDiv></div>\n"

/***/ }),

/***/ "./src/app/measure-tool/measure-tool.component.ts":
/*!********************************************************!*\
  !*** ./src/app/measure-tool/measure-tool.component.ts ***!
  \********************************************************/
/*! exports provided: MeasureToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureToolComponent", function() { return MeasureToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var MeasureToolComponent = /** @class */ (function () {
    function MeasureToolComponent(shared) {
        this.shared = shared;
        this.group = {};
        this.selected = 'distance';
        this.toolLoaded = false;
    }
    MeasureToolComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, AreaMeasurement2D, DistanceMeasurement2D, CoordinateConversion, cc, line, area, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])([
                                'esri/widgets/AreaMeasurement2D',
                                'esri/widgets/DistanceMeasurement2D',
                                'esri/widgets/CoordinateConversion'
                            ])];
                    case 1:
                        _a = _b.sent(), AreaMeasurement2D = _a[0], DistanceMeasurement2D = _a[1], CoordinateConversion = _a[2];
                        cc = new CoordinateConversion({ view: this._mapView, container: this.coordEl.nativeElement });
                        line = new DistanceMeasurement2D({ view: this._mapView, container: this.areaEl.nativeElement });
                        area = new AreaMeasurement2D({ view: this._mapView, container: this.lineEl.nativeElement });
                        setTimeout(function () {
                            _this.toolLoaded = true;
                        }, 1000);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MeasureToolComponent.prototype.toolChanged = function (event) {
        this.selected = event.value;
        var selectedClass = '';
        var hiddenClasses = [];
        switch (event.value) {
            case 'area':
                selectedClass = 'esri-area-measurement-3d';
                hiddenClasses = ['esri-direct-line-measurement-3d', 'esri-coordinate-conversion'];
                break;
            case 'distance':
                selectedClass = 'esri-direct-line-measurement-3d';
                hiddenClasses = ['esri-area-measurement-3d', 'esri-coordinate-conversion'];
                break;
            case 'coordinates':
                selectedClass = 'esri-coordinate-conversion';
                hiddenClasses = ['esri-direct-line-measurement-3d', 'esri-area-measurement-3d'];
                break;
        }
        document.getElementsByClassName(selectedClass)[0].setAttribute('style', 'visibility: visible;display:block;');
        hiddenClasses.forEach(function (c) {
            document.getElementsByClassName(c)[0].setAttribute('style', 'visibility: hidden;display:none;');
        });
    };
    MeasureToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.mapView.subscribe(function (mapView) {
            if (mapView) {
                _this._mapView = mapView;
                _this.initialize();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('areaDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MeasureToolComponent.prototype, "areaEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MeasureToolComponent.prototype, "lineEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coordDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MeasureToolComponent.prototype, "coordEl", void 0);
    MeasureToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measure-tool',
            template: __webpack_require__(/*! ./measure-tool.component.html */ "./src/app/measure-tool/measure-tool.component.html"),
            styles: [__webpack_require__(/*! ./measure-tool.component.css */ "./src/app/measure-tool/measure-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], MeasureToolComponent);
    return MeasureToolComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: calc(100% - 64px);\n\n}\n\n.sidenav {\n  max-width: 90%;\n  top:64px !important;\n  padding:1em;  \n}\n\n.searchnav {\n  width: 400px;\n\n}\n\n.toolnav {\n  width: 400px;\n\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-tab-group {\n  height: calc(100% - 70px);\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG5cbn1cblxuLnNpZGVuYXYge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgdG9wOjY0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzoxZW07ICBcbn1cblxuLnNlYXJjaG5hdiB7XG4gIHdpZHRoOiA0MDBweDtcblxufVxuXG4udG9vbG5hdiB7XG4gIHdpZHRoOiA0MDBweDtcblxufVxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG59XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n\n  <button\n    type=\"button\"\n    aria-label=\"Toggle sidenav\"\n    mat-icon-button\n    (click)=\"tooldrawer.toggle()\" position=\"end\"\n   >\n    <mat-icon aria-label=\"Side nav toggle icon\">build</mat-icon>\n  </button>    \n  <span>iMAPS</span>\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <button\n    type=\"button\"\n    aria-label=\"Toggle sidenav\"\n    mat-icon-button\n    (click)=\"searchdrawer.toggle()\"\n   >\n    <mat-icon aria-label=\"Side nav toggle icon\">search</mat-icon>\n  </button>\n\n\n  <!-- <button mat-button *ngIf=\"!loggedIn\" (click)=\"logInClicked()\">Login</button>\n  <button mat-button *ngIf=\"loggedIn\" (click)=\"logOutClicked()\">Logout</button> -->\n</mat-toolbar>\n<mat-sidenav-container class=\"sidenav-container dark-theme\">\n    <mat-sidenav #tooldrawer class=\"toolnav sidenav\" fixedInViewport=\"true\"\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n        [opened]=\"!(isHandset$ | async)\"\n        position=\"start\">\n        <!-- <app-property-search></app-property-search>\n        <app-property></app-property> -->\n          <app-tools></app-tools>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <app-map\n        [center]=\"mapCenter\"\n        [basemap]=\"basemapType\"\n        [zoom]=\"mapZoomLevel\">\n      </app-map>\n    </mat-sidenav-content>\n    <mat-sidenav #searchdrawer class=\"searchnav sidenav\" fixedInViewport=\"true\"\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n        [opened]=\"!(isHandset$ | async)\"\n        position=\"end\">\n        <app-property-search></app-property-search>\n        <app-property></app-property>\n   \n    </mat-sidenav>    \n  </mat-sidenav-container>\n\n  "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.mapCenter = [-122.4194, 37.7749];
        this.basemapType = 'satellite';
        this.mapZoomLevel = 12;
    }
    // See app.component.html
    NavComponent.prototype.mapLoadedEvent = function (status) {
        console.log('The map loaded: ' + status);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/property-info/property-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/property-info/property-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".infoContainer {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n    justify-content: left;\n    margin: 0.25em;\n  }\n\n.col {\n    flex: 1;\n    margin-right: 20px;\n  }\n\n.col:last-child {\n    margin-right: 0;\n  }\n\n.bold {\n      font-weight: bold;\n  }\n\n.mat-card {\n      margin-left: 4px;\n      margin-right: 4px;\n      margin-top: 1em;\n      margin-bottom: 1em;\n  }\n\n.mat-card-image {\n      max-height: 200px;\n      width: auto;\n  }\n\n.image-container {\n    text-align: center;\n    width: 100%;\n    padding: 1em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHktaW5mby9wcm9wZXJ0eS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxPQUFPO0lBQ1Asa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFQTtNQUNJLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtFQUN0Qjs7QUFFQTtNQUNJLGlCQUFpQjtNQUNqQixXQUFXO0VBQ2Y7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWluZm8vcHJvcGVydHktaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gIH1cbiAgXG4gIC5jb2wge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY29sOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICBcbiAgLmJvbGQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubWF0LWNhcmQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLm1hdC1jYXJkLWltYWdlIHtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/property-info/property-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/property-info/property-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"infoContainer\">\n        <mat-form-field>\n                <mat-select placeholder=\"Scroll To Section\" (selectionChange)=\"scroll($event.value)\">\n                  <mat-option *ngFor=\"let section of sections\" [value]=\"section\">\n                    {{section}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>  \n        <div #Property>\n\n \n        <mat-card  class=\"example-card\">\n                <mat-card-header>\n                  <mat-card-title>Property</mat-card-title>\n                </mat-card-header>\n                <div class=\"image-container\" *ngIf=\"_photos.length > 0\">\n                    <img mat-card-image src=\"http://services.wakegov.com/realestate/photos/mvideo/{{_photos[0].attributes.IMAGEDIR}}/{{_photos[0].attributes.IMAGENAME}}\">\n                </div>\n\n                <mat-card-content>\n                    <div class=\"row\" *ngIf=\"_info\">\n                        <div class=\"col\">\n                            <div class=\"row bold\">\n                                PIN\n                            </div>\n                            <div class=\"row\">\n                                {{_info.attributes.PIN_NUM}} <span *ngIf=\"_info.attributes.PIN_EXT != '000'\"> _info.attributes.PIN_EXT</span>\n                            </div>                                                                                                                         \n                        </div>\n                        <div class=\"col\">\n                            <div class=\"row bold\">\n                                Real Estate ID\n                            </div>\n                            <div class=\"row\">\n                                {{_info.attributes.REID}}\n                            </div>          \n                        </div>                    \n                    </div>\n                    <div class=\"row\" *ngIf=\"_info\">\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        Site Address\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.SITE_ADDRESS}}\n                                    </div>        \n                                </div>\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        City\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.CITY_DECODE}}\n                                    </div>        \n                                </div>               \n                    </div>\n                    <div class=\"row\" *ngIf=\"_info\">\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        Township\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.TOWNSHIP_DECODE}}\n                                    </div>        \n                                </div>\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        Jurisdiction\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.PLANNING_JURISDICTION}}\n                                    </div>        \n                                </div>               \n                    </div>           \n                    <div class=\"row\" *ngIf=\"_info\">\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        Map Name\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.MAP_NAME}}\n                                    </div>        \n                                </div>\n                            <div class=\"col\">\n                                    <div class=\"row bold\">\n                                        Description\n                                    </div>\n                                    <div class=\"row\">\n                                        {{_info.attributes.PROPDESC}}\n                                    </div>        \n                                </div>               \n                    </div>                                \n                </mat-card-content>\n                <mat-card-actions *ngIf=\"_deeds.length > 0\">\n                        <button mat-button><a href=\"https://coraleigh.github.io/mail-label-generator/pin/{{_info.attributes.PIN_NUM}}\" target=\"_blank\">Generate Mailing Labels</a></button>\n                      </mat-card-actions>                \n              </mat-card>    \n            </div>  \n    <mat-card #Ownership class=\"example-card\">\n        <mat-card-header>\n          <mat-card-title>Ownership</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <div class=\"row\" *ngIf=\"_info\">\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                        Owner\n                    </div>\n                    <div class=\"row\">\n                        {{_info.attributes.OWNER}}\n                    </div>                                                                                                                         \n                </div>\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                        Mailing Address\n                    </div>\n                    <div class=\"row\">\n                        {{_info.attributes.ADDR1}}\n                    </div>       \n                    <div class=\"row\">\n                        {{_info.attributes.ADDR2}}\n                    </div>       \n                    <div class=\"row\" *ngIf=\"_info.attributes.ADDR3\">\n                        {{_info.attributes.ADDR3}}\n                    </div>       \n                </div>                    \n            </div>\n            <div class=\"row\" *ngIf=\"_info\">\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                        Sale Price\n                    </div>\n                    <div class=\"row\">\n                        {{_info.attributes.TOTSALPRICE | currency}}\n                    </div>        \n                </div>\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                        Date Sold\n                    </div>\n                    <div class=\"row\">\n                        {{_info.attributes.SALE_DATE | date}}\n                    </div>        \n                </div>                    \n            </div>\n        </mat-card-content>\n      </mat-card>\n      <div #Deeds>\n      <mat-card #Deeds class=\"example-card\" *ngIf=\"_deeds.length > 0\">\n            <mat-card-header>\n              <mat-card-title>Deeds</mat-card-title>\n            </mat-card-header>      \n      <mat-card-content>\n          <div  *ngFor=\"let deed of _deeds\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                        Book\n                    </div>\n                    <div class=\"row\">\n                        {{deed.attributes.DEED_BOOK}} \n                    </div>                                                                                                                         \n                </div>\n                <div class=\"col\">\n                    <div class=\"row bold\">\n                    Page\n                    </div>\n                    <div class=\"row\">\n                    {{deed.attributes.DEED_PAGE}} \n                    </div>          \n                </div>     \n                <div class=\"col\">\n                        <div class=\"row bold\">\n                        Date\n                        </div>\n                        <div class=\"row\">\n                        {{deed.attributes.DEED_DATE | date}} \n                        </div>          \n                    </div>                                                        \n            </div>\n       \n        </div>            \n        </mat-card-content>      \n        <mat-card-actions *ngIf=\"_deeds.length > 0\">\n                <button mat-button *ngIf=\"_deeds[0].attributes.DEED_DOC_NUM\"><a href=\"http://services.wakegov.com/booksweb/pdfview.aspx?docid={{_deeds[0].attributes.DEED_DOC_NUM}}&RecordDate=\" target=\"_blank\">View Deed</a></button>\n                <button mat-button *ngIf=\"_deeds[0].attributes.BOM_DOC_NUM\"><a href=\"http://services.wakegov.com/booksweb/pdfview.aspx?docid={{_deeds[0].attributes.BOM_DOC_NUM}}&RecordDate=\" target=\"_blank\">View Plat</a></button>\n              </mat-card-actions>\n        </mat-card>     \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/property-info/property-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/property-info/property-info.component.ts ***!
  \**********************************************************/
/*! exports provided: PropertyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyInfoComponent", function() { return PropertyInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var PropertyInfoComponent = /** @class */ (function () {
    function PropertyInfoComponent(shared) {
        this.shared = shared;
        this.sections = ['Property', 'Ownership', 'Deeds'];
    }
    PropertyInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.propertyInfo.subscribe(function (info) {
            if (info) {
                _this._info = info;
            }
        });
        this.shared.photos.subscribe(function (photos) {
            if (photos) {
                _this._photos = photos;
            }
        });
        this.shared.deeds.subscribe(function (deeds) {
            if (deeds) {
                _this._deeds = deeds;
            }
        });
    };
    PropertyInfoComponent.prototype.scroll = function (el) {
        if (el === 'Property') {
            this.propertyEl.nativeElement.scrollIntoView();
        }
        else if (el === 'Ownership') {
            this.ownerEl.nativeElement.scrollIntoView();
        }
        else if (el === 'Deeds') {
            this.deedEl.nativeElement.scrollIntoView();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Property'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PropertyInfoComponent.prototype, "propertyEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Ownership'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PropertyInfoComponent.prototype, "ownerEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Deeds'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PropertyInfoComponent.prototype, "deedEl", void 0);
    PropertyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-info',
            template: __webpack_require__(/*! ./property-info.component.html */ "./src/app/property-info/property-info.component.html"),
            styles: [__webpack_require__(/*! ./property-info.component.css */ "./src/app/property-info/property-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], PropertyInfoComponent);
    return PropertyInfoComponent;
}());



/***/ }),

/***/ "./src/app/property-results/property-results-datasource.ts":
/*!*****************************************************************!*\
  !*** ./src/app/property-results/property-results-datasource.ts ***!
  \*****************************************************************/
/*! exports provided: PropertyResultsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResultsDataSource", function() { return PropertyResultsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




// TODO: replace this with real data from your application
var EXAMPLE_DATA = [];
/**
 * Data source for the PropertyResults view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var PropertyResultsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PropertyResultsDataSource, _super);
    function PropertyResultsDataSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    PropertyResultsDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    PropertyResultsDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    PropertyResultsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    PropertyResultsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'PIN_NUM': return compare(a.PIN_NUM, b.PIN_NUM, isAsc);
                case 'PIN_EXT': return compare(a.PIN_EXT, b.PIN_EXT, isAsc);
                case 'OWNER': return compare(a.OWNER, b.OWNER, isAsc);
                case 'SITE_ADDRESS': return compare(a.SITE_ADDRESS, b.SITE_ADDRESS, isAsc);
                default: return 0;
            }
        });
    };
    return PropertyResultsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/property-results/property-results.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/property-results/property-results.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n  height: 100%;\n}\n.mat-paginator-sticky {\n  bottom: 0px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 10;\n}\n.table-container {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHktcmVzdWx0cy9wcm9wZXJ0eS1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LXJlc3VsdHMvcHJvcGVydHktcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1hdC1wYWdpbmF0b3Itc3RpY2t5IHtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/property-results/property-results.component.html":
/*!******************************************************************!*\
  !*** ./src/app/property-results/property-results.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 table-container\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort matSortActive=\"PIN_NUM\" aria-label=\"Elements\">\n      <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n    \n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation();rowClicked(row);\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n    <!-- Address Column -->\n    <ng-container matColumnDef=\"SITE_ADDRESS\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.SITE_ADDRESS}}</td>\n    </ng-container>\n\n    <!-- Owner Column -->\n    <ng-container matColumnDef=\"OWNER\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.OWNER}}</td>\n    </ng-container>\n    <!-- Pin Column -->\n    <ng-container matColumnDef=\"PIN_NUM\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>PIN</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.PIN_NUM}}</td>\n    </ng-container>\n    <!-- Pin ext Column -->\n    <ng-container matColumnDef=\"PIN_EXT\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Ext</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.PIN_EXT}}</td>\n    </ng-container>    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n\n</div>\n\n<mat-paginator class=\"mat-paginator-sticky\" #paginator fixed\n[length]=\"dataSource.data.length\"\n[pageIndex]=\"0\"\n[pageSize]=\"25\"\n[pageSizeOptions]=\"[25, 50, 100, 250]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/property-results/property-results.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/property-results/property-results.component.ts ***!
  \****************************************************************/
/*! exports provided: PropertyResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResultsComponent", function() { return PropertyResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _property_results_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-results-datasource */ "./src/app/property-results/property-results-datasource.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");






var PropertyResultsComponent = /** @class */ (function () {
    function PropertyResultsComponent(shared) {
        this.shared = shared;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](false, []);
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['select', 'SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT'];
    }
    PropertyResultsComponent.prototype.rowClicked = function (row) {
        this.shared.propertyInfo.next({ attributes: row });
    };
    ;
    PropertyResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _property_results_datasource__WEBPACK_IMPORTED_MODULE_3__["PropertyResultsDataSource"](this.paginator, this.sort, []);
        this.shared.propertyResults.subscribe(function (data) {
            if (data.length) {
                _this.dataSource = new _property_results_datasource__WEBPACK_IMPORTED_MODULE_3__["PropertyResultsDataSource"](_this.paginator, _this.sort, data);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PropertyResultsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], PropertyResultsComponent.prototype, "sort", void 0);
    PropertyResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-results',
            template: __webpack_require__(/*! ./property-results.component.html */ "./src/app/property-results/property-results.component.html"),
            styles: [__webpack_require__(/*! ./property-results.component.css */ "./src/app/property-results/property-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], PropertyResultsComponent);
    return PropertyResultsComponent;
}());



/***/ }),

/***/ "./src/app/property-search/property-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/property-search/property-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n    width: 100%;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHktc2VhcmNoL3Byb3BlcnR5LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LXNlYXJjaC9wcm9wZXJ0eS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/property-search/property-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property-search/property-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchContainer\">\n<form [formGroup]=\"searchForm\">\n  <mat-form-field class=\"example-full-width\">\n      <input (input)=\"inputChanged($event)\" matInput placeholder=\"Address, owner, PIN, REID, or street\"  formControlName=\"searchGroup\" [formControl]=\"control\" [matAutocomplete]=\"searchGroup\">\n      <mat-autocomplete #searchGroup=\"matAutocomplete\" (optionSelected)=\"accountSelected($event)\" [displayWith]=\"displayFn\">\n      <mat-optgroup *ngFor=\"let group of searchGroups\" [label]=\"group.type\">\n          <mat-option *ngFor=\"let value of group.values\" [value]=\"value\">\n          \n              <span *ngIf=\"value.STREET\">{{value.STREET}}</span>\n              <span *ngIf=\"value.ADDRESS\">{{value.ADDRESS}}</span>\n              <span *ngIf=\"value.PIN_NUM && !value.ADDRESS\">{{value.PIN_NUM}}</span>               \n              <span *ngIf=\"value.REID\">{{value.REID}}</span>   \n              <span *ngIf=\"value.OWNER\">{{value.OWNER}}</span>                           \n\n          </mat-option>\n      </mat-optgroup>\n  </mat-autocomplete>\n  </mat-form-field>   \n  </form>  \n</div>"

/***/ }),

/***/ "./src/app/property-search/property-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/property-search/property-search.component.ts ***!
  \**************************************************************/
/*! exports provided: PropertySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySearchComponent", function() { return PropertySearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property.service */ "./src/app/property.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





var PropertySearchComponent = /** @class */ (function () {
    function PropertySearchComponent(fb, property, shared) {
        this.fb = fb;
        this.property = property;
        this.shared = shared;
        this.searchForm = this.fb.group({ searchGroup: '' });
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.accountList = [];
        this.searchGroups = [{ type: 'Address', values: [] }, { type: 'Owner', values: [] }, { type: 'PIN', values: [] }, { type: 'REID', values: [] }, { type: 'Street', values: [] }];
    }
    PropertySearchComponent.prototype.displayFn = function (attributes) {
        var value = undefined;
        if (attributes) {
            if (attributes.ADDRESS) {
                value = attributes.ADDRESS;
            }
            else if (attributes.OWNER) {
                value = attributes.OWNER;
            }
            else if (attributes.PIN_NUM) {
                value = attributes.PIN_NUM;
            }
            else if (attributes.REID) {
                value = attributes.REID;
            }
            else if (attributes.STREET) {
                value = attributes.STREET;
            }
        }
        return value;
    };
    PropertySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.mapView.subscribe(function (mapView) {
            if (mapView) {
                _this.mapView = mapView;
                //@ts-ignore
                _this.mapView.map.tables.forEach(function (table) {
                    if (table.title.indexOf('Condos') > -1) {
                        _this.condoUrl = table.url;
                    }
                    else if (table.title.indexOf('Addresses') > -1) {
                        _this.addressUrl = table.url;
                    }
                });
            }
        });
        this.shared.propertyInfo.subscribe(function (info) {
            if (info) {
                _this.getRelatedRecords(info);
            }
        });
    };
    PropertySearchComponent.prototype.getValues = function (result) {
        var values = [];
        if (result.features.length > 0) {
            result.features.forEach(function (feature) {
                values.push(feature.attributes);
            });
        }
        return values;
    };
    PropertySearchComponent.prototype.inputChanged = function (event) {
        var _this = this;
        if (event.target.value.length > 4) {
            this.searchGroups[0].values = [];
            this.searchGroups[1].values = [];
            this.searchGroups[2].values = [];
            this.searchGroups[3].values = [];
            this.searchGroups[4].values = [];
            this.addressChanges = this.property.autocomplete(this.addressUrl + '/query', "ADDRESS like '" + event.target.value.toUpperCase() + "%'", 'ADDRESS,PIN_NUM', false, 10).subscribe(function (result) {
                _this.searchGroups[0].values = _this.getValues(result);
            });
            this.ownerChanges = this.property.autocomplete(this.condoUrl + '/query', "OWNER like '" + event.target.value.toUpperCase() + "%'", 'OWNER', true, 10).subscribe(function (result) {
                _this.searchGroups[1].values = _this.getValues(result);
            });
            this.reidChanges = this.property.autocomplete(this.condoUrl + '/query', "REID like '" + event.target.value.toUpperCase() + "%'", 'REID', false, 10).subscribe(function (result) {
                _this.searchGroups[3].values = _this.getValues(result);
            });
            this.pinChanges = this.property.autocomplete(this.condoUrl + '/query', "PIN_NUM like '" + event.target.value.toUpperCase() + "%'", 'PIN_NUM', true, 10).subscribe(function (result) {
                _this.searchGroups[2].values = _this.getValues(result);
            });
            this.streetChanges = this.property.autocomplete(this.addressUrl + '/query', "STREET like '" + event.target.value.toUpperCase() + "%'", 'STREET', true, 10).subscribe(function (result) {
                _this.searchGroups[4].values = _this.getValues(result);
            });
        }
    };
    PropertySearchComponent.prototype.getRelatedRecords = function (info) {
        var _this = this;
        this.property.getRelationshipIds(this.condoUrl).subscribe(function (result) {
            if (result.relationships) {
                result.relationships.forEach(function (relationship) {
                    if (relationship.name === 'CONDO_PHOTOS') {
                        _this.property.getPhotos(_this.condoUrl, info.attributes.OBJECTID, relationship.id).subscribe(function (result) {
                            if (result.relatedRecordGroups.length > 0) {
                                if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                                    _this.shared.photos.next(result.relatedRecordGroups[0].relatedRecords);
                                }
                            }
                        });
                    }
                    else if (relationship.name === 'CONDO_BOOKS') {
                        _this.property.getDeeds(_this.condoUrl, info.attributes.OBJECTID, relationship.id).subscribe(function (result) {
                            if (result.relatedRecordGroups.length > 0) {
                                if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                                    _this.shared.deeds.next(result.relatedRecordGroups[0].relatedRecords);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    PropertySearchComponent.prototype.getCondos = function (where, field) {
        var _this = this;
        this.property.getCondos(this.condoUrl + '/query', where, field).subscribe(function (result) {
            if (result.features.length === 1) {
                var feature = result.features[0];
                _this.shared.propertyInfo.next(result.features[0]);
                var data = [feature.attributes];
                _this.shared.propertyResults.next(data);
            }
            else if (result.features.length > 1) {
                var data_1 = [];
                result.features.forEach(function (feature) {
                    data_1.push(feature.attributes);
                });
                _this.shared.propertyResults.next(data_1);
            }
            var oids = [];
            result.features.forEach(function (feature) {
                oids.push(feature.attributes.OBJECTID);
            });
            _this.property.getProperties(_this.condoUrl, oids, 0).subscribe(function (result) {
                var oids = [];
                result.relatedRecordGroups.forEach(function (rrg) {
                    rrg.relatedRecords.forEach(function (rr) {
                        oids.push(rr.attributes.OBJECTID);
                    });
                });
                _this.shared.propertyIds.next(oids);
            });
        });
    };
    PropertySearchComponent.prototype.accountSelected = function (event) {
        var where = '';
        var field = '';
        switch (event.option.group.label) {
            case 'Address':
                field = 'PIN_NUM';
                where = field + " = '" + event.option.value['PIN_NUM'] + "'";
                break;
            case 'Owner':
                field = 'OWNER';
                where = field + " = '" + event.option.value[field] + "'";
                break;
            case 'PIN':
                field = 'PIN_NUM';
                where = field + " = '" + event.option.value[field] + "'";
                break;
            case 'REID':
                field = 'REID';
                where = field + " = '" + event.option.value[field] + "'";
                break;
            case 'Street':
                field = 'FULL_STREET_NAME';
                where = field + " LIKE '%" + event.option.value['STREET'] + "'";
                break;
        }
        this.getCondos(where, field);
    };
    PropertySearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-search',
            template: __webpack_require__(/*! ./property-search.component.html */ "./src/app/property-search/property-search.component.html"),
            styles: [__webpack_require__(/*! ./property-search.component.css */ "./src/app/property-search/property-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], PropertySearchComponent);
    return PropertySearchComponent;
}());



/***/ }),

/***/ "./src/app/property.service.ts":
/*!*************************************!*\
  !*** ./src/app/property.service.ts ***!
  \*************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.getRelationshipIds = function (url) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('f', 'json');
        return this.http.get(url, { params: params });
    };
    PropertyService.prototype.autocomplete = function (url, where, field, distinct, max) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('where', where)
            .set('outFields', field)
            .set('returnDistinctValues', distinct.toString())
            .set('returnGeometry', 'false')
            .set('orderByFields', field)
            .set('resultRecordCount', max.toString())
            .set('f', 'json');
        return this.http.get(url, { params: params });
    };
    PropertyService.prototype.getCondos = function (url, where, field) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('where', where)
            .set('outFields', '*')
            .set('returnGeometry', 'false')
            .set('orderByFields', field)
            .set('f', 'json');
        return this.http.get(url, { params: params });
    };
    PropertyService.prototype.getAddressReids = function (url, where, field) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('where', where)
            .set('outFields', 'REA_REID')
            .set('returnGeometry', 'false')
            .set('f', 'json');
        return this.http.get(url, { params: params });
    };
    PropertyService.prototype.getPhotos = function (url, oid, relationshipId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('objectIds', oid.toString())
            .set('relationshipId', relationshipId.toString())
            .set('outFields', '*')
            .set('returnGeometry', 'false')
            .set('f', 'json');
        return this.http.get(url + '/queryRelatedRecords', { params: params });
    };
    PropertyService.prototype.getDeeds = function (url, oid, relationshipId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('objectIds', oid.toString())
            .set('relationshipId', relationshipId.toString())
            .set('outFields', '*')
            .set('returnGeometry', 'false')
            .set('f', 'json');
        return this.http.get(url + '/queryRelatedRecords', { params: params });
    };
    PropertyService.prototype.getProperties = function (url, oid, relationshipId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('objectIds', oid.toString())
            .set('relationshipId', relationshipId.toString())
            .set('outFields', 'OBJECTID')
            .set('returnGeometry', 'true')
            .set('f', 'json');
        return this.http.post(url + '/queryRelatedRecords', params);
    };
    PropertyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/property/property.component.css":
/*!*************************************************!*\
  !*** ./src/app/property/property.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".propertyContainer {\n    top: 0px\n\n}\n.mat-tab-group {\n  height: calc(100% - 70px);\n  width:100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOztBQUVKO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eUNvbnRhaW5lciB7XG4gICAgdG9wOiAwcHhcblxufVxuLm1hdC10YWItZ3JvdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICB3aWR0aDoxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/property/property.component.html":
/*!**************************************************!*\
  !*** ./src/app/property/property.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group headerPosition=\"below\" [selectedIndex]=\"selectedIndex\" (selectedIndexChange)=\"selectedIndex = $event\">\n    <mat-tab label=\"List\"><app-property-results></app-property-results></mat-tab>\n    <mat-tab label=\"Info\"><app-property-info ></app-property-info></mat-tab>\n\n</mat-tab-group>     "

/***/ }),

/***/ "./src/app/property/property.component.ts":
/*!************************************************!*\
  !*** ./src/app/property/property.component.ts ***!
  \************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(shared) {
        this.shared = shared;
        this.selectedIndex = 0;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.shared.propertyResults.subscribe(results => {
        //   debugger
        //   if (results.length === 1) {
        //     this.selectedIndex = 1;
        //   } else {
        //     this.selectedIndex = 0;
        //   }
        // });
        this.shared.propertyInfo.subscribe(function (info) {
            _this.selectedIndex = 0;
            if (info) {
                _this.selectedIndex = 1;
            }
            else {
                _this.selectedIndex = 0;
            }
        });
    };
    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/property/property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/select-tool/select-tool.component.css":
/*!*******************************************************!*\
  !*** ./src/app/select-tool/select-tool.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n    width: 100%;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXRvb2wvc2VsZWN0LXRvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LXRvb2wvc2VsZWN0LXRvb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/select-tool/select-tool.component.html":
/*!********************************************************!*\
  !*** ./src/app/select-tool/select-tool.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #selectDiv></div>\n<mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Buffer distance (feet)\" type=\"number\" [(ngModel)]=\"distance\" (input)=\"inputChanged($event)\" >\n    <button mat-button *ngIf=\"distance\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"distance = 0;shared\">\n        <mat-icon>close</mat-icon>\n      </button>    \n  </mat-form-field>\n<p></p>\n  <button mat-button *ngIf=\"shared.selectedGraphic.getValue()\" (click)=\"propertyBuffered(shared.selectedGraphic.getValue())\">Buffer Property</button>\n"

/***/ }),

/***/ "./src/app/select-tool/select-tool.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-tool/select-tool.component.ts ***!
  \******************************************************/
/*! exports provided: SelectToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectToolComponent", function() { return SelectToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_3__);




var SelectToolComponent = /** @class */ (function () {
    function SelectToolComponent(shared) {
        this.shared = shared;
        this.distance = 0;
    }
    SelectToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.selectEl.next(this.selectEl);
        this.shared.mapView.subscribe(function (mapView) {
            if (mapView) {
                _this._mapView = mapView;
                _this.initialize();
            }
        });
    };
    SelectToolComponent.prototype.inputChanged = function (event) {
        this.shared.bufferDistance.next(Number(event.target.value));
    };
    SelectToolComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, SimpleFillSymbol_1, Graphic_1, GraphicsLayer, Sketch, geometryEngine_1, Color, layer_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(esri_loader__WEBPACK_IMPORTED_MODULE_3__["loadModules"])([
                                'esri/symbols/SimpleFillSymbol',
                                'esri/Graphic',
                                'esri/layers/GraphicsLayer',
                                "esri/widgets/Sketch",
                                "esri/geometry/geometryEngine",
                                "esri/Color"
                            ])];
                    case 1:
                        _a = _b.sent(), SimpleFillSymbol_1 = _a[0], Graphic_1 = _a[1], GraphicsLayer = _a[2], Sketch = _a[3], geometryEngine_1 = _a[4], Color = _a[5];
                        layer_1 = new GraphicsLayer();
                        this._mapView.map.add(layer_1);
                        this._mapView.map.allLayers.forEach(function (l) {
                            if (l.title) {
                                if (l.title.indexOf('Property') > -1) {
                                    _this._propertyLayer = l;
                                }
                            }
                        });
                        this._select = new Sketch({ layer: layer_1, view: this._mapView, container: this.selectEl.nativeElement });
                        //mapView.ui.add(sketch, 'top-right');
                        this._select.on('create', function (event) {
                            if (event.state === 'complete') {
                                _this.selectCompleted(event, geometryEngine_1, Graphic_1, _this._select, SimpleFillSymbol_1, _this._propertyLayer);
                            }
                            else if (event.state === 'start') {
                                layer_1.removeAll();
                            }
                        });
                        this._select.on('update', function (event) {
                            if (event.state === 'complete') {
                                _this.selectCompleted(event, geometryEngine_1, Graphic_1, _this._select, SimpleFillSymbol_1, _this._propertyLayer);
                            }
                            else if (event.state === 'start') {
                                layer_1.removeAll();
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SelectToolComponent.prototype.selectCompleted = function (event, geometryEngine, Graphic, select, SimpleFillSymbol, propertyLayer) {
        var _this = this;
        this.shared.propertyInfo.next(null);
        var symbol = new SimpleFillSymbol({
            color: [51, 51, 204, 0],
            style: "solid",
            outline: {
                color: "black",
                width: 2
            }
        });
        var geometry = event.graphic.geometry;
        if (this.distance > 0) {
            geometry = geometryEngine.buffer(event.graphic.geometry, this.distance, 'feet');
        }
        event.graphic.symbol = symbol;
        propertyLayer.queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID'] }).then(function (result) {
            var oids = [];
            result.features.forEach(function (feature) {
                oids.push(feature.attributes.OBJECTID);
            });
            _this.shared.propertyIds.next(oids);
            select.layer.removeAll();
            if (geometry) {
                select.layer.add(new Graphic({ geometry: geometry, symbol: event.graphic.symbol }));
            }
            else {
                select.layer.add(event.graphic);
            }
            propertyLayer.queryRelatedFeatures({ relationshipId: 0, objectIds: oids, outFields: ['*'] }).then(function (result) {
                var data = [];
                oids.forEach(function (oid) {
                    if (result[oid]) {
                        result[oid].features.forEach(function (f) {
                            data.push(f.attributes);
                        });
                    }
                });
                _this.shared.propertyResults.next(data);
                if (data.length === 1) {
                    _this.shared.propertyInfo.next({ attributes: data[0] });
                }
            });
        });
    };
    SelectToolComponent.prototype.propertyBuffered = function (graphic) {
        var _this = this;
        Object(esri_loader__WEBPACK_IMPORTED_MODULE_3__["loadModules"])([
            'esri/Graphic',
            "esri/geometry/geometryEngine",
            "esri/symbols/SimpleFillSymbol"
        ]).then(function (_a) {
            var Graphic = _a[0], geometryEngine = _a[1], SimpleFillSymbol = _a[2];
            if (graphic) {
                var g = new Graphic({ geometry: graphic.geometry }).clone();
                _this.selectCompleted({ graphic: g }, geometryEngine, Graphic, _this._select, SimpleFillSymbol, _this._propertyLayer);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectToolComponent.prototype, "selectEl", void 0);
    SelectToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-tool',
            template: __webpack_require__(/*! ./select-tool.component.html */ "./src/app/select-tool/select-tool.component.html"),
            styles: [__webpack_require__(/*! ./select-tool.component.css */ "./src/app/select-tool/select-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], SelectToolComponent);
    return SelectToolComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.mapView = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.propertyResults = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.propertyInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.propertyIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.photos = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.deeds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sketchEl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selectEl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.bufferDistance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.selectedGraphic = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.propertyBuffered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.sketchColor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/sketch-tool/sketch-tool.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sketch-tool/sketch-tool.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colorPicker {\n    margin:1em;\n    border-width:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tldGNoLXRvb2wvc2tldGNoLXRvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2tldGNoLXRvb2wvc2tldGNoLXRvb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvclBpY2tlciB7XG4gICAgbWFyZ2luOjFlbTtcbiAgICBib3JkZXItd2lkdGg6MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sketch-tool/sketch-tool.component.html":
/*!********************************************************!*\
  !*** ./src/app/sketch-tool/sketch-tool.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #sketchDiv></div>\n<input class=\"colorPicker\" [(colorPicker)]=\"fillcolor\" [style.background]=\"fillcolor\" [cpOutputFormat]=\"'rgba'\"/><span>Fill Color</span><br/>\n<input class=\"colorPicker\" [(colorPicker)]=\"linecolor\" [style.background]=\"linecolor\" [cpOutputFormat]=\"'rgba'\"/><span>Line Color</span>\n<mat-form-field class=\"example-full-width\">\n  <input matInput placeholder=\"Outline Width (px)\" type=\"number\" [(ngModel)]=\"width\" >\n</mat-form-field>"

/***/ }),

/***/ "./src/app/sketch-tool/sketch-tool.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sketch-tool/sketch-tool.component.ts ***!
  \******************************************************/
/*! exports provided: SketchToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchToolComponent", function() { return SketchToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");





var SketchToolComponent = /** @class */ (function () {
    function SketchToolComponent(shared, cpService) {
        this.shared = shared;
        this.cpService = cpService;
        this.fillcolor = 'rgba(255, 0, 0, 0.5)';
        this.linecolor = 'rgba(255, 0, 0, 1.0)';
        this.width = 1;
    }
    SketchToolComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, SimpleFillSymbol, Graphic, GraphicsLayer, Sketch, Color_1, layer, sketch, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(esri_loader__WEBPACK_IMPORTED_MODULE_3__["loadModules"])([
                                'esri/symbols/SimpleFillSymbol',
                                'esri/Graphic',
                                'esri/layers/GraphicsLayer',
                                "esri/widgets/Sketch",
                                "esri/Color"
                            ])];
                    case 1:
                        _a = _b.sent(), SimpleFillSymbol = _a[0], Graphic = _a[1], GraphicsLayer = _a[2], Sketch = _a[3], Color_1 = _a[4];
                        layer = new GraphicsLayer();
                        this._mapView.map.add(layer);
                        sketch = new Sketch({ layer: layer, view: this._mapView, container: this.sketchEl.nativeElement });
                        sketch.on('create', function (event) {
                            console.log(event);
                            if (event.state === 'start') {
                                event.graphic.symbol = {
                                    type: "simple-fill",
                                    color: new Color_1(_this.fillcolor),
                                    style: "solid",
                                    outline: {
                                        color: new Color_1(_this.linecolor),
                                        width: _this.width
                                    }
                                };
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SketchToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.sketchEl.next(this.sketchEl);
        this.shared.mapView.subscribe(function (mapView) {
            if (mapView) {
                _this._mapView = mapView;
                _this.initialize();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sketchDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SketchToolComponent.prototype, "sketchEl", void 0);
    SketchToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sketch-tool',
            template: __webpack_require__(/*! ./sketch-tool.component.html */ "./src/app/sketch-tool/sketch-tool.component.html"),
            styles: [__webpack_require__(/*! ./sketch-tool.component.css */ "./src/app/sketch-tool/sketch-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerService"]])
    ], SketchToolComponent);
    return SketchToolComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\n    height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvdG9vbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90b29scy90b29scy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tools/tools.component.html":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group headerPosition=\"below\">\n    <mat-tab label=\"Select\"><app-select-tool></app-select-tool></mat-tab>\n    <mat-tab label=\"Sketch\"><app-sketch-tool></app-sketch-tool></mat-tab>\n    <mat-tab label=\"Measure\"><app-measure-tool></app-measure-tool></mat-tab>\n    <mat-tab label=\"Print\"></mat-tab>\n\n\n</mat-tab-group>     "

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grecoj/github/imaps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map