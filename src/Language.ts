export class Language {
    value: string;
    locale: string;

    constructor(value: string | string[], locale: string) {
        
        if (Array.isArray(value)) {
            if (value.length === 1) {
                this.value = value[0];
            } else {
                // concatenate all of the values
                this.value = value.join('<br/>');
            }
        } else {
            this.value = value;
        }

        this.locale = locale;
    }
}