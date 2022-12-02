import { useMutation, useQueryClient } from "react-query";
import { Meal } from "./order.types";

export function useAddMeal() {
  const queryClient = useQueryClient();

  return useMutation(
    async (meal: Meal) => {
      await fetch("localhost:8080/order/meal", {
        method: "POST",
        body: JSON.stringify(meal),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["order"]);
      },
    }
  );
}
