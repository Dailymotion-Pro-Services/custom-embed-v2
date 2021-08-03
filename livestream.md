# Livestream video embed

Dailymotion custom embed supports the embed of a livestream.


**Embed Example :**

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

We provide livestream replacement when livestream is `off air`. If livestream video is off air, player will find any [recording](https://developer.dailymotion.com/api/#video-recordings-connection) related to the livestream. If there is no recorded video found, the video player will fetch a recent video from the given `CHANNEL_NAME`.

We provide also information on the player notifying that current video is a replacement of a livestream. The player also checks in every 5 minutes from the [DATA-API](https://developer.dailymotion.com/api/#video-onair-field) the `onair` status of the livestream. If the livestream is live / `on air` then player will change back the current video to livestream instead. Even when player loads, player checks livestream `on air` status and follows the same flow.

### Replacement information:

We also provide option to change the text in the information when livestream is replaced. By adding `<script type="application/json" id="dm_player_text" >` tag, the text in the information can be changed.

Here is an example.

```html
<script type="application/json" id="dm_player_text">
    {
        "livestream" : {
            "info_title" : "this is custom message.",
            "info_learn" : "Learn more..",
            "info_details" : "this is custom details of the livesteam message. It can be edited as needed."
        }
    }
</script>
```

**Example :**

- [Default](https://dmvs-apac.github.io/custom-embed-v2/examples/livestream/default.html)
- [Modified text](https://dmvs-apac.github.io/custom-embed-v2/examples/livestream/text_change.html)
