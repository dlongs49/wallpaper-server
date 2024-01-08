import './app.css'
import '@brewer/beerui/assets/beer.css'
import { ClientApp } from 'svelte-pilot'
import router from './router/index'
router.start(
    () =>
        new ClientApp({
          target: document.getElementById('app'),
          props: { router }
        })
)
