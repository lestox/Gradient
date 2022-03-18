import React, {useState, setState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from './ColorPicker';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Gradient from "./Gradient";

function App() {

    function handleColorChange(color) {
        this.setState(prev => [...prev, color])
    }

    const [cards] = useState( [
        {
            title: 'Pick a color',
            id : generateUniqueID(),
            color: {}
        },
        {
            title: 'Pick a second color',
            id : generateUniqueID(),
            color: {}
        },
        {
            title : 'Pick a third color',
            id : generateUniqueID(),
            color: {}
        }
    ]);

    return (
        <div className="App container">
            <div className="card-group">
                {cards.map((card) => (
                    (<ColorPicker color={card.color} title={card.title} key={card.id}/>)
                ))}
            </div>
            <Gradient color={cards.color}/>
        </div>
    );
}

export default App;