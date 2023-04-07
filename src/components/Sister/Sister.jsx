import React from "react";
import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister =() =>{
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p><big>grandpa money: {money}</big></p>
        </div>
    );
};

export default Sister;