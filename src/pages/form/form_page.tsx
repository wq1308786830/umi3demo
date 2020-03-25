import React from 'react';
import { Button, List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'umi';

const Item = List.Item;

export const BasicForm = ({ dispatch, location, form }: any) => {
  const { getFieldProps, getFieldError } = form;

  // verify and submit form data
  const onSubmit = () => {
    form.validateFields({ force: true }, (error: any) => {
      if (!error) {
        const formData = form.getFieldsValue();
        dispatch({
          type: 'demo/postForm',
          payload: { ...formData, id: location.query?.id },
        });
      } else {
        Toast.fail('表单验证失败', 1);
      }
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <form>
      <List
        renderHeader={() => '基础信息填写'}
        renderFooter={() =>
          getFieldError('account') && getFieldError('account').join(',')
        }
      >
        <InputItem
          {...getFieldProps('name', {
            initialValue: 'little ant',
            rules: [{ required: true, message: '请输入姓名' }],
          })}
          clear
          error={!!getFieldError('name')}
          onErrorClick={() => {
            Toast.fail(getFieldError('name').join('、'), 1);
          }}
          placeholder="请输入姓名"
        >
          姓名
        </InputItem>

        <InputItem
          {...getFieldProps('age', {
            initialValue: 'little ant',
            rules: [{ required: true, message: '请输入年龄' }],
          })}
          clear
          error={!!getFieldError('age')}
          onErrorClick={() => {
            Toast.fail(getFieldError('age').join('、'), 1);
          }}
          placeholder="请输入年龄"
        >
          年龄
        </InputItem>

        <InputItem
          {...getFieldProps('address', {
            initialValue: 'little ant',
            rules: [{ required: true, message: '请输入地址' }],
          })}
          clear
          error={!!getFieldError('address')}
          onErrorClick={() => {
            Toast.fail(getFieldError('address').join('、'), 1);
          }}
          placeholder="请输入地址"
        >
          地址
        </InputItem>

        <InputItem
          {...getFieldProps('phone', {
            initialValue: 'little ant',
            rules: [{ required: true, message: '请输入电话' }],
          })}
          clear
          error={!!getFieldError('phone')}
          onErrorClick={() => {
            Toast.fail(getFieldError('phone').join('、'), 1);
          }}
          placeholder="请输入电话"
        >
          电话
        </InputItem>
        <Item>
          <Button type="primary" size="small" inline onClick={onSubmit}>
            提交
          </Button>
          <Button
            size="small"
            inline
            style={{ marginLeft: '2.5px' }}
            onClick={onReset}
          >
            重置
          </Button>
        </Item>
      </List>
    </form>
  );
};

const BasicFormWrapper = createForm()(BasicForm);

export default connect(({ demo, loading }: any) => ({
  demo,
  loading: loading.models.demo,
}))(BasicFormWrapper);
