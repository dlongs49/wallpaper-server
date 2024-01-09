<script>
    import {
        BeButton,
        BeDialog,
        BeForm,
        BeFormItem,
        BeInput, BeOption,
        BeRadio,
        BeRadioGroup, BeSelect
    } from "@brewer/beerui";
    import UploadImg from "@/components/upload/BeUpload.svelte";
    import {fetchPost, fetchGet} from "@/utils/fetch.js";
    import {createEventDispatcher, onMount} from "svelte";
    import {message} from "@/components/message/showNotice.js";
    import {loading} from "@/utils/useLoading.js";
    import {handleInspectImg} from "@/utils/tools.js";

    const dispatch = createEventDispatcher();
    let isLoading = false;
    export let visible = false;
    export let id = null;
    let rules = {
        title: [{required: true}],
        type_id: [{required: true}],
        url_type: [{required: true}],
        url: [{required: true}]
    };
    let handleClose = () => {
        dispatch("disClose", false);
    };
    let isDrag = true;
    let isLimit = false;
    let isHideFooter = true;
    let typeList = []
    let form = {
        url_type: "0"
    };
    onMount(() => {
        isLoading = true
        getWallpaperType()
        if (id) {
            getDetail();
        } else {
            isLoading = false
        }
    });

    // 详情
    const getDetail = async () => {
        try {
            const {code, data, msg} = await fetchGet("/api/wallpaper/detail_wallpaper/" + id);
            isLoading = false
            if (code === 200) {
                form = {...data, url_type: data.url_type.toString()};
            } else {
                message.warning(msg);
            }
        } catch (e) {
            isLoading = false
            message.error();
        }
    };
    // 类型下拉
    const getWallpaperType = async () => {
        try {
            const {code, data, msg} = await fetchPost("/api/wallpaper/get_wallpaper_type", {}, {
                offset: 1,
                limit: 999
            });
            if (code === 200) {
                typeList = data.rows
            } else {
                message.warning(msg);
            }
        } catch (e) {
            message.error();
        }
    };
    const changeRadio = () => {
        if (!form.id) {
            form.url = "";
        }
    };
    const onUrl = (res) => {
        if (res.code === 200) {
            form.url = res.data.url;
        }
    };
    // 提交表单
    const handleOk = async () => {
        if (!form.url_type || !form.url || !form.title || !form.type_id) {
            message.warning("带*字段必填");
            return;
        }
        try {
            let url = form.id ? "/api/wallpaper/update_wallpaper" : "/api/wallpaper/set_wallpaper";
            const {code, msg} = await fetchPost(url, {
                ...form,
                url_type: Number(form.url_type)
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
            title="壁纸表单"
            width="30%"
            bind:visible={visible}
            bind:isDrag={isDrag}
            bind:isLimit={isLimit}
            bind:isHideFooter={isHideFooter}
            beforeClose={handleClose}
    >
        <div use:loading={isLoading}>
            <BeForm
                    class="bform"
                    bind:rules={rules}
                    bind:model={form}
                    labelWidth="130px"
            >
                <BeFormItem label="壁纸名称" prop="title">
                    <BeInput bind:value={form.title} placeholder="输入壁纸名称"/>
                </BeFormItem>
                <BeFormItem label="壁纸分类" prop="type_id">
                    <BeSelect bind:value={form.type_id} placeholder="选择壁纸分类" clearable>
                        {#each typeList as item}
                            <BeOption label={item.title} value={item.id}/>
                        {/each}
                    </BeSelect>
                </BeFormItem>
                <BeFormItem label="链接区分" prop="url_type">
                    <BeRadioGroup bind:checked={form.url_type} class="beradio" on:change={changeRadio}>
                        <BeRadio label="0" style="margin-right: 10px">本地</BeRadio>
                        <BeRadio label="1">链接</BeRadio>
                    </BeRadioGroup>
                </BeFormItem>
                {#if form.url_type === '0'}
                    <BeFormItem label="本地上传">
                        <UploadImg onUrl={onUrl} imgUrl={form.url}/>
                    </BeFormItem>
                {/if}
                <BeFormItem label="链接地址" prop="url">
                    <div style="display: flex">
                        <BeInput disabled={form.url_type === '0'} bind:value={form.url}
                                 placeholder="输入壁纸链接/上传链接"/>
                        {#if form.url_type === '1'}
                            <BeButton type="primary" on:click={()=>handleInspectImg(form.url)} style="margin-left: 10px">检查</BeButton>
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
