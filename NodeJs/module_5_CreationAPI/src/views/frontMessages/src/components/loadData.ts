import api from "../axios/api";
import { AxiosResponse } from "axios";
export const LoadData = async () => {
  const response: AxiosResponse = await api.get("/phrases");

  return response.data;
};
