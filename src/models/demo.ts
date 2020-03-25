import { Effect, Reducer, Loading, history } from 'umi';
import qs from 'qs';
import services from '../service/demo';

/**
 * 组件connect时的props数据结构
 */
export interface DemoPropsType {
  demo: DemoModelState;
  loading: Loading
}

export interface DemoModelState {
  list: []; // 项目列表
  detail: {}; // 项目详情
  postResult: {}; // 表单提交返回结果
}

export interface DemoModelType {
  namespace: 'demo';
  state: DemoModelState;
  effects: {
    getList: Effect;
    getDetail: Effect;
    postForm: Effect;
  };
  reducers: {
    save: Reducer<DemoModelState>;
  };
}

const DemoModel: DemoModelType = {
  namespace: 'demo',

  state: {
    list: [],
    detail: {},
    postResult: {},
  },

  effects: {
    /**
     * 获取项目列表
     * @param tools
     * @param call
     * @param put
     */
    * getList({}, { call, put }: any) {
      const { status, data } = yield call(services.getList);
      if (status === 200) {
        yield put({
          type: 'save',
          payload: { list: data || [] },
        });
      }
    },
    /**
     * 根据列表项id获取项目详情
     * @param payload
     * @param call
     * @param put
     * @param tools
     */
    * getDetail({ payload }: any, { call, put }: any) {
      const { status, data } = yield call(services.getDetailById, payload);
      if (status === 200) {
        yield put({
          type: 'save',
          payload: { detail: data || {} },
        });
      }
    },
    /**
     * form表单提交并返回结果更新state
     * @param payload
     * @param call
     * @param put
     */
    * postForm({ payload }: any, { call, put }: any) {
      const { status, data } = yield call(services.postForm, qs.stringify(payload));
      if (status === 200) {
        yield put({
          type: 'save',
          payload: { postResult: data || {} },
        });
        history.push(`/done`);
      }
    },
  },

  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default DemoModel;
