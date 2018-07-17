<?php /* Template Name: L&W Bios */ get_header(); ?>

	<main class="content" role="main">
		<!-- section -->
		<section>

			<h1><?php the_title(); ?></h1>
			
			<?php
				$args = array( 'post_type' => 'liggettwebb');
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
			?>

				<!-- DISPLAY THE IMAGE -->
				<?php 
				$image = get_field('bio_image');
				if( !empty($image) ): ?>
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				<?php endif; ?>
			  <?php the_title(); ?>
			  <?php the_field( 'bio_title' ); ?>
			  <?php the_field( 'bio_position' ); ?>
			  <?php the_field( 'bio_office' ); ?>
			  <?php the_field( 'bio_email' ); ?>
			  <?php the_field( 'bio_phone' ); ?>
			  <a href="<?php the_field( 'bio_linkedin' ); ?>" target="_blank">LInkedIn</a>
			  <a href="<?php get_field( 'bio_sharefile' ); ?>" target="_blank">Share Files</a>
			  
			<?php 
			    endwhile;
			    wp_reset_query(); 
			?>
				    
				 
		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>






<?php 					

$loop = new WP_Query(array(
  'post_type' => 'boat',
  'orderby' => 'date',
  'posts_per_page' => 6
));
	
while ( $loop->have_posts() ) : $loop->the_post(); 

?>

<a href="<?php the_permalink() ?>" title="<?php the_field('title'); ?>"><img alt="<?php the_field('title'); ?>" src="<?php the_field('image'); ?>" width="155px" height="133px" /></a>

<span><?php the_field('title') ?></span>		                   
<span><?php the_field('price'); ?> $</span>
			
			
<?php 
    endwhile;
    wp_reset_query(); 
?>