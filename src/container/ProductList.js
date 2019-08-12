import React from 'react';
import {connect} from 'react-redux';
import {Row, Icon} from 'antd';
import './ProductList.less';
import {Product} from '../components/Product/Product';
import {DECREMENT_PRODUCT, INCREMENT_PRODUCT} from '../actions';

class ProductList extends React.PureComponent {

  getTemplate(products, isLoading, handleAdd, handleSubtract) {
    const noOfProducts = products.length;
    let template = [];
    if (noOfProducts) {

      for (let i = 0; i < noOfProducts; i = i + 2) {
        const product1 = {isLoading, incrementHandler: handleAdd, decrementHandler: handleSubtract, ...products[i]};
        const product2 = {isLoading, incrementHandler: handleAdd, decrementHandler: handleSubtract, ...products[i + 1]};

        template.push(
            <Row key={i} className={'row'} gutter={8}>
              <Product key={i} {...product1} />
              {product2.productName && <Product key={i + 1} {...product2} />}
            </Row>);
      }
    } else {
      template = <div className='emptyPage'> Product not found <span><Icon type={'frown'}/></span></div>
    }
    return template;
  }

  render() {

    const {
      isLoading,
      products,
      handleAdd,
      handleSubtract
    } = this.props;

    this.template = this.getTemplate(products, isLoading, handleAdd, handleSubtract);
    return (
        <div className={'productList'}>
          {this.template}
        </div>
    );
  }
}

export default connect(
    ({
       products,
       isLoading
     }) => ({
          products,
          isLoading
        }
    ),
    dispatch => ({
      dispatch,
      handleAdd(e) {
        e.preventDefault();
        const {value} = e.target;
        dispatch({type: INCREMENT_PRODUCT, payload: value});
      },
      handleSubtract(e) {
        e.preventDefault();
        const {value} = e.target;
        dispatch({type: DECREMENT_PRODUCT, payload: value});
      }
    })
)
(ProductList);