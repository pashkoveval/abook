// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components/index.mjs';
import * as directives from 'vuetify/lib/directives/index.mjs';

// Vuetify
export default createVuetify({
	components,
	directives,
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#41b883',
					background: '#35495e',
					error: '#d63031',
					info: '#0984e3',
					secondary: '#fdcb6e',
					success: '#00cec9',
					surface: '#6c5ce7',
					warning: '#2d3436',
				},
				dark: false,
				variables: {},
			},
		},
	},
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
