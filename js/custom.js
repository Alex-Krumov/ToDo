$(function(){

	$(".logo").on('mouseover', function(){
		$('.dropdown-menu').css('display', 'inherit');
	})

	$('.dropdown-menu').on('mouseout', function(){
		$('.dropdown-menu').css('display', 'none');
	})

	$(".folder").on("click", "div",function(){
		$(this).toggleClass('open');
		$(this).parent().toggleClass('folder-open');
		$(this).next().children("li").toggleClass("show");
	})


	$('div.header').on('click', function(){
		$(this).next().toggleClass('hide');
	});

	$('aside').on('mouseover', 'li.file', function(){
		$('.fileDetails').css('display', 'inline-block');
	})

	$('aside').on('mouseout', 'li.file', function(){
		$('.fileDetails').css('display', 'none');
	})


	$('.user-name').on('mouseover', function(){
		$('.user-dropdown').css('display', 'inherit');
	});

	$('.user-dropdown').on('mouseout',function(){
		$(this).css('display', 'none');
	});


	$(".submit").on('click', function(){

		var email = $('.register').children('fieldset:first-child').children('label').children('input').value();
		var username = $('.register').children('fieldset:nth-child(2)').find('input').val();
		var password = $('.register').children('fieldset:nth-child(3)').find('input').val();
		var confpaas = $('.register').children('fieldset:nth-child(4)').find('input').val();

		alert('username');
		return false;
		if(username == null && username= ""){
			$('form').before('<div class="text-error>Too short username</div>"')
			return false;
		}
		
	});


 	/* 

 	$('aside').on('click', '.add-folder', function(){
 		$(this).parent().parent().replaceWith('<div class="header"><input type="text" class="create-folder" placeholder="Folder name"></div>').focus("input");
 		$('.create-folder').focus();
 			$(document).keypress(function(e) {
			    if(e.which == 13) {
			    	var folderName = $('.create-folder').val();
			    	$('.tasks').append('<li class="folder"><div class="section closed"><div class=folder-name name='+folderName+'>'+folderName+'</div><span class="work-count">0</span></div><ul class="work-tasks"></ul></li>');
			    	$('.Completed').append('<li class="folder"><div class="section closed"><div class=folder-name name='+folderName+'>'+folderName+'</div><span class="work-count">0</span></div><ul class="work-tasks"></ul></li>');
			        $('.tasks').prev().replaceWith('<div class="header">Today <div> <span class="today-count">3</span> <img class="add-folder" src="img/icons/black/folder_plus_icon&16.png"></div></div>');
			    	var folderName = null;
			    }	
			});
 	});



 	*/






	/* Move tasks in complate */

	$('.tasks').on('click', '.unchecked', function() {
		var test = $(this).closest('.folder').find('.section').children('div').text();
		var find = $('.Completed').find('div[name='+test+']').attr('name');

		if(test == find){
			var test2 = $(this).parent();

			$('.Completed').find('div[name='+test+']').parent().next().append(test2);
			$(this).parent().prev().parent().prev().children('div').addClass("FINDME");

			if(($('.FINDME').hasClass('open'))){
				$('.FINDME').removeClass('.FINDME');
				$(this).removeClass('unchecked').addClass('checked');
				$(this).attr('src', 'img/icons/black/checkbox_checked_icon&16.png');
			}
			else {
				$('.FINDME').removeClass('.FINDME');
				$(this).parent().removeClass('show');
				$(this).removeClass('unchecked').addClass('checked');
				$(this).attr('src', 'img/icons/black/checkbox_checked_icon&16.png');
			}
			
		}
	});

 	/* ------------------------------------------------------ */








   /* Completed tasks to none completed */


	$('.Completed').on('click', '.checked', function() {
		var test = $(this).closest('.folder').find('.section').children('div').text();
		var find = $('.Completed').find('div[name='+test+']').attr('name');


		if(test == find){
			var test2 = $(this).parent();

			$('.tasks').find('div[name='+test+']').parent().next().append(test2);
			$(this).parent().prev().parent().prev().children('div').addClass("FINDME");

			if(($('.FINDME').hasClass('open'))){

				$(this).removeClass('checked').addClass('unchecked');
				$(this).attr('src', 'img/icons/black/checkbox_unchecked_icon&16.png');
			}
			else {
				$(this).parent().removeClass('show');
				$(this).removeClass('checked').addClass('unchecked');
				$(this).attr('src', 'img/icons/black/checkbox_unchecked_icon&16.png');
			}
			
		}
	});


   /* ----------------------------------------- */









 	/* Count Today tasks and completed tasks*/

	var workTasks = $(".work-tasks").children('.file').length;
	var shoppingTasks = $(".shopping-tasks").children('.file').length;
	var workCompl = $('.work-completed').children('.file').length;
	var shoppingCompl = $('.shopping-completed').children('.file').length;

	console.log(workTasks+shoppingTasks);

	$('.work-count').html(workTasks);
	$('.shopping-count').html(shoppingTasks);
	$('.today-count').html(workTasks+shoppingTasks);

	$('.shopping-completed').prev().children('span').html(shoppingCompl);
	$('.work-completed').prev().children('span').html(workCompl);
	$('.completed-count').html(workCompl+shoppingCompl);

   /* ------------------------------------------------------- */





});

