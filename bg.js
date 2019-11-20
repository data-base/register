var can = document.getElementById('canvas'); 
  

var ctx = can.getContext('2d'); 
  

can.width = 600; 
can.height = 600; 
  

var img = new Image(); 
  

img.src = "https://broadcast-devices.com/wp-content/uploads/2018/08/check-icon-32x32.png"; 
  

window.onload = function() { 
    // the initial image height 
    var imgHeight = 0; 
  
    
    var scrollSpeed = 10; 
  
   
    function loop() 
    { 
        // draw image 1 
        ctx.drawImage(img, 0, imgHeight); 
  
        // draw image 2 
        ctx.drawImage(img, 0, imgHeight - can.height); 
  
        
        imgHeight += scrollSpeed; 
  
        
        if (imgHeight == can.height) 
            imgHeight = 0; 
  
        
        window.requestAnimationFrame(loop); 
    } 
  
    
    loop(); 
  
} 
