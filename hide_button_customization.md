# Customize PiP with Hide Button

Exposed CSS variables
```CSS
#dailymotion-pip-small-viewport, #dailymotion-pip-large-viewport {
	/* Size Desktop */
	--dm--pip-size-width: 410px;
	--dm--pip-size-height: 231px;

	/* Position */
	--position-bottom: 20px;
	--position-left: initial;
	--position-right: 20px;
	--position-top: initial;
}

#dailymotion-pip-small-viewport {
	/* Size mobile */
	--dm--pip-size-width: 300px;
	--dm--pip-size-height: 169px;
}
```

Responsive
```CSS
/* Keep the size on bigger screen more than 1800 px */
@media screen and (min-width: 1801px) and (max-width: 2160px) {
  #dailymotion-pip-large-viewport {
    --dm--pip-size-width: 410px;
  }
}

/* Adapt the size on super big screen more than 2160 px */
@media screen and (min-width: 2161px) {
  #dailymotion-pip-large-viewport {
    --dm--pip-size-width: 560px;
    --dm--pip-size-height: 315px;
  }
}
```


The customization is only for resize and positioning the player on PiP position. Here are the example of how to do it
```CSS
/* Smaller size */
#dailymotion-pip-small-viewport {
	--dm--pip-size-width: 200px;
	--dm--pip-size-height: 120px;
}

/* Bigger size */
#dailymotion-pip-large-viewport {
	--dm--pip-size-width: 500px;
	--dm--pip-size-width: 400px;
}

/* Reposition to top-right */
#dailymotion-pip-large-viewport {
	--position-bottom: initial;
	--position-left: initial;
	--position-right: 20px;
	--position-top: 60px;
}
```