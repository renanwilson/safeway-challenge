import axios from "axios";

export const service = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getProducts = async (setPost) => {
  await service.get("produtos").then((resp) => {
    setPost(resp.data);
  });
};
