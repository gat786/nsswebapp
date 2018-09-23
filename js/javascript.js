var fname=document.getElementById("fname");
var mname=document.getElementById("mname");
var lname=document.getElementById("lname");
var vnumber=document.getElementById("volunteernumber");
var coursename=document.getElementById("coursename");
var enrollyear=document.getElementById("enrollmentyear")
var male=document.getElementById("gendermale");
var female=document.getElementById("genderfemale");

function submitData(){
    var gender=""
    if (male.checked){
        gender="male"
    }
    else if (female.checked){
        gender="female"
    }
    var database=firebase.database()
    database.ref("volunteers/").push({
        "fname":fname.value,
        "mname":mname.value,
        "lname":lname.value,
        "vecNumber":vnumber.value,
        "coursename":coursename.value,
        "enrollyear":enrollyear.value,
        "gender":gender
    },function(error){
        if(error){
            window.alert(error.toString())
        }
        else{
            window.alert("Successfully written")
        }
    })      
    
}