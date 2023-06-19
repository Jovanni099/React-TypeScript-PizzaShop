import React from 'react'
import Pizza from '../models/pizza'
import { SinglePizza } from './SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const DisplayPizzas: React.FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    pizza={pizza}
                    key={pizza.id}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />
            })}
        </div>
    )
}
