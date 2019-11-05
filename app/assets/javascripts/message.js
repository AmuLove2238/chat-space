$(function scroll() {  
  $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});

  function buildHTML(message){
  var html = `<div class="message">
                        <div class="upper-message">
                            <div class="upper-message__user-name">
                                ${ message.name }
                            </div>
                            <div class="upper-message__date">
                                ${ message.time }
                            </div>
                        </div>
                        <div class="lower-message">
                            <p class="lower-message__content">
                                ${ message.content }
                            </p>
                                ${image}
                        </div>
                    </div>`;
      return html;
  }

  
  $("#new_message").on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
      })
  
      .done(function(message){
          var html = buildHTML(message);
          $('.messages').append(html);
          $('.form__message')[0].reset('');
          $('.form__submit').prop('disabled', false);
          scroll()
      })

      .fail(function(){  
          alert('メッセージ送信に失敗しました')
          $('.form__submit').prop('disabled', false);
      })
  })
  
  })