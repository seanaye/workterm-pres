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
      { path: '3', component: defineAsyncComponent(() => import('/src/slides/Slide3.vue'))},
      { path: '4', component: defineAsyncComponent(() => import('/src/slides/Slide4.vue'))},
      { path: '5', component: defineAsyncComponent(() => import('/src/slides/Slide5.vue'))},
      { path: '6', component: defineAsyncComponent(() => import('/src/slides/Slide6.vue'))},
      { path: '7', component: defineAsyncComponent(() => import('/src/slides/Slide7.vue'))},
      { path: '8', component: defineAsyncComponent(() => import('/src/slides/Slide8.vue'))},
      { path: '9', component: defineAsyncComponent(() => import('/src/slides/Slide9.vue'))},
      { path: '10', component: defineAsyncComponent(() => import('/src/slides/Slide10.vue'))},
      { path: '11', component: defineAsyncComponent(() => import('/src/slides/Slide11.vue'))},
      { path: '12', component: defineAsyncComponent(() => import('/src/slides/Slide12.vue'))},
      { path: '13', component: defineAsyncComponent(() => import('/src/slides/Slide13.vue'))},
      { path: '14', component: defineAsyncComponent(() => import('/src/slides/Slide14.vue'))},
      { path: '15', component: defineAsyncComponent(() => import('/src/slides/Slide15.vue'))},
      { path: '16', component: defineAsyncComponent(() => import('/src/slides/Slide16.vue'))},
      { path: '17', component: defineAsyncComponent(() => import('/src/slides/Slide17.vue'))},
      { path: '18', component: defineAsyncComponent(() => import('/src/slides/Slide18.vue'))},
      { path: '19', component: defineAsyncComponent(() => import('/src/slides/Slide19.vue'))},
      { path: '20', component: defineAsyncComponent(() => import('/src/slides/Slide20.vue'))},

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
