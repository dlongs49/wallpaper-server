<script>
    import {
        BeButton,
        BeDialog,
        BeForm,
        BeFormItem,
        BeInput,
        BeRadio,
        BeRadioGroup, showNotice
    } from "@brewer/beerui";
    import UploadImg from "@/components/upload/BeUpload.svelte";
    import {fetchPost} from "@/utils/fetch.js";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let visible = false;
    let rules = {
        title: [{required: true}],
        cover_type: [{required: true}],
        cover_url: [{required: true}],
    }
    let handleClose = () => {
        dispatch('disClose', false);
    };
    let isDrag = true;
    let isLimit = false;
    let isHideFooter = true;
    let form = {
        cover_type: "0"
    };
    const changeRadio = () => {
        form.cover_url = ""
    };
    const onUrl = (res) => {
        if (res.code === 200) {
            form.cover_url = res.data.url
        }
    }
    // 检查图片链接是否生效
    const handleInspect = () => {

    }
    // 提交表单
    const handleOk = async () => {
        if (!form.cover_type || !form.cover_url || !form.title) {
            showNotice({
                toast: true,
                message: '带*字段必填',
                duration: 1500,
                type: 'warning'
            });
            return
        }
        try {
            const {code, msg} = await fetchPost("/api/wallpaper/set_wallpaper_type", {
                ...form,
                cover_type: Number(form.cover_type)
            });
            if (code === 200) {
                showNotice({
                    toast: true,
                    message: '提交成功',
                    duration: 1500,
                    type: 'success'
                });
                dispatch('disClose', true);
            } else {
                showNotice({
                    toast: true,
                    message: msg,
                    duration: 1500,
                    type: 'warning'
                });
            }
        } catch (e) {
            showNotice({
                toast: true,
                message: '服务内部错误',
                duration: 1500,
                type: 'error'
            });
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
        <BeForm
                class="bform"
                bind:rules={rules}
                bind:model={form}
                labelWidth="130px"
        >
            <BeFormItem label="类型名称" prop="title">
                <BeInput bind:value={form.title} placeholder="输入壁纸类型名称"/>
            </BeFormItem>
            <BeFormItem label="链接区分" prop="cover_type">
                <BeRadioGroup bind:checked={form.cover_type} class="beradio" on:change={changeRadio}>
                    <BeRadio label="0" style="margin-right: 10px">本地</BeRadio>
                    <BeRadio label="1">链接</BeRadio>
                </BeRadioGroup>
            </BeFormItem>
            {#if form.cover_type === '0'}
                <BeFormItem label="本地上传">
                    <UploadImg bind:value={form.cover_url} onUrl={onUrl}/>
                </BeFormItem>
            {/if}
            <BeFormItem label="链接地址" prop="cover_url">
                <div style="display: flex">
                    <BeInput disabled={form.cover_type === '0'} bind:value={form.cover_url}
                             placeholder="输入壁纸链接/上传链接" />
                    {#if form.cover_type === '1'}
                        <BeButton type="primary" on:click={handleInspect} style="margin-left: 10px">检查</BeButton>
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
