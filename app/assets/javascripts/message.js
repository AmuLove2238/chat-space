$(function(){


  function buildMessage(message){
    var html = `<div class="message">
                  ${message.user}
                  ${message.date}
                  ${message.content}
                  ${message.image}
                </div>`
    return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html)
      $('#message_content')[0].reset('')
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  })
})