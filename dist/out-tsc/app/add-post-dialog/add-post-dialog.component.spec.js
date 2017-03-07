/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AddPostDialogComponent } from './add-post-dialog.component';
describe('AddPostDialogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddPostDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddPostDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/AngularJS 2/grabing data from Node server/grabFromNode - blog/src/app/add-post-dialog/add-post-dialog.component.spec.js.map