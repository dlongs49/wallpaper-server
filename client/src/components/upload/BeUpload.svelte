<script>
  import { BeIcon, BeUpload } from "@brewer/beerui";
  let action = import.meta.env.VITE_APP_BASE_URL + "/api/upload/wallpaper"
  console.log(action);
  let fileList = []
  let onSuccess = (data)=>{
    console.log(data,fileList);
  }
</script>
<main>
  <BeUpload
    action={action}
    multiple
    name="wallpaper"
    accept="image/*"
    listType="picture-card"
    limit={1}
    hideUpload={true}
    onSuccess={onSuccess}
    fileList={fileList}>
    <div class="upload-card"><BeIcon name="add" width="40" height="40" /></div>
  </BeUpload>
</main>
<style lang="less">
  :global(.be-upload--picture-card){
    width: 100px !important;
    height: 100px !important;
  }
</style>