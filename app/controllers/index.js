function showBook (event) { 
	 var selectedBook = event.source;
    var args = {
        name: selectedBook.name,
        restrauant: selectedBook.restrauant
    };
     var foodview = Alloy.createController("fooddetails", args).getView();
    foodview.open();
}

    var myFoods = Alloy.Collections.foods;
    var food = Alloy.createModel('foods', { 
   name:'Red Curry',
   restrauant:'Thai Rama'
});

myFoods.add(food); 
food.save();