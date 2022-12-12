import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { NewMeal } from "./order.types";

interface NewMealVars {
    orderId: string,
    meal: NewMeal,
}

export function useAddMeal(): UseMutationResult<void, unknown, NewMealVars> {
    const queryClient = useQueryClient();

    return useMutation(
        async (vars) => {

            await fetch(`${import.meta.env.VITE_BACKEND}/order/${vars.orderId}/meal`, {
                method: "POST",
                body: JSON.stringify(vars.meal),
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
