function LineNotify() {
  var token = "OjBnrxJCU9cWukkVDuA6ZWszH6V2VybU0mFYB6ucDCv";
  
  var message = {};

  message.message = "hello world";

  const send = function (message, token) {
    var payload = {
      "method": "post",
      "payload": message,
      "headers": {"Authorization": "Bearer " + token }
    }
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", payload)
  }
  
  var form = FormApp.openById("1fjtk99kHyrUFbU1f_m_W10QmpDUaBrJ1q9xHOj_O3bw"); //รหัสอ้างอิงเอกสารที่ต้องการเข้าถึง
  
  var responses = form.getResponses(); //ข้อมูลการตอบกลับทั้งหมด
  
  var response = responses[responses.length - 1]; //responses.length - 1 คือ จำนวนการตอบกลับล่าสุดในเอกสาร
  
  var items = response.getItemResponses();
  
  message.message = "ลำดับที่: " + responses.length;
  
  for (var i = 0; i < items.length; i++) {
    message.message += "\n" + items[i].getItem().getTitle() + ": " + items[i].getResponse();
  }

  send(message,token);
}
