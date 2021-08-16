# AMP

We use mainly [`amp-video-iframe`](https://amp.dev/documentation/components/amp-video-iframe/) AMP componenets to support AMP page. Please follow the instruction.

### 1) Host Resources to your server first

Copy the source code of [dm-player](https://srvr.dmvs-apac.com/v2/dm-player.html) and host the page in your server.

### 2) Put code below to your `<head>` page

```html
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-video-iframe-0.1.js">
<script async custom-element="amp-video-iframe" src="https://cdn.ampproject.org/v0/amp-video-iframe-0.1.js"></script>
<!-- Optional -->
<script async custom-element="amp-video-docking" src="https://cdn.ampproject.org/v0/amp-video-docking-0.1.js"></script>
```
> [`amp-video-docking`](https://amp.dev/documentation/components/amp-video-docking/) : Functionality for videos that minimize ("dock") to a corner or a custom position on scroll.

### 3) The configuration
```html
<amp-video-iframe 
  layout="responsive" 
  width="500"
  height="281"
  src="{path/you/put/dm-player.html}"
  data-param-playerid="{PLAYER_ID}"
  data-param-owners="{YOUR_CHANNEL_NAME}"
  data-param-sort="relevance"
  data-param-keywords="{YOUR_KEYWORDS}"
  autoplay dock>
</amp-video-iframe>
```
