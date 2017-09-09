"use strict";
var http = require('http');
var test = typeof http;
console.log(test);
//b - function to test
function readIBook(iBook) {
    console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
}
var firstBook = {
    title: "Angels and Demons",
    author: "Dan Brown",
    published: new Date(2000, 5, 15),
    pages: 616
};
readIBook(firstBook);
var book2 = {
    title: "Angels and Demons",
    author: "Dan Brown"
};
function readIBook2(iBook) {
    console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
}
readIBook2(book2);
var book3 = {
    title: "Angels and Demons",
    author: "Dan Brown",
    published: new Date(2000, 5, 15),
    pages: 616
};
function readIBook3(iBook) {
    console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
}
//outcommented so it doesn't break
//book3.author = "Not Dan Brown";
readIBook3(book3);
//f
var bookC = /** @class */ (function () {
    function bookC(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    return bookC;
}());
function printBook(book) {
    console.log("Title: " + book.title + ", Author: " + book.author + ", Published: " + book.published + ", Pages: " + book.pages);
}
var danbrown = new bookC("Angels and Demons", "Dan Brown", new Date(2000, 5, 15), 616);
console.log(danbrown);
