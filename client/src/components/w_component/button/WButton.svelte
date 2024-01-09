<script>
    export let type = 'primary'
    export let title = ""
</script>
<!-- 参考ElementUI -->
<button class="w-button w-button_primary w-button_loading">
    <div class="w-button_flex">
        {#if true}
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 style="margin: auto; background: none;" width="200px" height="200px"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#fff" stroke-width="10" r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                      dur="0.5952380952380952s"
                                      values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        {/if}
        <span>
          <slot title={title}/>
        </span>
    </div>
    <span class="w-button_mask"></span>
</button>
<style lang="less">
  .w-button {
    position: relative;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    .w-button_mask {
      pointer-events: none;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      position: absolute;
      background: rgba(255, 255, 255, 0.52);
      border-radius: 4px;
    }

    .w-button_flex {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 15px;
        height: 15px;
        display: inline-block;
        line-height: 1;
        vertical-align: baseline;
      }

      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }


    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
      color: #fff;
    }

    &:focus, &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }

  .w-button_loading {
    pointer-events: none;
  }

  .w-button_primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
</style>
