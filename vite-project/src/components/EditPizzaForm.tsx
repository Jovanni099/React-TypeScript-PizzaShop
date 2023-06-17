import React, { ChangeEvent, FormEvent, useState } from 'react';
import Pizza from '../models/pizza';

interface EditPizzaFormProps {
    data: Pizza;
}

export const EditPizzaForm: React.FC<EditPizzaFormProps> = ({ data }) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = editPizza;
        if (title && price && img) {
            console.log(editPizza);
        }
    }

    console.log(editPizza);


    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                name='title'
                type='text'
                placeholder='Название'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name='price'
                type='text'
                placeholder='Название'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name='img'
                type='text'
                placeholder='Изображение'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type='submit'>
                Подтвердить
            </button>
        </form>
    )
}
