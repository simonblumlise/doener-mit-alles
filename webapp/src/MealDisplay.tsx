import { ReactElement } from "react";
import { Meal } from "./data/order.types";
import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { useModifyMeal } from "./data/useModifyMeal";


interface MealDisplayProps {
    orderId: string;
    meals: Meal[];
}

const MealDisplay = ({ orderId, meals }: MealDisplayProps): ReactElement => {

    const { deleteMeal, updateIsPaid } = useModifyMeal();

    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>Person</TableCell>
                    <TableCell>Bestellung</TableCell>
                    <TableCell>Anmerkung</TableCell>
                    <TableCell>Preis</TableCell>
                    <TableCell>Bezahlt?</TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {meals.map((m) => (
                    <TableRow key={m.id}>
                        <TableCell>{m.owner}</TableCell>
                        <TableCell>{m.mealName}</TableCell>
                        <TableCell>{m.note}</TableCell>
                        <TableCell>{m.price}</TableCell>
                        <TableCell>{<Checkbox checked={m.isPaid}
                                              onChange={() => updateIsPaid.mutate({ orderId, mealId: m.id, isPaid: !m.isPaid })} />}</TableCell>
                        <TableCell><Button onClick={() => deleteMeal.mutate({ orderId, mealId: m.id })}>Löschen</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
};

export default MealDisplay;