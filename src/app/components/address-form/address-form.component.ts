import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ButtonDirective, SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';
import { of, Subject } from 'rxjs';
import { delay, finalize, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  standalone: true,
  imports: [ButtonDirective, CommonModule, FormsModule, MatAutocompleteModule, MatSelectModule, SpinnerComponent, SvgIconComponent],
})
export class AddressFormComponent implements OnInit, AfterViewInit {
    @ViewChild('addressForm', { static: true }) addressForm?: NgForm;
    @ViewChild('search') searchElement?: ElementRef;

    model: DeliveryAddressInputModel = { unexpectedError: false };
    isLoading: boolean = false;
    error: string | undefined;
    isSuccessful: boolean | undefined;
    submitCount = 0;
    options: google.maps.places.AutocompletePrediction[] = [];
    loading = false;
    autocompleteService = new google.maps.places.AutocompleteService();
    placesService!: google.maps.places.PlacesService;
    sessionToken!: google.maps.places.AutocompleteSessionToken;
    autocomplete!: google.maps.places.Autocomplete;
    private addressChanged: Subject<string> = new Subject<string>();

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
        // approach #2 angular material
        this.sessionToken = new google.maps.places.AutocompleteSessionToken();
        this.onAddressChange();
    }

    ngAfterViewInit(): void {
        // approach #1 google autocomplete
        this.initGoogleMapsService();
    }

    onFormChange() {
        if (this.isSuccessful == true) {
            this.isSuccessful = undefined;
        }
    }

    onSubmit() {
        this.submitCount++;
        console.log('is submitting event only when is not busy', this.isLoading);
        this.isSuccessful = undefined;

        if (this.addressForm!.invalid) {
            return;
        }

        this.isLoading = true;
        of(null)
            .pipe(
                delay(1500),
                finalize(() => (this.isLoading = false))
            )
            .subscribe((x) => {
                this.isSuccessful = this.model.unexpectedError == false;
            });
    }

    displayError(controlKey: string) {
        return this.addressForm?.form.controls[controlKey]?.invalid && (this.addressForm?.form.controls[controlKey]?.touched || this.addressForm?.submitted);
    }

    // approach #1 google autocomplete
    private initGoogleMapsService() {
        this.autocomplete = new google.maps.places.Autocomplete(this.searchElement?.nativeElement, {
            componentRestrictions: { country: ['us'] },
            fields: ['address_components'],
            types: ['address'],
        });

        this.autocomplete.addListener('place_changed', () => {
            const place = this.autocomplete.getPlace().address_components as google.maps.GeocoderAddressComponent[];
            this.setGoogleAddressResponse(place);
            console.log(place);
        });
    }

    // approach #2 angular material
    onInputChanged() {
        this.loading = true;
        this.addressChanged.next(this.model.address2);
    }

    // approach #2 angular material
    displayFn(option: any): string {
        return option ? option.description : '';
    }

    // approach #2 angular material
    optionSelected(selected: MatAutocompleteSelectedEvent) {
        if (selected.option.value?.place_id) {
            this.placesService = new google.maps.places.PlacesService(this.renderer.createElement('div'));
            const details = { placeId: selected.option.value.place_id };
            this.placesService.getDetails(details, (results, status) => {
                this.setGoogleAddressResponse(results?.address_components as google.maps.GeocoderAddressComponent[]);
            });
        }
    }

    // approach #2 angular material
    private onAddressChange() {
        this.addressChanged.pipe(debounceTime(1500)).subscribe((value) => {
            console.log(value);
            this.getPredictions(value, {
                componentRestrictions: { country: 'us' },
                types: ['address'],
            }).then((results) => {
                console.log(results);
                this.options = results ?? [];
            });
        });
    }

    // approach #2 angular material
    private getPredictions(value: any, options: any): Promise<google.maps.places.AutocompletePrediction[] | null> {
        if (!this.sessionToken) {
            this.sessionToken = new google.maps.places.AutocompleteSessionToken();
        }
        const request = {
            input: value,
            sessionToken: this.sessionToken,
            ...options,
        };

        return new Promise((resolve, reject) => {
            this.autocompleteService.getPlacePredictions(request, (results, status) => {
                if (status !== google.maps.places.PlacesServiceStatus.OK && status !== google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    this.loading = false;
                    reject(status);
                } else {
                    this.loading = false;
                    resolve(results);
                }
            });
        });
    }

    // map the response of both angular material autocomplete and google autocomplete
    private setGoogleAddressResponse(address: google.maps.GeocoderAddressComponent[]) {
        console.log(address)
        address.forEach((item) => {
            if (item.types[0] == 'locality') {
                this.addressForm?.form.controls.city.setValue(item.short_name);
            }
            if (item.types[0] == 'postal_code') {
                this.addressForm?.form.controls.zipCode.setValue(item.short_name);
            }
            if (item.types[0] == 'administrative_area_level_1') {
                this.addressForm?.form.controls.state.setValue(item.short_name);
            }
        });
    }
}

interface DeliveryAddressInputModel {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    unexpectedError: boolean;
}
