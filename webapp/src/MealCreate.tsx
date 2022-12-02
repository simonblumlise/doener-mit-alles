import { FormEvent, ReactElement, useState } from "react";
import { DefaultMeal, NewMeal } from "./data/order.types";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useAddMeal } from "./data/useAddMeal";

const MealCreate = (): ReactElement => {
    const [newMeal, setNewMeal] = useState<NewMeal>(DefaultMeal);
    const createMeal = useAddMeal();

    const submit = (e: FormEvent) => {
        e.preventDefault();
        createMeal.mutate(newMeal);
    }

    return <form onSubmit={submit}>
        <div>
            <TextField
                size="small"
                label="Person"
                variant="standard"
                value={newMeal.owner}
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, owner: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                size="small"
                label="Gericht"
                variant="standard"
                value={newMeal.mealName}
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, mealName: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                multiline
                size="small"
                label="Anmerkung"
                variant="standard"
                value={newMeal.note}
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, note: e.target.value }))}
            />
        </div>
        <div>
            <TextField
                size="small"
                type="number"
                label="Preis"
                variant="standard"
                value={newMeal.price}
                onChange={(e) => setNewMeal((prevState) => ({ ...prevState, price: e.target.value }))}
            />
        </div>
        <div>
            <FormControlLabel control={
                <Checkbox value={newMeal.isPaid}
                          onClick={() => setNewMeal((prevState) =>
                              ({ ...prevState, isPaid: !prevState.isPaid })
                          )}
                />} label="bezahlt" />
        </div>
        <Button type="submit">Gericht hinzufügen</Button>
    </form>;
};
export default MealCreate;
