<template>
  <div class="main">
    <b-card v-if="isLogin">
      <b-card-title>
        유저 정보
      </b-card-title>
      <b-card-body style="text-align: left; padding: 0 15%">
        <b-form-group
            label="Key"
            label-cols="2"
            label-cols-lg="2"
            label-cols-md="3"
            label-size="sm"
            label-align-sm="right"
            label-for="input-sm">
          <b-form-input
              v-model="user.id"
              type="text"
              size="sm"
              class="width-350"
              disabled
          />
        </b-form-group>
        <b-form-group
            label="아이디"
            label-cols="2"
            label-cols-lg="2"
            label-cols-md="3"
            label-size="sm"
            label-align-sm="right"
            label-for="input-sm">
          <b-form-input
              v-model="user.userId"
              type="text"
              size="sm"
              class="width-350"
              disabled
          />
        </b-form-group>
        <b-form-group
            label="이름"
            label-cols="2"
            label-cols-lg="2"
            label-cols-md="3"
            label-size="sm"
            label-align-sm="right"
            label-for="input-sm">
          <b-form-input
              v-model="user.userName"
              type="text"
              size="sm"
              class="width-350"
              disabled
          />
        </b-form-group>
        <b-form-group
            label="이메일"
            label-cols="2"
            label-cols-lg="2"
            label-cols-md="3"
            label-size="sm"
            label-align-sm="right"
            label-for="input-sm">
          <b-form-input
              v-model="user.userEmail"
              type="text"
              size="sm"
              class="width-350"
              disabled
          />
        </b-form-group>
      </b-card-body>
      <b-card-body style="text-align: right">
        <b-button variant="danger" @click="doLogout()">로그아웃</b-button>
      </b-card-body>
    </b-card>
    <b-card v-else>
      <b-card-title>
        로그인
      </b-card-title>
      <b-card-body>
        <b-card-text>
          <img src="@/assets/kakao_login_button.jpeg" @click="doKakaoLogin()" style="width: 200px;" alt="카카오 로그인" />
        </b-card-text>
        <b-card-text>
          <img src="@/assets/naver_login_button.png" @click="doNaverLogin()" style="width: 200px;" alt="카카오 네이버" />
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      userKey: this.$cookie.getCookie('user-key'),
      user: {
        id: '',
        userId: '',
        userName: '',
        userEmail: ''
      }
    }
  },
  computed: {
    isLogin() {
      return this.userKey
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      if (this.isLogin) {
        this.getUser()
      }
    },
    getUser() {
      this.$axios.get('/user/' + this.userKey).then((response) => {
        this.user = response.data
      })
    },
    doKakaoLogin() {
      const url = 'https://kauth.kakao.com/oauth/authorize?client_id=' +
          process.env.VUE_APP_KAKAO_JS_KEY +
          '&redirect_uri=' +
          process.env.VUE_APP_KAKAO_REDIRECT_URL +
          '&response_type=code&' +
          'scope=account_email birthday gender profile_nickname profile_image'

      this.showSocialLoginPopup(url)
    },
    doNaverLogin() {
      const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
          process.env.VUE_APP_NAVER_CLIENT_ID +
          '&redirect_uri=' +
          process.env.VUE_APP_NAVER_REDIRECT_URL +
          '&state=1234';

      console.log(url)
      this.showSocialLoginPopup(url)
    },
    showSocialLoginPopup(url) {
      const popupHeight = '500'
      const popupWidth = '500'
      let popupOptions = 'height=--popupHeight--,width=--popupWidth--,left=--popupX--,top=--popupY--,scrollbars=yes,resizable=yes'

      popupOptions = popupOptions.replace('--popupHeight--', popupHeight)
      popupOptions = popupOptions.replace('--popupWidth--', popupWidth)

      this.openPopup(url, popupOptions)
      return false
    },
    openPopup(url, options) {
      window.open(
          url,
          '_blank',
          options
      )
    },
    doLogout() {
      this.$cookie.removeCookie('user-key')
      this.userKey = ''
      this.user = {}
    }
  }
}
</script>

<style scoped>
  .main {
    padding: 0 25%;
  }
</style>
