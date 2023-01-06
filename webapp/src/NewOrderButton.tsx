import { ReactElement } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewOrderButton = (): ReactElement => {
    const navigate = useNavigate();
    return <Button onClick={() => navigate('/')} color="error">Neue Bestellung</Button>;
}

export default NewOrderButton;