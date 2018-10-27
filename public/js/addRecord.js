if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
}

function getCounter() {
    var counter = 0;
    var max = 0;
    var rootref = firebase.database().ref().child("Blotters");
    var answer = 1;

    rootref.once("value", function(snapshot) {
        var end = snapshot.numChildren();
        if(end==0) {
            max++;
            addRecord(max);
        }
    
        rootref.on('child_added', snap => {
            answer =  snap.child("Blotter_id").val();
            if(answer>max) {
                max = answer;
            }
    
            counter++;
            
            if(counter == end) {
                max++;
                addRecord(max);
            }
        });
    })

}

function addRecord(counter) {
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("Blotters");

    var id = counter;
    var status = "Ongoing";    
    var dater = document.getElementById("Date_recorded").value;
    var timer = document.getElementById("Time_recorded").value;
    var datei = document.getElementById("Date_incident").value;
    var timei = document.getElementById("Time_incident").value;
    var fname = document.getElementById("First_name").value;
    var mname = document.getElementById("Middle_name").value;
    var lname = document.getElementById("Last_name").value;
    var nname = document.getElementById("Nickname").value;
    var citizen = document.getElementById("Citizenship").value;
    var gender = document.getElementById("Gender").value;
    var cstatus = document.getElementById("Civil_status").value;
    var dbirth = document.getElementById("Date_birth").value;
    var home = document.getElementById("Home").value;
    var mobile = document.getElementById("Mobile").value;
    var pbirth = document.getElementById("Place_birth").value;
    var address = document.getElementById("Address").value;
    var hea = document.getElementById("HEA").value;
    var occupation = document.getElementById("Occupation").value;
    var id_card = document.getElementById("Id_card").value;
    var type = document.getElementById("Type_incident").value;
    var place = document.getElementById("Place_incident").value;
    var narrative = document.getElementById("narr").value;
    var validity = addDate();
    //==========================================
    usersRef.child("Blotter"+counter).set({
        Blotter_id : id,
        Status : status,
        Date_recorded : dater,
        Time_recorded : timer,
        Date_incident : datei,
        Time_incident : timei,
        First_name : fname,
        Middle_name : mname,
        Last_name : lname,
        Nickname : nname,
        Citizenship : citizen,
        Gender : gender,
        Civil_status : cstatus,
        Date_birth : dbirth,
        Home : home,
        Mobile : mobile,
        Place_birth : pbirth,
        Address : address,
        HEA : hea,
        Occupation : occupation,
        Id_card : id_card,
        Type_incident : type,
        Place_incident : place,
        Narrative : narrative,
        Validity: validity
    });

    window.location.replace("blotters");
}

function addDate() {
    var result = new Date(Date.now());
    result.setDate(result.getDate() + 15);
    return result.getFullYear()+"-"+fixMonth(result.getMonth())+"-"+fixDate(result.getDate());
    return result;
}

function fixMonth(month) {
    var temp = month+1;
    if(temp <= 9) {
        return "0"+temp;
    } else {
        return temp;
    }
}

function fixDate(date) {
    if(date <= 9) {
        return "0"+date;
    }
}

function clearSession() {
    localStorage.removeItem("user");
    window.location.replace("login");
}


