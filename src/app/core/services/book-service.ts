import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import booksData from '../data/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }

  private API_KEY = 'book-list';
  getAllBooks(){
    return booksData;
//     return [
//   {
//     name: 'נסיכות אפריקאיות',
//     author: 'רם אורן',
//     category: 'ספרות',
//     location: 'assets/books/book1.jpg',
//     price: 69,
//     description: 'שני חברים יוצאי יחידה מובחרת יוצאים לאפריקה כדי לחפש יהלומים, אבל במקום עושר הם נקלעים לגיהינום של תעשיית היהלומים והטרדות ארסיות — סיפור מתח, אהבה ודרמה עוצרת נשימה.' 
//   },
//   {
//     name: 'פשפש הנשפים',
//     author: 'יין גה לינג',
//     category: 'ספרות יפה',
//     location: 'assets/books/book2.jpg',
//     price: 59,
//     description: 'לא מצאנו תיאור מהימן בשלב זה — אשמח אם תעדכן או שאריץ חיפוש מדויק יותר על הספר או המחבר.'
//   },
//   {
//     name: 'לרב רעב',
//     author: 'אשכול נבו',
//     category: 'ספרות',
//     location: 'assets/books/book3.jpg',
//     price: 89,
//     description: 'אין תיאור זמין כעת. אם תעתיק את התיאור מאתר או אתר ספרים — אוכל להשלים בקלות.'
//   },
//   {
//     name: 'השקעות לעצלנים',
//     author: 'שאול אמסטרדמסקי',
//     category: 'כלכלה והשקעות',
//     location: 'assets/books/book4.jpg',
//     price: 72,
//     description: 'לא נמצאה תאור זמין. אם תספק פסק תיאור קצר — אוכל לשלב אותו פה.'
//   },
//   {
//     name: 'חטוף',
//     author: 'אלי שרעבי',
//     category: 'דוקומנטרי',
//     location: 'assets/books/book5.jpg',
//     price: 79,
//     description: 'ספר אוטוביוגרפי מרתק שבו אלי שרעבי מתאר את 491 הימים בהם שהה בשבי החמאס — סיפור חווייתי, כואב אך מלא תקווה על הישרדות, רוח אנושית והתפכחות.'  
//   },
//   {
//     name: 'משאלה אחת ימינה',
//     author: 'אשכול נבו',
//     category: 'ספרות',
//     location: 'assets/books/book6.jpg',
//     price: 65,
//     description: 'אין תיאור זמין כרגע — אשמח אם תצרף קטע מהאתר שבו מצאת את הספר, ואעדכן בהתאם.'
//   },
//   {
//     name: 'החטא ועונשו',
//     author: 'פיודור מיכאילוביץ’ דוסטויבסקי',
//     category: 'ספרות קלאסית',
//     location: 'assets/books/book7.jpg',
//     price: 99,
//     description: 'רומן קלאסי עמוק לחקירת נפשו של רומן מורדוביצקי שנרצח — הסיפור עוסק באשמה, בכפרה ובהשקפות מוסריות חוצות-זמן.'
//   },
//   {
//     name: 'המשפט',
//     author: 'פרנץ קפקא',
//     category: 'ספרות קלאסית',
//     location: 'assets/books/book8.jpg',
//     price: 85,
//     description: 'יצירת מופת אבסורדיסטית על גוּג, שנעצר בנסיבות מסתוריות ונשלח למשפט בו הוא אינו מבין כלל את אשר המתנהל סביבו — ביקורת על הבירוקרטיה העיוורת והזוועה של הביורוקרטיה המשפטית.'
//   },
//   // {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
// ]

  }
  private _books = new BehaviorSubject(this.getAllBooks());
  books = this._books.asObservable();

  updateBooks(booksChanges : any){
    this._books.next(booksChanges);
  }
}
