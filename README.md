Show Width jQuery Plugin
=====

This plugin appends a `div` with a  `class="show-width"` inside the container it is being invoked on. I created this to help me with my responsive development whenever I needed to know pixel size of a container.

    $('body').showWidth();

Above statement would show create a small `div` inside of `body` container showing the width of `body` container. It updates on window resize event. 

Most of the styles for the `show-width` element can be set using `CSS` as below:

    .show-width {
		background:#000;
		color:#fff;
		padding:10px 15px;	
		z-index:9999;
	}

The plugin only accepts a single options parameter to set the pinned position of the appended container as: 


- `"TL"` to pin the element to top left of the container
- `"TR"` to pin the element to top right of the container
- `"BL"` to pin the element to bottom left of the container
- `"BR"` to pin the element to bottom right of the container


To pin the element to the bottom left of `body` element to show its width below syntax can be used:

    $('body').showWidth({position:"BL"});
 

The plugin requires jQuery library.

