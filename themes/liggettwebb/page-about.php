<?php /* Template Name: About */ get_header(); ?>

	<main class="about-page content" role="main">
		<!-- section -->
		<section class="hero percent-100-w">
			<h1>
				About Us
			</h1>
			<p class="top-border">
				We provide a unique blend of technical expertise while providing practical business advice 
				or assurance services. Our approach is to find solutions that achieve the best outcome with 
				the least amount of cost to the companies we service. Given the broad experience of our team, 
				we have the expertise to service clients across the continuum from start-up phase to mature 
				companies. While the needs of clients are different depending on phase of development of 
				their business, our industry and delivery knowledge gives us a unique perspective in 
				evaluating solutions that best meet our clients’ needs.
			</p>
		</section>
		<section class="bios-section">

			<?php
				$args = array( 'post_type' => 'liggettwebb');
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
			?>

			<div class="single-bio percent-50-w">
				<!-- DISPLAY THE IMAGE -->
				

				<h3 class="bio-title">
			  	<?php the_title(); ?> //
			  	<?php the_field( 'bio_title' ); ?>
			  	<div class="position">
			  		<?php the_field( 'bio_position' ); ?>
			  	</div>
			  </h3>
			  <div class="bio-details">
			  	<?php the_field( 'bio_office' ); ?> Office<br>
			  	<?php the_field( 'bio_email' ); ?><br>
			  	<?php the_field( 'bio_phone' ); ?><br>
			  </div>
			  <div class="button bio-button">
					<div class="button-guts">
						<div class="readWords">Read More</div>
						<div class="close-words closeWords">Close</div>
					</div>
				</div>
				<div class="bio-full-bio">
					<div class="bio-full-bio-guts">
						<?php 
						$image = get_field('bio_image');
						if( !empty($image) ): ?>
							<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
						<?php endif; ?>
			  		<?php the_field( 'bio_full' ); ?><br>
			  		<?php if( get_field('bio_linkedin') ): ?>
							<a class="linkedIn-link" target="_blank" href="<?php the_field( 'bio_linkedin' ); ?>">
			  				Connect on LinkedIn.
			  			</a>
						<?php endif; ?>
			  		
			  	</div>
			  </div>
			</div>
			<?php 
			    endwhile;
			    wp_reset_query(); 
			?>
				    
				 
		</section>

	</main>

			
<?php get_footer(); ?>