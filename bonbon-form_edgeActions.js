
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var anim_speed=0.5;var gender="female";var userLang=(navigator.language||navigator.userLanguage).toLowerCase();console.log("The language is: "+userLang);sym.$("female_bt").css({"cursor":"pointer"});sym.$("female_bt").bind("click",function(e){pushButtonAnim(this);setFemale();});sym.$("male_bt").css({"cursor":"pointer"});sym.$("male_bt").bind("click",function(e){pushButtonAnim(this);setMale();});sym.$("ok_bt").css({"cursor":"pointer"});sym.$("ok_bt").bind("click",function(e){pushButtonAnim(this);setTimeout(submitForm,400);});function setFemale(){gender="female";sym.getSymbol("female_bt").$("txt").css({"color":"#ffffff"});sym.getSymbol("female_bt").$("rect").css({"background-color":"#a62f5a"});sym.getSymbol("male_bt").$("txt").css({"color":"#453f43"});sym.getSymbol("male_bt").$("rect").css({"background-color":"#f2f2f2"});}
function setMale(){gender="male";sym.getSymbol("male_bt").$("txt").css({"color":"#ffffff"});sym.getSymbol("male_bt").$("rect").css({"background-color":"#a62f5a"});sym.getSymbol("female_bt").$("txt").css({"color":"#453f43"});sym.getSymbol("female_bt").$("rect").css({"background-color":"#f2f2f2"});}
function pushButtonAnim(elem){TweenLite.to(elem,0.1,{css:{"transform":"scale(1.2)"},ease:Quad.easeIn});TweenLite.to(elem,0.25,{css:{"transform":"scale(1)"},delay:0.1,ease:Quad.easeOut});}
function setInput(elem,value,placeholder,id){var input=$('<input id="'+id+'" type="text" value="'+value+'"  placeholder="'+placeholder+'" />');input.css('font-size',40);input.css('color','#453f43');input.css('font-family','berthold_akzidenz_grotesk_bLt');input.css('height',64);input.css('border',0);input.css({"background":"rgba(255, 255, 255, 0)"});input.appendTo(elem);}
var firstname=sym.$("firstname_txt");setInput(firstname,"","Enter first name","firstname");var lastname=sym.$("lastname_txt");setInput(lastname,"","Enter last name","lastname");var email=sym.$("email_txt");setInput(email,"","Enter e-mail","email");var postcode=sym.$("postcode_txt");setInput(postcode,"","Enter postcode","postcode");var city=sym.$("city_txt");setInput(city,"","Enter city","city");function submitForm(){if(!verifyMail($("#email:first").val())){alert("Check e-mail, please");return;}
if(!verifyUkPostcode($("#postcode:first").val())){alert("Check postcode, please");return;}
console.log("gender : "+gender+"\n"+"first name : "+$("#firstname:first").val()+"\n"+"last name : "+$("#lastname:first").val()+"\n"+"email : "+$("#email:first").val()+"\n"+"postcode : "+$("#postcode:first").val()+"\n"+"city : "+$("#city:first").val());sendDatas();}
function sendDatas(){$.ajax({type:"POST",url:"http://secretservices.a-g.fr/ope_bonbon/inscription.php",data:{gender:gender,firstname:$("#firstname:first").val(),lastname:$("#lastname:first").val(),email:$("#email:first").val(),postcode:$("#postcode:first").val(),city:$("#city:first").val(),},error:function(jqXHR,textStatus,errorThrown){console.log("error : "+data);},success:function(data,textStatus,jqXHR){console.log("success : "+data);if(data=="1"){console.log("data saved");fadeinSuccessPopin();}
if(data=="0"){console.log("a problem occured");}}});}
function verifyMail(str){var re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;return re.test(str);}
function verifyUkPostcode(str){if(userLang.toLowerCase()=="en-gb"||userLang.toLowerCase()=="en"||userLang.toLowerCase()=="fr"||userLang.toLowerCase()=="fr-fr"){var re=/^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;}
if(userLang.toLowerCase()=="nl"){var re=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;}
return re.test(str);}
sym.getSymbol("success_popin").$("back_bt").css({"cursor":"pointer"});sym.getSymbol("success_popin").$("back_bt").bind("click",function(e){pushButtonAnim(this);setTimeout(hideSuccessPopin,400);});function fadeinSuccessPopin(){sym.$("success_popin").css({"opacity":"0"});sym.$("success_popin").show();TweenLite.to(sym.$("success_popin"),anim_speed,{css:{"opacity":"1"},ease:Quad.easeOut});}
function fadeoutSuccessPopin(){TweenLite.to(sym.$("success_popin"),anim_speed,{css:{"opacity":"0"},ease:Quad.easeIn,onComplete:hideSuccessPopin});}
function hideSuccessPopin(){sym.$("success_popin").hide();resetFields();}
function resetFields(){$("#firstname:first").val("");$("#lastname:first").val("");$("#email:first").val("");$("#postcode:first").val("");$("#city:first").val("");}});
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

//=========================================================

//Edge symbol: 'success_popin'
(function(symbolName){})("success_popin");
//Edge symbol end:'success_popin'

//=========================================================

//Edge symbol: 'ok_bt_1'
(function(symbolName){})("back_bt");
//Edge symbol end:'back_bt'
})(jQuery,AdobeEdge,"bonbon-form");