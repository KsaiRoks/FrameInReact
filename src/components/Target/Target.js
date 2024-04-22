import React, { useState } from 'react';
import MathTarget from '../../modules/Target/MathTarget';

const Target = () => {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [count, setCount] = useState("");
    const [result, setResult] = useState(0);

    const shootHandler = () => {
        const target = new MathTarget();
        let res = result;
        res += target.shoot(x, y) * count;
        setResult(res);
    }

    const resetHandler = () => {
        setResult(0);
        setX("");
        setY("");
        setCount("");
    }

    return (<>
        <div className="containerTarger">
            <input value={x} onChange={(e) => setX(e.target.value)} placeholder="Координата X" className="inputTarget" />
            <input value={y} onChange={(e) => setY(e.target.value)} placeholder="Координата Y" className="inputTarget" />
            <input value={count} onChange={(e) => setCount(e.target.value)} placeholder="Количество выстрелов" className="inputTarget" />
        </div>

        <button className="buttonTarger" onClick={shootHandler}>Выстрелить</button>
        <button className="buttonTarger" onClick={resetHandler}>Сбросить очки</button>
        <span className="buttonTarger">Результат: {result}</span>
    </>);
};

export default Target;