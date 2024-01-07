<script>
    import {BeIcon} from "@brewer/beerui";
    import WallpaperType from './wallpaper_type/index.svelte'
    import Wallpaper from './wallpaper/index.svelte'

    let data = [
        {i:0,title: '壁纸类型管理', component: WallpaperType},
        {i:1,title: "壁纸管理", component: Wallpaper}]
    let selected = data[0]

    function handleMenu(val) {
        selected = val
    }
</script>
<main>
    <div class="bmenu">
        <div class="head_logo">
            <img class="logo" src="/static/images/svelte.svg" alt="">
        </div>
        <div class="menu_list">
            {#each data as item, i}
                <button class={i === selected.i ? 'item active' : 'item'} on:click={()=>handleMenu({...item,i})}>
                <span class="bicon">
                    <BeIcon name='app' color={i === selected.i ? '#fff' : '#000'}/>
                </span>
                    <span class="title">{item.title}</span>
                </button>
            {/each}
        </div>
    </div>
    <section>
        <svelte:component this={selected.component}/>
    </section>
</main>
<style lang="less">
  main {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    display: flex;
  }

  section {
    margin-left: 10px;
    flex: 1;
    height: 100%;
    width: 100%;
    background: #fff;
  }

  .bmenu {
    width: 220px;
    height: 100%;
    background: #fff;

    .head_logo {
      display: flex;
      justify-content: center;
      height: 60px;
      border-bottom: 1px solid #eee;

      .logo {
        width: 30px;
      }
    }

    .menu_list {
      .item {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: none;

        &:hover {
          background: #f4f4f4;
        }

        .bicon {
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 30px;
        }

        .title {
          margin-left: 4px;
          font-size: 15px;
        }
      }

      .active {
        background: #FF3E00;

        &:hover {
          background: #FF3E00;
        }

        .title {
          color: #fff;
        }
      }
    }
  }

</style>
