import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/detail/:id', component: '@/pages/detail/[id]' },
    { exact: true, path: '/form', component: '@/pages/form/form_page' },
    { exact: true, path: '/done', component: '@/pages/done' },
  ],
});
