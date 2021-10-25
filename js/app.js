var jqueryNoConflict = jQuery;
var source = 'https://gist.githubusercontent.com/nssachin/5d341e7e4c9fa4fad097f53e7f10470b/raw/cfc4a7506c870b640ffdc78598c059de86d9c0a9/';

//begin with the main function
jqueryNoConflict(document).ready(function() {
   retrieveData('quicklinks.json'); 
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
