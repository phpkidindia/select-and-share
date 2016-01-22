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

        /* Optional - Paste selected text */
        create_text_wrap = document.createElement("p");
        create_text_wrap.innerHTML = selected_text;
        create_social_div.appendChild(create_text_wrap);
        
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
            add_community_class = create_community_icon.setAttribute("class", "fa fa-" + community_name + "-square fa-2x");
            create_community_link.appendChild(create_community_icon);
            create_social_div.appendChild(create_community_link);
        }
        
        /* Repeat community */
        createCommunity("http://www.twitter.com?post="+selected_text+current_page_url, 'twitter');
        createCommunity("http://www.linkedin.com?post="+selected_text+current_page_url, 'linkedin');
        createCommunity("http://www.facebook.com?post="+selected_text+current_page_url, 'facebook');

        /* Append wrapper to the body */
        document.body.appendChild(create_social_div);
    } else {
        return false;
    }
}

window.addEventListener("click", function (event) {
  /* Find any overlay */
	var find_existing_overlay,
		find_no;
	
	find_existing_overlay = document.getElementsByClassName("social_share_overlay");
	find_no = find_existing_overlay.length;
	
  	if (find_no > 0) {
        document.body.removeChild(find_existing_overlay[0]);
	  	checkSelection(event); } else
		{
		checkSelection(event);
	}
});
