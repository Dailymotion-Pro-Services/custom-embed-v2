# CTA Link Card

Dailymotion custom embed supports to add CTA Link card on video. Check our [Demo](https://dmvs-apac.github.io/custom-embed-v2/examples/cta_card/index.html)

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


There are Three types of formats for data to set.

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

__2) Video level:__ Data can be set for each video.


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
            },
            {......}
        ]
    }
</script>
```

__3) Player level with video:__ Combination of __player level__ data with __video level__ data


```html
<script type="application/json" id="dm_player_text">
    {
        "cta_card": [
            {
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
            },
            {
                "video_id": "x123ab",
                "video_start": {
                    "text": "check this new video too.",
                    "link": "https://www.example.com/article1"
                },
                "video_middle": {
                    "timestamp": 47,
                    "text": "Another interesting video about the same topic",
                    "link": "https://www.example.com/article1"
                },
                "video_end": {
                    "text": "check here new video topics.",
                    "link": "https://www.example.com/article1"
                }
            },
        ]
    }
</script>
```

### CTA Card features:
- CTA card will show for 10 seconds of video progress.
- CTA card will be hidden when an ad is playing on the player.
- CTA card will not show on PIP.
- For __Player level with video__ data structure, if current video of the player has no information for CTA card then it will check __Player level__ data i.e., `cta_card[0]` 

**Example:**
- [CTA Link Card - playground](https://dmvs-apac.github.io/custom-embed-v2/examples/cta_card/index.html)
