<script>
import { BePagination } from "@brewer/beerui";
export let page = {}
export let changePage = ()=> {}
</script>
<div class="pagin">
  <BePagination
    currentPage={page.offset}
    pageSize={page.limit}
    total={page.count}
    async
    layouts="prev,next,info,total,jumper"
    on:changePage={changePage}
    options={{card:true}}
  />
</div>
<style lang="less">
.pagin{
  width: 90%;
  margin: 15px auto 0;
}
</style>