import { useMutation, UseMutationResult, useQueryClient } from "react-query";

interface DeleteMealVars {
    orderId: string,
    mealId: string
}

interface UpdateMealIsPaid {
    orderId: string,
    mealId: string,
    isPaid: boolean
}

interface UseModifyMealReturn {
    deleteMeal: UseMutationResult<void, unknown, DeleteMealVars>
    updateIsPaid: UseMutationResult<void, unknown, UpdateMealIsPaid>
}

export function useModifyMeal(): UseModifyMealReturn {
    const queryClient = useQueryClient();

    return {
        deleteMeal: useMutation(
            async (vars) => {
                await fetch(`${import.meta.env.VITE_BACKEND}/order/${vars.orderId}/meal/${vars.mealId}`, {
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
            async (vars) => {
                await fetch(`${import.meta.env.VITE_BACKEND}/order/${vars.orderId}/meal/${vars.mealId}/isPaid`, {
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
