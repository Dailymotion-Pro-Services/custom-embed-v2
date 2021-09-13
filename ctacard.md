# CTA Link Card

Dailymotion custom embed supports to add CTA Link card on video. Check our [examples](#example-links)

### Start Embedding

To embed players with CTA Link cards, you need to add `<script type="application/json" id="dm_player_text" >` tag before [Custom embed code for player](https://dmvs-apac.github.io/custom-embed-v2/).

Data for CTA Link card can be set inside `<script type="application/json">` as `JSON` format.

Here is an example.

```html
<script type="application/json" id="dm_player_text">
    {
        "cta_card": {
            "video_start": {
                "text": "check this article too.",
                "link": "https://www.example.com/article1"
            },
        }
    }
</script>
```

### Data Format:

Details of the JSON format data to provide information about CTA link card for Custom embed player :

We provide three positions of video progress to the CTA card. i.e., `video_start`, `video_end`, `video_middle` ( with optional `timestamp` parameter). For each position, a CTA card can be added with `text` and `link` mandatory parameters. Here is the CTA Link card activation information : 

- `video_start` : After video start and progress to 5 seconds.
- `video_end` : 10 seconds before video ends.
- `video_middle` : Activated at middel of the video duration. It can be set with optional `timestamp`( in seconds ) parameter to activate at particular video progress time.


There are two types of formats for data to set.

__1) Player level:__ Data will be the same for each video in the player.

```html
<script type="application/json" id="dm_player_text">
    {
        "cta_card": {
            "video_start": {
                "text": "check this article too.",
                "link": "https://www.example.com/article1"
            },
            "video_middle": {
                "timestamp": 47, 
                "text": "Another interesting articles about the same topic",
                "link": "https://www.example.com/article1"
            },
            "video_end": {
                "text": "check here new topics.",
                "link": "https://www.example.com/article1"
            }
        }
    }
</script>
```

__2) Video level:__ Data will be set for each video.


```html
<script type="application/json" id="dm_player_text">
    {
        "cta_card": [
            {
                "video_id": "x123ab",
                "video_start": {
                    "text": "check this article too.",
                    "link": "https://www.example.com/article1"
                },
                "video_middle": {
                    "timestamp": 47,
                    "text": "Another interesting articles about the same topic",
                    "link": "https://www.example.com/article1"
                },
                "video_end": {
                    "text": "check here new topics.",
                    "link": "https://www.example.com/article1"
                }
            }
        ]
    }
</script>
```

### CTA Card features:
- CTA card will show for 10 seconds of video progress.
- CTA card will be hidden when an ad is playing on the player.
- CTA card will not show on PIP.

**Example:**

- [CTA Link Card - playGround](https://dmvs-apac.github.io/custom-embed-v2/examples/cta_card/index.html)