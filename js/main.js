
	
$(document).ready(function() {
    emailjs.init("user_lndsyAZjrw0buxJdxKtAE");		
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('input[name=submit]').click(function(){       	 
      
      const templateParams = {	
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('input[name=name]').val(),
            phone: $('input[name=phone]').val(), 
            email : $('input[name=email]').val(),
            file : $('input[name=my_file]').val(),
            message : $('textarea[name=message]').val()
                       };
     
                       

      emailjs.send("Mang9","newzen", templateParams)
      //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
             .then(function(response) {
                console.log(response);
                console.log(response.status);
                console.log(response.text);
                alert('SUCCESS!', response.status, response.text);
                
             }, function(error) {
                alert('FAILED...', error);
             });
   


    });
    $("#input-file").on('change', function (e) {
      const items = $("#input-file")[0].files;
      const fileName = items[0].name;
      console.log(fileName);
      $('.filename').text( fileName );
    }
    )

    /*h1영역 색깔줄라했는데 의미 0 안써도 될 듯 */
   //  $('input,textarea,label').mouseenter(function(){
   //    $('h1').addClass('change');
   //  });
   //  $('input,textarea,label').mouseleave(function(){
   //    $('h1').removeClass('change');
   //  });
   //  $('input,textarea,label').mouseenter(function(){
   //    $('h1').addClass('change');
   //  });
   //  $('input,textarea,l abel').mouseleave(function(){
   //    $('h1').removeClass('change');
   //  });
   //  $("input,textarea,label").click(function(){        
   //    if(!($(this).hasClass("active"))){
   //        $(this).removeClass("active");
   //        $(this).addClass("active");
   //    }       
   // });


   /*이메일 정규식을 document.ready 밖에 뒀더니 DOM이 그려지기전에 const 선언해서 null값이 뜨나보다
   순수 자바스크립트론 document.addEventListener("DOMContentLoaded",function(){}}) 이렇게 써서 
   & 그리고 HTML에서  main.js 선언을 body아래쪽에서 돌리면 document.ready안에서 돌릴 필요없이 뜬다!*/
   const input_email = document.querySelector('#email');


   input_email.addEventListener('change', updateValue);
   function updateValue(e) {
   valiFormEmail(e.target);
   }

   function valiFormEmail(obj){
      if(validEmail(obj) == false){
      alert("올바른 이메일 주소를 입력하세요.");
      obj.value = '';
      obj.focus();
      return false;
      }
      }

   function validEmail(obj){
   const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

   return (obj.value.match(pattern) != null);
   }


  });

