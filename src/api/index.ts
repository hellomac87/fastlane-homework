import axios from "axios";

const baseURL =
  "https://fe8eb658-e817-42b3-9c2b-8750cc0b33c4.mock.pstmn.io/latest/ios/products";

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
