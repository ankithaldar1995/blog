var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
var AddPostDialogComponent = (function () {
    function AddPostDialogComponent(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    AddPostDialogComponent.prototype.increment = function () {
        this.store.dispatch({ type: INCREMENT });
    };
    AddPostDialogComponent.prototype.decrement = function () {
        this.store.dispatch({ type: DECREMENT });
    };
    AddPostDialogComponent.prototype.reset = function () {
        this.store.dispatch({ type: RESET });
    };
    return AddPostDialogComponent;
}());
AddPostDialogComponent = __decorate([
    Component({
        selector: 'app-add-post-dialog',
        templateUrl: './add-post-dialog.component.html',
        styleUrls: ['./add-post-dialog.component.css'],
        providers: []
    }),
    __metadata("design:paramtypes", [Store])
], AddPostDialogComponent);
export { AddPostDialogComponent };
//# sourceMappingURL=E:/AngularJS 2/grabing data from Node server/grabFromNode - blog/src/app/add-post-dialog/add-post-dialog.component.js.map