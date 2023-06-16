import React, { ChangeEvent, FC, FormEvent } from 'react'
import './styles.css'
import { useState } from 'react'

const initState = {
    title: '',
    price: '',
    img: ''
}



export const AddPizzaForm: React.FC = () => {
    const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLElement>) => {
        // console.log('handle change >>', e.target);
        const { name, value } = e.target;
        console.log('name:', name);
        console.log('value:', value);
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('handle change >>', e.target);
    }

    console.log(newPizza);


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="title"
                placeholder="Название"
                value={newPizza.title}
                onChange={handleChange}
            />
            <input type="text"
                name="price"
                placeholder="Стоимость"
                value={newPizza.price}
                onChange={handleChange}
            />
            <input type="text"
                name="img"
                placeholder="Изображение"
                value={newPizza.img}
                onChange={handleChange}
            />
            <button type='submit'>
                + Добавить в меню
            </button>
        </form>
    )
}
