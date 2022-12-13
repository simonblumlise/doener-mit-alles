import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { NewOrder } from "./order.types";


export function useCreateOrder() {
  const navigate = useNavigate();

  return useMutation(
    async (order: NewOrder) => {
      return await fetch(`${import.meta.env.VITE_BACKEND}/order`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },
      {
        onSuccess: (data) => {
            if(data.ok){
                data.text().then(id => navigate(`${import.meta.env.BASE_URL}/order/${id}`))
            }else{
                alert('Du Opfer!');
            }
        },
      }
  );
}
