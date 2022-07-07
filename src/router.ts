import { createRouter, createWebHashHistory, RouteRecordRaw, onBeforeRouteUpdate } from 'vue-router'

const frame = {
  template: `
    <div class="frame">     
      <router-view></router-view>
    </div>
  `
}
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home',  component: ()=> import("./views/home.vue")},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

 
 
 
export default router
