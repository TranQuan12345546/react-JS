import react, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const minus = () => {
        const newCounter = counter - 1;
        return setCounter(newCounter);
    }

    const plus = () => {
        const newCounter = counter + 1;
        return setCounter(newCounter);
    }

    return (
        <div className="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style= {{color: "#333333"}}>{counter}</h1>
            <div className="btn-container">
                <button className="btn counterBtn prevBtn" onClick={minus}>Trừ</button>
                <button className="btn counterBtn nextBtn" onClick={plus}>Cộng</button>
            </div>
        </div>
    );
}
export default Counter;