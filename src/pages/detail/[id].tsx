import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { connect, history } from 'umi';
import { DemoPropsType } from '@/models/demo';

export const Detail = ({ demo, dispatch, match }: any) => {
  const { params } = match;
  const { detail } = demo;

  useEffect(() => {
    dispatch({ type: 'demo/getDetail', payload: params.id });
  }, []);

  return (
    <div>
      {detail && (
        <>
          <h3>{detail.title}</h3>
          <p>{detail.detail}</p>
          <Button type='primary' size='small' onClick={() => history.push(`/form?id=${detail.id}`)}>填写信息</Button>
        </>
      )}
    </div>
  );
};

export default connect(({ demo, loading }: DemoPropsType) => ({
  demo,
  loading: loading.models.demo,
}))(Detail);
