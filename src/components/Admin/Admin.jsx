import axios from 'axios'

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
                    {orderData.map(order => {
                        return (
                            <tr key={order.id}>
                                <td>{order.customer_name}</td>
                                <td>{order.time}</td>
                                <td>{order.type}</td>
                                <td>{order.total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Admin;