import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function checkout() {
  const personInfo = useSelector((state) => state.customer);
  const itemInfo = useSelector((state) => state.cart);

  const checkoutSubmit = () => {
    //Do some stuff here then put on checkout button
  };

  return (
    <div>
      <div>
        <p>
          Person name <br />
          Person address <br />
          Person city <br />
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
          <tr>
            <td>useSelector Pizza</td>
            <td>useSelector Cost</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Total: Numbers</p> <hr />
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default checkout;
