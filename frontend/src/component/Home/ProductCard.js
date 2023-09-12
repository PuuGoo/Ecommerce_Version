import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (product) => {
  console.log(product);
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  const {
    _id: productId,
    name: productName,
    price: productPrice,
    images,
    numOfReviews,
  } = product.product;
  return (
    <Link className="productCard" to={`/product/${productId}`}>
      <img src={images[0].url} alt={productName} />
      <p>{productName}</p>
      <div>
        <ReactStars {...options} /> <span>({numOfReviews} Reviews)</span>
      </div>
      <span>{productPrice}</span>
    </Link>
  );
};

export default ProductCard;
