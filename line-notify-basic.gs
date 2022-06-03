function LineNotify() {
  var token = 'OjBnrxJCU9cWukkVDuA6ZWszH6V2VybU0mFYB6ucDCv';
  
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
    
  send(message,token);
}
