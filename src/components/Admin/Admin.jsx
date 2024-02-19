import axios from 'axios';
import React from 'react';
import AdminItem from '../AdminItem/AdminItem';

function Admin(){

    let orderData = [];

    axios({
        method: 'GET',
        url: '/api/order'
    })
        .then((response) => {
            orderData = response.data;
            console.log('Order Data ', orderData);
        })
        .catch((error) => {
            console.log('Error: ', error)
        });

    return(
        <>
            <table>
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