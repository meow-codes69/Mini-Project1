// Make a rectangle and when we move on that rectangle on the left side , we want to gradually change the color of that rectangle to red and as we move to the right side of the rectangle , gradually change the color of the rectangle to blue 

var rect= document.querySelector("#center");

rect.addEventListener("mousemove",function(meow){
    var rectLocation=rect.getBoundingClientRect();
    var rectXLocation=(meow.clientX-rectLocation.left);

    if (rectXLocation<rectLocation.width/2){
        var redcolor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,rectXLocation);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4
        })

        
    }
    else{
        var bluecolor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,rectXLocation);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4
        });
    }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
        ease:Power4
    })
})