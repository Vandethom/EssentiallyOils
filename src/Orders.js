import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
            .collection('users')
            .doc(user?.uid)
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [])
    
    return (
        <div className="orders">
            <h1>Vos commandes</h1>
            <div className="orders__order">
                { orders?.map(order => (
                    <Orders order={ order } />
                ))}
            </div>
        </div>
    )
}

export default Orders
