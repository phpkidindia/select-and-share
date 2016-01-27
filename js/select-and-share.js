/* global alert */
function checkSelection(event) {
  /* Get the selection text */
	
	var selected_text = document.getSelection();
  
    if (selected_text != "") {
        /* Find the cursor position */
		
		var current_page_url,
			get_cursor_left,
			get_cursor_right,
			create_social_div,
			add_social_class,
			create_text_wrap;
		
		
		current_page_url = window.location.href;
		
		get_cursor_left = event.clientX;
        get_cursor_right = event.clientY;

        
		/* Create the social wrapper */
        create_social_div = document.createElement("div");
        add_social_class = create_social_div.setAttribute("class", "social_share_overlay");
        create_social_div.style.left = get_cursor_left + "px";
        create_social_div.style.top = get_cursor_right + "px";
		
        
        /* create factory function for social icon */
        function createCommunity(url, community_name) {
			var create_community_link,
				add_community_link,
				add_target_link,
				create_community_icon,
				add_community_class;
			
            create_community_link = document.createElement("a");
            add_community_link = create_community_link.setAttribute("href", url);
			add_target_link = create_community_link.setAttribute("target", "_blank");
            create_community_icon = document.createElement("i");
            add_community_class = create_community_icon.setAttribute("class", "fa fa-" + community_name );
            create_community_link.appendChild(create_community_icon);
            create_social_div.appendChild(create_community_link);
        }
        
        /* Repeat community */
        createCommunity("http://www.twitter.com/share?text="+selected_text+'&via=wpashokg', 'twitter');
        createCommunity("http://www.linkedin.com/shareArticle?mini=true&summary="+selected_text+'&title='+selected_text+'&source=twitter&url='+current_page_url, 'linkedin');
//        createCommunity("https://www.facebook.com/dialog/feed?" +'app_id='+self.appId +'&display=popup'+ '&caption='+encodeURIComponent(selected_text)+'&link='+encodeURIComponent(current_page_url)+'&href='+encodeURIComponent(current_page_url)+'&redirect_uri='+encodeURIComponent(current_page_url), 'facebook');

        /* Append wrapper to the body */
        document.body.appendChild(create_social_div);
    } else {
        return false;
    }
}



window.addEventListener("click", function (event) {
	
	clearOverlay(event);
	
	/* Find Existing Share Wrapper */
	function clearOverlay(){	
		var find_existing_overlay = document.getElementsByClassName("social_share_overlay");
		
		while (find_existing_overlay[0]){
			find_existing_overlay[0].parentNode.removeChild(find_existing_overlay[0]);
		}
		
	/* Find Targeted Element */
		var selected_element = event.target.tagName;
		var para_element = new RegExp("P");
		var target_element = para_element.exec(selected_element);
	
		if (target_element != null){
			checkSelection(event);
		} else {
			return false;
		}
	}
}
	
	
  	
);
