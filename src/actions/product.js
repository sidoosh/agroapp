export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const RENDER_PRODUCTS = 'RENDER_PRODUCTS';

export const loadProduct = () => ({
  type: LOAD_PRODUCTS,
  isLoading: true
})