import { useMutation, useQueryClient } from "react-query";
import { NewMeal } from "./order.types";

export function useAddMeal() {
  const queryClient = useQueryClient();

  return useMutation(
      async (meal: NewMeal) => {
        await fetch("http://localhost:8080/order/meal", {
          method: "POST",
          body: JSON.stringify(meal),
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
