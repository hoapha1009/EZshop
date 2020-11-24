import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const handleIncreaseClickButton = () => {
        const action = increase();
        dispatch(action);
    };
    const handleDecreaseClickButton = () => {
        const action = decrease();
        dispatch(action);
    };
    return (
        <div>
            Count: {count}
            <p>
                <button onClick={handleDecreaseClickButton}>Decrease</button>
                <button onClick={handleIncreaseClickButton}>Increase</button>
            </p>
        </div>
    );
}

export default CounterFeature;
