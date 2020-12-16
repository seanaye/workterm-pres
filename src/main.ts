import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { 
    path: '/',
    component: defineAsyncComponent(() => import('/src/layout/Main.vue')),
    children: [
      { path: '', redirect: '0' },
      { path: '0', component: defineAsyncComponent(() => import('/src/slides/Slide0.vue')) },
      { path: '1', component: defineAsyncComponent(() => import('/src/slides/Slide1.vue'))},
      { path: '2', component: defineAsyncComponent(() => import('/src/slides/Slide2.vue'))},
      { path: '3', component: defineAsyncComponent(() => import('/src/slides/Slide3.vue'))}
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
