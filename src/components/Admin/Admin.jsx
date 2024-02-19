import axios from 'axios';
import React from 'react';
import AdminItem from '../AdminItem/AdminItem';
import { useState, useEffect } from 'react';

import './Admin.css'

function Admin(){

    const [orderData, setOrderData] = useState([]);

    function getOrders(){
        axios({
            method: 'GET',
            url: '/api/order'
        })
            .then((response) => {
                setOrderData(response.data)
                console.log('Order Data ', orderData);
            })
            .catch((error) => {
                console.log('Error: ', error)
            });
    };

    useEffect(() => {
        getOrders();
    }, [])

    return(
        <>
            <table className='tableStyling'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Time Order Placed</td>
                        <td>Type</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((order) => {
                        return (
                            <AdminItem order={order} />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Admin;