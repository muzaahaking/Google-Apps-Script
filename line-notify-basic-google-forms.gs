function onFormSubmit() {

var form = FormApp.openById('xxx'); 
var fRes = form.getResponses();
var formResponse = fRes[fRes.length - 1];
var itemResponses = formResponse.getItemResponses();

var msg = 'ใส่ข้อความแจ้งเตือน';//+
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse()

for (var i = 0; i < itemResponses.length; i++) {
msg += ' \n' + itemResponses[i].getItem().getTitle() + ': ' + itemResponses[i].getResponse();
}
sendLineNotify(msg);
}

function sendLineNotify(message) {
var token = ["xxx"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
var options = {
"method": "post",
"payload": "message=" + message,
"headers": {
"Authorization": "Bearer " + token
}
};

UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}




function onFormSubmit() {

var form = FormApp.openById("ใส่ form id"); 
var fRes = form.getResponses();

var formResponse = fRes[fRes.length - 1];
var itemResponses = formResponse.getItemResponses();

var msg = itemResponses[0].getResponse() + ' : ส่งงานเรียบร้อยแล้ว';

sendLineNotify(msg);
// Logger.log(msg)
}

function sendLineNotify(message) {

var token = ["ใส่ token ของกลุ่ม Line ที่ใช้งาน"];
var options = {
"method": "post",
"payload": "message=" + message,
"headers": {
"Authorization": "Bearer " + token
}
};

UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
