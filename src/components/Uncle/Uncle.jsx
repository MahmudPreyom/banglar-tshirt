import React from "react";
import { useContext } from "react";
import Cusin from "../Cusin/Cusin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle =() =>{
    const [money, setMoney]= useContext(MoneyContext) 
    return (
        <div>
            <h2>Uncle</h2>
            <p><big>grandpa money: {money}</big></p>
            <button onClick={() => setMoney(money+1000)}>Send 1000tk</button>
            <section className="flex">
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;