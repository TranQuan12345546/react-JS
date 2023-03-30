import react, {useState} from "react";

function ColorBox() {
    const [shape, setShape] = useState("square");
    const [color, setColor] = useState("deeppink");

    function handleBoxClick() {
        setColor("green");
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color , width : '100px', height : '100px' }}
            onClick={handleBoxClick}
        ></div>
    );
}
export default ColorBox;