<?php
/* 
 * Theme bootstrapper: loads the React build
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <?php
    // Output the built React index.html
    readfile( get_template_directory() . '/index.html' );
  ?>
  <?php wp_footer(); ?>
</body>
</html>
