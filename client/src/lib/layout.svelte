<script>
  import { BeIcon } from "@brewer/beerui";
  import { View } from "svelte-pilot";
  import router from "../router/index.js";
  import { onMount } from "svelte";

  let data = [
    { i: 0, title: "壁纸类型管理", path: "/wallpaper_type" },
    { i: 1, title: "壁纸管理", path: "/wallpaper" }];
  let path = "/wallpaper";
  onMount(() => {
    path = router.current.path;
  });

  function handleMenu(val) {
    path = val.path;
    router.push(val.path);
  }
</script>
<main>
  <div class="bmenu">
    <div class="head_logo">
      <img class="logo" src="/static/images/svelte.svg" alt="">
    </div>
    <div class="menu_list">
      {#each data as item, i}
        <button class={item.path === path ? 'item active' : 'item'} on:click={()=>handleMenu(item)}>
                <span class="bicon">
                    <BeIcon name="app" color={item.path === path ? '#fff' : '#000'} />
                </span>
          <span class="title">{item.title}</span>
        </button>
      {/each}
    </div>
  </div>
  <section>
    <View />
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
    height: 100vh;
    width: 100%;
    background: #fff;
    overflow-y: auto;
    // 美化滚动条
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      width: 6px;
      background: rgba(#101F1C, 0.1);
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius: 2em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(144, 147, 153, .5);
      background-clip: padding-box;
      min-height: 28px;
      -webkit-border-radius: 2em;
      -moz-border-radius: 2em;
      border-radius: 2em;
      transition: background-color .3s;
      cursor: pointer;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(144, 147, 153, .3);
    }

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
