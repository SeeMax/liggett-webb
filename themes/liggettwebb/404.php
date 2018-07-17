<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<!-- article -->
			<article id="post-404">

				<h1><?php _e( "Sorry, we can't find that Page", "liggettwebb" ); ?></h1>
				<div class="button">
					<div class="button-guts">
						<a href="<?php echo home_url(); ?>"><?php _e( 'Return home >', 'liggettwebb' ); ?></a>
					</div>
				</div>

			</article>
			<!-- /article -->

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>
