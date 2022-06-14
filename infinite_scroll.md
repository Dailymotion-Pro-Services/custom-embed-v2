# Infinite Scrolling

The Custom Embed script provides `window.dmceRender` method to render the player programmatically.

### window.dmceRender( `playerHolder`: HTMLElement, `keywords`?: String) :

This method can be used to render the player on targeted `HTMLElement`.

```html
<div id="playerHolder" playerId="PLAYER_ID" owners="{YOUR_CHANNEL_NAME}" videoId="{VIDEO_ID}" ></div>
<script src="https://srvr.dmvs-apac.com/v2/dm-ce.min.js"></script>
<script>
    window.dmceRender( document.getElementById("playerHolder"));
</script>
```

`keywords` is optional parameter which is used to fetch relevant video.
```html
<div id="playerHolder" playerId="PLAYER_ID" owners="{YOUR_CHANNEL_NAME}" sort="relevance" ></div>
<script src="https://srvr.dmvs-apac.com/v2/dm-ce.min.js"></script>
<script>
    window.dmceRender( document.getElementById("playerHolder"), "sports,football");
</script>
```

This is a [simple playground](https://dmvs-apac.github.io/custom-embed-v2/examples/render_player/).

The same function also can be used to render the player for infinite scrolling. Here is the example page
[infinite scroll](https://dmvs-apac.github.io/custom-embed-v2/examples/infinite_scroll/)



