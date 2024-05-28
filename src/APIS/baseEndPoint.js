import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://pinterest.lucadev.tech/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlSWQiOjEsImNvZGUiOiJDYXBzdG9uZSIsImlhdCI6MTcxNjg4MDA1MiwiZXhwIjoxNzE3NDg0ODUyfQ.1IGOifevkQEzhxVIm3Ho0bWJTHT9bNNuTj1p_xevUYY",
  },
});
