function getAkanName(){
var date = new Date();
var dayOfWeekNumber = date.getDay();
let maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
let femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
let nameOfDay;
let gender = $("input:radio[name=gender]:checked").value();
    if (gender==male){
    switch (dayOfWeekNumber){
        case 0:
            nameOfDay = "Sunday";
            document.getElementById("akan").textContent = "Your birthday was on a Sunday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[0];
            break;
        case 1:
            nameOfDay = "Monday";
            document.getElementById("akan").textContent = "Your birthday was on a Monday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[1];
            break;
        case 2:
            nameOfDay = "Tuesday";
            document.getElementById("akan").textContent= "Your birthday was on a Tuesday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[2];
            break;
        case 3:
            nameOfDay = "Wednesday";
            document.getElementById("akan").textContent = "Your birthday was on a Wednesday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[3];
            break;
        case 4:
            nameOfDay = "Thursday";
            document.getElementById("akan").textContent = "Your birthday was on a Thursday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[4];
            break;
        case 5:
            nameOfDay = "Friday";
            document.getElementById("akan").textContent = "Your birthday was on a Friday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[5];
            break;
        case 6:
            nameOfDay = "Saturday";
            document.getElementById("akan").textContent = "Your birthday was on a Saturday" 
            document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[6];
            break;
    }
}
    else if (gender==female){
        switch (dayOfWeekNumber){
            case 0:
                nameOfDay = "Sunday";
                document.getElementById("akan").textContent = "Your birthday was on a Sunday" 
                document.getElementsById("akan1").textContent = "Your Akan Name is :" + femaleAkanName[0];
                break;
            case 1:
                nameOfDay = "Monday";
                document.getElementById("akan").textContent = "Your birthday was on a Monday" 
                document.getElementsById("akan1").textContent= "Your Akan Name is :" + femaleAkanName[1];
                break;
            case 2:
                nameOfDay = "Tuesday";
                document.getElementById("akan").textContent = "Your birthday was on a Tuesday" 
                document.getElementsById("akan1").textContent = "Your Akan Name is :" + femaleAkanName[2];
                break;
            case 3:
                nameOfDay = "Wednesday";
                document.getElementById("akan").textContent = "Your birthday was on a Wednesday" 
                document.getElementsById("akan1").textContent= "Your Akan Name is :" + femaleAkanName[3];
                break;
            case 4:
                nameOfDay = "Thursday";
                document.getElementById("akan").textContent= "Your birthday was on a Thursday" 
                document.getElementsById("akan1").textContent = "Your Akan Name is :" + femaleAkanName[4];
                break;
            case 5:
                nameOfDay = "Friday";
                document.getElementById("akan").textContent = "Your birthday was on a Friday" 
                document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[5];
                break;
            case 6:
                nameOfDay = "Saturday";
                document.getElementById("akan").textContent = "Your birthday was on a Saturday" 
                document.getElementsById("akan1").textContent = "Your Akan Name is :" + maleAkanName[6];
                break;
    }
    }
}