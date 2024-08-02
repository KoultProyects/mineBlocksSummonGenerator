function generateCommand (){
 var entity=document.getElementById("entity").value;
 var quantity=document.getElementById("quantity").value;
 var positionX=document.getElementById("positionX").value;
 var positionY=document.getElementById("positionY").value;
 var dataTagName=document.getElementById("dataTagName").value;
 var dataTagHealth=document.getElementById("dataTagHealth").value;
 var dataTagDefaultDrops=document.getElementById("dataTagDefaultDrops").checked;
 var dataTagSkin=document.getElementById("dataTagSkin").value;
 var dataTagCharged=document.getElementById("dataTagCharged").checked;
 var dataTagAggro=document.getElementById("dataTagAggro").value;
 var dataTagBaby=document.getElementById("dataTagBaby").checked;
 var dataTagColor=document.getElementById("dataTagColor").value;
 var dataTags=" ";
 var dataTagsArray=[];
 var dataTagsState=false;
 function newSimpleDataTag(tag,value){
  dataTagsArray.push(tag+':"'+value+'"');
 }
 function newNumberDataTag(tag,value){
  dataTagsArray.push(tag+":"+value);
 }
 if(positionX==""){
  positionX="~";
 }
 if(positionY==""){
  positionY="~";
 }
 if(dataTagName!=""){
  dataTagsState=true;
  newSimpleDataTag("name",dataTagName);
 }
 if(dataTagHealth!=""){
  dataTagsState=true;
  newNumberDataTag("health",dataTagHealth);
 }
 if(dataTagDefaultDrops==false&&entity!="spawnskin"){
  dataTagsState=true;
  newSimpleDataTag("defaultDrops",0);
 }
 if(dataTagSkin!=""&&entity=="spawnskin"){
  dataTagsState=true;
  newSimpleDataTag("skin",dataTagSkin);
 }
 if(dataTagCharged==true&&entity=="creeper"){
  dataTagsState=true;
  newSimpleDataTag("charged",1);
 }
 if(dataTagAggro!=""&&entity=="spawnskin"){
  dataTagsState=true;
  newSimpleDataTag("aggro",dataTagAggro);
 }
 if(dataTagBaby==true&&(entity=="chicken"||entity=="sheep"||entity=="rabbit"||entity=="pig"||entity=="wolf"||entity=="cow"||entity==""||entity=="cow")){
  dataTagsState=true;
  newSimpleDataTag("aggro",dataTagAggro);
 }
 if(dataTagColor!=""&&entity=="sheep"){
  dataTagsState=true;
  newSimpleDataTag("color",dataTagColor);
 }
 if(dataTagsState==true){
   dataTags="{"+dataTagsArray+"}";
 }
 document.getElementById("command").innerText="/summon "+entity+" "+quantity+" "+positionX+" "+positionY+" "+dataTags;
}