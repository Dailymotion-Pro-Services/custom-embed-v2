# Livestream video embed

Dailymotion custom embed supports the embed of a livestream.


**Embed Example:**

You only need to add your livestream's `xid` in `videoId` field. Here is an example.
```html
<div class="dm-player"
    playerId="{PLAYER_ID}"
    owners="{YOUR_CHANNEL_NAME}"
    videoId="{VIDEO_ID}"
/>
```

This also works with private videos using a `kid` in the `privateVideoId`.

### Livestream replacement :

We provide Livestream replacement when Livestream is `off air`. If Livestream video is `offair`, the player will find any [recording](https://developer.dailymotion.com/api/#video-recordings-connection) related to the Livestream. If there is no recorded video found, the video player will fetch a recent video from the given `CHANNEL_NAME`.

**Livestream replacement with `fallbackPlaylist`:** If livestream video is off air and `fallbackplaylist` parameter present then player will play the playlist. Here is an example.
```html
<div class="dm-player"
    playerId="{PLAYER_ID}"
    owners="{YOUR_CHANNEL_NAME}"
    videoId="{VIDEO_ID}"
    fallbackplaylist="{PLAYLIST_ID}">
/>
```

We provide also information on the player notifying that the current video is a replacement of a Livestream. The player also checks in every 5 minutes ( by default ) from the [DATA-API](https://developer.dailymotion.com/api/#video-onair-field) the `onair` status of the Livestream. If the Livestream is live / `on air` then the player will change back the current video to Livestream instead. Even when the player loads, the player checks Livestream `on air` status and follows the same flow.


### Replacement information:

We also provide the option to change [auto replacement](#auto_replace), the interval and the text in the information when Livestream is replaced. By adding `<script type="application/json" id="dm_player_text" >` tag, the text in the information can be changed.

Here is an example.

```html
<script type="application/json" id="dm_player_text">
    {
        "livestream" : {
            "auto_replace": false,
            "info_time" : 0.5,
            "info_title" : "this is custom message.",
            "info_learn" : "Learn more..",
            "info_details" : "this is custom details of the livesteam message. It can be edited as needed."
        }
    }
</script>
```
**Data Format** :
| Name | Type | Default | Description |
| :---: | :---: | :---: | --- |
| auto_replace | boolean | true | Auto replacement with current video/playlist when Livestream is `onair`. For `false` player will not replace with Livestream video automatically. [Learn More](#auto_replace) |
| info_time | number  | 5 | Interval time `in minutes` for checking Livestream video's `onair` status. [reference](https://developers.dailymotion.com/api/#video-onair-field) |
| info_title | string | `This video is a live stream replacement.` | short note at bottom of the player if replacement video is playing |
| info_learn | string | `Learn more..` | Anchor text to show details of the replacement information.|
| info_details | string | `The live stream is currently off air. The system will check for live stream's status every 5 minutes; you can also refresh the page.` | Details of the replacement information. |

### auto_replace:

By default the player will reload with Livestream video when its `onair` replacing the current video/playlist in the player. Settings `false` player will have two more features. i.e.,
- player will not load the Livestream video even it's `onair`. `Switch to Live` button will show the details of replacement information.
- The Player will also dispatch [customEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) named `dm-player-onair` on document when Livestream is `onair`. Here is an example.

```js
document.addEventListener("dm-player-onair", (e)=>{
  const player = e.detail.player;  // player object : JavaScript Player API Reference
})
```

### Fetching video metadata:

We trigger a [customEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) named `dm-player-created` on document when player is created. We also expose [player object](https://developer.dailymotion.com/player/#player-api)(JavaScript Player API Reference) with the event. By the player object reference, you can fetch [player state](https://developer.dailymotion.com/player/#state) containing video metadata like `videoTitle`, `videoDuration` etc.

Here is an example.

```js
document.addEventListener("dm-player-create", (e)=>{
  const player = e.detail.player;  // player object : JavaScript Player API Reference
  player.getState().then(state=>{
    console.log(state.videoDuration); // result : duration of the video in seconds  E.g. 78
    console.log(state.videoTitle); // result : title of the video E.g. "this a video title"
  });
})

```

**Example:**

- [livestream playground](https://dmvs-apac.github.io/custom-embed-v2/examples/livestream/livestream_playground.html)
