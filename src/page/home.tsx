import useFetch from "hooks/useFetch";

function Home() {
  const { status, error, data } = useFetch(
    `https://fe8eb658-e817-42b3-9c2b-8750cc0b33c4.mock.pstmn.io/latest/ios/products`
  );
  console.log({ status, error, data });
  return <div>Home</div>;
}

export default Home;
