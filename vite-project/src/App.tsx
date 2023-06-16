// import React from 'react';
import './App.css';
import { AddPizzaForm } from './components/AddPizzaForm';

let pizza: string = 'salami';
pizza = 'cheese';
// pizza = 20;

let price: number = 20;
// price = true;

let atStock: boolean = true;

let pizzas: string[] = ['salami', 'cheese'];
// pizzas = true;
// let numbers: number[] = [1,2,3];

// let order: { title: string, quantity: number } = { title: 'margarita', quantity: 4 }
// это будет работать, но мы не сможем переиспользовать наш тип в других частях приложения, этот тип придется каждый раз прописывать заново.  
// чтобы переиспользовать наш тип мы можем создать interface, а второй способ это использовать type
// order = { title: 'peperoni', quantity: 12 };

type Order = {
  title: string,
  quantity?: number // Если мы захотим, мы можем сделать любое из наших свойств не обязательными в нашем объекте и для этого мы напротив этого свойства ставим знак вопроса
}
const order: Order = { title: 'margarita', quantity: 10 };
/* И так как у нас есть отдельный тип Order, то мы можем переиспользовать его, например есть массив orders */
let orders: Order[] = [
  { title: 'margarita' },
  { title: 'salami', quantity: 10 },
  { title: 'margarita' },
];

/* еще есть объединения или union, это когда какие-то переменные в зависимости от какого-то сценария могут относиться к разным типам. К примеру есть 
переменная number, ее исходное значение является null, и через какое-то время ей присваивается какое-то число. Соответственно изначально тип данных переменной
number это null, поэтому мы видим ошибку, потому что изначально тип данных это null, потом он становится 10. Это не правильно, соответственно здесь мы можем
использовать объединения с помощью |, то есть тип переменной number может быть null|number.
 */

let number: null | number = null;
// number = 10;





export const App: React.FC = () => {
  return (
    <div className='App'>
      <div className="wrap">
        <span className="heading">
          Наша пиццерия
        </span>
        <AddPizzaForm />
      </div>
    </div>
  )
}

