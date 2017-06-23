$("#keywords").hide();
$("#close").hide();
$("#results").hide();

var lg='en';

$("#eng").click(function(){
lg='en';
});

$("#fr").click(function(){
lg='fr';
});

$("#ar").click(function(){
lg='ar';
});

$("#pnav ul li ul li a").click(function(){
  $("#pnav").collapse("hide");
});
$("#start").click(function(e){
  e.preventDefault();
  //$(this).hide('slow');
  $(this).css('font-size',"0px");
  $(this).children("p").css('font-size',"0px");
  $("#keywords").show();
  $("#keywords").css("width","250px");
  $("#close").show();
});

$("#close").click(function(e){
  $(this).hide();
  $("#keywords").val('');
  $("#keywords").css("width","0px");
  $("#results").hide();
  $("#keywords").hide('slow');
  $(".jumbotron").addClass("text-center");
  $("h1").css("font-size","36px");
  $("h1").css("font-weight","none");
  $("#start").css('font-size',"50px");
  $("#start p").css('font-size',"20px");
});

$("#keywords").on("keypress",function(e){
 if(e.which == 13){
var text=$(this).val();
var url="https://"+lg+".wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch="+text+"&prop=extracts&exintro=1&exlimit=20&exchars=450&format=json&callback=?";
$.getJSON(url,function(response){
var toadd='<h3>Search Results</h3>';
 $.each(response.query.pages,function(key,value){ 
toadd+='<a class="result" href="http://en.wikipedia.org/?curid='+value.pageid+'" target="_blank"><div><h4>'+value.title+'</h4><p>'+value.extract+'</p></div></a>';
  })
  $("#results").html(toadd);
  $("#results").show();
  $(".jumbotron").removeClass("text-center");
  $("h1").css("font-size","20px");
  $("h1").css("font-weight","bold");
  
});
}
});