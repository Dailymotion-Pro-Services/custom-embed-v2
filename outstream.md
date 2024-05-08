# Outstream Player

### Player Settings

Follow the mandatory [player settings](https://www.dailymotion.com/partner/embed/players).

```
Autostart on
Picture-in-Picture on
    Instant on
```

### Snippets
```html
    <!-- Place this in the very bottom of HTML structure before body end -->
    <style type="text/css">
        #dailymotion-pip-large-viewport {
            --position-right: 30px;
            --position-bottom: 90px;
        }
        /** hide the player */
        .dm-player {
            height: 1px;
            width: 1px;
            margin: -1px;
            position: absolute;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
        .dm-player iframe {
            position: absolute;
        }
    </style>
    <div class="dm-player" playerId="{player-id}" sort="relevance" keywordsSelector="title" owners="{owner-id}" lazyload="true" mute="true" referrerPolicy="no-referrer-when-downgrade"></div>
    <script src="https://statics.dmcdn.net/c/dm-ce.min.js"></script>

</body>
</html>
```

Hide the player container and put it in a very bottom of the structure.
