
// Connect JQuery
    // Go to website and enter link

// Display the current date and time in the header
    // Connect Momentjs 

    
    // Choose Date/Time display    
     // Add styling/attribute to displayed time element
     
   






 // Create timeblocks with standard business hours
    // Let the user enter in events in the timeblock

    // Save the text into local storage

    // When the timeblocks are viewed, differently colors represent the past, current hour, and future


$('#currentDay').text(moment().format("MMM Do YY"))

    
// Setting timeblock colors
    // Current hour for past/present/future timeblocks 
var currentHour = moment().hour()
console.log(currentHour)


$(".event-block").each(function() {
    let hourBlock = $(this).attr("id").split("-")[1]
     if (hourBlock == currentHour) {
        $(this).find(".description").addClass("present")
     } else if (hourBlock < currentHour) {
        $(this).find(".description").addClass("past")
     }

     var textEntry = localStorage.getItem(hourBlock);
     var textArea = $(this).find(".description");
     textArea.val (textEntry);


})

$(".saveBtn").on("click", function(){
    var key = $(this).parent().attr("id").split("-")[1];
    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key,value);
});
































































































   
