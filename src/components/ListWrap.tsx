import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function ListWrap({ children }: Props) {
  return <Container>{children}</Container>;
}

export default ListWrap;

const Container = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12px;
  margin-bottom: 15px;
`;
