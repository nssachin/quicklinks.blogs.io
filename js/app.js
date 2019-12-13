var jqueryNoConflict = jQuery;
var source = 'https://gist.githubusercontent.com/nssachin/5d341e7e4c9fa4fad097f53e7f10470b/raw/e02d7fff03519049020a42b32d8e2bba4526e0e1/';

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
