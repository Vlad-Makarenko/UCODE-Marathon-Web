let houseMixin = {
    wordReplace(oldWord, newWord) {
        this.description = this.description.replace(oldWord, newWord);
    },

    wordInsertAfter(afterWord, word){
        let len = this.description.indexOf(afterWord) + afterWord.length;
        let firstPart = this.description.slice(0, len);
        let lastPart = this.description.slice(len);
        this.description = [firstPart, ' ', word, lastPart].join('');
    },

    wordDelete(str) {
        this.description = this.description.replace(str, '')
    },

    cryption(input, output){
        let index = x => input.indexOf(x);
        let translate = x => index(x) > -1 ? output[index(x)] : x;
        this.description = this.description.split('').map(translate).join('');
    },

    wordEncrypt() {
        this.cryption('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 
                        'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm');
    },

    wordDecrypt() {
        this.cryption('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm',
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    }
}