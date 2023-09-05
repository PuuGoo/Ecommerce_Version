import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20, 20, 20, 0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = (props) => {
  const {
    _id: productId,
    name: productName,
    price: productPrice,
    images,
  } = props.product;
  return (
    <Link className="productCard" to={productId}>
      <img src={images[0].url} alt={productName} />
      <p>{productName}</p>
      <div>
        <ReactStars {...options} /> <span>(256 Reviews)</span>
      </div>
      <span>{productPrice}</span>
    </Link>
  );
};

export default Product;
