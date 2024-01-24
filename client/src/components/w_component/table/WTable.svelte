<script>
    export let data = [];
    export let column = [];
</script>
<div class="wtable">
    <table>
        <colgroup style="width:100%">
            {#each column as cell}
                <col width={cell.width}>
            {/each}
        </colgroup>
        <thead>
        <tr>
            {#each column as item}
                <th>
                    <div>{item.title}</div>
                </th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each data as item}
            <tr>
                {#each column as cell,i}
                    <td>
                        {#if i === 1}
                            <div class="cell">
                                <slot name="cell_1" prop={item}></slot>
                            </div>
                        {:else if i === 2}
                            <div class="cell">
                                <slot name="cell_2" prop={item}></slot>
                            </div>
                        {:else if i === 3}
                            <div class="cell">
                                <slot name="cell_3" prop={item}></slot>
                            </div>
                        {:else if i === 4}
                            <div class="cell">
                                <slot name="cell_4" prop={item}></slot>
                            </div>
                        {:else if i === 5}
                            <div class="cell">
                                <slot name="cell_5" prop={item}></slot>
                            </div>
                        {:else if i === 6}
                            <div class="cell">
                                <slot name="cell_5" prop={item}></slot>
                            </div>
                        {:else}
                            <div class="cell">{item[cell.key]}</div>
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
    {#if data.length === 0}
        <div class="wtable-nodata">暂无数据</div>
    {/if}
</div>
<style lang="less">
  .wtable {
    width: 100%;
    border: 1px solid #f2f2f2;
    margin-top: 20px;

    .wtable-nodata {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
    }

    thead {
      th {
        border-right: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
        padding: 12px 0;

        div {
          font-size: 14px;
          text-align: left;
          padding-left: 15px;
        }
      }
    }

    tbody {
      tr {
        td {
          border-right: 1px solid #ebeef5;
          border-bottom: 1px solid #ebeef5;
          padding: 12px 0;

          .cell {
            padding: 0 15px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
</style>
