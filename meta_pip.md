# Pip with metadata 

Dailymotion Custom Embed have an experimental component i.e., `metaPip`. It shows pip with some metadata about the content video ( channel name, video title ).
> ALthough, the best practice is to use defaut pip provided by player settings in [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players)

**To use this feature you must disable default pip from player settings in [Partner HQ](https://www.dailymotion.com/partner/x1wzpns/embed/players)**

### Parameter

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| metaPip | boolean/string | false | Set `true` to activate the metaPip or You can set `mobileBig`. Know more |

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
For mobile viewport, the player's width in pip is `240px`. Sometimes, it may effect on an ad's UI ( like no skip button ). For those cases, you can use `metaPip="mobileBig"` to have full width pip in mobile viewport. [Check Examples](#example-links).

### Example Links
- [Control API Call with `minWordSearch` and `maxWordSearch`](https://dmvs-apac.github.io/custom-embed-v2/examples/api_call_control/)
