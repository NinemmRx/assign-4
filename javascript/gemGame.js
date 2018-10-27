$(document).ready(function() {
    var savedNum = Math.floor(Math.random() * 12);
    var savedNum2 = Math.floor(Math.random() * 20);
    var savedNum3 = Math.floor(Math.random() * 50);
    var savedNum4 = Math.floor(Math.random() * 70);
    var randomnumber = Math.floor(Math.random() * 200);

    var score=0;
   
    var imageBtn = $("<button>");
    var imageBtn2 = $("<button>");
    var imageBtn3 = $("<button>");
    var imageBtn4 = $("<button>");

    imageBtn.addClass("operation-button button-color picture");  
    imageBtn2.addClass("operation-button button-color picture2");  
    imageBtn3.addClass("operation-button button-color picture3");  
    imageBtn4.addClass("operation-button button-color picture4");  

    imageBtn.val(savedNum)
    imageBtn2.val(savedNum2)
    imageBtn3.val(savedNum3) 
    imageBtn4.val(savedNum4)

    $("#buttons").append(imageBtn);
    $("#buttons").append(imageBtn2);
    $("#buttons").append(imageBtn3);
    $("#buttons").append(imageBtn4);
    $("#displayrandom").append(randomnumber);
   

    console.log("It is number one", savedNum);
    console.log("It is number two",savedNum2);
    console.log("It is number three", savedNum3);
    console.log("It is number four",savedNum4);

    
    $( ".operation-button" ).on( "click", function() {
        console.log($(this).val());        
        score+=parseInt($(this).val());
        console.log(score);
        $("#display").html(" ");
        $("#display").append(score);
        if(score === randomnumber)
        {
            $("#result").text("Winner");
        }
        else if(score > randomnumber)
        {
            $("#result").text("Loser");
        }
    });

});



 