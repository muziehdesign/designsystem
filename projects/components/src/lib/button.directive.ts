import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[mzButton]',
    host: {
        role: 'button',
        '[attr.disabled]': 'busy',
    },
})
export class ButtonDirective implements OnInit {
    @Input()
    variant? = 'secondary';
    @Input()
    busy?: boolean;

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.variant}`, this.busy ? 'loading' : ''].join(' ');
    }

    ngOnInit(): void {}
}
