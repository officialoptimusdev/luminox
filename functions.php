<?php
// Enqueue React build assets
function luminox_react_enqueue_assets() {
    $theme_dir = get_template_directory_uri();

    // Enqueue CSS (if exists)
    foreach (glob(get_template_directory() . '/assets/*.css') as $css_file) {
        $file_url = $theme_dir . '/assets/' . basename($css_file);
        wp_enqueue_style('luminox-' . basename($css_file), $file_url, array(), filemtime($css_file));
    }

    // Enqueue JS (if exists)
    foreach (glob(get_template_directory() . '/assets/*.js') as $js_file) {
        $file_url = $theme_dir . '/assets/' . basename($js_file);
        wp_enqueue_script('luminox-' . basename($js_file), $file_url, array(), filemtime($js_file), true);
    }
}
add_action('wp_enqueue_scripts', 'luminox_react_enqueue_assets');
