var jqueryNoConflict = jQuery;
var source = 'https://gist.githubusercontent.com/nssachin/5d341e7e4c9fa4fad097f53e7f10470b/raw/d0424588193a3ffbfba615071ce3dc1dd8729e79/';

//begin with the main function
jqueryNoConflict(document).ready(function() {
   retrieveData('blogs.json'); 
});
//end main function


//grab data
function retrieveData(name) {
  var dataSource = source + name;
  var context = $.getJSON(dataSource, function(data) {   
    var templateScript = Handlebars.templates.demo(data);
    $("#page-content-wrapper").empty();
    $("#page-content-wrapper").append(templateScript);
  }
  ).error(function() { 
	var img = document.createElement("IMG");
	img.src = "./images/wip.jpeg";
	$("#page-content-wrapper").empty();
    $("#page-content-wrapper").append(img);  
});
}

function retrieveChildData(elem, fileName){
    $('ul').children().removeClass('active');
    $(elem).closest('li').addClass('active');
    fileName = fileName.concat('.json');
    retrieveData(fileName);
}
