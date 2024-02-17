import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CustomerInfo(){

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleInfo = (event) => {
        const action = {
            type: 'ADD_CUSTOMER',
            payload:{
            name: name,
            address: address,
            city: city,
            zip: zip,
            type: type
            }
        };
        dispatch(action);
        history.push('/checkout');
     }

    return(
        <>
            <h2>Step Two: Customer Information</h2>
            <label to='name'>Full Name</label>
            <input name='name'  className='customerContent' type='text' placeholder="name" onChange={(event) => setName(event.target.value)} required></input><br />
            <label to='address'>Street Address</label>
            <input name='address' type='text' placeholder="street address" onChange={(event) => setAddress(event.target.value)} required></input><br />
            <label to='city'>City</label>
            <input name='city' type='text' placeholder="city" onChange={(event) => setCity(event.target.value)} required></input><br />
            <label to='zip'>ZIP</label>
            <input type='number' name='zip' placeholder="ZIP" onChange={(event) => setZip(event.target.value)} required></input><br />
            <input name='servedType' type='radio' id='pickup' value='pickup' onChange={(event) => setType(event.target.value)}></input>
            <label to='pickup' >Pick Up</label><br />
            <input type='radio' name='servedType' value='delivery' onChange={(event) => setType(event.target.value)}></input>
            <label to='delivery'>Delivery</label><br />
            <button onClick={(event) => handleInfo(event)}>Next</button>
        </>
    )
}

export default CustomerInfo;