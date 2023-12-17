import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import UploadPage from '../views/UploadPage.vue'
import Products from '../views/Products.vue'
import ProductItem from '../views/ProductItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/upload',
      name: 'UploadPage',
      component: UploadPage
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/productitem/:id',
      name: 'ProductItem',
      component: ProductItem
    },
  ]
})

export default router
