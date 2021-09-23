# In-video Call to Action

Dailymotion custom embed supports the addition of CTA links in any video. Check our [Demo](https://dmvs-apac.github.io/custom-embed-v2/examples/cta_card/index.html)

### Start Embedding

To embed players with in-video CTA cards, you need to add `<script type="application/json" id="dm_player_text" >` tag before [Custom embed code for player](https://dmvs-apac.github.io/custom-embed-v2/).

Data for in-video CTA card can be set inside `<script type="application/json">` as `JSON` format.

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

Details of the JSON format data to provide information about in-video CTA card for Custom embed player :

We provide three positions of video progress to the CTA card. i.e., `video_start`, `video_end`, `video_middle` (with optional `timestamp` parameter). For each position, a CTA card can be added with `text` and `link` mandatory parameters. Here is the in-video CTA card activation information : 

- `video_start` : After video start and progress to 5 seconds.
- `video_end` : 10 seconds before video ends.
- `video_middle` : Activated at mid-point of the video. It can be set with optional `timestamp`(in seconds) parameter to activate at a particular video progress time.


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


### CTA Card features:
- CTA card will show for 10 seconds of video progress.
- CTA card will be hidden when an ad is playing on the player.
- CTA card will not show on PIP (floating player). 

**Example:**
- [CTA Link Card - playground](https://dmvs-apac.github.io/custom-embed-v2/examples/cta_card/index.html)
