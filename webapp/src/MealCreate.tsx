import {ReactElement, useState} from "react";
import {DefaultMeal, Meal, newDefaultOrder} from "./data/order.types";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";

const MealCreate = ():ReactElement => {
    const [newMeal, setNewMeal] = useState<Meal>(DefaultMeal);
    return <div>
        <div>
            <TextField
                label="Person"
                variant="outlined"
                value={newMeal.owner}
                onChange={(e) => setNewMeal((prevState) => ({...prevState, owner: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                label="Gericht"
                variant="outlined"
                value={newMeal.owner}
                onChange={(e) => setNewMeal((prevState) => ({...prevState, mealName: e.target.value}))}
            />
        </div>
        <div>
            <TextField
                label="Preis"
                variant="outlined"
                value={newMeal.owner}
                onChange={(e) => setNewMeal((prevState) => ({...prevState, price: e.target.value}))}
            />
        </div>
        <div>
            <FormControlLabel control={<Checkbox value={newMeal.isPaid}
                                                 onClick={(e) => setNewMeal((prevState) => ({...prevState, isPaid: !prevState.isPaid}))}
/>} label="bezahlt" />
        </div>
        <div>
            <TextField
                label="Notiz"
                variant="outlined"
                value={newMeal.owner}
                onChange={(e) => setNewMeal((prevState) => ({...prevState, note: e.target.value}))}
            />
        </div>
    </div>;
};
export default MealCreate;
