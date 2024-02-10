import { useSelector } from 'react-redux';

function checkout() {
  const checkoutSubmit = () => {
    //Do some stuff here then put on checkout button
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
