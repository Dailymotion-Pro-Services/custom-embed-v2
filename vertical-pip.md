# Vertical PiP

### Player settings

Follow the mandatory [player settings](https://www.dailymotion.com/partner/embed/players).

```
Picture-in-Picture on
Aspect Ratio 9/16
```

**Snippets**
```html
<div class="dm-player-vertical" style="max-width: 350px; margin: 0 auto 20px;">
    <style type="text/css">
    /* This class will overwrite original style */
    #dailymotion-pip-large-viewport {
        --dm-pip-vw: 135px; /* adjust as needed */
        width: var(--dm-pip-vw) !important;
        height: calc( ( var(--dm-pip-vw) * 16) / 9) !important;
        overflow: visible;
        bottom: 20px !important;
        right: 20px !important;
        transform: none !important;
    }
    </style>
    <script src="https://geo.dailymotion.com/player/{{your-player-id}}.js" data-playlist="{{your-playlist-id}}" data-video="{{your-video-id}}"></script> 
</div>
```

All the snippets code above are adjustable as you need. Feel free to reconfigure it.


### Example link

- [Vertical PiP](https://staging.dmvs-apac.com/vertical-pip/index.html)
- [Codepen Vertical PiP Playground](https://codepen.io/isatrio/pen/oNRwVZq?editors=1000)
