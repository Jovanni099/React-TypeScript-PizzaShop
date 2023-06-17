import React, { useState } from 'react'
import Pizza from '../models/pizza'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { EditPizzaForm } from './EditPizzaForm';

interface SinglePizzaProps {
    pizza: Pizza;
}

export const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className='pizza'>
            <img src={`./images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <CiEdit onClick={handleToggleEdit} />
                <RiDeleteBin6Fill />
            </div>

            {edit
                ? <EditPizzaForm data={pizza} />
                : null
            }
        </div>
    )
}
