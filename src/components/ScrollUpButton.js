import React from 'react';
import {StyledScrollUpButton} from '../styles/StyledScrollUpButton'
const ScrollUpButton = () => {

const scrollUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

    return (  

        <StyledScrollUpButton>
            <button onClick={scrollUp}>UP</button>
        </StyledScrollUpButton>
    );
}
 
export default ScrollUpButton;