<script>
  import { BeButton, BeIcon, BeInput, BeOption, BeSelect, BeTable, BeTableColumn } from "@brewer/beerui";
  import { onMount } from "svelte";

  let data = [];
  let sort = {
    keyword: "",
    sort_type: ""
  };
  onMount(() => {
    console.log(import.meta.env);
  });
  const handleSelectionChangeGetId = ({ detail }) => console.log("handleSelectionChangeGetId", detail);
  const handleSelectionChangeGetRows = ({ detail }) => console.log("handleSelectionChangeGetRows", detail);
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
    <BeButton type="primary">
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
    <BeInput class="ml" placeholder="根据关键字查询" style="width: 200px" />
    <BeButton type="success">
      <span class="middle_spn">
        <BeIcon name="search" color="#fff" />
        <strong>查询</strong>
      </span>
    </BeButton>
    <BeButton type="info">
      <span class="middle_spn">
        <BeIcon name="loading" color="#fff" />
        <strong>重置</strong>
      </span>
    </BeButton>
  </header>
  <BeTable
    border
    data={data}
    on:handleSelectionChangeGetId={handleSelectionChangeGetId}
    on:handleSelectionChangeGetRows={handleSelectionChangeGetRows}
  >
    <BeTableColumn prop="selection" width="55" />
    <BeTableColumn prop="title" label="类型名称" />
    <BeTableColumn prop="cover_url" label="封面" />
    <BeTableColumn prop="cover_type" label="封面类型" />
    <BeTableColumn prop="create_time" label="操作时间" />
  </BeTable>
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
    margin: 20px auto 0;
  }

</style>