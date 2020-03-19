for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
        if (j < i) {
          document.write('&nbsp; ');
           } else {
          document.write('*');
          }
      }
    document.write('<br>');
 
}

for(let i = 15; i >= 0; i--){
    for(let j = 0; j <=i; j++){
        document.write("*")
    }
         document.write("<br>")	 
}

for(let i = 1; i <= 15; i++){
    for (let j = 1; j <= (15-i); j++) {
        document.write("&nbsp;")
    }
    for(let k=1; k<=i; k++) {
        document.write("*");
    }
     document.write("<br>");
   }
