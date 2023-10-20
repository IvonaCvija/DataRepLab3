//importing CardBody and Card from react-bootstrap
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BookItems(props) {

    return (
        <div>
            {/*creating a Card component*/}
            <Card>
                {/*displaying the book title in the card header*/}
                <Card.Header>{props.myBook.title}</Card.Header>
                <CardBody>
                    <blockquote className="blockquote mb-0">
                        {/*displaying the book's thumbnail image*/}
                        <img src={props.myBook.thumbnailUrl}></img>
                        <footer>
                            {/*displaying the first author of the book*/}
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
            {/*displaying the book title*/}
            <h3>{props.myBook.title}</h3>
            {/*displaying the book's thumbnail image*/}
            <img src={props.myBook.thumbnailUrl}></img>
            {/*sisplaying the first author of the book in a paragraph element*/}
            <p>{props.myBook.authors[0]}</p>
        </div>
    );
}
//exporting the BookItems component for use in other parts of the application
export default BookItems;
