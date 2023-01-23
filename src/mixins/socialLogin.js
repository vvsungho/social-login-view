const socialLogin = {
    data() {
        return {
            loginResult: {
                status: ''
            }
        }
    },
    methods: {
        doSocialLogin(socialType) {
            const apiPath = '/user/social-login'
            const bodyData = {
                code: this.$route.query.code,
                userType: socialType
            }
            this.$axios.post(apiPath, bodyData).then(response => {
                this.loginResult.status = 'SUCCESS'
                this.$cookie.setCookie('user-key', response.data.id)
                window.opener.location.replace('/')
                window.close()
            }).catch(error => {
                this.loginResult.status = 'FAIL'
                console.log('error', error)
            })
        }
    }
}
export default socialLogin
