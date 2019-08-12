import {DECREMENT_PRODUCT, INCREMENT_PRODUCT, RENDER_PRODUCTS, SEARCH_PRODUCT} from '../actions';
import {LOAD_PRODUCTS} from '../actions/product';
import each from 'lodash/each';
import extend from 'lodash/extend';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

const mergeByProperty = (arr1, arr2, prop) => {
  each(arr2, function(arr2obj) {
    let arr1obj = find(arr1, function(arr1obj) {
      return arr1obj[prop] === arr2obj[prop];
    });

    arr1obj ? extend(arr1obj, arr2obj) : arr1.push(arr2obj);
  });
  return arr1;
};

const updateWebStorage = (products, totalPrice, totalCount) => {
  window.sessionStorage.setItem('products', JSON.stringify(products));
  window.sessionStorage.setItem('totalPrice', totalPrice);
  window.sessionStorage.setItem('totalCount', totalCount);
};

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case RENDER_PRODUCTS: {
      const products = JSON.parse(window.sessionStorage.getItem('products'));
      const totalCount = parseInt(window.sessionStorage.getItem('totalCount'));
      const totalPrice = parseInt(window.sessionStorage.getItem('totalPrice'));

      if (!isEmpty(products)) {
        return {
          ...state,
          products,
          productsFromServer: products,
          isLoading: false,
          totalPrice,
          totalCount
        };
      }

      return {
        ...state,
        products: action.products,
        productsFromServer: action.products,
        isLoading: false
      };
    }

    case LOAD_PRODUCTS: {
      return {
        ...state,
        products: Array(4).fill({productName: 'mockPro'}),
        isLoading: true
      };
    }

    case INCREMENT_PRODUCT: {
      let products = [...state.products];
      let totalCount = state.totalCount;
      let totalPrice = state.totalPrice;
      const {payload} = action;
      let index = products.findIndex(({productName}) => productName === payload);
      products[index] = {...products[index], count: products[index]['count'] + 1 || 1};
      totalCount += 1;
      totalPrice += products[index]['sellingPrice'];
      updateWebStorage(products, totalPrice, totalCount);
      return {
        ...state,
        products,
        totalCount,
        totalPrice
      };
    }

    case DECREMENT_PRODUCT: {
      let products = [...state.products];
      let totalCount = state.totalCount;
      let totalPrice = state.totalPrice;
      const {payload} = action;
      let index = products.findIndex(({productName}) => productName === payload);
      products[index] = {...products[index], count: products[index]['count'] - 1 || 0};
      totalCount -= 1;
      totalPrice -= products[index]['sellingPrice'];
      updateWebStorage(products, totalPrice, totalCount);

      return {
        ...state,
        products,
        totalCount,
        totalPrice
      };
    }

    case SEARCH_PRODUCT: {
      const products = [...state.products];
      const {payload} = action;
      const filteredProducts = payload ?
          products.filter(({productName}) => productName.toLowerCase().startsWith(payload.toLowerCase()))
          :
          [...state.productsFromServer];

      return {
        ...state,
        products: filteredProducts
      };
    }
    default:
      return state;
  }
}