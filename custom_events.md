# Events in Custom Embed V2 :

Custom Embed V2 provide some [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) on `document` to inform special activity inside the script. Some events provide information like [dailymotion player object](https://developers.dailymotion.com/player/#player-api).

### Example : 
```html
<script>
    // get player object when custom embed create player
    document.addEventListener("dm-player-create",(e)=>{
        console.log(e.detail); // {player: playerObject}
    })
</script>
```

### Events : 

| Name | Type | Info | Description |
| :---: | :---: | :---: |--- |
| `dm-player-create` | CustomEvent | provides `{detail:{player: playerObject }}` inside event object |Sent when player is created. |
| `dm-no-ad` | CustomEvent | NA |Sent when player has no ad to play. |
| `dm-player-onair` | CustomEvent | provides `{detail:{player: playerObject }}` inside event object |Sent when livestream video is `onAir`. [More details](https://dailymotion-pro-services.github.io/custom-embed-v2/livestream#auto_replace). |
| `dm-no-relevance` | CustomEvent | provides `{detail:{player: playerParams }}` inside event object. playerParams are [parameters](https://dailymotion-pro-services.github.io/custom-embed-v2/#parameters-available) added to custom embed |Sent when there is no relevant video. |

### Example Links:
- [Custom events logs](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/events/)
