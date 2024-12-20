import React, {useState} from 'react';
import './beauty.css'

function BMI(){
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [value, setValue] = useState();
    const [talk, setTalk] = useState("Your BMI value will be displayed here")


    function handleCalculate(){
        setValue(weight/(height*height))
        if (18.5 < value && value < 24.9) {
            setTalk("✨You're healthy✨");
        } else if (value < 18.5) {
            setTalk("🦴You're underweight🦴");
        } else if (value > 24.9) {
            setTalk("💩You're overweight💩");
        }
    }


    return(
        <>
        <div className='container'>
            <div className='sub-container'>
                <div className='title'>
                    <h1>BMI Calculator</h1>
                </div>
                <div className='weight'>
                    <input type='text' value={weight} className='weight-input' onChange={(e) => setWeight(e.target.value)} placeholder='Enter your weight in KG' />
                    
                </div>
                <div className='height'>
                    <input type='text' value={height} className='height-input' onChange={(event) => setHeight(event.target.value)} placeholder='Enter your height in meters' />
                    
                </div>
                <div className='btn'>
                    <button className='calc-btn' onClick={handleCalculate}>Calculate</button>
                </div>
                {value} <br />
                {talk}
            </div>
        </div>
        </>
    )
}

export default BMI