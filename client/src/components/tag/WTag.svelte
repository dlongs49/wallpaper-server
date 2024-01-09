<script>
  export let type = "";
  export let title = "";
</script>
<!-- 参考 ElementUI -->
<span class={'w_tag w_tag-'+(type ? type : 'default')}><slot title={title}></slot></span>
<style lang="less">
  .w_tag {
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .w_tag-default {
    background-color: #ecf5ff;
    color: #409eff;
    border: 1px solid #d9ecff;
  }

  .w_tag-success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
  }

  .w_tag-info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }

  .w_tag-warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }

  .w_tag-error {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
  }
</style>