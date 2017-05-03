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

var request = require('request');
var urls = "localhost:1337/register" + '?'+ 'auid';
var urll = 'localhost:1337/tags'  ;
var obj =new Object();
obj.auid=var2;
obj.gatewayId=var1;
obj.state=var3;

console.log(obj);
var request=require('request');
var formData = obj;

   request.post({
            url: 'http://107.170.80.200:1337/tagdata',
            form: formData
        },
        function (err, httpResponse, body) {
            console.log(err, body);
        });

res.send({response : "success"});

}
,
 _config: {
    actions: true,
    shortcuts: false,
    rest: false
  }


};
