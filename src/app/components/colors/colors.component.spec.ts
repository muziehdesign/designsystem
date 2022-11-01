import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { ColorsComponent } from './colors.component';

describe('ColorsComponent', () => {
    let component: ColorsComponent;
    let fixture: ComponentFixture<ColorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorsComponent],
            providers: [
                {
                    provide: DEMONSTRATIONS,
                    useValue: {},
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
