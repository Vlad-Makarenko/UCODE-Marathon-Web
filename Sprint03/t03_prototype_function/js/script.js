String.prototype.removeDuplicates = function removeDuplicates() {
    let trimed = this.trim();
    let words = trimed.split(' ');
    let newWords = words.filter( (currentValue, index, arr) => {
        return arr.indexOf(currentValue) === index && currentValue != ' ' && currentValue != '';
    });
    return newWords.join(' ');
}
