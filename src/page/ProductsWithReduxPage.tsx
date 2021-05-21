import Header from "components/Header";
import ListHead from "components/ListHead";
import ListWrap from "components/ListWrap";
import Loader from "components/Loader";
import ProductItem from "components/ProductItem";
import Error from "components/Error";
import { Product } from "store/types/products";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect } from "react";
import { fetchProducts } from "store/slices/productsSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const { fetching, error, data } = useSelector(
    (state: RootState) => state.products
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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (fetching) return <Loader />;
  if (error) return <Error />;
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
