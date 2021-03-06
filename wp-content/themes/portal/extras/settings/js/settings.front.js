jQuery(function($){
    var editable = $('*[data-so-edit]');

    editable.each(function(){
        var $$ = $(this);

        if($$.css('position') != 'absolute') {
            $$.css('position', 'relative');
        }
        var edit = $('<a></a>').addClass('siteorigin-edit').attr('href', siteoriginSettings.edit + "#" + $$.data('so-edit')).hide();
        $$.append(edit);

        $$
            .mouseenter(function(){
                edit.show();
            })
            .mouseleave(function(){
                edit.hide();
            })
    })
});