# Livestream video embed

Dailymotion custom embed support to embed livestream video.


**Embed Example :**

Just need to add livestream video's `xid` in `videoId` field. Here is an example.
```html
<div class="dm-player"
	playerId="{PLAYER_ID}"
    owners="{YOUR_CHANNEL_NAME}"
    videoId="{VIDEO_ID}"
/>
```


### Livestream replacement :

We provide livestream replacement when live stream is `off air`. If livestream video is off air, player will find any [recoding](https://developer.dailymotion.com/api/#video-recordings-connection) related to livestream video. If there is no recorded video found, player will fetch recent video from the given `CHANNEL_NAME`.

We provide also information on the player notifying that current video is a replacement of livestream video. The Player also checks in every 5 minutes from the [DATA-API](https://developer.dailymotion.com/api/#video-onair-field) to check `onair` status of the livestream video. If the livestream video is live / `on air` then player will change the current video to livestream video.

### Replacement informatio:

We also provide option to change the text in the inofrmation when livestream video is replaced. By adding `<script type="application/json" id="dm_player_text" >` tag, the text in the information can be changed.

Here is an example.
```html
<script type="application/json" id="dm_player_text">
    {
        "livestream" : {
            "info_title" : "this custome message.",
            "info_learn" : "Learn more..",
            "info_details" : "this custom details of the livesteam message. It can be edited as needed."
        }
    }
</script>
```

**Example :**

- [Default](https://dmvs-apac.github.io/custom-embed-v2/examples/livestream/default.html)
- [Modified text](https://dmvs-apac.github.io/custom-embed-v2/examples/livestream/text_change.html)
