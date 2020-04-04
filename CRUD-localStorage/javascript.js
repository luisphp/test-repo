const app = new Vue({
	el: '#app',
	data:  {
		fondo: 'bg-warning',
		slug: '',
		slug_g: ''
	},
	methods: {
		
	},
	computed: {
		generarSlug(){
			this.title = this.slug;
			this.title_g = this.title.replace(/ /g,'-');
			
			return this.title_g;
		}
	
	}
})
