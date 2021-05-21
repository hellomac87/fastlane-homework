import Header from "components/Header";
import ListHead from "components/ListHead";
import ListWrap from "components/ListWrap";
import Loader from "components/Loader";
import ProductItem from "components/ProductItem";
import Error from "components/Error";
import useFetch from "hooks/useFetch";
import { Product, ProductsResponseType } from "store/types/products";
import styled from "styled-components";

function ProductsPage() {
  const { status, error, data } = useFetch<ProductsResponseType>(
    `https://fe8eb658-e817-42b3-9c2b-8750cc0b33c4.mock.pstmn.io/latest/ios/products`
  );

  function sortByPrice(products: Product[]) {
    return products.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  function filterByDuplicateCustomerName(products: Product[]) {
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

  if (status === "fetching") return <Loader />;
  if (status === "error" || error) return <Error />;
  if (!data) return <></>;

  return (
    <Container>
      <Header />
      <ListHead title={"추천"} />
      <ListWrap>
        {sortByPrice(
          filterByDuplicateCustomerName(data.results.recommendProducts)
        ).map((product) => (
          <ProductItem key={product.customerName} product={product} />
        ))}
      </ListWrap>

      <ListHead title={"신규"} />
      <ListWrap>
        {sortByPrice([...data.results.newProducts]).map((product) => (
          <ProductItem key={product.customerName} product={product} />
        ))}
      </ListWrap>
    </Container>
  );
}

export default ProductsPage;

const Container = styled.section`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
