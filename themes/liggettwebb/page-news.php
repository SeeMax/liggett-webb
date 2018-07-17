<?php /* Template Name: News */ get_header(); ?>

	<main class="news-page content" role="main">

		<?php $wpb_all_query = new WP_Query(array('post_type'=>'post', 'post_status'=>'publish', 'posts_per_page'=>-1)); ?>

		<?php if ( $wpb_all_query->have_posts() ) : ?>

			<!-- the loop -->
		<?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
			<section class="percent-100-w">
				<div class="news-title"><?php the_title(); ?></a></div>
				<div class="news-date"><?php the_time('F jS, Y'); ?></div>
				<hr class="news-hr">
				<div class="news-body">
					<?php the_excerpt(); ?>
				</div>
					<div class="button">
						<div class="button-guts">
							<a href="<?php the_permalink(); ?>">Read More&nbsp; &nbsp;></a>
					</div>
				</div>
			</section>
		<?php endwhile; ?>
		<!-- end of the loop -->

		<?php wp_reset_postdata(); ?>

		<?php else : ?>
			<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
		<?php endif; ?>

	</main>
			
<?php get_footer(); ?>