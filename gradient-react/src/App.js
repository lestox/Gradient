import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from './ColorPicker';

function App() {

    const [colors, setColors] = useState( [
        {
            showPicker: false,
            color: {
                r: '225',
                g: '155',
                b: '99',
                a: '2',
            },
        },
        {
            showPicker: false,
            color: {
                r: '225',
                g: '155',
                b: '99',
                a: '2',
            },
        },
        {
            showPicker: false,
            color: {
                r: '225',
                g: '155',
                b: '99',
                a: '2',
            },
        }
    ]);

    return (
        <div className="App container">
            {colors.map((color) => (
                (<ColorPicker color={color.showPicker} text={color.text} key={color.id}/>)
            ))}

        </div>
    );
}

export default App;