
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';



function Button(){
    const [subscribe,setSubscribe] = useState(false);
    return (
        
            <>
            <button
            onClick={() => {


                setSubscribe(!subscribe);
                toast.success("You have");
            }}
            
            
            
            
            
            >{
                subscribe ? 'Subscribed' : 'Subscribete'

            }</button>
            <ToastContainer />
            
            </>    
    )
}

export default Button;