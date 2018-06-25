<template>
  <div>
    <h1>Compara precios</h1>
    <span v-if="result">Uber X: {{ result.slice(3) }}</span>
    <br>
    <input type="text" placeholder="La Palmilla 123, Conchalí" name="address" v-model="address"/>
    <br>
    <button v-on:click='compare'>Comparar</button>
  </div>
</template>

<script>
import sendAddres from "@/services/sendAddress"
export default {
  data () {
    return {
      address: '',
      result: null
    }
  },
  methods: {
    compare () {
      let self = this;
      console.log(this.address)
      sendAddres.sendAddres({
        address: this.address
      }).then(function (result) {
        console.log(result.data.prices.uberX)
        console.log(typeof(result.data))
        self.result = result.data.prices.uberX
        //console.log(this.result);
      })
      // this.result = 3
      // console.log(this.result)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
