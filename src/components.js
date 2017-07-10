import Vue from 'vue'

// Forms
Vue.component('trellis-autocomplete', require('./components/forms/Autocomplete.vue'))
Vue.component('trellis-datepicker', require('./components/forms/Datepicker.vue'))
Vue.component('trellis-dropdown', require('./components/forms/Dropdown.vue'))
Vue.component('trellis-text-editor', require('./components/forms/TextEditor.vue'))
Vue.component('trellis-text-field', require('./components/forms/TextField.vue'))

Vue.component('trellis-card', require('./components/Card.vue'))

// Nav
Vue.component('trellis-nav-main', require('./components/nav/Main.vue'))
Vue.component('trellis-nav-team', require('./components/nav/Team.vue'))
