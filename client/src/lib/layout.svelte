<script>
    import Router, {push} from 'svelte-spa-router';
    let active = '0'
    let data = [{title:'壁纸类型管理'},{title:"壁纸管理"}]
    let MenuDom
    let setMenuActive = (key) => MenuDom.setMenuActive(key)
    function changeMenu() {
        console.log(123)
        push("/wallpaper_type")
    }
</script>
<main>
    <div class="bmenu">

    </div>
    <section>
    </section>
</main>
<style lang="less">
  main {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    display: flex;
  }
    section{
      margin-left: 10px;
      flex:1;
      height: 100%;
      width: 100%;
      background: #fff;
    }
  .bmenu {
    width: 220px;
    height: 100%;
    :global(.be-menu){
      height: 100%;
    }
  }

</style>
