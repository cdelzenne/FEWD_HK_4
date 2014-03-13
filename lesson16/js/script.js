$("#todo-form").submit(function(e){
	e.preventDefault();
	var userInput = document.getElementById("task").value;
	// console.log(userInput);
	$("#list").append('<li><span class="item">'+userInput+'</span> <span class="remove">Remove</span>'+' <span class="edit">Edit</span></li>');

	var taskCount = document.getElementById("list").length;
	$("#count").html('You have '+taskCount+' tasks pending.');
});


$("#list").on("click", ".remove", function(){
	$(this).parent().remove();
})

$("#list").on("click", ".edit", function(){
	var text = $(this).siblings(".item").text();
	$(this).parent().append('<input type="text" class="input" id="edit" value="'+text+'">'+'<input type="submit" class="input" name="button-edit" id="button-edit">');
})

// $("#count").on(function(){
// })