<template>
  <div>
    <b-card>
      <b-card-title>
        Kakao Login View
      </b-card-title>
      <b-card-body>
        <b-badge v-if="loginResult.status === 'SUCCESS'" variant="success">로그인 성공</b-badge>
        <b-badge v-else-if="loginResult.status === 'FAIL'" variant="danger">로그안 실패</b-badge>
      </b-card-body>
      <b-card-body v-if="loginResult.status === 'SUCCESS'">
          <b-card-text>이름 : {{ loginResult.user.userName }}</b-card-text>
          <b-card-text>이메일 : {{ loginResult.user.userEmail }}</b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import SocialLogin from '@/mixins/socialLogin'
export default {
  name: "KakaoLogin",
  mixins: [SocialLogin],
  created() {
    this.doSocialLogin('KAKAO')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
