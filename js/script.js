$(document).ready(function(){
	/*form validation*/
	$('#zip').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
$('#cc-number').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
$('#cc-expiration').keyup(function () { 
    this.value = this.value.replace(/[^\d{1,2}\/\d{1,2}\/\d{4}$]/,'');
});
$('#cc-cvv').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
/*product page validation*/
	
	$("#im1").click(function(){
		$("#im").attr("src","../images/ikigai.jpg")
	});
	$("#im2").click(function(){
		$("#im").attr("src","../images/ikigaib.jpg")
	});
	$("#im3").click(function(){
		$("#im").attr("src","../images/ikigair.jpg")
	});
	$("#im4").click(function(){
		$("#im").attr("src","../images/ikigaitop.jpg")
	});




/*searchbar*/
	var inp = $("#searchbar").val()
	$("#searchbar").keydown(function(e){
		if (e.which === 13) {
			 e.preventDefault();
			if(jQuery.trim(inp).length > 0)
			{
   				
      			window.location = "category.html";
     
			}
			else{
				window.location = "Home.html";
			}
		}
	});
/*popups*/

	$("#welcomePopup").show();
	$(".closePopup").click(function(){
			$("#welcomePopup").hide();
			$("#loginPopup").hide();
			$("#createPopup").hide();
		});
	window.onclick = function(event) {
        var modal = document.getElementById('welcomePopup');
        if (event.target == modal) {
          $("#welcomePopup").hide();
        }
      }



	$(".loginForm").click(function(){
		$("#loginPopup").show();
		
		window.onclick = function(event) {
        var modal = document.getElementById('loginPopup');
        if (event.target == modal) {
          $("#loginPopup").hide();
        }
      }
	});
	$(".createForm").click(function(){
		$("#createPopup").show();
		
		window.onclick = function(event) {
        var modal2 = document.getElementById('createPopup');
        if (event.target == modal2) {
          $("#createPopup").hide();
        }
      }
	});

});
 $(document).ready(function(){
            //-- Click on detail
            $("ul.menu-items > li").on("click",function(){
                $("ul.menu-items > li").removeClass("active");
                $(this).addClass("active");
            })

            $(".attr2").on("click",function(){
                var clase = $(this).attr("class");

                $("." + clase).removeClass("active");
                $(this).addClass("active");
            })

            //-- Click on QUANTITY
            $(".btn-minus").on("click",function(){
                var now = $(".section > div > input").val();
                if ($.isNumeric(now)){
                    if (parseInt(now) -1 > 0){ now--;}
                    $(".section > div > input").val(now);
                }else{
                    $(".section > div > input").val("1");
                }
            });            
            $(".btn-plus").on("click",function(){
                var now = $(".section > div > input").val();
                if ($.isNumeric(now)){
                    $(".section > div > input").val(parseInt(now)+1);
                }else{
                    $(".section > div > input").val("1");
                }
            }) ;                       
        });
    //  JavaScript for disabling form submissions if there are invalid fields
      (function() {
        'use strict';

        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');

          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
      
