import { useQuery } from "react-query";
import { Order } from "./order.types";

async function fetchOrder() {
  const response = await fetch("http://localhost:8080/order");
  const order: Order = await response.json();
  return order;
}

export function useGetOrder() {
  return useQuery<Order, Error>(["order"], () => fetchOrder(), {});
}
