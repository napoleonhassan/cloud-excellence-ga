<template>
  <div>
    <p v-for="f in form" v-bind:key="f.id">
      {{f.text}}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// @ is an alias to /src
export default {
  name: 'Home',
  mounted () {
    this.fetchContent()
  },
  computed: {
    ...mapGetters([
      'form'
    ])
  },
  methods: {
    ...mapActions([
      'fetchContent'
    ])
  }
}
</script>
