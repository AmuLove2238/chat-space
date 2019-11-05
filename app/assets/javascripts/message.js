$(function(){


  function buildMessage(message){
    var html = `<div class="message">
                  ${message.user}
                  ${message.date}
                  ${message.text}
                </div>`
    return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    // console.log(this); //thisとするとフォーム全体がconsoleに送られる
    var formData = new FormData(this);
    var url = $(this).attr('action');
    // console.log(this);
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
      $('#message_content').reset()
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  })
})