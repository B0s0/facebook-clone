import React from 'react'
import '../styles/Widgets.css'

function Widgets() {
	return (
		<div className="widgets">
			<iframe title="widgets_iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHacker0x01%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="100%" style={{ border:"none", overflow:"hidden"}} scrolling="no" frameborder="0"  allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
		</div>
	)
}

export default Widgets;