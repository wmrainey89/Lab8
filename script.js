document.addEventListener('DOMContentLoaded', function(){
    var btn = document.createElement("button");
    var text = document.createTextNode("Add Dice");
    btn.className = "clicky";
    btn.appendChild(text);
    document.body.appendChild(btn);
    
    var bttn = document.createElement("button");
    var roll = document.createTextNode("Roll Dice");
    bttn.className = "clicky";
    bttn.id = "ladyLuck";
    bttn.appendChild(roll);
    document.body.appendChild(bttn);
    
    btn.onclick = function myDice(){
        var die = document.createElement("div");
         die.className = "rolls";
        var dieRolls = String([Math.floor(Math.random()* 6)+ 1]);
            die.innerHTML = dieRolls;
        document.body.appendChild(die);
    
    bttn.onclick = function (myDice){
         var roll = parseInt(dieRolls);
        //var dieRolls = String([Math.floor(Math.random()* 6)+ 1]);
          //  die.innerHTML = dieRolls;
        if(roll < 7){
            dieRolls = String([Math.floor(Math.random()* 6)+ 1]);
            die.innerHTML = dieRolls;
        }
        //var eat = parseInt(dieRolls);
        
        document.body.appendChild(die);
        console.log('click');  
    };
        
    
    };
    // var bttn = document.createElement("button");
    // var roll = document.createTextNode("Roll Dice");
    // bttn.className = "clicky";
    // bttn.id = "ladyLuck";
    // bttn.appendChild(roll);
    // document.body.appendChild(bttn);
   
    bttn.onclick = function myDie(){
        
    }; 
    
    
                
       
        
        
       
        
        
            
        
        
    
        
   
       
});

