import react, {useState} from "react";

function ColorBox() {
    const colors = [
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
    ]
    const [colorss, setColorss] = useState(colors);

    const handleBox = () => {
        setColorss([...colorss, ...colors])
    }

    const handleClick = (e) => {
        let colorss2 = [];
        colorss2 = colorss.filter(function(color, index) {
            return index != e.target.className;
        })
        setColorss(colorss2);
    }
        
 
    return (
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={handleBox}>More boxes</button>
            <h4 id="score"> Total box: <span className="points">{colorss.length}</span></h4>

            <div className="boxes">
                {colorss.map((color, index) => (
                    <div onClick={handleClick} className = {index} key={index} 
                    style={{backgroundColor: color, width:'100px', height:'100px', float: 'left'}}>

                    </div>
                ))}

                
            </div>
        </div>
    );
}
export default ColorBox;