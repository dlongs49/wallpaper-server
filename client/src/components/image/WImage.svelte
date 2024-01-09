<script>
export const url = "https://www.dillonl.com/u/demo.png"
export const width = '120px'
</script>
<div class="w-image" style={'width:'+width}>
  <img class="w-image-show" src={url} alt=""/>
  <div class="w-image_mask">
    <span>预览</span>
  </div>
</div>
<style lang="less">
  .w-image{
    position: relative;
    .w-image-show{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    .w-image_mask{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      inset: 0 0;
      background: rgba(0, 0, 0, 0.4);
      span{
        color: #fff;
      }
    }
  }
</style>