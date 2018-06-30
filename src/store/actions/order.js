import * as actionTypes from './actionTypes';
import axios from "../../axios-order";

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
};

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }

};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }

};

export const purchaseBurgerProcess = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
        .then(response => {
          console.log(response.data);
          dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        })
        .catch(error => {
          console.log(error);
          dispatch(purchaseBurgerFail(error))
        });
    }
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
};

export const fetchOrdersProcess = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('/orders.json')
        .then(response => {
          const fetchOrders = [];
          for(let key in response.data){
            fetchOrders.push({
              ...response.data[key],
              id: key
            });
          }
          dispatch(fetchOrdersSuccess(fetchOrders));
        })
        .catch(error => {
          dispatch(fetchOrdersFail(error))
        });
  }
};



