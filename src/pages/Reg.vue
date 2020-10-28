<template>
  <div class="box">
    <div class="header">
      <div v-on:click="fn1" class="header-left" v-bind:class="{active:active1}">
        <span>账号注册</span>
      </div>
      <div v-on:click="fn2" class="header-right" v-bind:class="{active:active2}">
        <span>手机号注册</span>
      </div>
    </div>
    <div class="areg" v-show="active1" :model="loginForm">
        <div class="user-name">
            <label class="login-text" for="username">
                <span>账号</span>
                <input v-model="loginForm.username" type="text" id="username" name="username" placeholder="请输入账号">
            </label>
        </div>
        <div class="user-pass">
            <label class="login-text" for="userpass">
                <span>密码</span>
                <input v-model="loginForm.password" type="password" id="userpass" name="userpass" placeholder="请输入密码">
            </label>
        </div>
        <div class="user-pass">
            <label class="login-text" for="ifusername">
                <span>确认密码</span>
                <input v-model='ifpassword' type="password" id='ifusername' name="username" placeholder="请确认密码">
            </label>
        </div>
        <div class="vfcz">
            <label class="login-text" for="vfc">
                <span>验证码</span>
                <input type="text" id="vfc" name="vfc" placeholder="请输入验证码">
            </label>
        </div>
        <Agreement chex='chex'></Agreement>
        <div v-on:click='btnReg'>
          <Btn title='免费注册'></Btn>
        </div>
        <Btn class='loading' title='已有账号，立即登陆'></Btn>
        <Qlog></Qlog>
    </div>
    <div class="areg" v-show="active2">
        <div class="phone">
            <label class="login-text" for="username">
                <span>手机号</span>
                <input v-model="phone" type="text" id="phone" name="phone" placeholder="请输入手机号">
            </label>
        </div>
        <div class="vfcz">
            <label class="login-text" for="vfc">
                <span>验证码</span>
                <input type="text" id="vfc1" name="vfc" placeholder="请输入验证码">
            </label>
        </div>
        <div class="vfcz">
            <label class="login-text" for="vfc">
                <span>动态码</span>
                <input type="text" id="vfc2" name="activeM" placeholder="请输入手机动态码">
                <div class="vfcdt"><a>获取动态码</a></div>
            </label>
        </div>
        <div class="user-pass">
            <label class="login-text" for="userpass">
                <span>密码</span>
                <input v-model="loginForm.password" type="password" id="userpass1" name="userpass" placeholder="请输入账户密码">
            </label>
        </div>
        <div class="user-pass">
            <label class="login-text" for="ifusername">
                <span>确认密码</span>
                <input v-model='ifpassword' type="password" id='ifusername1' name="username" placeholder="请确认账户密码">
            </label>
        </div>

        <Agreement chex='chex'></Agreement>
        <div v-on:click='btnReg'>
          <Btn title='免费注册'></Btn>
        </div>
        <Btn class='loading' title='已有账号，立即登陆'></Btn>
        <Qlog></Qlog>
    </div>

  </div>
</template>
<script>
import Agreement from '../components/Reg/Agreement'
import Btn from '../components/Reg/Btn'
import Qlog from '../components/Reg/Qlog.vue'
import Vue from 'vue'
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  name: 'Reg',
  data: function () {
    return {
      active1: true,
      active2: false,
      chex: 'ture',
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      ifpassword: '123456',
      phone: '',
      activeM: '',
	top:''
    }
  },
  methods: {
    fn1 () {
      if (this.active2 === true) {
        this.active2 = false
      }
      this.active1 = true
    },
    fn2 () {
      if (this.active1 === true) {
        this.active1 = false
      }
      this.active2 = true
    },
    rgtip () {
      this.show = true
    },
    btnReg () {
      const psz = /\S{5,}/
      const pho = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (this.active1 === true) {
          console.log(123)
        if (this.loginForm.username === '') {
			this.top='账号不能为空'
          Toast(this.top)
        } else if (this.loginForm.password === '') {
			this.top='密码不能为空'
          Toast('top')
        } else if (!psz.test(this.loginForm.password)) {
          Toast('密码最小长度为5')
        } else if (this.ifpassword === '') {
          Toast('确认密码不能为空')
        } else if (this.ifpassword !== this.loginForm.password) {
          Toast('两次输入的密码不一致')
        } else {
		console.log(1)
		this.login()
      }
      } else if (this.active2 === true) {
        if (this.phone === '') {
          Toast('手机号不能为空')
        } else if (!pho.test(this.phone)) {
          Toast('手机号码有误')
        } else if (this.ifpassword === '') {
          Toast('验证码不能为空')
        } else if (this.activeM === '') {
          Toast('手机动态码不能为空')
        } else if (!psz.test(this.loginForm.password)) {
          Toast('密码最小长度为5')
        } else if (this.loginForm.password === '') {
          Toast('确认密码不能为空')
        } else if (this.ifpassword !== this.loginForm.password) {
          Toast('两次输入的密码不一致')
        }
      }	
    },
	async login () {
		const {data:res}=await this.$http.post('login',this.loginForm)
		console.log(res)
		if (res.meta.status === 200) {
			window.sessionStorage.setItem('token', res.data.token)
			this.$router.push('/index')
		} else if (res.meta.msg == '用户名不存在'){
			Toast('用户名不存在')
		} else if (res.meta.msg == '密码错误'){
			Toast('密码错误')
		}
	}
  },
  components: {
    Agreement, Btn, Qlog
  }
}
</script>

<style scoped>
  .loading{
    background-color: #fff;
  }
  .header{
    width:100%;
    height: 41px;
    margin-top:5%;
    margin-bottom:10px;
    display:flex;
    box-sizing: border-box;
    color:#898989;
  }
  .active span{
    color:#0dcecb;
    border-bottom: 1px solid #0dcecb;
  }
  .header span{
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height:100%;
  }
  .header-left,
  .header-right{
    height:100%;
    width:100%;
    text-align: center;
  }
  .areg{
      margin:10px 10px 20px 10px;
  }

  .user-name,
  .user-pass,
  .vfcz,
  .phone{
      padding:0 10px;
      width:92%;
      box-sizing: border-box;
  }
  .login-text{
      position: relative;
      display: flex;
      align-items: center;
      left: 0;
      height:100%;
      margin-left: 8%;
      font-size: 14px;
      border-bottom: 1px solid rgb(229, 229, 229);
  }
  .login-text span{
      position: absolute;
  }
  .login-text input[type='text'],
  .login-text input[type='password']{
      height: 44px;
      width:150px;
      font-size: 14px;
      border: none;
      margin-left: 58px;
      box-sizing: border-box;
  }
  .login-text input::-webkit-input-placeholder{
      color:rgb(188, 188, 188);
      font-size:12px;
  }
  a{
    font-size:12px;
  }
</style>
