import React from 'react'
import Pizza from '../models/pizza'
import { SinglePizza } from './SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
}

export const DisplayPizzas: React.FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    pizza={pizza}
                    key={pizza.id}
                    updatePizza={updatePizza}
                />
            })}
        </div>
    )
}
