import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <section className="flex">
                <MoneyContext.Provider value={[money,setMoney]}>
                    <RingContext.Provider value='golden Ring'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;

/* 
* 1.create context and export
* 2. create a provider and pass a value
* 3. use useContext to receive
*** */