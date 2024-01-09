<script>
  import {
    BeButton,
    BeIcon,
    BeInput,
    BeOption,
    BeSelect,
    BeTable,
    BeTableColumn
  } from "@brewer/beerui";
  import { onMount } from "svelte";
  import { fetchGet, fetchPost } from "@/utils/fetch.js";
  import Pagination from "@/components/pagination/BePagination.svelte";
  import WTable from "@/components/table/WTable.svelte";
  import FormDialog from "./formDialog.svelte";
  import dayjs from "dayjs";
  import { message } from "@/components/message/showNotice.js";
  import { loading } from "@/utils/useLoading.js";
  import WTag from "@/components/tag/WTag.svelte";
  import WImage from '@/components/image/WImage.svelte'
  let isLoading = false;
  let tableData = [];
  let visible = false;
  let column = [
    { key: "title", title: "类型名称",width:'20%' },
    { key: "cover_url", title: "封面", width:'20%' },
    { key: "cover_type", title: "封面类型", width:'20%' },
    { key: "create_time", title: "操作时间",width:'20%' },
    { key: "action", title: "操作",}
  ];
  let sort = {
    keyword: "",
    sort_type: "",
    url_type:0
  };
  let page = {
    count: 0,
    offset: 1,
    limit: 15
  };
  let rowKey = [];
  let id = null;
  let base_url = import.meta.env.VITE_APP_BASE_URL;
  onMount(() => {
    getWallpaper();
  });
  // 数据列表
  const getWallpaper = async () => {
    isLoading = true;
    try {
      let { code, data, msg } = await fetchPost("/api/wallpaper/get_wallpaper", sort, page);
      isLoading = false;
      if (code === 200) {
        tableData = data.rows;
        page.count = data.count;
      } else {
        message.warning(msg);
      }
    } catch (e) {
      isLoading = false;
      message.error();
    }
  };
  // 新增
  const handleAdd = () => {
    visible = true;
  };
  // 编辑
  const handleEdit = (params) => {
    id = params;
    visible = true;
  };
  // 删除
  const handleDel = async (params) => {
    try {
      const { code, msg } = await fetchPost("/api/wallpaper/del_wallpaper", params);
      if (code === 200) {
        message.success("删除成功");
        getWallpaper();
      } else {
        message.warning(msg);
      }
    } catch (e) {
      message.error();
    }
  };
  // 分页改变
  const changePage = (data) => {
    page.offset = data.detail;
    getWallpaper();
  };
  // 查询
  const handleSearch = () => {
    getWallpaper();
  };
  // 重置
  const handleReset = () => {
    sort = {
      keyword: "",
      sort_type: ""
    };
    getWallpaper();
  };
  // 关闭 dialog
  const handleClose = (data) => {
    if (data) {
      getWallpaper();
    }
    id = "";
    visible = isLoading = false;
  };
  // 选中key
  const handleGetKey = (data) => {
    rowKey = data.detail;
  };
  const changeSelect = () => {

  };
</script>

<main>
  <header>
    <BeButton type="primary" on:click={handleAdd}>
      <span class="middle_spn">
        <BeIcon name="add" color="#fff" />
        <strong>新增</strong>
      </span>
    </BeButton>
    <BeButton type="danger" disabled={rowKey.length === 0} on:click={()=>handleDel(rowKey)}>
      <span class="middle_spn">
        <BeIcon name="remove" color="#fff" />
        <strong>删除</strong>
      </span>
    </BeButton>
    <BeSelect class="ml" bind:value={sort.sort_type} size="small" clearable on:change={changeSelect}
              placeholder="请选择排序类型">
      <BeOption label="时间正序" value="asc" />
      <BeOption label="时间倒叙" value="desc" />
    </BeSelect>
    <BeInput class="ml" bind:value={sort.keyword} placeholder="根据关键字查询" style="width: 200px" clearable />
    <BeButton type="success" on:click={handleSearch}>
      <span class="middle_spn">
        <BeIcon name="search" color="#fff" />
        <strong>查询</strong>
      </span>
    </BeButton>
    <BeButton type="info" on:click={handleReset}>
      <span class="middle_spn">
        <BeIcon name="loading" color="#fff" />
        <strong>重置</strong>
      </span>
    </BeButton>
  </header>
  <div use:loading={isLoading}>
    <WTable data={tableData} column={column}>
      <div slot="cell_1" let:prop={row}>
        <WImage url={row.cover_type === 0 ? base_url + row.cover_url : row.cover_url}  width="80px" />
      </div>
      <div slot="cell_2" let:prop={row}>
        <WTag type={row.cover_type === 1 ? '' : 'info'}>{row.cover_type === 1 ? '链接' : '本地'}</WTag>
      </div>
      <div slot="cell_3" let:prop={row}>
        {dayjs(row.create_time).format("YYYY-MM-DD HH:mm:ss")}
      </div>
      <div slot="cell_4" let:prop={row}>
        <BeButton type="primary" size="small" on:click={()=>handleEdit(row.id)}>编辑</BeButton>
        <BeButton type="danger" size="small" on:click={()=>handleDel([row.id])}>删除</BeButton>
      </div>
    </WTable>
    <Pagination page={page} {changePage} />
  </div>
  {#if visible}
    <FormDialog visible={visible} id={id} on:disClose={handleClose} />
  {/if}
</main>
<style lang="less">
  header {
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    .middle_spn {
      display: flex;
      align-items: center;

      strong {
        margin-left: 4px;
      }
    }

    :global(button), :global(.ml) {
      margin-right: 10px
    }
  }

  main {
    width: 98%;
    margin: 0 auto;
    padding: 20px 0;
  }

</style>
