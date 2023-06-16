import React from 'react'
import Pizza from '../models/pizza'

interface DisplayPizzasProps {
    pizzasList: Pizza[];
}

export const DisplayPizzas: React.FC<DisplayPizzasProps> = ({ pizzasList }) => {
    return (
        <div className='container'>
            {pizzasList.map((pizza) => {
                return pizza.title
            })}
        </div>
    )
}
