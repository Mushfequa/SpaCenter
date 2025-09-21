let n =5;
for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i) + " *".repeat(i));
}
   
        for(let i =n-1;i>=1;i--){
        console.log(" ".repeat(n-i) +" *".repeat(i));
    
}

function right(n){
    for(let i=1;i<=n;i++){
let row=" ";
    
       
            for(let j =1;i<=i;i++){
if(i===1||i===n||j===1||j===n)       {
row+=" *"
} else{
row+=" ";
}
    }
    console.log(row);
}
}
right(5);

function pascal(n){
    for(let i =0;i<n;i++){
        let row=" ".repeat(n-i);
        let num=1;
        for(let j =0;j<=i;j++){

            
                row+= num+" ";

                num= num*(i-j)/(j+1);
            
               
            }
            
        
        console.log(row);
    }

}
pascal(5);


function hollowTriangleDiamond(n){

    for(let i = 1;i<n;i++){
        let row=" ".repeat(n-i);
       
        for(let j= 1;j<=i;j++){
            if(j===1||j===i||i===n)
                row+="* ";
               
            else
                row+="  ";
            }
            console.log(row);
    }

            for(let i = n-1;i>=1;i--){
                let row=" ".repeat(n-i);
               
                for(let j= 1;j<=i;j++){
                    if(j===1||j===i||i===n)
                        row+="* ";
                       
                    else
                        row+="  ";
                    }
                    
    
        
console.log(row);
    }

}
hollowTriangleDiamond(5);

function hollowTriangle(n){

    for(let i = 1;i<=n;i++){
        let row=" ".repeat(n-i);
       
        for(let j= 1;j<=i;j++){
            if(j===1||j===i||i===n){
                row+="* ";
            }else{
                row+="  ";
            }
        }
            console.log(row);
    

          
    }

}
hollowTriangle(5);

function hourglassPattern(n){

    for(let i = n;i>=1;i--){
   console.log(" ".repeat(n-i)+"*".repeat(i));
    }

    
    for(let i = 2;i<=n;i++){
        console.log(" ".repeat(n-i)+"*".repeat(i));
         }
}
hourglassPattern(5)

function butterfly(n){

    for(let i = 1;i<=n;i++){
        let row="* ".repeat(i)+"  ".repeat(n-i)+"* ".repeat(i);
        console.log(row);
         }
    for(let i = n-1;i>=1;i--){
   let row="* ".repeat(i)+"  ".repeat(n-i)+"* ".repeat(i);
   console.log(row);
         }
    }

    
    

butterfly(5)

function butterfly(n) {
    for (let i = 1; i <= n; i++) {
      let row = "* ".repeat(i) + "   ".repeat(n - i) + "* ".repeat(i);
      console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
      let row = "* ".repeat(i) + "   ".repeat(n - i) + "* ".repeat(i);
      console.log(row);
    }
  }
  butterfly(3);
  
function diamondNumber(n){

    for(let i=1;i<=n;i++){
        let row=" ".repeat(n-i);
        for(let j=1;j<=i;j++)
             row+=j+" ";
            for(let j=i-1;j>=1;j--)
                row+=j+" ";

        console.log(row);

        
    }
}
diamondNumber(5);