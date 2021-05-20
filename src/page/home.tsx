import useFetch from "hooks/useFetch";
import { Product, ProductsResponseType } from "store/types/products";

function Home() {
  const { status, error, data } = useFetch<ProductsResponseType>(
    `https://fe8eb658-e817-42b3-9c2b-8750cc0b33c4.mock.pstmn.io/latest/ios/products`
  );

  function sortPrice(products: Product[]) {
    return products.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  if (!data) return <></>;
  console.log(data.results.recommendProducts);
  return (
    <div>
      <ul>
        {sortPrice(data.results.recommendProducts).map((product) => (
          <li key={product.customerCode}>
            <div>{product.customerName}</div>
            <div>{product.comment}</div>
            <div>{product.price}</div>
            <img src={product.thumbnailImageUrl} alt={product.customerName} />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
