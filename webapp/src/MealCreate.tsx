import { FormEvent, ReactElement, useState } from "react";
import { DefaultMeal, NewMeal } from "./data/order.types";
import { Button, TextField } from "@mui/material";
import { useAddMeal } from "./data/useAddMeal";
import { useParams } from "react-router-dom";

const MealCreate = (): ReactElement => {
    const [newMeal, setNewMeal] = useState<NewMeal>(DefaultMeal);
    const createMeal = useAddMeal();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <></>;
    }

    const submit = (e: FormEvent) => {
        e.preventDefault();
        createMeal.mutate({ meal: newMeal, orderId: id }, { onSuccess: () => setNewMeal(DefaultMeal)});
    }

    return <form onSubmit={submit}>
            <TextField
                size="small"
                label="Person"
                variant="standard"
                value={newMeal.owner}
                margin="dense"
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, owner: e.target.value }))}
            />
            <TextField
                size="small"
                label="Gericht"
                variant="standard"
                value={newMeal.mealName}
                margin="dense"
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, mealName: e.target.value }))}
            />
            <TextField
                multiline
                size="small"
                label="Anmerkung"
                variant="standard"
                value={newMeal.note}
                margin="dense"
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, note: e.target.value }))}
            />
            <TextField
                size="small"
                type="number"
                label="Preis"
                variant="standard"
                value={newMeal.price}
                margin="dense"
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, price: e.target.value }))}
            />
        <Button variant="outlined" type="submit" sx={{ mt: 1.5 }} color="error">Gericht hinzufügen</Button>
    </form>;
};
export default MealCreate;
