<template>
  <div>
    <div v-if="authorized" class="form-wrapper">
      <FormTextArea v-for="f in temp"
        v-bind:key="f.id"
        :title="f.title"
        v-model="f.text"
      />
      <div class="button-wrapper">
        <button @click="send">Skicka</button>
      </div>
    </div>
    <div v-else class="login-wrapper">
      <FormTextInput v-model="userpass.user" />
      <FormTextInput v-model="userpass.pass" :password="true" />
      <div class="button-wrapper">
        <button @click="login">Logga in</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Admin',
  data () {
    return {
      temp: null,
      userpass: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'sendContent',
      'sendPass'
    ]),
    send () {
      this.sendContent(this.temp)
    },
    login () {
      if (this.userpass.user && this.userpass.pass) {
        this.sendPass(this.userpass)
      }
    }
  },
  mounted () {
    this.temp = this.form
  },
  computed: {
    ...mapGetters([
      'form',
      'authorized'
    ])
  }
}
</script>
