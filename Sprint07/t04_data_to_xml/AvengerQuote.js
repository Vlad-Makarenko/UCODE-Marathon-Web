const Comment = require('./Comment')

module.exports = class AvengerQuote {
    /**
     * 
     * @param {Number} id 
     * @param {String} author 
     * @param {String} quote 
     * @param {String} photo 
     * @param {Object} publishDate 
     * @param {Array} comments 
     */
    constructor(id, author, quote, photo, publishDate, comments ){
        this.id = id;
        this.author = author;
        this.quote = quote;
        this.photo = photo;
        this.publishDate = publishDate;
        this.comments = comments;
    }
    /**
     * 
     * @param {String} comment 
     */
    addComment(comment){
        this.comments.push(new Comment(comment));
    } 
}