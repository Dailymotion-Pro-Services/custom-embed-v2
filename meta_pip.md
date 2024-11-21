# Pip with metadata 

Dailymotion Custom Embed has an experimental component i.e., `metaPip`. It shows the picture-in-picture (PIP) with some metadata about the video content (channel name and video title).
> Although, the best practice is to use the default pip provided by our player settings in [Partner HQ](https://www.dailymotion.com/partner/embed/players), you can use instead this variation of the PIP player in some instances. 

**To use this feature you must first disable the default pip from player settings in [Partner HQ](https://www.dailymotion.com/partner/embed/players)**

### Parameter

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| metaPip | boolean/string | false | Set `true` to activate the metaPip or you can set `mobileBig`. [Learn more](#metapipmobilebig) |

**Embed Example:**

You can use it with the rest of our public Custom Embed V2 features, this is just an example on how to use it:
```html
<div class="dm-player"
	metaPip="true"
/>
```
```html
<div class="dm-player"
	metaPip="mobileBig"
/>
```

### metaPip="mobileBig" 
For mobile viewport, the player's width in pip is `240px`. Sometimes, it may affect an ad's UI ( such as not showing the skip button). For those use cases, you can use `metaPip="mobileBig"` to have a full-width pip in the mobile viewport. This removes the video metadata next to the PIP. [Check Examples](#example-links).

### Example Links
- [metaPip="true"](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/meta_pip/)
- [metaPip="mobileBig"](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/meta_pip/mobile_big)
