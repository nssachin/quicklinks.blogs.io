(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['demo'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div class=\"col-md-4\">\r\n                    <div class=\"panel panel-default height\" id=\"accordon\">\r\n                        <div class=\"panel-heading rounded text-center\"><strong>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " </strong>\r\n                        <span class=\"mlxs tcs tsxxs\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1), depth0))
    + " services</span>\r\n                        </div>\r\n                            <ul class=\"list-group\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\r\n                    </div>\r\n            </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                    <li class=\"list-group-item\"><a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">  \r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.apps : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();