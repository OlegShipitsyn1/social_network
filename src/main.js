import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/* UX packages */
import VWave from 'v-wave'

/* Adaptive UI packages */
import VueScreen from 'vue-screen'

const GRID_OPTIONS = {
	grid: {
		initial: 0,
		phone: 576,
		tablet: 768,
		laptop: 1175,
		desktop: 1400,
	},
}

createApp(App).use(store).use(router).use(VWave).use(VueScreen, GRID_OPTIONS).mount('#app')
