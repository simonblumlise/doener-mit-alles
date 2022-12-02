import { useMutation, useQueryClient } from "react-query";

type Order = {
  paypalLink: string;
  owner: string;
  restaurantName: string;
  restaurantLink: string;
  orderTime: Date;
};

export function createOrder() {
  const queryClient = useQueryClient();

  return useMutation(
    async (order: Order) => {
      await fetch("localhost:8080/order", {
        method: "POST",
        body: JSON.stringify(order),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["order"]);
      },
    }
  );
}
