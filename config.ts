export default {
  dva: {
    immer: true,
    hmr: false,
  },
  plugins: [
    ['import', { libraryName: 'antd-mobile', style: true }], // `style: true` 会加载 less 文件
  ],
};
