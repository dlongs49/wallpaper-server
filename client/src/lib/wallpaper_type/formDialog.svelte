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
  import UploadImg from "../../components/upload/BeUpload.svelte";
  import { fetchPost, fetchGet } from "../../utils/fetch.js";
  import { createEventDispatcher, onMount } from "svelte";
  import { message } from "../../components/message/showNotice.js";
  import { loading } from "../../utils/useLoading.js";
  import {handleInspectImg} from "../../utils/tools.js";
  import WButton from "../../components/w_component/button/WButton.svelte";

  const dispatch = createEventDispatcher();
  let isLoading = false;
  let isInspec = false
  export let visible = false;
  export let id = null;
  let rules = {
    title: [{ required: true }],
    cover_type: [{ required: true }],
    cover_url: [{ required: true }]
  };
  let handleClose = () => {
    dispatch("disClose", false);
  };
  let isDrag = true;
  let isLimit = false;
  let isHideFooter = true;
  let form = {
    cover_type: "0"
  };
  onMount(() => {
    isLoading = true
    if (id) {
      getDetail();
    }else{
      isLoading = false
    }
  });

  // 详情
  const getDetail = async () => {
    try {
      const { code, data, msg } = await fetchGet("/api/wallpaper/detail_wallpaper_type/" + id);
      isLoading = false
      if (code === 200) {
        form = { ...data, cover_type: data.cover_type.toString() };
      } else {
        message.warning(msg);
      }
    } catch (e) {
      isLoading = false
      message.error();
    }
  };
  const changeRadio = () => {
    if (!form.id) {
      form.cover_url = "";
    }
  };
  const onUrl = (res) => {
    if (res.code === 200) {
      form.cover_url = res.data.url;
    }
  };
  // 检查图片是否可用
  let handleIsImg = (data)=>{
    isInspec = true
    handleInspectImg(data,()=>{
      isInspec = false
    })
  }
  // 提交表单
  const handleOk = async () => {
    if (!form.cover_type || !form.cover_url || !form.title) {
      message.warning("带*字段必填");
      return;
    }
    try {
      let url = form.id ? "/api/wallpaper/update_wallpaper_type" : "/api/wallpaper/set_wallpaper_type";
      const { code, msg } = await fetchPost(url, {
        ...form,
        cover_type: Number(form.cover_type)
      });
      if (code === 200) {
        message.success("操作成功");
        dispatch("disClose", true);
      } else {
        message.warning(msg)
      }
    } catch (e) {
      message.error();
    }
  };
</script>
<main>
  <BeDialog
    title="壁纸类型表单"
    width="30%"
    bind:visible={visible}
    bind:isDrag={isDrag}
    bind:isLimit={isLimit}
    bind:isHideFooter={isHideFooter}
    beforeClose={handleClose}
  >
    <div use:loading={isLoading} >
      <BeForm
        class="bform"
        bind:rules={rules}
        bind:model={form}
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
            <UploadImg onUrl={onUrl} imgUrl={form.cover_url} />
          </BeFormItem>
        {/if}
        <BeFormItem label="链接地址" prop="cover_url">
          <div style="display: flex">
            <BeInput disabled={form.cover_type === '0'} bind:value={form.cover_url}
                     placeholder="输入壁纸链接/上传链接" />
            {#if form.cover_type === '1'}
              <WButton type="primary" on:click={()=>handleIsImg(form.cover_url)} loading={isInspec} style="margin-left: 10px">{isInspec?"检查中" : '检查'}</WButton>
            {/if}
          </div>
        </BeFormItem>

        <BeFormItem>
          <div class="op_flex">
            <BeButton type="default" class="op_btn" on:click={handleClose}>取消</BeButton>
            <BeButton type="primary" on:click={handleOk}>确定</BeButton>
          </div>
        </BeFormItem>
      </BeForm>
    </div>
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
