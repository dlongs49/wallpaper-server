<script>
    import {BeButton, BeForm, BeFormItem, BeInput} from "@brewer/beerui";
    import {message} from "../../components/message/showNotice.js";
    import {fetchPost} from "../../utils/fetch.js";
    import {WButton} from "../../components/w_component/index.js";
    import router from '../../router/index'

    let form = {
        password: 'string',
        account: 'string'
    }
    let loading = false
    const handleSubmit = async () => {

        if (!form.account || !form.password) {
            message.warning("账号密码不能为空")
            return
        }
        try {
            loading = true
            const {code, data, msg} = await fetchPost("/api/login/admin_login", form)
            setTimeout(() => {
                loading = false
                if (code === 200) {
                    localStorage.setItem('w_k', data)
                    router.push("/")
                } else {
                    message.warning(msg)
                }
            }, 1500)

        } catch (e) {
            loading = false
            message.error("服务内部异常,联系管理员")
        }

    }
</script>

<main>
    <div class="login_container">
        <div class="head">
            <img src="/static/images/svelte.svg" alt="svelte"/>
            <span>壁纸管理</span>
        </div>
        <BeForm
                class="bform"
                bind:model={form}
                labelWidth="40px"
        >
            <BeFormItem label='账号'>
                <BeInput bind:value={form.account} placeholder="输入账号"/>
            </BeFormItem>
            <BeFormItem label='密码'>
                <BeInput bind:value={form.password} type="password" placeholder="输入密码"/>
            </BeFormItem>
            <BeFormItem>
                <WButton style="width:70%;display: block;margin: 0 auto;" on:click={handleSubmit}
                         loading={loading}>{loading ? '登录中' : '登录'}</WButton>
            </BeFormItem>
        </BeForm>
    </div>
</main>
<style lang="less">
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url('/static/images/bg.png') no-repeat;
    background-size: cover;

    .login_container {
      width: 500px;
      padding: 60px 30px 100px 30px;
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.2);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);

      .head {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin-left: 10px;
          font-size: 30px;
          font-weight: bold;
        }
      }

      :global(.bform) {
        width: 90%;
        margin: 60px auto 0;
      }
    }
  }
</style>
