<script>
  import { BeIcon, BeUpload } from "@brewer/beerui";
  import { onMount } from "svelte";

  let base_url = import.meta.env.VITE_APP_BASE_URL;
  let action = base_url + "/api/upload/wallpaper";
  let fileList = [];
  export let imgUrl;
  export let onUrl = () => {
  };
  onMount(() => {
    setTimeout(() => {
      if (imgUrl) {
        fileList = [
          { uid: new Date().getTime().toString(), url: base_url + imgUrl, name: "" }
        ];
      }

    }, 500);
  });
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
      <BeIcon name="add" width="40" height="40" />
    </div>
  </BeUpload>
</main>
<style lang="less">
  :global(.be-upload--picture-card) {
    width: 100px !important;
    height: 100px !important;
  }

  :global(.be-upload-list__item) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
</style>
