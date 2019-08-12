import React from 'react';
import {Button, Card, Col, Icon} from 'antd';

const {Meta} = Card;

export const Product = (props) => (
    <Col span={12}>
      <Card
          style={{width: 300, marginTop: 16}}
          cover={
            props.productImages && <img
                alt="example"
                src={props.productImages[0].name}
                style={{height: 250}}
            />
          }
          actions={props.count ? [
                <Button onClick={props.decrementHandler} value={props.productName}><Icon type="minus"/></Button>,
                <span style={{fontSize: 16, fontWeight: 'bold'}}>{props.count}</span>,
                <Button onClick={props.incrementHandler} type="primary" value={props.productName}><Icon type="plus"/></Button>
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