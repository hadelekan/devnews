import Vue from 'vue'

Vue.filter('handle', name => {
	return '@' + name.split(' ')[0].toLowerCase()
})
Vue.filter('biname', name => {
	return name.split(' ')[0] + ' ' + name.split(' ')[1]
})