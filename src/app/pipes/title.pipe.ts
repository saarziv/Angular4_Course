import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {

    transform(value: string, args?: string ) {
        if(!value)
            return null
        let words = value.split(" ");
        for(let i=0;i<words.length;i++){
            let word = words[i];
            if(i>0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(word);
        }
        return words.join(" ");
    }

    private toTitleCase (word:string) :string{
        word = word.charAt(0).toUpperCase()+word.substr(1,word.length).toLowerCase();
        return word;
    }
    private isPreposition (word:string):boolean{
        let prepositions = [
            "of",
            "the",
            "and"
        ];
        return prepositions.includes(word.toLowerCase());
    }
}