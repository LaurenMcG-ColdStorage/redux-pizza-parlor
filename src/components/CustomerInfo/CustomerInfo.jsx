import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CustomerInfo(){

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleInfo = () => {
        const action = {
            name: name,
            address: address,
            city: city,
            zip: zip
        };
        dispatch(action);
        history.push('/checkout');
     }

    return(
        <div>
            <h2>Step Two: Customer Information</h2>
            <input type='text' placeholder="name" onChange={setName} required></input>
            <input type='text' placeholder="street address" onChange={setAddress} required></input>
            <input type='text' placeholder="city" onChange={setCity} required></input>
            <input type='number' placeholder="ZIP" onChange={setZip} required></input>
            <input type='radio' name='servedType' value='pickup'>Pick Up</input> 
            <input type='radio' name='servedType' value='delivery'>Delivery</input>
            <input type='button' onClick={handleInfo}>Next</input>
        </div>
    )
}

export default CustomerInfo;