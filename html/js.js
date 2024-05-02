window.addEventListener("message", function(event){
    let data = event.data;
    if (data.action === "show"){
        $("#TextNebunAJutor").fadeIn();
        $(".container").show(200)
        $(".text").show(200)
        $(".litera").html(data.key)
        $(".litera2").html(data.key)
        $(".text").html(data.text)
        $(".container").css('background' ,'linear-gradient(to right,' + (data.color) + ', transparent)')
        $(".text").css('background' ,'linear-gradient(to left,' + (data.color) + ', transparent)')
    } else if (event.data.action === "hide"){
        $(".container").fadeOut(200)
        $(".text").fadeOut(200)
    }
})