
if($(window).width() > 1023){ 

var myFullpage = new fullpage('#fullpage', {

afterLoad: function(anchorLink, index) {
history.pushState(null, null, "index.html");
},

anchors: ['firstPage', 'secondPage', 'thirdpage', 'forthpage', 'fifthpage', 'sixthpage', 'seventhpage', 'eightpage'],
sectionsColor: ['#ffffff', '#f9fdff', '#f9fdff', '#f9fdff', '#f9fdff', '#f9fdff', '#f9fdff', ' #F9F9F9'],
scrollOverflow: true,
verticalCentered: true,
});  






}



$(document).ready(function(){
function alignModal(){
var modalDialog = $(this).find(".modal-dialog");

// Applying the top margin on modal to align it vertically center
modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
// Align modal when it is displayed
$(".modal").on("shown.bs.modal", alignModal);

// Align modal when user resize the window
$(window).on("resize", function(){
$(".modal:visible").each(alignModal);
});   
});