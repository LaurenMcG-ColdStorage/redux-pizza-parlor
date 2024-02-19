import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './CustomerInfo.css';

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
            <table className='customerStyle'>
                <tbody>
                    <tr>
                        <td><label to='name'>Full Name</label></td>
                        <td><input name='name'  className='customerContent' type='text' placeholder="name" onChange={(event) => setName(event.target.value)} required></input></td>
                    </tr>
                    <tr>
                        <td><label to='address'>Street Address</label></td>
                        <td><input name='address' type='text' placeholder="street address" onChange={(event) => setAddress(event.target.value)} required></input></td>
                    </tr>
                    <tr>
                        <td><label to='city'>City</label></td>
                        <td><input name='city' type='text' placeholder="city" onChange={(event) => setCity(event.target.value)} required></input></td>
                    </tr>
                    <tr>
                        <td><label to='zip'>ZIP</label></td>
                        <td><input type='number' name='zip' placeholder="ZIP" onChange={(event) => setZip(event.target.value)} required></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input name='servedType' type='radio' id='pickup' value='pickup' onChange={(event) => setType(event.target.value)}></input>
                            <label to='pickup' > Pick Up </label>
                            <input type='radio' name='servedType' value='delivery' onChange={(event) => setType(event.target.value)}></input>
                            <label to='delivery'> Delivery</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={(event) => handleInfo(event)}>Move to Checkout</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CustomerInfo;