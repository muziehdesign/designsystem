import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mzEnumDisplay',
    standalone: true,
})
export class EnumDisplayPipe implements PipeTransform {

    
    transform(value?: string): string {
        return this.transformValue(value).join(' ');
    }

    private transformValue(value?: string): string[] {
        if (!value) {
            return [];
        }

        let wordIndex = 0;
        const words: string[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i] !== value[i].toLowerCase() && i !== 0) {
                // includes the index -1
                // for example helloGoodbye => .substring(0, 5) => hello
                // and the index is reset to 5 (G)
                const word = value.substring(wordIndex, i);
                words.push(words.length === 0 ? this.firstLetterToUppercase(word) : word.toLowerCase());
                wordIndex = i;
            }
        }
        if (wordIndex !== value.length) {
            // continuing the example, we take it from the last index matched
            // (meaning the rest of the word that wasn't considered because no uppercase
            // values existed at the end of the sentence after the last index matched)
            // so it is converterd like this: helloGoodbye => .sustring(5) => goodbye
            const remainingString = value.substring(wordIndex);
            words.push(words.length === 0 ? this.firstLetterToUppercase(remainingString) : remainingString.toLowerCase());
        }
        return words;
    }

    // at this point we assume the string is at least > 0 length
    // just a converter method from: hello to Hello
    private firstLetterToUppercase(value: string): string {
        return value.length > 1 ? `${value.substring(0, 1).toUpperCase()}${value.substring(1)}` : value.toUpperCase();
    }
}
