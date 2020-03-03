import React, {useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useSelector, useDispatch } from 'react-redux';
import Order from '../../components/Order'
import { StoreOrder } from '../../api/forms/TodoListForms';
import {ADD_ORDER, FETCH_ORDERS, RESET_ORDERS} from '../../store/orders';

import {
    Container,
    Header,
    OrdersWrapper,
    AddButtonWrapper,
} from './styled'

export default function TodoList() {
    const orders = useSelector(state => state.orders)

    const dispatch = useDispatch()
    const addOrder = () => void dispatch({
        type: ADD_ORDER,
        payload: { order: StoreOrder.createEmpty() }
    })
    const resetOrder = () => void dispatch({
        type: RESET_ORDERS,
    })
    const fetchOrders = () => void dispatch({
        type: FETCH_ORDERS,
    })

    useEffect(() => {
      fetchOrders()
    }, [])

    return (
      <Container>
          <Header>
              <h1>Andro Video Todo-List</h1>
              <Button onClick={resetOrder} variant="outlined" color="secondary">Reset</Button>
          </Header>

          <OrdersWrapper>
              { orders.length ? orders.map(it => (<Order key={it.id} {...it}/>)) : 'Have no any orders.' }
          </OrdersWrapper>

          <AddButtonWrapper>
              <IconButton onClick={addOrder}><AddCircleIcon color="primary" fontSize="large"/></IconButton>
          </AddButtonWrapper>
      </Container>
    );
}
