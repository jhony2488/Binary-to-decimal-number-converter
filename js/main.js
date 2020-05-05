const vm = new Vue({
  el: '#app',
  data: {
    binary: '00001',
    decimal: '10',
  },
  methods: {
    calculoBinaryDecimal() {
      setInterval(() => {
        var binary = this.binary
        const regex = /[0-1]/
        if (regex.test(binary)) {
          this.decimal = parseInt(jhony, 2)
        } else {
          this.decimal = 'Insira somente numeros binários'
        }
      }, 50)
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
function load() {
  var loading = document.getElementById('loading')
  loading.style.display = 'none'
}
