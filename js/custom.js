$(function(){

	$(".logo").on('mouseover', function(){
		$('.dropdown-menu').css('display', 'inherit');
	})

	$('.dropdown-menu').on('mouseout', function(){
		$('.dropdown-menu').css('display', 'none');
	})

	$(".folder").on("click", "div",function(){
		$(this).toggleClass('open');
		$(this).next().children("li").toggleClass("show");
	})

	$(".open").on("click", function(){
		$(this).removeClass('open').addClass('closed');
		$(this).next().children("li").toggleClass("show");
	})

	$('div.header').on('click', function(){
		$(this).next().toggleClass('hide');
	});

	$(".editor").jqte();


	

	/* Unchecked files to checked */

	$('.tasks').on('click', '.unchecked', function() {
		var test = $(this).closest('.folder').find('.section').children('div').text();
		var find = $('.Completed').find('div[name='+test+']').attr('name');

		if(test == find){
			var test2 = $(this).parent();
			$(this).removeClass('unchecked').addClass('checked');
			$(this).attr('src', 'img/icons/black/checkbox_checked_icon&16.png');
			$('.Completed').find('div[name='+test+']').parent().next().append(test2);
			
		}
	});

 	/* ------------------------------------------------------ */


 	/* Count Today tasks and completed tasks*/

	var workTasks = $(".work-tasks").children('.file').length;
	var shoppingTasks = $(".shopping-tasks").children('.file').length;
	var workCompl = $('.work-completed').children('.file').length;
	var shoppingCompl = $('.shopping-completed').children('.file').length;

	$('.work-count').html(workTasks);
	$('.shopping-count').html(shoppingTasks);
	$('.today-count').html(workTasks+shoppingTasks);

	$('.shopping-completed').prev().children('span').html(shoppingCompl);
	$('.work-completed').prev().children('span').html(workCompl);
	$('.completed-count').html(workCompl+shoppingCompl);

   /* ------------------------------------------------------- */


});