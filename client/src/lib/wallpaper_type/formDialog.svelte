<script>
  import {
    BeButton,
    BeDialog,
    BeForm,
    BeFormItem,
    BeInput,
    BeRadio,
    BeRadioGroup
  } from "@brewer/beerui";
  import UploadImg from "@/components/upload/BeUpload.svelte";

  export let visible = false;
  export let handleClose = () => {
  };

  let isDrag = true;
  let isLimit = false;
  let isHideFooter = true;
  let rules = {
    title: [{ required: true, message: "必填", trigger: "blur" }],
    cover_type: [{ required: true, message: "必选", trigger: "change" }],
    cover_url: [{ required: true, message: "必填", trigger: "blur" }]
  };
  let form = {
    cover_type: "0"
  };
  const changeRadio = (data) => {
    console.log(data.detail);
  };
  const handleOk = () => {
  };
</script>
<main>

  <BeDialog
    title="服装类型表单"
    width="30%"
    bind:visible={visible}
    bind:isDrag={isDrag}
    bind:isLimit={isLimit}
    bind:isHideFooter={isHideFooter}
    beforeClose={handleClose}
  >
    <BeForm
      class="bform"
      bind:model={form}
      bind:rules={rules}
      labelWidth="130px"
    >
      <BeFormItem label="类型名称" prop="title">
        <BeInput bind:value={form.title} placeholder="输入壁纸类型名称" />
      </BeFormItem>
      <BeFormItem label="链接区分" prop="cover_type">
        <BeRadioGroup bind:checked={form.cover_type} class="beradio" on:change={changeRadio}>
          <BeRadio label="0" style="margin-right: 10px">本地</BeRadio>
          <BeRadio label="1">链接</BeRadio>
        </BeRadioGroup>
      </BeFormItem>
      {#if form.cover_type === '0'}
        <BeFormItem label="本地上传">
          <UploadImg />
        </BeFormItem>
      {/if}
      <BeFormItem label="链接地址" prop="cover_url">
        <BeInput disabled={form.cover_type === '0'} bind:value={form.cover_url} placeholder="输入壁纸链接/上传链接" />
      </BeFormItem>
      <BeFormItem>
        <div class="op_flex">
          <BeButton type="default" class="op_btn" on:click={handleClose}>取消</BeButton>
          <BeButton type="primary" on:click={handleOk}>登录</BeButton>
        </div>
      </BeFormItem>
    </BeForm>
  </BeDialog>
</main>
<style lang="less">
  :global(.bform) {
    width: 90%;
  }

  :global(.beradio) {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .op_flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    :global(.op_btn) {
      margin-right: 10px;
    }
  }
</style>