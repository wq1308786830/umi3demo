import React from 'react';
import { Result } from 'antd-mobile';
import './index.less';

const myImg = (src: any) => <img src={src} className="spe am-icon am-icon-md" alt="" />;

export default () => {

  return (
    <div>
      <div className="sub-title">等待处理</div>
        <Result
            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
            title="等待处理"
            message="已提交，等待处理"
        />
    </div>
  );
}
