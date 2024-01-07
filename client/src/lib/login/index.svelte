<script>
    import {BeButton, BeForm, BeFormItem, BeInput} from "@brewer/beerui";

    let form = {}
    let rules = []

    function handleSubmit() {

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
                bind:rules={rules}
                on:submit={handleSubmit}
                labelWidth="40px"
        >
            <BeFormItem label='账号' prop='name'>
                <BeInput bind:value={form.name} placeholder="输入账号"/>
            </BeFormItem>
            <BeFormItem label='密码' prop='name'>
                <BeInput bind:value={form.name} type="password" placeholder="输入密码"/>
            </BeFormItem>
            <BeFormItem>
                <BeButton type='primary' class="login_btn" on:click={handleSubmit}>登录</BeButton>
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

      :global(.login_btn) {
        width: 70%;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
