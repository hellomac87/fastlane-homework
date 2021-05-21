import styled from "styled-components";

interface Props {
  title: string;
}

function ListHead({ title }: Props) {
  return (
    <Container>
      {title}
      <span>{"이벤트"}</span>
    </Container>
  );
}

export default ListHead;

const Container = styled.h2`
  width: 100%;
  padding: 15px 10px 10px 10px;
  border-bottom: 2px solid #333;

  font-size: 17px;
  color: #333;
  font-weight: bold;

  span {
    color: #ef5d9e;
  }
`;
