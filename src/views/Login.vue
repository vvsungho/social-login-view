<template>
  <div>
    <b-card>
      <b-card-title>
        소셜 로그인
      </b-card-title>
      <b-card-body>
        <b-card-text>
          <b-button variant="warning" @click="doKakaoLogin()">
            카카오 로그인
          </b-button>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    doKakaoLogin() {
      const url = 'https://kauth.kakao.com/oauth/authorize?client_id=' +
          process.env.VUE_APP_KAKAO_JS_KEY +
          '&redirect_uri=' +
          process.env.VUE_APP_KAKAO_REDIRECT_URL +
          '&response_type=code&' +
          'scope=account_email birthday gender profile_nickname profile_image'

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
    }
  }
}
</script>

<style scoped>

</style>
