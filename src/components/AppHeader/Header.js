import React from 'react';
import {Button, Icon, Layout} from 'antd';

import './Header.less';

const {Header} = Layout;

export const AppHeader = (props) => (
    <Header className='appHeader'>
      <div className='headerLeft'>
        <div className='logo'/>
      </div>
      <div className='headerRight'>
        {props.totalCount ?
            <Button type="primary" className={'buttonContainer'}>
              {props.totalCount} items | Rs. {props.totalPrice}
              <span className={'text'}>View Bag <Icon type='right' className={'rightArrow'}/></span></Button> :
            ''}
        <span className={'icon'}><Icon type="user"/></span>
      </div>
    </Header>
);