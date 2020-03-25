import React, { FC, useEffect } from 'react';
import { List } from 'antd-mobile';

import { DemoModelState, ConnectProps, connect, history } from 'umi';
import { DemoPropsType } from '@/models/demo';
import styles from './index.less';

const Item = List.Item;
const Brief = Item.Brief;

interface PageProps extends ConnectProps {
  demo: DemoModelState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = ({ demo, dispatch }) => {
  const { list } = demo;

  useEffect(() => {
    // @ts-ignore
    dispatch({ type: 'demo/getList', payload: {} });
  }, []);

  return (
    <div>
      <List className="my-list">
        {list && list.map((item: any) => (
          <Item key={item.id} onClick={() => {
            history.push(`/detail/${item.id}`);
          }} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            {item.title} <Brief>{item.description}</Brief>
          </Item>
        ))}
      </List>
    </div>
  );
};


export default connect(({ demo, loading }: DemoPropsType) => ({
  demo,
  loading: loading.models.demo,
}))(IndexPage);
