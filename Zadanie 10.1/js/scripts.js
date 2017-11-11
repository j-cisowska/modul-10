$(function(){
	
var span = $("span");
span.each(function(index, element) {
  if (index % 2 == 0) {
    $(element).css('color', 'blue')
  }
});

var paragraphs = $("p");
paragraphs.each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click!</button>'
  $(element).append(button)
  
});

    $("button").click(function(){
	    alert($(this).attr("data-tmp"));
    });
  
});

/*
$(function(){
	console.log('DOM loaded - you can have fun');
});

var span = $("span");
span.each(function(index, element) {
  if (index % 2 == 0) {
    $(element).css('color', 'blue')
  }
});

var colorOfSecondDiv = $("div2");
colorOfSecondDiv.each(function(index, element) {
  if (index % 2 == 0) {
    $(element).css('color', 'green')
  }
});

var secondDiv = $("div2");
secondDiv.each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click!</button>'
  $(element).append(button)
  
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

*/