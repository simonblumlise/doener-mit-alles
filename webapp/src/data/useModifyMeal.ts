import { useMutation, UseMutationResult, useQueryClient } from "react-query";

interface UseModifyMealReturn {
    deleteMeal: UseMutationResult<void, unknown, number>
    updateIsPaid: UseMutationResult<void, unknown, { id: number, isPaid: boolean }>
}

export function useModifyMeal(): UseModifyMealReturn {
    const queryClient = useQueryClient();

    return {
        deleteMeal: useMutation(
            async (id: number) => {
                await fetch(`http://localhost:8080/order/meal/${id}`, {
                    method: "DELETE",
                });
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries(["order"]);
                },
            }
        ),
        updateIsPaid: useMutation(
            async (vars: { id: number, isPaid: boolean }) => {
                await fetch(`http://localhost:8080/order/meal/${vars.id}/isPaid`, {
                    method: "PUT",
                    body: new URLSearchParams({
                        'isPaid': String(vars.isPaid)
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries(["order"]);
                },
            }
        ),
    }
}
