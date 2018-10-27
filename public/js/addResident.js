if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
}


function addCounter() {
    var counter = 0;
    var max = 0;
    var rootref = firebase.database().ref().child("Residents");
    var answer = 1;

    rootref.once("value", function(snapshot) {
        var end = snapshot.numChildren();
        if(end==0) {
            console.log(end);
            max++;
            addResident(max);
        } else {
            console.log(end);
            rootref.on('child_added', snap => {
                answer =  snap.child("Res_id").val();
                if(answer>max) {
                    max = answer;
                }
        
                counter++;
                
                if(counter == end) {
                    max++;
                    addResident(max);
                }
            });
        }
    
        
    })

   

}

function addResident(counter) {
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("Residents");

    //personal
    var id = counter;
    var fname = document.getElementById("First_name").value;
    var mname = document.getElementById("Middle_name").value;
    var lname = document.getElementById("Last_name").value;
    var nname = document.getElementById("Nickname").value;
    var paddress = document.getElementById("Complete_address").value;
    var house = document.getElementById("House_No").value;
    var purok = document.getElementById("Purok_No").value;
    var barangay = document.getElementById("Barangay").value;
    var status = document.querySelector('input[name="status"]:checked').value;
    var lstay = document.getElementById("Length_stay").value;
    var praddress = document.getElementById("Provincial_address").value;
    var position = document.getElementById("Position_fam").value;
    var gender = document.getElementById("Gender").value;
    var cstatus = document.querySelector('input[name="cstatus"]:checked').value;
    var citizen = document.getElementById("Citizenship").value;
    var dbirth = document.getElementById("Date_birth").value;
    var pbirth = document.getElementById("Place_birth").value;
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("Height").value;
    var home = document.getElementById("Home").value;
    var office = document.getElementById("Office").value;
    var mobile = document.getElementById("Mobile").value;
    var email = document.getElementById("Email").value;
    var vstatus = document.getElementById("Voter_status").value;
    var vid = document.getElementById("Voter_id").value;

    //family
    var f1 = document.getElementById("Family_name1").value;
    var p1 = document.getElementById("Position1").value;
    var b1 = document.getElementById("Birthday1").value;
    var c1 = document.getElementById("Civil_status1").value;
    var o1 = document.getElementById("Occupation1").value;
    var f2 = document.getElementById("Family_name2").value;
    var p2 = document.getElementById("Position2").value;
    var b2 = document.getElementById("Birthday2").value;
    var c2 = document.getElementById("Civil_status2").value;
    var o2 = document.getElementById("Occupation2").value;
    var f3 = document.getElementById("Family_name3").value;
    var p3 = document.getElementById("Position3").value;
    var b3 = document.getElementById("Birthday3").value;
    var c3 = document.getElementById("Civil_status3").value;
    var o3 = document.getElementById("Occupation3").value;
    var f4 = document.getElementById("Family_name4").value;
    var p4 = document.getElementById("Position4").value;
    var b4 = document.getElementById("Birthday4").value;
    var c4 = document.getElementById("Civil_status4").value;
    var o4 = document.getElementById("Occupation4").value;
    var f5 = document.getElementById("Family_name5").value;
    var p5 = document.getElementById("Position5").value;
    var b5 = document.getElementById("Birthday5").value;
    var c5 = document.getElementById("Civil_status5").value;
    var o5 = document.getElementById("Occupation5").value;

    //school
    var eschool = document.getElementById("School_elem").value;
    var eschooladd = document.getElementById("School_elem_add").value;
    var hschool = document.getElementById("School_high").value;
    var hschooladd = document.getElementById("School_high_add").value;
    var cschool = document.getElementById("School_col").value;
    var cschooladd = document.getElementById("School_col_add").value;


    //occupation
    var occupation = document.getElementById("Occupation").value;
    var cname = document.getElementById("Company_name").value;
    var oaddress = document.getElementById("Office_address").value;

    //vehicle
    var kind = document.getElementById("Kind").value;
    var model = document.getElementById("Model").value;
    var color = document.getElementById("Color").value;
    var pnum = document.getElementById("Plate_num").value;
    var inDate = addDate();
    //==========================================
    usersRef.child("Resident"+counter).set({
        Res_id : id,
        First_name : fname,
        Middle_name : mname,
        Last_name : lname,
        Nickname : nname,
        Complete_address : paddress,
        House_No : house,
        Purok_No : purok,
        Barangay : barangay,
        Status : status,
        Length : lstay,
        Provincial_address : praddress,
        Position : position,
        Gender : gender,
        Civil_status : cstatus,
        Citizenship : citizen,
        Date_birth : dbirth,
        Place_birth : pbirth,
        Weight : weight,
        Height : height,
        Home : home,
        Office : office,
        Mobile : mobile,
        Email : email,
        Voter_status : vstatus,
        Voter_id : vid,
        Family_name1 : f1,
        Position1 : p1,
        Birthday1 : b1,
        Civil_status1 : c1,
        Occupation1 : o1,
        Family_name2 : f2,
        Position2 : p2,
        Birthday2 : b2,
        Civil_status2 : c2,
        Occupation2 : o2,
        Family_name3 : f3,
        Position3 : p3,
        Birthday3 : b3,
        Civil_status3 : c3,
        Occupation3 : o3,
        Family_name4 : f4,
        Position4 : p4,
        Birthday4 : b4,
        Civil_status4 : c4,
        Occupation4 : o4,
        Family_name1 : f1,
        Position5 : p5,
        Birthday5 : b5,
        Civil_status5 : c5,
        Occupation5 : o5,
        School_elem : eschool,
        School_elem_add : eschooladd,
        School_high : hschool,
        School_high_add : hschooladd,
        School_col : cschool,
        School_col_add : cschooladd,
        Occupation : occupation,
        Company_name : cname,
        Office_address : oaddress,
        Kind : kind,
        Model : model,
        Color : color,
        Plate_number : pnum,
        In_date : inDate
    });

    window.location.replace("residents");
    
}

function addDate() {
    var result = new Date(Date.now());
    return result.getFullYear()+"-"+result.getMonth()+"-"+result.getDate();
}


function clearSession() {
    localStorage.removeItem("user");
    window.location.replace("login");
}




