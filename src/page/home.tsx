import ListHead from "components/ListHead";
import ListWrap from "components/ListWrap";
import Loader from "components/Loader";
import ProductItem from "components/ProductItem";
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

  if (status === "init") return <></>;
  if (status === "fetching") return <Loader />;
  if (!data) return <></>;

  return (
    <div>
      <ListHead title={"추천"} />
      <ListWrap>
        {sortPrice(duplicateFilter(data.results.recommendProducts)).map(
          (product) => (
            <ProductItem key={product.customerName} product={product} />
          )
        )}
      </ListWrap>

      <ListHead title={"신규"} />
      <ListWrap>
        {data.results.newProducts.map((product) => (
          <ProductItem key={product.customerName} product={product} />
        ))}
      </ListWrap>
    </div>
  );
}

export default Home;
