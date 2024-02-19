import './AdminItem.css';

function AdminItem({order}){
    console.log('order: ', order)
    return (
        <tr key={order.id} 
        className={`${order.id}` % 2 === 0 ? 'rowStylingOne' : 'rowStylingTwo'}>
            <td>{order.customer_name}</td>
            <td>{order.time}</td>
            <td>{order.type}</td>
            <td>{order.total}</td>
        </tr>
    )
}

export default AdminItem;