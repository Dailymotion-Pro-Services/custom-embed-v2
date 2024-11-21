# Control API Call with `minWordSearch` and `maxWordSearch`

Dailymotion Custom Embed provides two extra parameters i.e., `minWordSearch` and `maxWordSearch`. While using contextual embed, you can control the number of attempts for API calls to get relevant video.
> custom embed utilize [search API](https://developer.dailymotion.com/api/#video-search-filter) to get a relevant video with keywords from `keywordsSelector`/`keywords`. If API does not return any video, it will remove the last keyword from the previous keywords and attempt again. If API fails to find any relevant video with two keywords at the end, custom embed finds fallback video based on other parameters.


### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| minWordSearch | number | 2 | To limit the minimum number of words for API Call in search |
| maxWordSearch | number | 15 | To limit the maximum number of words for API Call in search |

**Embed Example:**

You can use it with public features, this is an example on how to use it 
```html
<div class="dm-player"
	minWordSearch="4"
	maxWordSearch="6"
/>
```

### Example Links
- [Control API Call with `minWordSearch` and `maxWordSearch`](https://dailymotion-pro-services.github.io/custom-embed-v2/examples/api_call_control/)
