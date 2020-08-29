import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/Order/Order'
import CustomerService from '@/components/CustomerService/CustomerService'
import Mine from '@/components/Mine/Mine'
import Detail from '@/components/details/Detail'
import OrderPaid from '@/components/Order/pages/Paid'
import OrderAll from '@/components/Order/pages/All'
import OrderRefund from '@/components/Order/pages/Refund'
import OrderGo from '@/components/Order/pages/Go'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: '/order/paid',
          name: 'OrderPaid',
          component: OrderPaid
        },
        {
          path: '/order/all',
          name: 'OrderAll',
          component: OrderAll
        },
        {
          path: '/order/refund',
          name: 'OrderRefund',
          component: OrderRefund
        },
        {
          path: '/order/go',
          name: 'OrderGo',
          component: OrderGo
        }
      ]
    },
    {
      path: '/customer',
      name: 'CustomerService',
      component: CustomerService
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
