<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title>Liggett & Webb | CPA</title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="<?php echo get_template_directory_uri(); ?>/img/lw-fav.jpg" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/lw-fav.jpg" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header" role="banner">
				<div class="mobile-menu mobileToggle">
					<span class="hamTop"></span>
					<span class="hamMid"></span>
					<span class="hamBot"></span>
				</div>
				<div class="content">
					<div class="header-logo">
						<img src="<?php echo get_template_directory_uri(); ?>/img/lw-logo-words-2.svg" >
					</div>
					<nav class="nav navMenu" role="navigation">
						<ul>
							<li class="home-nav"><a href="<?php echo home_url(); ?>">home</a></li>
							<li class="about-nav"><a href="/about">about</a></li>
							<li class="services-nav"><a href="/services">services</a></li>
							<li class="industries-nav"><a href="/industries">industries</a></li>
							<li class="news-nav"><a href="news">news</a></li>
							<li class="contact-nav"><a href="contact">contact</a></li>
						</ul>
					</nav>
				</div>
			</header>
			
