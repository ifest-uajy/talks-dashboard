<template>
  <div>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
      </a>
      <div class="d-flex align-items-center">
        <div v-if="user" class="mr-3 text-right d-flex align-items-center">
          <div class="mr-2">
            <div>
              {{ user.displayName }}
            </div>
            <div class="small">
              {{ user.email }}
            </div>
          </div>
          <div>
            <img height="38" class="rounded-circle" :src="user.photoURL" />
          </div>
        </div>
        <div>
          <button
            v-if="user"
            class="btn btn-danger"
            @click.prevent="onLogout"
          >
            Keluar
          </button>
          <button
            v-else
            class="btn btn-primary"
            @click.prevent="onGoogleLogin"
          >
            Masuk
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as fb from '@/firebase'
import { store } from '@/store'
import firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    onGoogleLogin () {
      fb.auth.signInWithPopup(provider).then((res) => {
        store.commit('setCurrentUser', res.user)
      }).then((err) => {
        console.log(err)
      })
    },
    onLogout () {
      fb.auth.signOut().then(() => {
        store.commit('setCurrentUser', null)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>
