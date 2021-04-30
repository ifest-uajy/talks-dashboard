<template>
  <div class="container my-5">
    <div v-if="!registration" class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h1>Data Diri</h1>
            <form>
              <div class="form-group">
                <label for="nameInput">Nama Lengkap</label>
                <input
                  v-model="form.personal.name"
                  type="text"
                  class="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                >
                <small id="nameHelp" class="form-text text-muted">
                  Nama didapatkan dari detail akun Google anda.
                </small>
              </div>
              <div class="form-group">
                <label for="emailInput">Alamat Email</label>
                <input
                  type="email"
                  readonly
                  :value="user.email"
                  class="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                >
                <small id="emailHelp" class="form-text text-muted">
                  Harap login ulang dengan email lain untuk mengganti alamat email.
                </small>
              </div>
              <div class="form-group">
                <label for="addressInput">Alamat</label>
                <textarea
                  v-model="form.personal.address"
                  type="text"
                  class="form-control"
                  id="addressInput"
                  aria-describedby="addressHelp"
                  rows="3"
                ></textarea>
                <small id="addressHelp" class="form-text text-muted">
                  -
                </small>
              </div>
              <div class="row">
                <div class="col form-group">
                  <label for="phoneInput">Nomor Telepon</label>
                  <input
                    v-model="form.personal.phone"
                    type="text"
                    class="form-control"
                    id="phoneInput"
                    aria-describedby="phoneHelp"
                  >
                  <small id="phoneHelp" class="form-text text-muted">
                    -
                  </small>
                </div>
                <div class="col form-group">
                  <label for="idLineInput">ID Line</label>
                  <input
                    v-model="form.personal.lineId"
                    type="text"
                    class="form-control"
                    id="idLineInput"
                    aria-describedby="idLineHelp"
                  >
                  <small id="idLineHelp" class="form-text text-muted">
                    -
                  </small>
                </div>
              </div>
              <div class="form-group">
                <label for="institutionInput">Asal Institusi</label>
                <input
                  v-model="form.personal.institusi"
                  type="text"
                  class="form-control"
                  id="institutionInput"
                  aria-describedby="institutionHelp"
                >
                <small id="institutionHelp" class="form-text text-muted">
                  -
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h1>Data Pendaftaran</h1>
            <div class="row">
              <div class="col-12 mt-4">
                <div class="font-weight-bold h5">
                  Seminar Nasional
                </div>
              </div>
              <div class="col-12 row">
                <div class="col-11">
                  <div class="font-weight-bold">
                    Sesi 1 (Rabu, 20 April 2021 | 10.00 WIB)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="col-1 text-right">
                  <input class="form-check-input" type="checkbox" v-model="form.personal.session.sm_1_s1" id="sm_1_s1">
                </div>
              </div>
              <div class="col-12 row">
                <div class="col-11">
                  <div class="font-weight-bold">
                    Sesi 2 (Kamis, 21 April 2021 | 13.00 WIB)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="col-1 text-right">
                  <input class="form-check-input" type="checkbox" v-model="form.personal.session.sm_1_s2" value="sm_1_s2" id="sm_1_s2">
                </div>
              </div>
              <div class="col-12 row">
                <div class="col-11">
                  <div class="font-weight-bold">
                    Sesi 3 (Jumat, 28 April 2021 | 09.00 WIB)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="col-1 text-right">
                  <input class="form-check-input" type="checkbox" v-model="form.personal.session.sm_1_s3" value="sm_1_s3" id="sm_1_s3">
                </div>
              </div>
              <div class="col-12 mt-4">
                <div class="font-weight-bold h5">
                  Sharing Alumni
                </div>
              </div>
              <div class="col-12 row">
                <div class="col-11">
                  <div class="font-weight-bold">
                    Sesi 1 (Sabtu, 30 April 2021 | 17.00 WIB)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div class="col-1 text-right">
                  <input class="form-check-input" type="checkbox" v-model="form.personal.session.sm_2_s1" value="sm_2_s1" id="sm_2_s1">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <div class="font-weight-bold">
              Ketentuan
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="text-right">
              <button
                class="btn btn-primary"
                @click="onRegister"
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Kamu sudah terdaftar!</h2>
      <p>Disini kamu bisa melihat konfirmasi pendaftaran untuk sesi yang telah dipilih dan link join online meeting Zoom acara.</p>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4>Data Diri</h4>
              <div class="row">
                <div class="col-4">
                  Nama Lengkap
                </div>
                <div class="col-8">
                  {{ registration.name }}
                </div>
                <div class="col-4">
                  Email
                </div>
                <div class="col-8">
                  {{ registration.email }}
                </div>
                <div class="col-4">
                  Alamat
                </div>
                <div class="col-8">
                  {{ registration.address }}
                </div>
                <div class="col-4">
                  Nomor Telepon
                </div>
                <div class="col-8">
                  {{ registration.phone }}
                </div>
                <div class="col-4">
                  ID Line
                </div>
                <div class="col-8">
                  {{ registration.lineId }}
                </div>
                <div class="col-4">
                  Asal Institusi
                </div>
                <div class="col-8">
                  {{ registration.institusi }}
                </div>
              </div>
              <div class="mt-4">
                Terdapat kesalahan? Harap hubungi panitia.
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4>Data Pendaftaran</h4>
              <div class="row">
                <div class="col-12">
                  <div class="font-weight-bold h5">
                    Seminar Nasional
                  </div>
                </div>
                <div class="col-12 row">
                  <div class="col-11">
                    <div class="font-weight-bold">
                      Sesi 1 (Rabu, 20 April 2021 | 10.00 WIB)
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="col-1 text-right">
                    <input class="form-check-input" type="checkbox" disabled :checked="registration.session.sm_1_s1" id="sm_1_s1_reg">
                  </div>
                </div>
                <div class="col-12 row">
                  <div class="col-11">
                    <div class="font-weight-bold">
                      Sesi 2 (Kamis, 21 April 2021 | 13.00 WIB)
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="col-1 text-right">
                    <input class="form-check-input" type="checkbox" disabled :checked="registration.session.sm_1_s2" value="sm_1_s2" id="sm_1_s2_reg">
                  </div>
                </div>
                <div class="col-12 row">
                  <div class="col-11">
                    <div class="font-weight-bold">
                      Sesi 3 (Jumat, 28 April 2021 | 09.00 WIB)
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="col-1 text-right">
                    <input class="form-check-input" type="checkbox" disabled :checked="registration.session.sm_1_s3" value="sm_1_s3" id="sm_1_s3_reg">
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="font-weight-bold h5">
                    Sharing Alumni
                  </div>
                </div>
                <div class="col-12 row">
                  <div class="col-11">
                    <div class="font-weight-bold">
                      Sesi 1 (Sabtu, 30 April 2021 | 17.00 WIB)
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div class="col-1 text-right">
                    <input class="form-check-input" type="checkbox" disabled :checked="registration.session.sm_2_s1" value="sm_2_s1" id="sm_2_s1_reg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { usersCollection } from '@/firebase'

export default {
  name: 'Registration',
  data () {
    return {
      form: {
        submitted: false,
        personal: {
          name: '',
          email: '',
          phone: '',
          lineId: '',
          institusi: '',
          address: '',
          session: {
            sm_1_s1: false,
            sm_1_s2: false,
            sm_1_s3: false,
            sm_2_s1: false
          }
        }
      }
    }
  },
  computed: {
    ...mapState(['user', 'registration'])
  },
  mounted () {
    this.form.personal.name = this.user.displayName
    this.form.personal.email = this.user.email
  },
  methods: {
    onRegister () {
      usersCollection.doc(this.user.uid).set(this.form.personal).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
