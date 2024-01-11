<script>
    import {BeIcon} from "@brewer/beerui";
    import {View} from "svelte-pilot";
    import router from "../router/index.js";
    import {onMount} from "svelte";

    let data = [
        {i: 0, title: "壁纸类型管理", path: "/wallpaper_type"},
        {i: 1, title: "壁纸管理", path: "/wallpaper"}];
    let path = "/wallpaper";
    onMount(() => {
        path = router.current.path;
    });

    function handleMenu(val) {
        path = val.path;
        router.push(val.path);
    }
    const tosign = ()=>{
        localStorage.clear()
        window.location.href = '/login'
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
                    <BeIcon name="app" color={item.path === path ? '#fff' : '#000'}/>
                </span>
                    <span class="title">{item.title}</span>
                </button>
            {/each}
        </div>
    </div>
    <section>
        <View/>
    </section>
    <button class="sign_out" on:click={tosign}>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             width="200" height="200">
            <path d="M573.2 646.5H309.8c-12.6 0-20.8-5.8-22.9-16.1-0.4-2.1-0.4-4.2-0.4-6.4V397.2c0-14.3 7.8-22 22.3-22H573.1v-6.9-201.8c0-9.3 4.4-16.6 11.9-19.5 8.6-3.3 16.2-1.8 22.7 5.1 3.7 3.9 7.8 7.5 11.6 11.4 48.2 48.1 96.3 96.2 144.5 144.2 61.9 61.7 123.7 123.4 185.6 185.2 10.3 10.3 10.4 21.1 0.2 31.2-88.5 88.4-177 176.8-265.6 265.1-25.2 25.1-50.5 50.1-75.7 75.2-6.5 6.5-13.7 9.3-22.5 6-8.6-3.3-12.6-10-12.6-20.7V646.5z m-159-497.3v76.4H212.9c-41 0-71.3 30.3-71.3 71.4 0 142.3 0.3 284.6-0.2 426.9-0.1 37.7 28.5 64.8 55 69.7 5.9 1.1 11.9 1.6 17.9 1.6 64.2 0.1 128.4 0.1 192.6 0.1h7.2v76c-0.9 0.2-2 0.6-3 0.6-68.2 0-136.5 0.7-204.7-0.3-66.7-1-125.7-51.6-138.5-117.1-1.8-9.2-2.7-18.8-2.7-28.2-0.2-143.8-0.5-287.7 0.1-431.5 0.3-60.1 30.1-103.2 82.2-131.2 18.4-9.9 38.7-14.4 59.6-14.4 67.7-0.2 135.3-0.1 203-0.1 1.1 0 2.3 0.1 4.1 0.1z m0 0"
            ></path>
        </svg>
        <span>退出登录</span>
    </button>
</main>
<style lang="less">
  main {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    display: flex;
    overflow: hidden;
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

  .sign_out {
    position: absolute;
    bottom: 30px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 62, 0, 0.62);
    padding: 6px 10px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    color: #fff;
    cursor: pointer;
    transform: translateX(78px);
    transition: transform .3s;
    &:hover{
      background: rgba(255, 62, 0, 1);
      transform: translateX(0);
    }
    svg {
      width: 20px;
      height: 20px;

      path {
        fill: #fff;
      }
    }

    span {
      margin-left: 8px
    }
  }
</style>
