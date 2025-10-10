
$(document).ready(function(){
$('.needs-validation').on('submit', function(e) {
if (!this.checkValidity()) {
e.preventDefault();
e.stopPropagation();
}
alert("zure erosketa egin da")
});
});

$(document).ready(function(){
    $("#Gehitu").click(function(event){
    event.preventDefault();
    var item = $("#Saskia").val();
    if(item){
         $("form").append("<ul><li>"+ item + "</li></ul>");
         $("#Saskia").val("");
    }
});
   
});