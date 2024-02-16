import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function checkout() {
  const history = useHistory();


  const [total, setTotal] = useState();

  const customerDetails = useSelector((state) => state.customer);
  const orderDetails = useSelector((state) => state.cart);
  //const itemName = useSelector((state) => state.cart.name);
  //const orderTotal = useSelector((state) => state.cart.cost);


  //for reference
  //app.use('/api/order', orderRouter);
  // const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
  // VALUES ($1, $2, $3, $4, $5, $6)

  const checkoutSubmit = () => {
    //Do some stuff here then put on checkout button
    history.push('/pizzaList');
  };

  return (
    <div>
      <div>
        <p>
          {customerDetails.name} <br />
          {customerDetails.address} <br />
          {customerDetails.city} <br />
          {customerDetails.zip}
        </p>
      </div>
      <div>
        <p>Type: Pickup/Delivery</p>
      </div>
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item, i) => {
            <>
              {setTotal(total + item.price)}
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            </>;
          })}
        </tbody>      
      </table>
      <div>
        <p>Total: {total}</p> <hr />
        <button onClick={checkoutSubmit}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default checkout;
