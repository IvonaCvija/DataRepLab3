//importing the BookItems component from a file called "bookItems"
import BookItems from "./bookItems";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItems myBook={book}  key={BookItems.isbn}></BookItems>
            //show the BookItems component for each book from "myBooks" array
            //pass the "book" object as a prop to the BookItems component
            //use the "isbn" property of the BookItems component as the key
        }
    );
}
//exporting the Books component
export default Books;
