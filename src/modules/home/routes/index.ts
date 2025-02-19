export default [
    {
      path: '/',
      component: () => import('../views/ViewHome.vue'),
      name: 'ViewHome',
      props: true,
      meta: {
        module: 'home'
      }
    },
  ]
  