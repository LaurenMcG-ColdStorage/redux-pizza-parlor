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

    const handleInfo = (event) => {
        const action = {
            type: 'ADD_CUSTOMER',
            payload:{
            name: name,
            address: address,
            city: city,
            zip: zip
            }
        };
        dispatch(action);
        history.push('/checkout');
     }

    return(
        <>
            <h2>Step Two: Customer Information</h2>
            <input type='text' placeholder="name" onChange={(event) => setName(event.target.value)} required></input><br />
            <input type='text' placeholder="street address" onChange={(event) => setAddress(event.target.value)} required></input><br />
            <input type='text' placeholder="city" onChange={(event) => setCity(event.target.value)} required></input><br />
            <input type='number' placeholder="ZIP" onChange={(event) => setZip(event.target.value)} required></input><br />
            <input type='radio' name='servedType' id='pickup 'value='pickup'></input>
            <label for='pickup'>Pick Up</label><br />
            <input type='radio' name='servedType' value='delivery'></input>
            <label for='delivery'>Delivery</label><br />
            <button onClick={(event) => handleInfo(event)}>Next</button>
        </>
    )
}

export default CustomerInfo;