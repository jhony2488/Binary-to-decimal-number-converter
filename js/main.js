const vm = new Vue({
  el: '#app',
  data: {
    binary: '00001',
    decimal: '10',
  },
  methods: {
    calculoBinaryDecimal() {
      setInterval(() => {
        var jhony = this.binary
        this.decimal = parseInt(jhony, 2)
      }, 1000)
    },
  },
  computed: {
    calculo1() {
      this.calculoBinaryDecimal()
    },
  },
  created() {
    this.calculo1
  },
})
function load(){
    var loading= document.getElementById('loading')
    loading.style.display="none"
}

