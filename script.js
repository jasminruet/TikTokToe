let currentInput=1
function addInput(id){
    let inputcat=oddEven(currentInput)
    if(inputcat==1){
        document.getElementById(id).value='X'
        document.getElementById(id).disabled = true;
        currentInput+=1
    }
    else{
        document.getElementById(id).value='0'
        document.getElementById(id).disabled = true; 
        currentInput+=1
    }
     
}

function oddEven(currentInput){
 
    if(currentInput==1){
        return 1  //1 for odd
    }
    
    else{
        if(currentInput%2==0){
            return 0//0 for even
        }
        else {
            return 1
        }
        
    }
}

function win(id,allDisabled){
  var b1,b2,b3,b4,b5,b6,b7,b8,b9=''
  var win=false;
  var winner=''
  b1=document.getElementById("one").value;
  b2=document.getElementById("two").value;
  b3=document.getElementById("three").value;
  b4=document.getElementById("four").value;
  b5=document.getElementById("five").value;
  b6=document.getElementById("six").value;
  b7=document.getElementById("seven").value;
  b8=document.getElementById("eight").value;
  b9=document.getElementById("nine").value;
  
  if((b1=='X') && (( b2=='X' && b3=='X')|| (b4=='X'&& b7=='X')||(b5=='X' && b9=='X'))){
  
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b1=='0') && (( b2=='0' && b3=='0')|| (b4=='0'&& b7=='0')||(b5=='0' && b9=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }


  
  if((b2=='X') && (( b1=='X' && b3=='X')|| (b5=='X'&& b8=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b2=='0') && (( b1=='0' && b3=='0')|| (b5=='0'&& b8=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }



  if((b3=='X') && (( b1=='X' && b2=='X')|| (b5=='X'&& b7=='X')||(b6=='X' && b9=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b3=='0') && (( b1=='0' && b2=='0')|| (b5=='0'&& b7=='0')||(b6=='0' && b9=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }


  if((b4=='X') && (( b1=='X' && b7=='X')|| (b5=='X'&& b6=='X'))){
    // alert('player X win')
    allDisabled()
  }
  if((b4=='0') && (( b1=='0' && b7=='0')|| (b5=='0'&& b6=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }



  if((b5=='X') && (( b1=='X' && b9=='X')|| (b3=='X'&& b7=='X')||(b4=='X' && b6=='X')||(b2=='X' && b8=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b5=='0') && (( b1=='0' && b9=='0')|| (b3=='0'&& b7=='0')||(b4=='0' && b6=='0')||(b2=='0' && b8=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }



  if((b6=='X') && (( b3=='X' && b9=='X')|| (b4=='X'&& b5=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b6=='0') && (( b3=='0' && b9=='0')|| (b4=='0'&& b5=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }


  if((b7=='X') && (( b1=='X' && b4=='X')|| (b5=='X'&& b3=='X')||(b8=='X' && b9=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b7=='0') && (( b1=='0' && b4=='0')|| (b5=='0'&& b3=='0')||(b8=='0' && b9=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }


  if((b8=='X') && (( b7=='X' && b9=='X')|| (b2=='X'&& b5=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b8=='0') && (( b7=='0' && b9=='0')|| (b2=='0'&& b5=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }


  if((b9=='X') && (( b1=='X' && b5=='X')|| (b7=='X'&& b8=='X')||(b3=='X' && b6=='X'))){
    win=true;
    winner='player X win'
    allDisabled()
  }
  if((b9=='0') && (( b1=='0' && b5=='0')|| (b7=='0'&& b8=='0')||(b3=='0' && b6=='0'))){
    win=true;
    winner='player 0 win'
    allDisabled()
  }

  if(win){
      document.getElementById("win-text").innerHTML=winner
      document.getElementById("abc").style.display="block";
      document.getElementById("abc").style.left="50%";
      document.getElementById("abc").style.top="50%";
  }
    
}
   
function open_base_board(){
  currentInput=1
  document.getElementById("one").disabled = false;
  document.getElementById("two").disabled = false;
  document.getElementById("three").disabled = false;
  document.getElementById("four").disabled = false;
  document.getElementById("five").disabled = false;
  document.getElementById("six").disabled = false;
  b7=document.getElementById("seven").disabled = false;
  document.getElementById("eight").disabled = false;
  document.getElementById("nine").disabled = false;


document.getElementById("one").value='';
document.getElementById("one").value='';
document.getElementById("two").value='';
document.getElementById("three").value='';
document.getElementById("four").value='';
document.getElementById("five").value='';
document.getElementById("six").value='';
document.getElementById("seven").value='';
document.getElementById("eight").value='';
document.getElementById("nine").value='';

}

function allDisabled(){
 
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    b7=document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
}



function cross(){
  document.getElementById("abc").style.display="none";
}
