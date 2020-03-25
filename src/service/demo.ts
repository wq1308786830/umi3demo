import { request } from 'umi';

const requestConfig = {
  prefix: 'http://yapi.demo.qunar.com/mock/91025',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

/**
 * 二次封装umi内置request方法，目前只添加options配置
 * @param url 请求url
 * @param options 请求options
 * @private
 */
const _fetch = (url: string, options: any) => {
  return request(url, { ...requestConfig, ...options });
};

/**
 * 获取项目列表
 */
const getList = () => _fetch('/demo/list', { method: 'get' });

/**
 * 根据列表项id获取详情
 * @param id 列表项id
 */
const getDetailById = (id: string) => _fetch('/demo/detail', {
  method: 'get',
  params: {
    id,
  },
});

/**
 * 提交表单
 * @param formData 表单数据
 */
const postForm = (formData: any) => _fetch('/demo/saveOrUpdate', {
  method: 'post',
  data: formData,
});

export default {
  getList,
  getDetailById,
  postForm,
};
