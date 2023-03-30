import react, {useState} from "react";

function ShowList() {
    let addItem = () => {
        let input = document.querySelector("input");
        let ul = document.getElementById("list");
        let value = input.value;
        let addli = document.createElement("li");
        addli.textContent = value;
        ul.appendChild(addli);
        input.value = "";
    }

    let removeItem = () => {
        let ul = document.getElementById("list");
        let lastli = document.querySelector("#list > li:last-child");
        if (lastli) {
            ul.removeChild(lastli);
        }
    }


    const [display, setDisplay] = useState();
    function hideShow() {
        let hideBtn = document.getElementById("hideBtn");
        if (display !== "none") {
            setDisplay("none");
            hideBtn.textContent = "Show";
        } else {
            setDisplay("");
            hideBtn.textContent = "Hide";
        }
    }

    return (
        <div>
            <input></input>
            <button onClick={addItem}>Add</button>
            <button onClick={removeItem}>Remove</button>
            <button id="hideBtn" onClick={hideShow}>Hide</button>
            <ul id="list" style={{ display: display }}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );

    
}
export default ShowList;