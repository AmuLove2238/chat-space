  $(function(){

        function buildMessage(message){

        var putImage = (message.image) ? `</div><img src=${message.image} ></div>` : "";

        var html =`<div class="message" data-message-id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
                ${putImage}`
        return html;
        }

        $('#new_message').on('submit',function(e){
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
          .done(function(data){
            var html = buildMessage(data);
            $('.messages').append(html);
            
            $('form')[0].reset();
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
            
          })
          .fail(function(){
            alert('エラー');
          });
          return false;
        })

      var reloadMessages = function() {
        
        var last_message_id = $('.message:last').data("message-id");
        $.ajax({
          url: "api/messages",
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function(message){
          insertHTML = buildMessage(message);
          $('.messages').append(insertHTML);
          
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'slow');
          })
        
        })
        .fail(function() {
          alert('自動更新に失敗しました');
        });
      
    }
    setInterval(reloadMessages, 10000); 
  });
  