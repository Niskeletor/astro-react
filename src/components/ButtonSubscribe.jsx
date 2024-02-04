
import {useState} from 'react';



function Button(){
    const [subscribe,setSubscribe] = useState(false);
    return (
        <button
            onClick={() => setSubscribe(!subscribe)}
            
            
            
            
            
            >{
                subscribe ? 'Subscribed' : 'Subscribete'

            }</button>
    )
}

export default Button;