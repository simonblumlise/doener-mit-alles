import { useQuery } from "react-query";
import { Order } from "./order.types";
import { useParams } from "react-router-dom";

async function fetchOrder(id: string | undefined) {
  if(id){
    const response = await fetch(`${import.meta.env.VITE_BACKEND}/order/${id}`);
    const order: Order = await response.json();
    return order;
  }else return Promise.reject();
}

export function useGetOrder() {
  const { id }= useParams<{id: string}>();
  return useQuery<Order, Error>(["order"], () => fetchOrder(id), {});
}
