

$(".dropdown-menu li").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <i class="fa fa-chevron-down" aria-hidden="true"></i>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});