import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { ResourceListComponent } from './resource-list.component';
import { ResultTableComponent, PaginationComponent } from 'muzieh-ngcomponents';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ResourceListComponent', () => {
    let component: ResourceListComponent;
    let fixture: ComponentFixture<ResourceListComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [PaginationComponent, ResultTableComponent, ResourceListComponent],
            providers: [
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourceListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    });

    it('should display results', async () => {
        /*
        const resultTable = await loader.getHarness(ResultTableHarness);
        const pagination = resultTable.getPaginationDetails();
        expect(pagination.total).toBe(120);
        const header = resultTable.getRenderedHeader();
        const content = resultTable.getRenderedContent();
        */
    });

    it('should display error', () => {});

    it('should page results', () => {});
});
