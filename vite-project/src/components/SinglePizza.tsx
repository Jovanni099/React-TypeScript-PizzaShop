import React from 'react'
import Pizza from '../models/pizza'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Fill } from 'react-icons/ri'

interface SinglePizzaProps {
    pizza: Pizza;
}

export const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza }) => {
    return (
        <div className='pizza'>
            <img src={`./images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <CiEdit />
                <RiDeleteBin6Fill />
            </div>
        </div>
    )
}
