//  Ryze UI
//  Dropdowns JS
//

function ryzeDropdown(){

  $("html").click(function(event){

    // If the target is not the menu
    //
    var container = $(".dropdown-menu");
    if (!container.is(event.target) && container.has(event.target).length === 0){
      $("li.dropdown.open").removeClass("open");
    }

  });
  
  $(".dropdown a").click(function(event){

    // Close Opened Dropdowns
    //
    $("li.dropdown.open").removeClass("open");

    // Prevent default
    //
    event.preventDefault();
    event.stopPropagation();

    // Remove class if previously defined
    //
    if ($(this).closest('li').hasClass("open")) {
        $(this).closest('li').removeClass("open");
    }
    else {
        $(this).closest('li').addClass("open");
    }
  }); 

}

ryzeDropdown();