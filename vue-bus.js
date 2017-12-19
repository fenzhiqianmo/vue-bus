const install = function(Vue) {
	const bus = new Vue({
		data() {
    		return {
    			num: 0
    		}
    	},
    	created() {
    		var that = this
    		that.on('add', (val) => {
				that.num = val
			})
    	},
		methods: {
			emit(event, ...args) {
				this.$emit(event, ...args)
			},
			on(event, callback) {
				this.$on(event, callback)
			},
			off(event, callback) {
				this.$off(event, callback)
			}
		}
	});
	Vue.prototype.$bus = bus
};
export default install