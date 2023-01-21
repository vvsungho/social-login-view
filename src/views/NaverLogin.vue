<template>
  <div class="main">
    <b-card>
      <b-card-title>
        Naver Login View
      </b-card-title>
      <b-card-body>
        <b-badge v-if="loginResult.status === 'SUCCESS'" variant="success">로그인 성공</b-badge>
        <b-badge v-else-if="loginResult.status === 'FAIL'" variant="danger">로그인 실패</b-badge>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import SocialLogin from '@/mixins/socialLogin'
export default {
  name: "NaverLogin",
  mixins: [SocialLogin],
  created() {
    this.doSocialLogin('NAVER')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
