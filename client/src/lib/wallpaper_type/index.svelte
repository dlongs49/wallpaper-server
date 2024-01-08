<script>
  import {
    BeButton,
    BeIcon,
    BeInput,
    BeOption,
    BePagination,
    BeSelect,
    BeTable,
    BeTableColumn,
    messageBox
  } from "@brewer/beerui";
  import { onMount } from "svelte";
  import { fetchGet, fetchPost } from "../../utils/fetch.js";
  import Pagination from "@/components/pagination/BePagination.svelte";
  import dayjs from "dayjs";

  let isLoading = false;
  let tableData = [];
  let sort = {
    keyword: "",
    sort_type: ""
  };
  let page = {
    count: 0,
    offset: 1,
    limit: 15
  };
  let rowKey = [];
  let base_url = import.meta.env.VITE_APP_BASE_URL;
  onMount(() => {
    getWallpaperType();
  });
  // 数据列表
  const getWallpaperType = async () => {
    try {
      let { code, data, msg } = await fetchPost("/api/wallpaper/get_wallpaper_type", sort, page);
      if (code === 200) {
        tableData = data.rows.map(v => {
          return { ...v, create_time: dayjs(v.create_time).format("YYYY-MM-DD HH:mm:ss") };
        });
        page.count = data.count;
      }
    } catch (e) {
      messageBox({
        type: "error",
        title: "提示",
        message: "服务内部错误"
      });
    }
  };
  const handleEdit = (params) => {

  };
  // 删除
  const handleDel = async (params) => {
    try {
      const { code, msg } = await fetchPost("/api/wallpaper/del_wallpaper_type", params);
      if (code === 200) {
        messageBox({
          type: "success",
          title: "提示",
          message: "删除成功"
        });
        getWallpaperType()
      } else {
        messageBox({
          type: "warning",
          title: "提示",
          message: msg
        });
      }
    } catch (e) {
      messageBox({
        type: "error",
        title: "提示",
        message: "服务内部错误"
      });
    }
  };
  // 分页改变
  const changePage = (data) => {
    page.offset = data.detail;
    getWallpaperType();
  };
  // 查询
  const handleSearch = () => {
    getWallpaperType();
  };
  // 重置
  const handleReset = () => {
    sort = {
      keyword: "",
      sort_type: ""
    };
    getWallpaperType();
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
    <BeButton type="primary">
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
    <BeInput class="ml" bind:value={sort.keyword} placeholder="根据关键字查询" style="width: 200px" />
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
  <div>
    <BeTable
      border
      data={tableData}
      on:handleSelectionChangeGetId={handleGetKey}
    >
      <BeTableColumn prop="selection" width="55" />
      <BeTableColumn prop="title" label="类型名称" />
      <BeTableColumn prop="cover_url" label="封面" />
      <BeTableColumn prop="cover_type" label="封面类型" />
      <BeTableColumn prop="create_time" name="tableSlot1" label="操作时间" />
      <BeTableColumn prop="action" name="tableSlot2" label="操作" />
      <div slot="tableSlot1" let:prop={row}>
        {row}
      </div>
      <div slot="tableSlot2" let:prop={row}>
        <BeButton type="primary" on:click={()=>handleEdit(row)}>编辑</BeButton>
        <BeButton type="danger" on:click={()=>handleDel(row)}>删除</BeButton>
      </div>
    </BeTable>
    <Pagination page={page} {changePage} />
  </div>
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