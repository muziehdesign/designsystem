import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mz-style-guide',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './style-guide.component.html',
    styleUrls: ['./style-guide.component.css'],
})
export class StyleGuideComponent implements OnInit {
    colors: string[] = [];

    ngOnInit(): void {
        const rule = this.getRootStyles();
        const styles = Array.from(rule?.style || []).filter((style) => style.startsWith('--'));
        this.colors = styles.filter((s) => s.startsWith('--color')).map((s) => s.replace('--color-', ''));
        console.log(rule!.style.getPropertyValue('--color-primary'));
    }

    getRootStyles(): CSSStyleRule | null {
        for (var i = 0; i < document.styleSheets.length; i++) {
            const sheet = Array.from(document.styleSheets)[i];
            if ((sheet.href !== null && !sheet.href.startsWith(window.location.origin)) || !sheet?.cssRules) {
                continue;
            }
            for (var j = 0; j < sheet.cssRules.length; j++) {
                const rule = Array.from(sheet.cssRules)[j];
                if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
                    return rule;
                }
            }
        }

        return null;
    }
}
