# Extra Features For Specific Use Cases

We developed a few extra parameters for video embed contexts requiring bespoke features. 

### Parameters

| Name | Type | Description |
| :---: | :---: | --- |
| closeButton | boolean | This is a custom button which overrides close button from the Dailymotion player to destroy the player instead of hiding it. |
| closePipButton | boolean | This is a custom button which will apear outside of PIP the Dailymotion player. This will close the PIP and can work with `showPipButtonAfter` |
| showAdOnly | boolean | This is if partners want only to show a video if there is an ad before it. If `no-ad` the player will be destroyed and never shown to the viewer |
| hideButton | boolean | This is a custom button for hiding the PiP Player instead of closing it permanently. The visitor can unhide it when they want to watch it again. This will override the original controls. |
| showPipButtonAfter | number | This is a custom param that controls when the hide button will show once an ad creative is displayed. You can define the number in seconds. By default, if you don't put any number it will use default 5 seconds. |
| smallPip | boolean | This is a custom param that change PIP size for mobile view with custom controls over PIP. [Sample page](https://dmvs-apac.github.io/custom-embed-v2/examples/small_pip/)|
| omidSDK | boolean |  To avoid a policy violation with Google’s OMID verification script, set it `true`. [More on OMID here FYI](https://iabtechlab.com/standards/open-measurement-sdk/)|

If you don't want to use this, you just don't need to use the parameters inside the container.

**Embed Example :**

You can use it with public features from the main Custom Embed documentation, this is just an example on how to use it 
```html
<div class="dm-player"
	closeButton="true"
	showAdOnly="true"
	hideButton="true"
	showPipButtonAfter="5"
/>
```
