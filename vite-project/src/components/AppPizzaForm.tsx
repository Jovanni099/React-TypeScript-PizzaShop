import React, { FC } from 'react'
import './styles.css'
import { useState } from 'react'

const initState = {
    title: '',
    price: '',
    img: ''
}



export const AppPizzaForm: React.FC = () => {
    const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)
    return (
        <div>
            <form action="">
                <input type="text"
                    name="title"
                    placeholder="Название"
                    value=""
                    onChange={handleChange}
                />
                <input type="text"
                    name="price"
                    placeholder="Стоимость"
                    value=""
                    onChange={handleChange}
                />
                <input type="text"
                    name="img"
                    placeholder="Изображение"
                    value=""
                    onChange={handleChange}
                />
                <button
                    type='submit'>
                </button>
            </form>
        </div>
    )
}
