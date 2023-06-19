import React, { useState } from 'react'
import Pizza from '../models/pizza'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { EditPizzaForm } from './EditPizzaForm';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }

    return (
        <div className='pizza'>
            <img src={`./images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <CiEdit onClick={handleToggleEdit} />
                <RiDeleteBin6Fill onClick={handleDelete} />
            </div>

            {edit
                ? <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                />
                : null
            }
        </div>
    )
}
