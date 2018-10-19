
function popoverFunc() {
    $("[data-toggle=popover]").each(function(i, obj) {
        $(this).popover({
            html: !0,
            content: function() {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html()
            }
        })
    })
}
$(document).ready(function() {
    popoverFunc();
    $("#collapse").click(function(e) {
        e.preventDefault();
        $(".col.msgCollapse").toggleClass("collapsed");
        $(".col2.right-side").toggleClass("collapsed");
        $(".group-list").toggleClass("collapsed");
        if ($(this).css("transform") == 'none') {
            $(this).css("transform", "rotate(180deg)")
        } else {
            $(this).css("transform", "")
        }
    });
    $("li.user-obj").click(function(e) {
        e.preventDefault();
        $("li.user-obj").removeClass("activeGroup");
        $(this).addClass("activeGroup")
    });
     $("#input-default").emojioneArea({
			    	events: {
				      keydown: function (editor, event) {
							  if(event.which == 13){
							    event.preventDefault(); // < ---------- preventDefault
							    return sendMessage(getMessageText())
							  }
						    },
						    },
			  	pickerPosition: "top",
			  	filtersPosition: "bottom",
			    tones: true,
			    autocomplete: false,
			    inline: true,
			    hidePickerOnBlur: false,
			    search: false

			  });

     var getMessageText, sendMessage;
        getMessageText = function() {
            var $message_input;
            var $message_text;
            $message_input = $('#input-default').data("emojioneArea");
            $message_text = $message_input.editor[0].innerHTML
            // console.log($message_input.editor[0].innerHTML);
            return $message_text
        };
        sendMessage = function(text) {
            var $messages, message;
            if (text.trim() === '') {
                return
            }
            $('#input-default').data("emojioneArea").setText('');
            $messages = $('.messages');
            message = new Message({
                name: 'Jhon',
                text: text
            });
            message.draw();
            return $messages.animate({
                scrollTop: $messages.prop('scrollHeight')
            }, 300)
        };

            var count = 0;
		    var Message;
		    Message = function(arg) {
		        this.text = arg.text, this.name = arg.name;
		        this.draw = function(_this) {
		            return function() {
		                count = count + 1;
		                var $message;
		                $message = $($('.message_template').clone().html());
		                $message.find('.msg-name').html(_this.name);
		                $message.find('img.avatar').attr('id', 'check' + count);
		                $message.find('.proCard').attr('id', 'popover-content-' + 'check' + count);
		                $message.find('.text').html(_this.text);
		                $('.messages').append($message);
		                popoverFunc();
		                return setTimeout(function() {
		                    return $message.addClass('appeared')
		                }, 0)
		            }
		        }(this);
		        return this
		    };
});
