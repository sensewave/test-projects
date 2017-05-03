module.exports= {

tagsend: function (req, res) {

console.log(req.param('auid'));
var1= req.param('gatewayId');
var2=req.param('auid');
var3= req.param('state');
console.log(var1);
console.log(var2);
console.log(var3);
Data=req
xhr = new XMLHttpRequest();
var url = "localhost:1337/register" + '?'+ 'auid';
var urll = 'localhost:1337/tags'
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var p=json.auid;
	if(p==var2){
               ss= new XMLHttpRequest();
		ss.open("POST", url, true);
ss.setRequestHeader("Content-type", "application/json");
ss.onreadystatechange = function () { 
    if (ss.readyState == 4 && ss.status == 200) {
        var json = JSON.parse(ss.responseText);
        console.log(json);
    }
}
var data = JSON.stringify(Data);
xhr.send(data);



    }
}
}
xhr.send();


}
,
 _config: {
    actions: true,
    shortcuts: false,
    rest: false
  }


};
