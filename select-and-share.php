<?php
/*
Plugin Name: Select and Share
Plugin URI:  http://ashokg.in/
Description: Allows the end user to share your website's content just by selecting it.
Version: 1.0.0
Author: Ashok G
Author URI: http://ashokg.in

Copyright: © 2015 Ashok G.
License: GNU General Public License v3.0
License URI: http://www.gnu.org/licenses/gpl-3.0.html

*/


function sts_js() {
	wp_enqueue_script(
		'select-and-share',
		plugins_url( '/js/select-and-share.js' , __FILE__ ),
		array()
	);
}

function sts_css() {
       /*
        * It will be called only on your plugin admin page, enqueue our stylesheet here
        */
       wp_enqueue_style( 'sts',  plugins_url('/css/select-and-share.css', __FILE__) );
       wp_enqueue_style( 'font-awsome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css' );
  }

add_action( 'wp_enqueue_scripts', 'sts_js' );
add_action( 'wp_enqueue_scripts', 'sts_css' );



/** Step 2 (from text above). */
add_action( 'admin_menu', 'sts_plugin_menu' );

/** Step 1. */
function sts_plugin_menu() {
	add_options_page( 'Select And Share Options', 'Select And Share', 'manage_options', 'sts', 'sts_options' );
}

/** Step 3. */
function sts_options() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
	echo '<h2>Welcome to Select And Share!</h2>';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	?>
<!--span class='st_facebook_large' st_url="http://ashokg.in" displayText='Facebook'></span>
<span class='st_twitter_large' st_url="http://ashokg.in/woocommerce-pay-to-upload/" displayText='Tweet'></span>
<span class='st_linkedin_large' st_url="http://ashokg.in/woocommerce-pay-to-upload/"  displayText='LinkedIn'></span>
<span class='st_pinterest_large' st_url="http://ashokg.in/woocommerce-pay-to-upload/" displayText='Pinterest'></span>
<span class='st_email_large' st_url="http://ashokg.in/woocommerce-pay-to-upload/" displayText='Email'></span>-->
<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "7ddada2a-6487-41e9-b1a4-1cbf67c41f00", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
<fieldset>
<form method="post" action="">
<p><?php 
$ststwitter_handle = get_option('sts_twitter');
if(strlen($ststwitter_handle) > 0)
{
	$sts_handle = $ststwitter_handle;
}
else
{
	$sts_handle = '';
}
?>
			<label for="sts_twitter" class="sts_label">Twitter Handle</label>: <input
				type="text" name="sts_twitter" id="sts_twitter" pattern="[a-zA-Z0-9_.\s]+" oninvalid="setCustomValidity('Invalid character input ')" onchange="try{setCustomValidity('')}catch(e){}" value="<?php echo $sts_handle; ?>" />
		</p>
		<p>
			<input type="submit" value="Save" class="button button-primary" name="submit" />
		</p>
</form>
</fieldset>
	<?php
	
	echo '</div>';
}

if (isset ( $_POST ["submit"] )) {
	
	if($_POST['sts_twitter']!='')
	{
		$ststwitter = get_option('sts_twitter');
		if(strlen($ststwitter)>0)
		{
			update_option('sts_twitter', $_POST['sts_twitter']);
		}
		else
		{
		add_option( 'sts_twitter', $_POST['sts_twitter'] );
		}
	}
}
?>

