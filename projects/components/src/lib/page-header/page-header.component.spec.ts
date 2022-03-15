import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageHeaderComponent],
            providers: [{ provide: Title, useValue: jasmine.createSpyObj(Title.name, ['setTitle']) }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.pageTitle).toEqual('Servicing Web');
        const title = TestBed.inject(Title);
        expect(title.setTitle).not.toHaveBeenCalled();
    });

    it('should set document title', () => {
        const pageTitle = 'unit test should set document title';
        component.pageTitle = pageTitle;
        const title = TestBed.inject(Title);
        expect(title.setTitle).toHaveBeenCalledWith(pageTitle);
    });
});
