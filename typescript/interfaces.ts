let http = require('http');
let test = typeof http;
console.log(test);

// 3.Interfaces


//a - book interface
interface IBook{
        title: string;
        author: string;
        published: Date;
        pages: number;
    }
    //b - function to test
    function readIBook(iBook: IBook): void{

        console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
    }

    var firstBook = {
        title: "Angels and Demons",
        author: "Dan Brown",
        published: new Date(2000,5,15),
        pages: 616
    }
readIBook(firstBook);
//c
//duck typing:
//If it walks like a duck and quacks like a duck then it must be a duck.
//If a variable or function have the required (named) properties and/or functions then is is useable (regardless of what the properties say of the functions do). 

//d - published & pages optional
interface IBook2{
        title: string;
        author: string;
        published?: Date;
        pages?: number;
}

var book2 = {
    title: "Angels and Demons",
    author: "Dan Brown"
}
function readIBook2(iBook: IBook2): void{
    
            console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
        }

readIBook2(book2);

//e - author readonly
interface IBook3{
    title: string;
    readonly author: string;
    published: Date;
    pages: number;
}

var book3:IBook3 = {
title: "Angels and Demons",
author: "Dan Brown",
published: new Date(2000,5,15),
pages: 616
}

function readIBook3(iBook: IBook3): void{
    

        console.log("Title: " + iBook.title + ", Author: " + iBook.author + ", Published: " + iBook.published + ", Pages: " + iBook.pages);
    }

    //outcommented so it doesn't break

    //book3.author = "Not Dan Brown";

readIBook3(book3);

//f

class bookC implements IBook{
    book: string;
    constructor( public title: string, public author: string, public published: Date, public pages: number){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    }
}
    function printBook(book: bookC){
        console.log("Title: " + book.title + ", Author: " + book.author + ", Published: " + book.published + ", Pages: " + book.pages);
    }
var danbrown = new bookC("Angels and Demons", "Dan Brown", new Date(2000,5,15), 616);

console.log(danbrown);