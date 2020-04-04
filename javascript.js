const app = new Vue({
	el: '#app',
	data:  {
		titulo: 'Hola Mundo con Vue',
		frutas: [
		{nombre:'Manzana', cantidad:10, status:'active'},
		{nombre:'Pera', cantidad:0, status:'active'},
		{nombre:'Durazno', cantidad:15, status:'active'},
		{nombre:'Patilla', cantidad:16, status:'active'},
		{nombre:'Fresa', cantidad:90, status:'active'}
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta: function (event) {
			//console.log('Diste Click');

			this.frutas.push(
			{nombre: this.nuevaFruta, cantidad: 10, status:'active'}
			)

			window.alert('Fruta: '+this.nuevaFruta+' agregada');

			this.nuevaFruta = '';

		}
	},
	computed: {
		sumarFruta(){

			this.total = 0;

			for(fruta of this.frutas){
				this.total = this.total + fruta.cantidad;
			}

			return this.total;

		}
	}
})
