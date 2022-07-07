import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { PiniaFirestoreSync } from 'pinia-plugin-firestore-sync'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import piniaPersist from 'pinia-plugin-persist'
//import './assets/theme/theme-blue.css'
//import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import { uiControls } from './components/uicontrols'
import { getAuth } from 'firebase/auth'
const pinia = createPinia()
  .use(PiniaFirestoreSync)
  .use(piniaPersist)
 

let app = null 
app =   createApp(App)

if(app){
    app.use(pinia)
    app.use(uiControls)
    
    app.use(router)    
    app.mount('#app')

}
 
    