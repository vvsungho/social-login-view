const socialLogin = {
    data() {
        return {
            code: this.$route.params.code,
            loginResult: {
                status: '',
                user: {
                    userName: '',
                    userEmail: ''
                }
            }
        }
    },
    methods: {
        doSocialLogin(socialType) {
            console.log('social login type', socialType)
            const apiPath = '/user/social/' + socialType
            const bodyData = {
                code: this.code
            }
            this.$http.post(apiPath, bodyData).then(response => {
                console.log('response', response)
                this.loginResult.user = response.data.user
                this.loginResult.status = 'SUCCESS'
            }).catch(error => {
                this.loginResult.status = 'FAIL'
                console.log('error', error)
            })
        }
    }
}
export default socialLogin
