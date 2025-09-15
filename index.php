<?php
/* 
Theme Name: Luminox React
Theme URI: https://luminoxmentalhealth.com
Author: Luminox
Description: React Vite app as a WordPress theme
Version: 1.0
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div id="root"></div>
  <?php wp_footer(); ?>
</body>
</html>
