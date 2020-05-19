import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexhtmlComponent } from './indexhtml.component';

describe('IndexhtmlComponent', () =>
{
    let component: IndexhtmlComponent;
    let fixture: ComponentFixture<IndexhtmlComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [IndexhtmlComponent]
        })
            .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(IndexhtmlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
