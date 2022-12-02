import { useMutation, useQueryClient } from "react-query";
import { NewOrder } from "./order.types";


export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation(
    async (order: NewOrder) => {
      await fetch("http://localhost:8080/order", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["order"]);
      },
    }
  );
}
