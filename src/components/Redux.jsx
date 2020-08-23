import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCounter, addText } from '../actions';

export const Redux = () => {
    const [input, setInput] = useState('');
    const text = useSelector(state => state.textStore);
    const count = useSelector(state => state.counterStore);

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(changeCounter(1));
    }

    const onClickMinus = () => {
        dispatch(changeCounter(-1));
    }

    const handleChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
    }

    const handleClick = () => {
        console.log(input);
        dispatch(addText(input));
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
            <h2>Todo List</h2>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
            {/* <div>{text}</div> */}
            {text.length > 0 ? text.map((data, index) => <li key={index}>{data}</li>) : ''}
        </div>
    )
}
