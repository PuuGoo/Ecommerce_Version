import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (product) => {
  console.log(product.products);
  const options = {
    size: "large",
    value: product.product.rating,
    readOnly: true,
    precision: 0.5,
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
