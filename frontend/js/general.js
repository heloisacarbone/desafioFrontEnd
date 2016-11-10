

$(".dropdown-menu li").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <i class="fa fa-chevron-down" aria-hidden="true"></i>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
});

function cleanFields() {
    $('#nameInput').val("");
    $('#date').click();
    $("#gender").val('');
}