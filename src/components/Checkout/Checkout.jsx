import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function checkout() {
  const personInfo = useSelector((state) => state.customer);
  const itemInfo = useSelector((state) => state.cart);
  const history = useHistory();

  //for reference
  //app.use('/api/order', orderRouter);
  // const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
  // VALUES ($1, $2, $3, $4, $5, $6)

  //Store info
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [orderType, setOrderType] = useState('');
  const [total, setTotal] = useState(0);

  setName('');
  setAddress('');
  setCity('');
  setZip('');
  setOrderType('');
  setTotal('');

  const checkoutSubmit = () => {
    //Do some stuff here then put on checkout button
    history.push('/');
  };

  return (
    <div>
      <div>
        <p>
          Person name <hr />
          Person address <hr />
          Person city <hr />
        </p>
      </div>
      <div>
        <p>Type: Pickup/Delivery</p>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Cost</th>
        </tr>
        <tr>useSelector Pizza</tr>
        <tr>useSelector Cost</tr>
      </table>
      <div>
        <p>Total: Numbers</p> <hr />
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default checkout;
