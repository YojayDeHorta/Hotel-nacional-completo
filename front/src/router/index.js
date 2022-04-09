import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/admin/Login.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/calendario',
    name: 'calendario',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Calendario.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/admin/habitaciones',
    name: 'habitaciones',
    component: () => import( '../views/admin/Habitaciones.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/admin/checkout',
    name: 'checkout',
    component: () => import( '../views/admin/Checkout.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  
   {
    path: '/gallery',
    name: 'gallery',
    
    component: () => import( '../views/Gallery.vue')
  },
  {
    path: '/review',
    name: 'review',
    
    component: () => import( '../views/Review.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    
    component: () => import( '../views/Offers.vue')
  },
  {
    path: '/book',
    name: 'book',
    
    component: () => import( '../views/Book.vue')
  },
  {
    path: '/bookfuncional',
    name: 'bookfuncional',
    
    component: () => import( '../views/Bookfuncional.vue')
  },
    {
    path: '/services',
    name: 'services',
    
    component: () => import( '../views/Services.vue')
  },
     {
    path: '/confirm_pago',
    name: 'confirm_pago',
    
    component: () => import( '../views/Confirm_Pago.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);
  store.dispatch('leerToken')
  // console.log(store.state.token)
    if(rutaProtegida && store.state.token === null){
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
        next('/login')
    }else{
        // En caso contrario sigue...
        next()
    }

})
export default router
