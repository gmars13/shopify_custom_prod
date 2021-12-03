import { TextField } from '@shopify/polaris';
import React, { useState } from 'react'

const LoadSelectedOption = (props) => {
    const [currentOption, setcurrentOption] = useState([1]);
    
    return (
        <>
            {currentOption.map((val) => <TextField label="Store name" key={val}/>)}
        </>
    )
}

export default LoadSelectedOption
