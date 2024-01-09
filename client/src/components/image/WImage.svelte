<script>
    export let url = ""
    export let width = '120px'
    // 点击预览
    const handlePreview = () => {
        let style = 'position: fixed;inset: 0 0; background: #000000;z-index: 999;opacity: .75;'
        let imgStyle = 'max-width: 100%;max-height: 100%;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);padding: 50px 15px;box-sizing: border-box;'
        let svg = ``
        let close = `<button class="w-image_close" style="position: absolute;right:34px;cursor:pointer;z-index:99;top:34px;width: 50px;height: 50px;border-radius: 50%;display: flex;align-items: center;justify-content: center;background: #0000008f"><svg version="1.1" id="close-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve"><line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="6.808" y1="6.808" x2="25.192" y2="25.192"></line><line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="6.808" y1="25.192" x2="25.192" y2="6.808"></line></svg></>`
        let el = document.createElement("div")
        el.classList.add('w-image_open')
        el.setAttribute("style", style)
        let img = document.createElement('img')
        img.setAttribute("src", url)
        img.setAttribute("style", imgStyle)
        el.innerHTML = close + svg
        el.appendChild(img)
        document.body.appendChild(el)
        document.querySelector(".w-image_close").addEventListener("click", (e) => {
            el.setAttribute('class', 'w-image_closing')
            setTimeout(() => {
                document.body.removeChild(el)
            }, 400)
        })
    }
</script>
<div class="w-image" style={'width:'+width}>
    <img class="w-image-show" src={url} alt=""/>
    <button class="w-image_mask" on:click={handlePreview}>
    <span class="w-preview">
      <svg focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"
           viewBox="64 64 896 896"><path
              d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
      预览</span>
    </button>
</div>
<style lang="less">
  .w-image {
    position: relative;

    .w-image-show {
      width: 100%;
      height: auto;
      vertical-align: middle;
      background: #f4f4f4;
    }

    .w-image_mask {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      inset: 0 0;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }

      .w-preview {
        cursor: pointer;
        display: flex;
        align-items: center;
        background: none;
        color: #fff;
        font-size: 14px;

        svg {
          margin-right: 6px;
        }
      }

    }

  }

</style>
