import Vue from 'vue'

Vue.component('trellis-header', require('./components/Header.vue'))

// Forms
Vue.component('trellis-autocomplete', require('./components/forms/Autocomplete.vue'))
Vue.component('trellis-datepicker', require('./components/forms/Datepicker.vue'))
Vue.component('trellis-dropdown', require('./components/forms/Dropdown.vue'))
Vue.component('trellis-text-area', require('./components/forms/TextArea.vue'))
Vue.component('trellis-text-editor', require('./components/forms/TextEditor.vue'))
Vue.component('trellis-text-field', require('./components/forms/TextField.vue'))

// Cards
Vue.component('trellis-card', require('./components/cards/Card.vue'))
Vue.component('trellis-card-projects', require('./components/cards/Projects.vue'))

// Modal
Vue.component('trellis-modal', require('./components/modals/Base.vue'))

// Nav
Vue.component('trellis-nav-main', require('./components/nav/Main.vue'))
Vue.component('trellis-nav-project', require('./components/nav/Project.vue'))
Vue.component('trellis-nav-team', require('./components/nav/Team.vue'))
Vue.component('trellis-nav-stream', require('./components/nav/Stream.vue'))

// Projects
Vue.component('trellis-project-issues', require('./components/projects/Issues.vue'))
Vue.component('trellis-project-lessons', require('./components/projects/Lessons.vue'))
Vue.component('trellis-project-milestones', require('./components/projects/Milestones.vue'))
Vue.component('trellis-project-objectives', require('./components/projects/Objectives.vue'))
Vue.component('trellis-project-overview', require('./components/projects/Overview.vue'))
Vue.component('trellis-project-risks', require('./components/projects/Risks.vue'))
Vue.component('trellis-project-status', require('./components/projects/Status.vue'))
Vue.component('trellis-project-streams', require('./components/projects/Streams.vue'))
Vue.component('trellis-project-tasks', require('./components/projects/Tasks.vue'))
Vue.component('trellis-project-team', require('./components/projects/Team.vue'))
Vue.component('trellis-project-settings', require('./components/projects/Settings.vue'))

// Projects
// Vue.component('trellis-stream-issues', require('./components/streams/Issues.vue'))
// Vue.component('trellis-stream-lessons', require('./components/streams/Lessons.vue'))
// Vue.component('trellis-stream-milestones', require('./components/streams/Milestones.vue'))
// Vue.component('trellis-stream-objectives', require('./components/streams/Objectives.vue'))
Vue.component('trellis-stream-overview', require('./components/streams/Overview.vue'))
// Vue.component('trellis-stream-risks', require('./components/streams/Risks.vue'))
// Vue.component('trellis-stream-status', require('./components/streams/Status.vue'))
// Vue.component('trellis-stream-tasks', require('./components/streams/Tasks.vue'))
// Vue.component('trellis-stream-team', require('./components/streams/Team.vue'))
