# Pip with metadata 

Dailymotion Custom Embed has an experimental component i.e., `metaPip`. It shows pip with some metadata about the content video ( channel name, video title ).
> ALthough, the best practice is to use default pip provided by player settings in [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players)

**To use this feature you must disable default pip from player settings in [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players)**

### Parameter

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| metaPip | boolean/string | false | Set `true` to activate the metaPip or You can set `mobileBig`. [Know more](#metapipmobilebig) |

**Embed Example:**

You can use it with public features, this is just example how to use it 
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
For mobile viewport, the player's width in pip is `240px`. Sometimes, it may affect an ad's UI ( like no skip button ). For those cases, you can use `metaPip="mobileBig"` to have a full-width pip in the mobile viewport. [Check Examples](#example-links).

### Example Links
- [metaPip="true"](https://dmvs-apac.github.io/custom-embed-v2/examples/meta_pip/)
- [metaPip="mobileBig"](https://dmvs-apac.github.io/custom-embed-v2/examples/meta_pip/mobile_big)
