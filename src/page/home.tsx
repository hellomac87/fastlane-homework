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

  function duplicateFilter(products: Product[]) {
    return products.reduce(function (acc: Product[], current) {
      const hasCustomerName =
        acc.findIndex(
          ({ customerName }) => customerName === current.customerName
        ) === -1;
      if (hasCustomerName) {
        acc.push(current);
      }
      return acc;
    }, []);
  }

  if (!data) return <></>;

  return (
    <div>
      <ul>
        {sortPrice(duplicateFilter(data.results.recommendProducts)).map(
          (product) => (
            <li key={product.customerName}>
              <div>{product.customerName}</div>
              <div>{product.customerCode}</div>

              <div>{product.comment}</div>
              <div>{product.price}</div>
              <img src={product.thumbnailImageUrl} alt={product.customerName} />
              <br />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Home;
