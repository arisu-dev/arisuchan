/*
 * multi-image.js - Add support for multiple images to the post form
 *
 * Copyright (c) 2014 Fredrick Brennan <admin@8chan.co>
 *
 * Usage:
 *   $config['max_images'] = 3;
 *   $config['additional_javascript'][] = 'js/jquery.min.js';
 *   $config['additional_javascript'][] = 'js/multi-image.js';
 */

function multi_image() {
    $('a.file_add').click(function(ev) {
        var fileNum = $(ev.currentTarget).parent().data('ac-filenum');
        var images_len = $('*[data-ac-filenum]').length;
        if (fileNum != images_len)
            $('div[data-ac-filenum='+(fileNum+1)+']').show();
        ev.preventDefault();
    });

    $('a.file_rm').click(function(ev) {
        var fileNum = $(ev.currentTarget).parent().data('ac-filenum');
        if (fileNum != 1){
            $('div[data-ac-filenum='+(fileNum)+']').children('input[type=file]').val(undefined);
            $('div[data-ac-filenum='+(fileNum)+']').hide();
        }
        ev.preventDefault();
    });
}

if (active_page == 'thread' || active_page == 'index' && max_images > 1) {
	$(document).ready(multi_image);
}
