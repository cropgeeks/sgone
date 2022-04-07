import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'

import {
  LayoutPlugin,
  ButtonPlugin,
  FormPlugin,
  FormInputPlugin,
  JumbotronPlugin,
  InputGroupPlugin,
  NavbarPlugin,
  DropdownPlugin,
  ProgressPlugin,
  FormTextareaPlugin,
  FormGroupPlugin,
  TablePlugin,
  BadgePlugin,
  FormSelectPlugin,
  ModalPlugin,
  FormCheckboxPlugin,
  FormRadioPlugin,
  TabsPlugin,
  CardPlugin,
  ImagePlugin
} from 'bootstrap-vue'

Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(FormRadioPlugin)
Vue.use(JumbotronPlugin)
Vue.use(InputGroupPlugin)
Vue.use(NavbarPlugin)
Vue.use(ProgressPlugin)
Vue.use(TablePlugin)
Vue.use(BadgePlugin)
Vue.use(ModalPlugin)
Vue.use(DropdownPlugin)
Vue.use(TabsPlugin)
Vue.use(CardPlugin)
Vue.use(ImagePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
