import React from 'react';
import {Button, Card, Col, Icon} from 'antd';
import './Product.less';

const {Meta} = Card;

export const Product = (props) => (
    <Col span={12}>
      <Card
          className={'card'}
          extra={props.defaultOffer && <div className={'extras'}>{props.defaultOffer}</div>}
          cover={
            props.productImages && <img
                alt="example"
                src={props.productImages[0].name}
                style={{height: 250}}
            />
          }
          actions={props.count ? [
                <Button onClick={props.decrementHandler} value={props.productName}><Icon type="minus"/></Button>,
                <span className={'count'}>{props.count}</span>,
                <Button onClick={props.incrementHandler} type="primary" value={props.productName}><Icon
                    type="plus"/></Button>
              ] :
              [
                <Button onClick={props.incrementHandler} value={props.productName}>Add</Button>
              ]
          }
          loading={props.isLoading}>
        <Meta
            title={props.productName || ''}
            description={`Rs. ${props.mrp}` || ''}
        />
      </Card>

    </Col>
);