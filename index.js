var century, year, month, dayOfMonth, dayOfWeek, day;
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("day").value);


  if(century == ""){
    alert("Input the correct century");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct day");
    return false;
  }
}
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); 
    return (Math.floor(dayOfWeek));
}

 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
}

let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function checkGender(){
  var gen = document.getElementsByName("gend");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("invalid");
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "You were born on a Sunday!" + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "You were born on a Monday!" + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "You were born on a Tuesday!" + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "You were born on a Wednesday!" + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "You were born on a Thursday!" + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "You were born on a Friday!" + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "You were born on a Saturday!" + " " + "Your akan name is " + maleNames[6];
                break;
                default:
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "You were born on a Sunday!" + "  " + "Your akan name is  Akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "You were born on a Monday!" + " " + "Your akan name is Adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "You were born on a Tuesday!" + " " + "Your akan name is Abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "You were born on a Wednesday!" + " " + "Your akan name is Akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "You were born on a Thursday!" + " " + "Your akan name is Yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "You were born on a Friday!" + " " + "Your akan name is Afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "You were born on a Saturday!" + " " + "Your akan name is Ama";
                  break;

              }
        break
        default:
        console.log("invalid");
    }
}