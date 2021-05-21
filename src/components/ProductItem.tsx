import { Product } from "store/types/products";
import styled from "styled-components";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  return (
    <Container>
      <ItemBox>
        <ImgBox>
          <img
            src={product.thumbnailImageUrl}
            alt={`${product.customerName} - ${product.comment}`}
          />
        </ImgBox>
        <InfoBox>
          <Address>
            {product.locationName}
            {" - "}
            {product.customerName}
          </Address>
          <Name>{product.name}</Name>
          <Comment>{product.comment}</Comment>

          <Price>
            {product.price.toLocaleString()}{" "}
            <PriceUnit>{product.currencyName}</PriceUnit>
          </Price>
        </InfoBox>
      </ItemBox>
    </Container>
  );
}

export default ProductItem;

const Container = styled.li`
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  background: #fff;
  border-bottom: 1px solid #eee;

  @media only screen and (min-width: 768px) {
    width: 49%;
  }
  @media only screen and (min-width: 1280px) {
    width: 32%;
  }
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

const ImgBox = styled.div`
  width: 105px;
  min-height: 105px;
  img {
    width: 100%;
    border-radius: 10px;
    vertical-align: bottom;
  }
`;

const InfoBox = styled.article`
  position: relative;
  width: calc(100% - 105px);
  padding: 0 10px;
`;

const Address = styled.div`
  width: 100%;
  color: #6c6c6c;
  font-size: 12px;
  margin-bottom: 4px;
`;

const Name = styled.div`
  width: 100%;
  margin-bottom: 4px;

  color: #333;
  font-size: 15px;
  font-weight: bold;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const Comment = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 4px;

  color: #a1a1a1;
  font-size: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const Price = styled.div`
  width: 100%;
  color: #ef5d9e;
  font-weight: bold;
  letter-spacing: 0px;
  font-size: 19px;
  white-space: nowrap;
`;

const PriceUnit = styled.span`
  color: #ef5d9e;
  font-size: 14px;
  font-weight: normal;
`;
