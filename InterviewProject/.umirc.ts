import { defineConfig } from 'umi';
import { menuData } from './menuData';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: './../layout/index.tsx',
      routes: [
        {
          path: '/',
          redirect: '/welcome',
        },
        ...menuData
      ]
    },
  ],
  fastRefresh: {},
});
