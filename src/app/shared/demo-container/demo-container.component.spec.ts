import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { SharedModule } from '../shared.module';
import { DemoContainerComponent } from './demo-container.component';

xdescribe('DemoContainerComponent', () => {
    let component: DemoContainerComponent;
    let fixture: ComponentFixture<DemoContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoContainerComponent, CommonModule, SharedModule],
            providers: [
                {
                    provide: DEMONSTRATIONS,
                    useValue: {},
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(DemoContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
