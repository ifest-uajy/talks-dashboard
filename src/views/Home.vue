<template>
  <div class="container my-5">
    disini nanti kasi data seminar e
    yg kaya di web ifest.
    <button
      class="btn btn-primary"
      @click.prevent="onRegister"
    >
      Daftar
    </button>
    * Masuk menggunakan akun google
  </div>
</template>

<script>

import { mapState } from 'vuex'
import * as fb from '@/firebase'
import { store } from '@/store'
import firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

export default {
  name: 'Home',
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    onRegister () {
      if (!this.user) {
        fb.auth.signInWithPopup(provider).then((res) => {
          store.commit('setCurrentUser', res.user)
          this.$router.push('/register')
        }).then((err) => {
          console.log(err)
        })
      } else {
        this.$router.push('/register')
      }
    }
  }
}
</script>
