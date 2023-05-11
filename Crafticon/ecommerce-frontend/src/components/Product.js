import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import Rating from './Rating';




function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          className='card-img-top'
          alt={product.name}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <Card.Text>₹{product.price}</Card.Text>
        <Button>Add to cart </Button>
        <Button style={{marginLeft:'5px',textAlign:'center'}}>Buy now</Button>
      </Card.Body>
    </Card>
  );
}
export default Product
