import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <img
        src={"https://yeoshin.co.kr/skin/renew/images/new_ads/renew_logo.png"}
        alt={"fastlane - 여신티켓 로고"}
      />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
  h1 {
  }
`;
