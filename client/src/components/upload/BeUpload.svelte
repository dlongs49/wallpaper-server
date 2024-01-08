<script>
    import {BeIcon, BeUpload} from "@brewer/beerui";
    let action = import.meta.env.VITE_APP_BASE_URL + "/api/upload/wallpaper"
    let fileList = []
    export let imgUrl = ''
    export let onUrl = (res) => {
        if (res.data.code === 200) {
            imgUrl = res.data.url
        }
    }
</script>
<main>
    <BeUpload
            action={action}
            multiple
            name="wallpaper"
            accept="image/jpeg,image/png"
            listType="picture-card"
            limit={1}
            hideUpload={true}
            onSuccess={onUrl}
            fileList={fileList}>
        <div class="upload-card">
            <BeIcon name="add" width="40" height="40"/>
        </div>
    </BeUpload>
</main>
<style lang="less">
  :global(.be-upload--picture-card) {
    width: 100px !important;
    height: 100px !important;
  }
</style>
