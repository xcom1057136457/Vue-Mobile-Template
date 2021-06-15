import router from '../router/index'

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (token) {
    /*路由发生改变修改页面的title */
    if(to.meta.title) {
      document.title = to.meta.title
    }
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
})