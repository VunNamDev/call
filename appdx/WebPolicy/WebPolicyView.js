import React, { Component } from 'react';
import { WebView, TouchableOpacity, Linking, Platform, Dimensions, StyleSheet, Text, View, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

const html = `
<!DOCTYPE html>
<html lang="en">
	<head><script src="/gdpr/gdprscript.js?buildTime=1537206626&hasRemindMe=true&stealth=false"></script><script src="/gdpr/gdprscript.js?buildTime=1527218974&stealth=false"></script>
		<title>Privacy Policy</title><meta property="og:site_name" content="WCS" />
<meta property="og:title" content="WCS" />
<meta property="og:description" content="WCS" />
<meta property="og:url" content="http://colorphoneflash.weebly.com/" />



<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		
		<link id="wsite-base-style" rel="stylesheet" type="text/css" href="//cdn2.editmysite.com/css/sites.css?buildTime=1527218974" />
<link rel="stylesheet" type="text/css" href="//cdn2.editmysite.com/css/old/fancybox.css?1527218974" />
<link rel="stylesheet" type="text/css" href="//cdn2.editmysite.com/css/social-icons.css?buildtime=1527218974" media="screen,projection" />
<link rel="stylesheet" type="text/css" href="/files/main_style.css?1527250848" title="wsite-theme-css" />
<link href='//fonts.googleapis.com/css?family=Josefin+Sans:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Cardo:400,700,400italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

<link href='//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Droid+Sans:400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Roboto:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
<link href='//cdn2.editmysite.com/fonts/Aller/font.css?2' rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
<style type='text/css'>
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) div.paragraph, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) p, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-block .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-description, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {font-family:"Lora" !important;}
#wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {color:#252525 !important;}
.wsite-elements.wsite-footer div.paragraph, .wsite-elements.wsite-footer p, .wsite-elements.wsite-footer .product-block .product-title, .wsite-elements.wsite-footer .product-description, .wsite-elements.wsite-footer .wsite-form-field label, .wsite-elements.wsite-footer .wsite-form-field label{}
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {font-family:"Droid Sans" !important;font-weight:400 !important;text-transform:  uppercase !important;letter-spacing: 1px !important;}
#wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {color:#a9a9a9 !important;}
.wsite-elements.wsite-footer h2, .wsite-elements.wsite-footer .product-long .product-title, .wsite-elements.wsite-footer .product-large .product-title, .wsite-elements.wsite-footer .product-small .product-title{}
#wsite-title {font-family:"Roboto" !important;letter-spacing: 4px !important;}
.wsite-menu-default a {}
.wsite-menu a {}
.wsite-image div, .wsite-caption {}
.galleryCaptionInnerText {}
.fancybox-title {}
.wslide-caption-text {}
.wsite-phone {}
.wsite-headline,.wsite-header-section .wsite-content-title {font-family:"Aller" !important;color:#fff !important;letter-spacing: 2px !important;}
.wsite-headline-paragraph,.wsite-header-section .paragraph {font-family:"Lora" !important;}
.wsite-button-inner {}
.wsite-not-footer blockquote {}
.wsite-footer blockquote {}
.blog-header h2 a {}
#wsite-content h2.wsite-product-title {}
.wsite-product .wsite-product-price a {}
@media screen and (min-width: 767px) {.wsite-elements.wsite-not-footer:not(.wsite-header-elements) div.paragraph, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) p, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-block .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-description, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {font-size:20px !important;line-height:31px !important;}
#wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {}
.wsite-elements.wsite-footer div.paragraph, .wsite-elements.wsite-footer p, .wsite-elements.wsite-footer .product-block .product-title, .wsite-elements.wsite-footer .product-description, .wsite-elements.wsite-footer .wsite-form-field label, .wsite-elements.wsite-footer .wsite-form-field label{}
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {font-size:25px !important;}
#wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {}
.wsite-elements.wsite-footer h2, .wsite-elements.wsite-footer .product-long .product-title, .wsite-elements.wsite-footer .product-large .product-title, .wsite-elements.wsite-footer .product-small .product-title{}
#wsite-title {font-size:14px !important;}
.wsite-menu-default a {}
.wsite-menu a {}
.wsite-image div, .wsite-caption {}
.galleryCaptionInnerText {}
.fancybox-title {}
.wslide-caption-text {}
.wsite-phone {}
.wsite-headline,.wsite-header-section .wsite-content-title {font-size:43px !important;line-height:15px !important;}
.wsite-headline-paragraph,.wsite-header-section .paragraph {font-size:18px !important;}
.wsite-button-inner {}
.wsite-not-footer blockquote {}
.wsite-footer blockquote {}
.blog-header h2 a {}
#wsite-content h2.wsite-product-title {}
.wsite-product .wsite-product-price a {}
}</style>
<style>
.wsite-background {background-image: url("/uploads/1/1/9/6/119650942/background-images/1436807259.jpg") !important;background-repeat: no-repeat !important;background-position: 50% 50% !important;background-size: 100% !important;background-color: transparent !important;background: inherit;}
body.wsite-background {background-attachment: fixed !important;}.wsite-background.wsite-custom-background{ background-size: cover !important}
</style>
		<script>
var STATIC_BASE = '//cdn1.editmysite.com/';
var ASSETS_BASE = '//cdn2.editmysite.com/';
var STYLE_PREFIX = 'wsite';
</script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>

<script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1527218974&"></script>
<script src="//cdn2.editmysite.com/js/site/main.js?buildTime=1527218974"></script><script type="text/javascript">_W.configDomain = "www.weebly.com";</script><script>_W.relinquish && _W.relinquish()</script>
<script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1527218974&"></script><script> _W.themePlugins = {"navpane":{"condense":1024,"forced":1}};</script><script src='//cdn2.editmysite.com/js/site/theme-plugins.js?buildTime=1527218974'></script><script type="text/javascript"> _W.recaptchaUrl = "https://www.google.com/recaptcha/api.js"; </script><script type="text/javascript"> window._W = window._W || {}; _W.showV2Footer = 0; </script><script type="text/javascript"><!--
	
	
	function initFlyouts(){
		initPublishedFlyoutMenus(
			[{"id":"315952311116915136","title":"Privacy Policy","url":"index.html","target":"","nav_menu":false,"nonclickable":false}],
			"315952311116915136",
			'',
			'active',
			false,
			{"navigation\/item":"<li {{#id}}id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">\n\t<a\n\t\t{{^nonclickable}}\n\t\t\t{{^nav_menu}}\n\t\t\t\thref=\"{{url}}\"\n\t\t\t{{\/nav_menu}}\n\t\t{{\/nonclickable}}\n\t\t{{#target}}\n\t\t\ttarget=\"{{target}}\"\n\t\t{{\/target}}\n\t\t{{#membership_required}}\n\t\t\tdata-membership-required=\"{{.}}\"\n\t\t{{\/membership_required}}\n\t\tclass=\"wsite-menu-item\"\n\t\t>\n\t\t{{{title_html}}}\n\t<\/a>\n\t{{#has_children}}{{> navigation\/flyout\/list}}{{\/has_children}}\n<\/li>\n","navigation\/flyout\/list":"<div class=\"wsite-menu-wrap\" style=\"display:none\">\n\t<ul class=\"wsite-menu\">\n\t\t{{#children}}{{> navigation\/flyout\/item}}{{\/children}}\n\t<\/ul>\n<\/div>\n","navigation\/flyout\/item":"<li {{#id}}id=\"{{id}}\"{{\/id}}\n\tclass=\"wsite-menu-subitem-wrap {{#is_current}}wsite-nav-current{{\/is_current}}\"\n\t>\n\t<a\n\t\t{{^nonclickable}}\n\t\t\t{{^nav_menu}}\n\t\t\t\thref=\"{{url}}\"\n\t\t\t{{\/nav_menu}}\n\t\t{{\/nonclickable}}\n\t\t{{#target}}\n\t\t\ttarget=\"{{target}}\"\n\t\t{{\/target}}\n\t\tclass=\"wsite-menu-subitem\"\n\t\t>\n\t\t<span class=\"wsite-menu-title\">\n\t\t\t{{{title_html}}}\n\t\t<\/span>{{#has_children}}<span class=\"wsite-menu-arrow\">&gt;<\/span>{{\/has_children}}\n\t<\/a>\n\t{{#has_children}}{{> navigation\/flyout\/list}}{{\/has_children}}\n<\/li>\n"},
			{"hasCustomMinicart":true}
		)
	}
//-->
</script>
		
		
	</head>
	<body class="header-page  wsite-theme-light  wsite-page-index"><div class="wrapper">
	  <div class="header-wrap">
	    <div id="topBar" class="topbar">
	      <label class="hamburger"><span></span></label>
	      <div class="logo"><span class="wsite-logo">

	
	<span class="wsite-title-placeholder">&nbsp;</span><span style="display:none">
	<span style="display:none">WCS</span>
	</span>
	

</span></div>
          
          
	    </div><!-- end .container -->

		  <div class="banner-wrap">
				<div class="wsite-elements wsite-not-footer wsite-header-elements">
	<div class="wsite-section-wrap">
	<div  class="wsite-section wsite-header-section wsite-section-bg-color" style="background-color: #fff;background-image: none;is_customized: 1;" >
		<div class="wsite-section-content">
			
					<div class="container">
						<div class="banner">
				<div class="wsite-section-elements">
					<div class="paragraph" style="text-align:left;"><font color="#2a2a2a">This Privacy Policy applies beginning May 25, 2018. You may change your consent anytime in our App Settings.<br />&nbsp;<br />Please read this Policy carefully. This Policy provides you with information on how we collect, use and/or share the information obtained from you. This Policy applies to our Application and does not apply to any third party services, websites, software and content that may be linked to from within the Application.<br />BY ACCESSING, VISITING AND/OR USING THE APPLICATION, YOU CONSENT TO OUR USE OF ANY INFORMATION THAT YOU PROVIDE TO US OR OUR PARTENERS&nbsp; IN ACCORDANCE WITH THIS POLICY. IF YOU DO NOT AGREE TO THIS POLICY, DO NOT ACCESS, VISIT AND/OR USE THE APPLICATION.<br />&nbsp;<br /><strong>1. Information We Collect and Use</strong><br />1.We collect some of the standard information (Non Personal Information and Personal Information) required to operate and optimize ads experience. This information includes, without limitation:</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">IP address and MAC address of your mobile device</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Your mobile device brand and model</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Your Age and Gender</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Your mobile OS</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Contacts list</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Recent searches performed in the App, using our service</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Information regarding third parties applications installed on your device</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">The Advertising ID of your device (to learn more about limiting ad tracking using this identifier, visit the Settings menu in your device)</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">To provide you an optimized user experience we might use the geolocation of your device for showing targeted ads</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Version of SDKs</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">The spam call number that user reported</font><br /> <font color="#2a2a2a">We collect and use this information to measure, improve our services over time, and giving you an optimized user experience.<br />2.Information collected by our Third Party Advertising Partners<br />We work with third party advertising partners to provide personalized ads for you. Our partners include but are not limited to Google AdMob, DoubleClick Ad Exchange, DoubleClick for Publishers, Facebook Audience Network, MoPub, Amazon, Fyber, Smaato, and etc. You may find more details about our partners in links below:<br />&bull;&nbsp;&nbsp;&nbsp; https://www.mopub.com/legal/privacy/<br />&bull;&nbsp;&nbsp;&nbsp; https://www.mopub.com/legal/partners/<br />Our partners may collect hardware and software information such as IP address, device ID and type, advertising IDs (such as Google's AAID and Apple's IDFA, both of which are randomly generated numbers that you can reset by going into your device' settings), device language, operating system, time zones, and identifiers associated with cookies or other technologies that may uniquely identify your device.<br /><strong>2. Information Sharing and Disclosure</strong><br />The information is shared with our trusted partners and affiliates only (all under signed confidentiality agreements) and with the purpose of delivering a better service to you.<br />In more details:</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">we will present you with targeted ads, based on the information collected by us and share with our </font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">parterns. The shared information may be one or more of the following: IP address, Geo location, Search queries perfromed in the app.</font><br /><span style="color:rgb(42, 42, 42)">&bull;&nbsp;</span><font color="#2a2a2a">Information passed to third parties will never inlcude any information such as name, email, phone number, etc.</font><br /> <font color="#2a2a2a"><strong>3. Security</strong><br />We have implemented security safeguards designed to protect your personal information in accordance with industry standards. We limit access to your information on our servers, and it is password-protected/encrypted. We also regularly monitor our servers for possible vulnerabilities and attacks. Nevertheless, as the Internet is not a 100% secure environment, we cannot guarantee the security of any information that you transmit to us. There is no guarantee that information on our servers may not be accessed, disclosed, altered, or destroyed by breach of our safeguards.<br /><strong>4. Our Policy Towards Children.</strong><br />We do not knowingly collect personal information from children under the age of 13. If we become aware that a child under that age has provided us with personal information, we take steps to remove such information from our servers. If you become aware that your child has provided us with personal information, please contact us.<br /><strong>5. Modifying Your Personal Information.</strong><br />You have a right to request that we delete any of your personal information in our possession by sending us an email (with your expressed request) using the Contact Us button inside the Application. We will generally delete your information within 30 days of receipt of your request.<br /><strong>6. Changes to This Policy.</strong><br />We may need to change this Policy from time to time in order to address new issues and to reflect changes to the Application or applicable law. We reserve the right to revise or make any changes to this Policy in our sole discretion, and your continual use of the Application subsequent to any changes to this Policy shall conclusively mean that you accept such changes. You can tell when this Policy has been updated by checking the last updated date posted on the top of this page.<br /><strong>7. Privacy Policies of bundled Services and SDKs</strong><br />For us to be able to deliver the Application and its functionalities to you, we use third party sub-suppliers, to whom we may transfer data. Our sub-suppliers have all guaranteed that they will live up to the terms of this privacy policy, including ensuring safe-keeping of your personal data. With your acceptance of this Privacy Policy and by using the Application, you agree to the processing of your data in the form of a transfer to third parties.<br />All of our sub-suppliers reserve the right to use the transferred information for statistics and user support without restrictions regarding applicability in time. Please note that we may also disclose information associated with you as well as contact infor-mation to third parties if required by law, in order to protect or defend our own rights.<br /><strong>8. Contact Information</strong><br />If you have any questions or comments about this Policy, please contact us using the Contact Us button inside the Application.<br />&nbsp;<br /><strong>9.&nbsp;Permissions used by Color Phone Flash</strong><br />1. Camera permission<br />Camera permission is only required for the flashlight feature in Color Phone Flash. It needs access to your device&rsquo;s camera flashlight and does not take photos and videos for any purposes.<br />2. Read your contacts<br />Color Phone Flash does not recognize or save users' contacts information for any programs. The only purpose of using this permission is to show contacts info in call interface. We will never upload any users&rsquo; contacts information.<br />3. Read phone status and identity<br />The only purpose using this permission is to identify different users. Phone status and identity are not read for any other purposes.<br />4. Read the contents of your USB storage<br />This permission allows users to view screen flash videos stored on their SD card.<br />5. Modify or delete the contents of your USB storage<br />This permission allows users to delete screen flash videos stored on their SD card.<br />6. Connect and disconnect from Wi-Fi<br />This permission is used in Color Phone Flash settings in order to connect and disconnect from Wi-Fi.<br />7. Full network access and receive data from Internet<br />This permission allows Color Phone Flash to access the device&rsquo;s network for functions including downloading screen flash videos and accessing app classification labels.<br />8. View network connections<br />This permission is used in Color Phone Flash settings in order to view network connections.<br />9. View Wi-Fi connections<br />This permission is used in Color Phone Flash settings in order to view Wi-Fi connections.<br />10. Prevent phone from sleeping<br />The only purpose using this permission is to prevent the phone from going to sleep when you are playing videos in full screen mode. It is not used for any other purposes.<br />11.Directly call phone numbers &amp; read phone status and identity &amp; reroute outgoing calls<br />This permission allows Color Phone Flash to inform you when receiving phone calls. This won&rsquo;t result in unexpected fees and calls. Color Phone Flash won&rsquo;t upload your privacy information.<br />12.Read your messages(SMS or MMS) &amp; receive messages(SMS) &amp; receive messages(WAP)<br />This permission allows Color Phone Flash to inform you when receiving messages. This won&rsquo;t result in unexpected fees and messages. Color Phone Flash won&rsquo;t upload your privacy information.<br />13.Directly send messages &#65288;SMS&#65289;<br />This permission allows Color Phone Flash to send messages directly by SMS assistant. This may only result in SMS fees and no other fees. Color Phone Flash won&rsquo;t upload your privacy information.<br />14.Read Call Logs<br />Color Phone Flash does not recognize or save users' contacts information for any programs. The only purpose is to show details of the call to users after a call. We promise that we will never disclose your call log and short to any person or third party interest information.<br />&nbsp;</font></div>
				</div>
			</div>
					</div>
				
		</div>
		<div class=""></div>
	</div>
</div>

</div>


			</div>
	  </div><!-- end .header-wrap -->

	 <div class="w-navlist nav-wrap">
	   	<div class="container">
	   		<div class="nav desktop-nav"><ul class="wsite-menu-default">
		<li id="active" class="wsite-menu-item-wrap">
			<a
						href="/"
				class="wsite-menu-item"
				>
				Privacy Policy
			</a>
			
		</li>
</ul>
</div>
	   	</div>
	 </div>

	<div class="main-wrap">
		<div id="wsite-content" class="wsite-elements wsite-not-footer">
	<div class="wsite-section-wrap">
	<div class="wsite-section wsite-body-section wsite-background-10 wsite-custom-background"  >
		<div class="wsite-section-content">
		    <div class="container">
			<div class="wsite-section-elements">
				
			</div>
		</div>
		</div>

	</div>
</div>

</div>

	  </div>

    <div class="footer-wrap">
    	<div class="container">
    		<div class="footer">

<div id="weebly-footer-signup-container" style="border-top: 0px">
	<div class="signup-container-header trigger-signup"  style="background-color: inherit">
		<div class="powered-by" style="opacity: 1; left: 2%;">
			<div class="footer-published-ab-powered-by">
				Powered by <span class="link weebly-icon"></span>
				<img class="footer-ab-published-toast-image" src="//cdn2.editmysite.com/images/site/footer/footer-toast-published-image.jpg">
				<span class="footer-ab-published-toast-text">Create your own unique website with customizable templates.</span>
				<span class="footer-ab-published-toast-button-wrapper">
					<button class="footer-published-ab-button">Get Started</button>
				</span>
			</div>
		</div>
	</div>
</div>


<script type="text/javascript" src="//cdn2.editmysite.com/js/site/footerSignup.js?buildTime=1537206626"></script>
<script type="text/javascript">
	if (document.readystate === 'complete') {
		Weebly.footer.setupContainer('cdn2.editmysite.com', '1537206626', 'www.weebly.com');
	} else {
		document.addEventListener('DOMContentLoaded', function() {
			Weebly.footer.setupContainer('cdn2.editmysite.com', '1537206626', 'www.weebly.com');
		});
	}
</script>
</div>
    	</div><!-- end container -->
    </div><!-- end footer-wrap -->
	</div>

	<div class="w-navpane nav mobile-nav">
		<label class="hamburger w-navpane-trigger"><span></span></label>
		<ul class="wsite-menu-default">
				<li id="active" class="wsite-menu-item-wrap">
					<a
								href="/"
						class="wsite-menu-item"
						>
						Privacy Policy
					</a>
					
				</li>
		</ul>
	</div>

	<script type="text/javascript" src="/files/theme/plugins.js?1519928384"></script>
	<script type="text/javascript" src="/files/theme/custom.js?1519928384"></script>

		<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-7870337-1']);
	_gaq.push(['_setDomainName', 'none']);
	_gaq.push(['_setAllowLinker', true]);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

	_W.Analytics = _W.Analytics || {'trackers': {}};
	_W.Analytics.trackers.wGA = '_gaq';
</script>

<script type="text/javascript" async=1>
	;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
			p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
			};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
			n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,'script','//cdn2.editmysite.com/js/wsnbn/snowday262.js','snowday'));

	var r = [99, 104, 101, 99, 107, 111, 117, 116, 46, 40, 119, 101, 101, 98, 108, 121, 124, 101, 100, 105, 116, 109, 121, 115, 105, 116, 101, 41, 46, 99, 111, 109];
	var snPlObR = function(arr) {
		var s = '';
		for (var i = 0 ; i < arr.length ; i++){
			s = s + String.fromCharCode(arr[i]);
		}
		return s;
	};
	var s = snPlObR(r);

	var regEx = new RegExp(s);

	_W.Analytics = _W.Analytics || {'trackers': {}};
	_W.Analytics.trackers.wSP = 'snowday';
	_W.Analytics.user_id = '119650942';
	_W.Analytics.site_id = '515779896911546866';

	// Setting do not track if the GDPR cookie is not present. This is then checked by the snowday initializer
	// to set tracking decisions. https://github.com/snowplow/snowplow-javascript-tracker/blob/2.6.2/src/js/tracker.js#L1509
	window.doNotTrack = document.cookie.indexOf('gdpr-kb') === -1 ? 'yes' : null;


	(function(app_id, ec_hostname, discover_root_domain) {
		var track = window[_W.Analytics.trackers.wSP];
		if (!track) return;
		track('newTracker', app_id, ec_hostname, {
			appId: app_id,
			post: true,
			platform: 'web',
			discoverRootDomain: discover_root_domain,
			cookieName: '_snow_',
			contexts: {
				webPage: true,
				performanceTiming: true,
				gaCookies: true
			},
			crossDomainLinker: function (linkElement) {
				return regEx.test(linkElement.href);
			},
			respectDoNotTrack: document.cookie.indexOf('gdpr-kb') === -1
		});
		track('trackPageView', _W.Analytics.user_id+':'+_W.Analytics.site_id);
		track('crossDomainLinker', function (linkElement) {
			return regEx.test(linkElement.href);
		});
	})(
		'_wn',
		'ec.editmysite.com',
		false
	);
</script>



<script>
	(function(jQuery) {
		try {
			if (jQuery) {
				jQuery('div.blog-social div.fb-like').attr('class', 'blog-social-item blog-fb-like');
				var $commentFrame = jQuery('#commentArea iframe');
				if ($commentFrame.length > 0) {
					var frameHeight = jQuery($commentFrame[0].contentWindow.document).height() + 50;
					$commentFrame.css('min-height', frameHeight + 'px');
				}
				if (jQuery('.product-button').length > 0){
					jQuery(document).ready(function(){
						jQuery('.product-button').parent().each(function(index, product){
							if(jQuery(product).attr('target') == 'paypal'){
								if (!jQuery(product).find('> [name="bn"]').length){
									jQuery('<input>').attr({
										type: 'hidden',
										name: 'bn',
										value: 'DragAndDropBuil_SP_EC'
									}).appendTo(product);
								}
							}
						});
					});
				}
			}
			else {
				// Prototype
				$$('div.blog-social div.fb-like').each(function(div) {
					div.className = 'blog-social-item blog-fb-like';
				});
				$$('#commentArea iframe').each(function(iframe) {
					iframe.style.minHeight = '410px';
				});
			}
		}
		catch(ex) {}
	})(window._W && _W.jQuery);

	window._W.isEUUser = false;
	window._W.showCookieToAll = "";
</script>


	</body>
</html>
`;
export default class WebPolicyView extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <WebView
          style={{ height: height, width: width - 20, margin: 10 }}
          source={{
            baseUrl: '',
            html: html
          }}
        />
      </View>
    );
  }
}
