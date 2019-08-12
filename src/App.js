import React from 'react';
import {Input, Layout} from 'antd';
import {connect} from 'react-redux';
import {AppHeader} from './components/AppHeader/Header';
import './App.less';
import ProductList from './container/ProductList';
import {SEARCH_PRODUCT} from './actions';

const {Search} = Input;

class App extends React.PureComponent {

  render() {
    const {onSearch, totalCount, totalPrice} = this.props;

    return (
        <Layout className='appLayout'>
          <AppHeader totalCount={totalCount} totalPrice={totalPrice}/>
          <Layout.Content>
            <div className='searchContainer'>
              <Search
                  placeholder="Search Products"
                  allowClear
                  enterButton
                  onChange={onSearch}
                  className={'searchBox'}
              />
            </div>
            <ProductList/>
          </Layout.Content>
        </Layout>
    );
  }

}

export default connect(
    ({
       totalCount,
       totalPrice
     }) => ({
      totalCount,
      totalPrice
    }),
    dispatch => ({
      dispatch,
      onSearch(e) {
        e.preventDefault();
        const {value} = e.target;
        dispatch({type: SEARCH_PRODUCT, payload: value});
      }
    })
)(App);
