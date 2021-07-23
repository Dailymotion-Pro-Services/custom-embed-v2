# Infinite Scrolling

The CE script exposed `window.dmceRender` method to render the player programmatically.

### window.dmceRender( `playerHolder`: HTMLElement) :

This method can be used to render the player on perticular html `element`. This is a simple example.

```html
<div id="playerHolder" playerId="PLAYER_ID" owners="{YOUR_CHANNEL_NAME}" videoId="{VIDEO_ID}" ></div>
<script src="https://srvr.dmvs-apac.com/v2/dm-ce.min.js"></script>
<script>
    window.dmceRender( document.getElementById("playerHolder"));
</script>
```
link :[render player](https://dmvs-apac.github.io/custom-embed-v2/examples/render_player/)

The same funtion also can be used to render the player for infinite scrollling.
link : [infinite scroll](https://dmvs-apac.github.io/custom-embed-v2/examples/infinite_scroll/)



