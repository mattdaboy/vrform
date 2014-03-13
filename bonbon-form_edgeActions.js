
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var anim_speed=0.5;var gender="female";sym.$("female_bt").css({"cursor":"pointer"});sym.$("female_bt").bind("click",function(e){pushButtonAnim(this);setFemale();});sym.$("male_bt").css({"cursor":"pointer"});sym.$("male_bt").bind("click",function(e){pushButtonAnim(this);setMale();});sym.$("ok_bt").css({"cursor":"pointer"});sym.$("ok_bt").bind("click",function(e){pushButtonAnim(this);formSubmit();});function setFemale(){gender="female";sym.getSymbol("female_bt").$("txt").css({"color":"#ffffff"});sym.getSymbol("female_bt").$("rect").css({"background-color":"#a62f5a"});sym.getSymbol("male_bt").$("txt").css({"color":"#453f43"});sym.getSymbol("male_bt").$("rect").css({"background-color":"#f2f2f2"});}
function setMale(){gender="male";sym.getSymbol("male_bt").$("txt").css({"color":"#ffffff"});sym.getSymbol("male_bt").$("rect").css({"background-color":"#a62f5a"});sym.getSymbol("female_bt").$("txt").css({"color":"#453f43"});sym.getSymbol("female_bt").$("rect").css({"background-color":"#f2f2f2"});}
function pushButtonAnim(elem){TweenLite.to(elem,0.1,{css:{"transform":"scale(1.2)"},ease:Quad.easeIn});TweenLite.to(elem,0.25,{css:{"transform":"scale(1)"},delay:0.1,ease:Quad.easeOut});}
function setInput(elem,value,id){var input=$('<input id="'+id+'" type="text" placeholder="'+value+'" />');input.css('font-size',40);input.css('color','#453f43');input.css('font-family','berthold_akzidenz_grotesk_bLt');input.css('height',64);input.css('border',0);input.css({"background":"rgba(255, 255, 255, 0)"});input.appendTo(elem);}
var firstname=sym.$("firstname_txt");setInput(firstname,"Enter first name","firstname");var lastname=sym.$("lastname_txt");setInput(lastname,"Enter last name","lastname");var email=sym.$("email_txt");setInput(email,"Enter e-mail","email");var postcode=sym.$("postcode_txt");setInput(postcode,"Enter postcode","postcode");var city=sym.$("city_txt");setInput(city,"Enter city","city");function formSubmit(){alert("gender : "+gender+"\n"+"first name : "+$("#firstname:first").val()+"\n"+"last name : "+$("#lastname:first").val()+"\n"+"email : "+$("#email:first").val()+"\n"+"postcode : "+$("#postcode:first").val()+"\n"+"city : "+$("#city:first").val());return true;}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ok_bt'
(function(symbolName){})("ok_bt");
//Edge symbol end:'ok_bt'

//=========================================================

//Edge symbol: 'female_bt'
(function(symbolName){})("female_bt");
//Edge symbol end:'female_bt'

//=========================================================

//Edge symbol: 'male_bt'
(function(symbolName){})("male_bt");
//Edge symbol end:'male_bt'
})(jQuery,AdobeEdge,"bonbon-form");