import { Book } from './Book.js'
import { EBook } from './EBook.js';


const Book1 = new Book ("Lord of the Rings", "J.R.R. Tolkien", 1954);
const Book2 = new Book ("Harry Potter", "J.K. Rowling", 1997);
const Book3 = new Book("Neverland","Shuuuuueisha", 2010);

const Ebook1 = new EBook("The Hobbit","J.R.R. Tolkien", 1937, "Epub")
const Ebook2 = new EBook("The Promised Neverland","Shueisha", 2016, "PDF")

console.log("[Task 1]");
Book1.printInfo();
Book2.printInfo();
console.log("");

console.log("[Task 2]");
Ebook1.printInfo();
Ebook2.printInfo();
console.log("");

console.log("[Task 4]");
const books = [Book1, Book2, Ebook1, Ebook2]
const oldestBook = Book.findOldestBooks(books)
oldestBook.printInfo();
console.log("");

console.log("[Task 5]");
const ebook1 = EBook.createFromBook(Book3, "PDF")
ebook1.printInfo()