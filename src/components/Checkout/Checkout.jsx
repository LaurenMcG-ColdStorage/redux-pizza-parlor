import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function checkout() {
  const history = useHistory();

  const customerName = useSelector((state) => state.customer.name);
  const customerAddress = useSelector((state) => state.customer.address);
  const customerCity = useSelector((state) => state.customer.city);
  const customerZip = useSelector((state) => state.customer.zip);
  const orderDetails = useSelector((state) => state.cart);

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
          {customerName} <br />
          {customerAddress} <br />
          {customerCity} <br />
          {customerZip}
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
        <tr>
          {orderDetails.map((item) => {
            <td>{item}</td>;
          })}
        </tr>
      </table>
      <div>
        <p>Total: Numbers</p> <hr />
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default checkout;
