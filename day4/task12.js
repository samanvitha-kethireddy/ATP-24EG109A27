/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        console.log("book ",this.title,"is borrowed. is available:", !this.isAvailable)
    }
    returnBook(){
        console.log("book ", this.title, " is returned. is available: ", this.isAvailable )
    }
    getInfo(){
        console.log("book name and no of pages:", this.title, this.pages,  "author: ", this.author)
    }
    isLongBook(){
        if(this.pages>300) return true;
         else return false;   
    }

}   

let b1= new Book("harry potter", "jkr", 350, true);
let b2= new Book("twisted", "ana", 250, true);
let b3= new Book("red", "lilly", 400, true);
let b4= new Book("blue wall", "jasmine", 300, true);
let b5= new Book("black sheep", "pari", 600, true);
//console.log(b1,b2,b3,b4,b5)
b1.borrow()
b2.borrow()
b1.returnBook()