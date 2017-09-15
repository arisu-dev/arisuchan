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
    // $('input[type=file]').after('<a href="#" class="add_image">+</a>');

    // $('input[type^=file]').hide();
    // $('*[data-ac-filenum]').hide();
    // $('*[data-ac-filenum==1]').show();
    
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


    // $(document).on('click', 'a.add_image', function(e) {
    //     e.preventDefault();
    //
    //     var images_len = $('form:not([id="quick-reply"]) [type=file]').length;
    //
    //     if (!(images_len >= max_images)) {
    //         var new_file = '<br class="file_separator"/>' +
    //                        '<input type="file" name="file' + (images_len+1) + '" id="upload_file' + (images_len+1) + '">' +
    //                        '<a class="add_image" data-file="file' + (images_len+1)
    //                        '<a class="add_image" data-file="file' + (images_len+2) + '"> - </a>';
    //
    //         $('[type=file]:last').after(new_file);
    //         if ($("#quick-reply").length) {
    //             $('form:not(#quick-reply) [type=file]:last').after(new_file);
    //         }
    //         if (typeof setup_form !== 'undefined') setup_form($('form[name="post"]'));
    //     }
    // })
}

if (active_page == 'thread' || active_page == 'index' && max_images > 1) {
	$(document).ready(multi_image);
}
