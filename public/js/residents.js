var counter;
$('.group').hide();
$('#option0').show();
$('#selectMe').change(function () {
  $('.group').hide();
  $('#'+$(this).val()).show();
})

if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
} else {
    loadResidents();
}


var table = $('#example').DataTable({
    dom: 'Bfrtip',
    buttons: [
        'excelHtml5'
    ]
} );


function loadResidents() {
    
    var res;
    var i;
    var rootref = firebase.database().ref().child("Residents");
      
    

    rootref.on('child_added', snap => {
        
        var btn = "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.profile' onclick='viewResident("+snap.child("Res_id").val()+")'><i class='fa fa-eye'></i></button><button type='button' class='btn btn-danger' data-toggle='modal' data-target='.delete' onclick='deleteResident(" +  snap.child("Res_id").val() + ")'><i class='fa fa-trash-o'></i></button><button type='button' class='btn btn-success' data-toggle='modal' data-target='.certs' onclick='setCookie("+snap.child("Res_id").val()+")'><i class='fa fa-vcard'></i></button>";
        var name = snap.child("First_name").val() + " " + snap.child("Middle_name").val() + " " + snap.child("Last_name").val();
        var nname = snap.child("Nickname").val();
        var gender = snap.child("Gender").val();
        var dbirth = snap.child("Date_birth").val();
        var mobile = snap.child("Mobile").val();
        
        table.row.add([name,nname,gender,dbirth,mobile,btn]).draw();
        
        counter++;
    });

}

function viewResident(id) {
    
    var viewRef = firebase.database().ref().child("Residents");

    viewRef.child("Resident"+id)
    .once('value')
    .then(function(snapshot) {
      document.getElementById("Name").innerHTML = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " + snapshot.child("Last_name").val();

      document.getElementById("Nickname").innerHTML = snapshot.child("Nickname").val();

      document.getElementById("House").innerHTML = snapshot.child("House_No").val();

      document.getElementById("Purok").innerHTML = snapshot.child("Purok_No").val();

      document.getElementById("Barangay").innerHTML = snapshot.child("Barangay").val();

      document.getElementById("Status").innerHTML = snapshot.child("Status").val();

      document.getElementById("Length").innerHTML = snapshot.child("Length").val();

      document.getElementById("PAddress").innerHTML = snapshot.child("Complete_address").val();
      
      document.getElementById("PrAddress").innerHTML = snapshot.child("Provincial_address").val();

      document.getElementById("Position").innerHTML = snapshot.child("Position").val();

      document.getElementById("Gender").innerHTML = snapshot.child("Gender").val();

      document.getElementById("Civil_status").innerHTML = snapshot.child("Civil_status").val();

      document.getElementById("Citizenship").innerHTML = snapshot.child("Citizenship").val();

      document.getElementById("Date_birth").innerHTML = snapshot.child("Date_birth").val();

      document.getElementById("Place_birth").innerHTML = snapshot.child("Place_birth").val();

      document.getElementById("Height").innerHTML = snapshot.child("Height").val();

      document.getElementById("Weight").innerHTML = snapshot.child("Weight").val();

      document.getElementById("Home").innerHTML = snapshot.child("Home").val();

      document.getElementById("Office").innerHTML = snapshot.child("Office").val();

      document.getElementById("Mobile").innerHTML = snapshot.child("Mobile").val();

      document.getElementById("Email").innerHTML = snapshot.child("Email").val();

      document.getElementById("Voter_status").innerHTML = snapshot.child("Voter_status").val();

      document.getElementById("Voter_id").innerHTML = snapshot.child("Voter_id").val();

      //family
      document.getElementById("Family_name1").innerHTML = snapshot.child("Family_name1").val();

      document.getElementById("Position1").innerHTML = snapshot.child("Position1").val();

      document.getElementById("Birthday1").innerHTML = snapshot.child("Birthday1").val();

      document.getElementById("Civil_status1").innerHTML = snapshot.child("Civil_status1").val();

      document.getElementById("Occupation1").innerHTML = snapshot.child("Occupation1").val();

      document.getElementById("Family_name2").innerHTML = snapshot.child("Family_name2").val();

      document.getElementById("Position2").innerHTML = snapshot.child("Position2").val();

      document.getElementById("Birthday2").innerHTML = snapshot.child("Birthday2").val();

      document.getElementById("Civil_status2").innerHTML = snapshot.child("Civil_status2").val();

      document.getElementById("Occupation2").innerHTML = snapshot.child("Occupation2").val();

      document.getElementById("Family_name3").innerHTML = snapshot.child("Family_name3").val();

      document.getElementById("Position3").innerHTML = snapshot.child("Position3").val();

      document.getElementById("Birthday3").innerHTML = snapshot.child("Birthday3").val();

      document.getElementById("Civil_status3").innerHTML = snapshot.child("Civil_status3").val();

      document.getElementById("Occupation3").innerHTML = snapshot.child("Occupation3").val();

      document.getElementById("Family_name4").innerHTML = snapshot.child("Family_name4").val();

      document.getElementById("Position4").innerHTML = snapshot.child("Position4").val();

      document.getElementById("Birthday4").innerHTML = snapshot.child("Birthday4").val();

      document.getElementById("Civil_status4").innerHTML = snapshot.child("Civil_status4").val();

      document.getElementById("Occupation4").innerHTML = snapshot.child("Occupation4").val();

      document.getElementById("Family_name5").innerHTML = snapshot.child("Family_name5").val();

      document.getElementById("Position5").innerHTML = snapshot.child("Position5").val();

      document.getElementById("Birthday5").innerHTML = snapshot.child("Birthday5").val();

      document.getElementById("Civil_status5").innerHTML = snapshot.child("Civil_status5").val();

      document.getElementById("Occupation5").innerHTML = snapshot.child("Occupation5").val();

      //school
      document.getElementById("School_elem").innerHTML = snapshot.child("School_elem").val();

      document.getElementById("School_elem_add").innerHTML = snapshot.child("School_elem_add").val();

      document.getElementById("School_high").innerHTML = snapshot.child("School_high").val();

      document.getElementById("School_high_add").innerHTML = snapshot.child("School_high_add").val();

      document.getElementById("School_col").innerHTML = snapshot.child("School_col").val();

      document.getElementById("School_col_add").innerHTML = snapshot.child("School_col_add").val();

      document.getElementById("Occupation").innerHTML = snapshot.child("Occupation").val();

      document.getElementById("Company_name").innerHTML = snapshot.child("Company_name").val();

      document.getElementById("Office_address").innerHTML = snapshot.child("Office_address").val();

      document.getElementById("Kind").innerHTML = snapshot.child("Kind").val();

      document.getElementById("Model").innerHTML = snapshot.child("Model").val();

      document.getElementById("Color").innerHTML = snapshot.child("Color").val();

      document.getElementById("Plate_number").innerHTML = snapshot.child("Plate_number").val();

      $('#save_resident').replaceWith($('#save_resident').clone());
      var btn1 = document.getElementById("save_resident");
      btn1.addEventListener('click', function(){
          saveResident(snapshot.child("Res_id").val()) 
      });
    })

    $('#edit_resident').replaceWith($('#edit_resident').clone());
    var btn = document.getElementById("edit_resident");
    btn.addEventListener('click', function(){
        editResident(id) 
    });

    

    $('strong').show();
    $('input').hide();
    $('#edit_resident').show();
    $('#save_resident').hide();
}

function saveResident(id) {
    console.log(id);
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("Residents");

    //personal
    var fname = document.getElementById("Edit_first_name").value;
    var mname = document.getElementById("Edit_middle_name").value;
    var lname = document.getElementById("Edit_last_name").value;
    var nname = document.getElementById("Edit_nickname").value;
    var paddress = document.getElementById("Edit_complete_address").value;
    var house = document.getElementById("Edit_house_No").value;
    var purok = document.getElementById("Edit_purok_No").value;
    var barangay = document.getElementById("Edit_barangay").value;
    var status = document.getElementById("Edit_status").value;
    var lstay = document.getElementById("Edit_length_stay").value;
    var praddress = document.getElementById("Edit_provincial_address").value;
    var position = document.getElementById("Edit_position_fam").value;
    var gender = document.getElementById("Edit_gender").value;
    var cstatus = document.getElementById("Edit_civil_status").value;
    var citizen = document.getElementById("Edit_citizenship").value;
    var dbirth = document.getElementById("Edit_date_birth").value;
    var pbirth = document.getElementById("Edit_place_birth").value;
    var weight = document.getElementById("Edit_weight").value;
    var height = document.getElementById("Edit_height").value;
    var home = document.getElementById("Edit_home").value;
    var office = document.getElementById("Edit_office").value;
    var mobile = document.getElementById("Edit_mobile").value;
    var email = document.getElementById("Edit_email").value;
    var vstatus = document.getElementById("Edit_voter_status").value;
    var vid = document.getElementById("Edit_voter_id").value;

    //family
    var f1 = document.getElementById("Edit_family_name1").value;
    var p1 = document.getElementById("Edit_position1").value;
    var b1 = document.getElementById("Edit_birthday1").value;
    var c1 = document.getElementById("Edit_civil_status1").value;
    var o1 = document.getElementById("Edit_occupation1").value;
    var f2 = document.getElementById("Edit_family_name2").value;
    var p2 = document.getElementById("Edit_position2").value;
    var b2 = document.getElementById("Edit_birthday2").value;
    var c2 = document.getElementById("Edit_civil_status2").value;
    var o2 = document.getElementById("Edit_occupation2").value;
    var f3 = document.getElementById("Edit_family_name3").value;
    var p3 = document.getElementById("Edit_position3").value;
    var b3 = document.getElementById("Edit_birthday3").value;
    var c3 = document.getElementById("Edit_civil_status3").value;
    var o3 = document.getElementById("Edit_occupation3").value;
    var f4 = document.getElementById("Edit_family_name4").value;
    var p4 = document.getElementById("Edit_position4").value;
    var b4 = document.getElementById("Edit_birthday4").value;
    var c4 = document.getElementById("Edit_civil_status4").value;
    var o4 = document.getElementById("Edit_occupation4").value;
    var f5 = document.getElementById("Edit_family_name5").value;
    var p5 = document.getElementById("Edit_position5").value;
    var b5 = document.getElementById("Edit_birthday5").value;
    var c5 = document.getElementById("Edit_civil_status5").value;
    var o5 = document.getElementById("Edit_occupation5").value;

    //school
    var eschool = document.getElementById("Edit_school_elem").value;
    var eschooladd = document.getElementById("Edit_school_elem_add").value;
    var hschool = document.getElementById("Edit_school_high").value;
    var hschooladd = document.getElementById("Edit_school_high_add").value;
    var cschool = document.getElementById("Edit_school_col").value;
    var cschooladd = document.getElementById("Edit_school_col_add").value;


    //occupation
    var occupation = document.getElementById("Edit_occupation").value;
    var cname = document.getElementById("Edit_company_name").value;
    var oaddress = document.getElementById("Edit_office_address").value;

    //vehicle
    var kind = document.getElementById("Edit_kind").value;
    var model = document.getElementById("Edit_model").value;
    var color = document.getElementById("Edit_color").value;
    var pnum = document.getElementById("Edit_plate_num").value;

    //==========================================
    usersRef.child("Resident"+id).set({
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
        Plate_number : pnum
    });

    viewResident(id);
    table.clear().draw();
    loadResidents();
}

function editResident(id) {
    console.log(id);

    $('input').show();
    $('strong').hide();
    $('#edit_resident').hide();
    $('#save_resident').show();
    var editRef = firebase.database().ref().child("Residents");
    
    editRef.child("Resident"+id)
        .once('value')
        .then(function(snapshot) {
          document.getElementById("Edit_first_name").value = snapshot.child("First_name").val();

          document.getElementById("Edit_middle_name").value = snapshot.child("Middle_name").val();

          document.getElementById("Edit_last_name").value = snapshot.child("Last_name").val();
    
          document.getElementById("Edit_nickname").value = snapshot.child("Nickname").val();
    
          document.getElementById("Edit_house_No").value = snapshot.child("House_No").val();
    
          document.getElementById("Edit_purok_No").value = snapshot.child("Purok_No").val();
    
          document.getElementById("Edit_barangay").value = snapshot.child("Barangay").val();
    
          document.getElementById("Edit_status").value = snapshot.child("Status").val();
    
          document.getElementById("Edit_length_stay").value = snapshot.child("Length").val();
    
          document.getElementById("Edit_complete_address").value = snapshot.child("Complete_address").val();
          
          document.getElementById("Edit_provincial_address").value = snapshot.child("Provincial_address").val();
    
          document.getElementById("Edit_position_fam").value = snapshot.child("Position").val();
    
          document.getElementById("Edit_gender").value = snapshot.child("Gender").val();
    
          document.getElementById("Edit_civil_status").value = snapshot.child("Civil_status").val();
    
          document.getElementById("Edit_citizenship").value = snapshot.child("Citizenship").val();
    
          document.getElementById("Edit_date_birth").value = snapshot.child("Date_birth").val();
    
          document.getElementById("Edit_place_birth").value = snapshot.child("Place_birth").val();
    
          document.getElementById("Edit_height").value = snapshot.child("Height").val();
    
          document.getElementById("Edit_weight").value = snapshot.child("Weight").val();
    
          document.getElementById("Edit_home").value = snapshot.child("Home").val();
    
          document.getElementById("Edit_office").value = snapshot.child("Office").val();
    
          document.getElementById("Edit_mobile").value = snapshot.child("Mobile").val();
    
          document.getElementById("Edit_email").value = snapshot.child("Email").val();
    
          document.getElementById("Edit_voter_status").value = snapshot.child("Voter_status").val();
    
          document.getElementById("Edit_voter_id").value = snapshot.child("Voter_id").val();
    
          //family
          document.getElementById("Edit_family_name1").value = snapshot.child("Family_name1").val();
    
          document.getElementById("Edit_position1").value = snapshot.child("Position1").val();
    
          document.getElementById("Edit_birthday1").value = snapshot.child("Birthday1").val();
    
          document.getElementById("Edit_civil_status1").value = snapshot.child("Civil_status1").val();
    
          document.getElementById("Edit_occupation1").value = snapshot.child("Occupation1").val();
    
          document.getElementById("Edit_family_name2").value = snapshot.child("Family_name2").val();
    
          document.getElementById("Edit_position2").value = snapshot.child("Position2").val();
    
          document.getElementById("Edit_birthday2").value = snapshot.child("Birthday2").val();
    
          document.getElementById("Edit_civil_status2").value = snapshot.child("Civil_status2").val();
    
          document.getElementById("Edit_occupation2").value = snapshot.child("Occupation2").val();
    
          document.getElementById("Edit_family_name3").value = snapshot.child("Family_name3").val();
    
          document.getElementById("Edit_position3").value = snapshot.child("Position3").val();
    
          document.getElementById("Edit_birthday3").value = snapshot.child("Birthday3").val();
    
          document.getElementById("Edit_civil_status3").value = snapshot.child("Civil_status3").val();
    
          document.getElementById("Edit_occupation3").value = snapshot.child("Occupation3").val();
    
          document.getElementById("Edit_family_name4").value = snapshot.child("Family_name4").val();
    
          document.getElementById("Edit_position4").value = snapshot.child("Position4").val();
    
          document.getElementById("Edit_birthday4").value = snapshot.child("Birthday4").val();
    
          document.getElementById("Edit_civil_status4").value = snapshot.child("Civil_status4").val();
    
          document.getElementById("Edit_occupation4").value = snapshot.child("Occupation4").val();
    
          document.getElementById("Edit_family_name5").value = snapshot.child("Family_name5").val();
    
          document.getElementById("Edit_position5").value = snapshot.child("Position5").val();
    
          document.getElementById("Edit_birthday5").value = snapshot.child("Birthday5").val();
    
          document.getElementById("Edit_civil_status5").value = snapshot.child("Civil_status5").val();
    
          document.getElementById("Edit_occupation5").value = snapshot.child("Occupation5").val();
    
          //school
          document.getElementById("Edit_school_elem").value = snapshot.child("School_elem").val();
    
          document.getElementById("Edit_school_elem_add").value = snapshot.child("School_elem_add").val();
    
          document.getElementById("Edit_school_high").value = snapshot.child("School_high").val();
    
          document.getElementById("Edit_school_high_add").value = snapshot.child("School_high_add").val();
    
          document.getElementById("Edit_school_col").value = snapshot.child("School_col").val();
    
          document.getElementById("Edit_school_col_add").value = snapshot.child("School_col_add").val();
    
          document.getElementById("Edit_occupation").value = snapshot.child("Occupation").val();
    
          document.getElementById("Edit_company_name").value = snapshot.child("Company_name").val();
    
          document.getElementById("Edit_office_address").value = snapshot.child("Office_address").val();
    
          document.getElementById("Edit_kind").value = snapshot.child("Kind").val();
    
          document.getElementById("Edit_model").value = snapshot.child("Model").val();
    
          document.getElementById("Edit_color").value = snapshot.child("Color").val();
    
          document.getElementById("Edit_plate_num").value = snapshot.child("Plate_number").val();
        })
}

function deleteResident(id) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
            
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            var deleteRef = firebase.database().ref().child("Residents");
            deleteRef.child("Resident"+id).remove();
            var table = $('#example').DataTable();
            table.clear().draw();
            loadResidents();
          })
          
      
          
        }
        
      })
      
}

function setCookie(id) {
    $('input').show();
    $("#selectMe").attr("onchange","changeValue("+id+")");
    console.log(id);
    // document.cookie = "user_id="+id;
    
    document.getElementById("Bc_name").value = "";
    document.getElementById("Bc_barangay").value = "";
    document.getElementById("selectMe").value = "option0";
    $('.group').hide();
    $('#option0').show();
}

function changeValue(id) {
    
    var viewRef = firebase.database().ref().child("Residents");
    viewRef.child("Resident"+id)
    .once('value')
    .then(function(snapshot) {
      

      if(document.getElementById("selectMe").value == "option1") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var barangay = snapshot.child("Barangay").val();
        
        document.getElementById("Bc_name").value = name;
        document.getElementById("Bc_barangay").value = barangay;

        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var purpose = document.getElementById("Bc_purpose").value
            var chairman = document.getElementById("Bc_chairman").value
            var councilor1 = document.getElementById("Bc_councilor1").value
            var councilor2 = document.getElementById("Bc_councilor2").value
            var councilor3 = document.getElementById("Bc_councilor3").value
            var councilor4 = document.getElementById("Bc_councilor4").value
            var councilor5 = document.getElementById("Bc_councilor5").value
            var councilor6 = document.getElementById("Bc_councilor6").value
            var councilor7 = document.getElementById("Bc_councilor7").value
            var treasurer = document.getElementById("Bc_treasurer").value
            var secretary = document.getElementById("Bc_secretary").value
            var certno = document.getElementById("Bc_certno").value
            var ctrlno = document.getElementById("Bc_ctrlno").value
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(12);
                pdf.setFont("times");
                pdf.text(141, 93.5, name);
                pdf.text(150, 100, barangay);
                pdf.text(98, 136.5, purpose);
                pdf.text(127, 161, returnDate(day));
                pdf.text(156, 161, returnMonth(month) + " " + year.toString());
                pdf.text(108, 167, barangay);
                pdf.text(57, 224, certno);
                pdf.text(57, 229.5, returnDate(day) + " of " + returnMonth(month) + " " +  + year.toString());    
                pdf.text(56, 249.5, ctrlno);

                pdf.text(28, 86.5, chairman);
                pdf.text(28, 108.5, councilor1);
                pdf.text(28, 115, councilor2);
                pdf.text(28, 121.5, councilor3);
                pdf.text(28, 127.5, councilor4);
                pdf.text(28, 133.5, councilor5);
                pdf.text(28, 140, councilor6);
                pdf.text(28, 146, councilor7);
                pdf.text(28, 158, treasurer);
                pdf.text(28, 173.5, secretary);
                pdf.save("Barangay_Clearance_"+ snapshot.child("Last_name").val() +"_"+  snapshot.child("First_name").val() +".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_1.jpg";  
            
        });
      } else if(document.getElementById("selectMe").value == "option2") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var purok = snapshot.child("Purok_No").val();
        var barangay = snapshot.child("Barangay").val();
        
        document.getElementById("Bu_name").value = name;
        document.getElementById("Bu_purok_no").value = purok;
        document.getElementById("Bu_barangay").value = barangay;

        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var business = document.getElementById("Bu_business").value
            var lot = document.getElementById("Bu_lot").value
            var tdno = document.getElementById("Bu_tdno").value
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(13);
                pdf.setFont("times");
                pdf.text(80, 97.5, name);
                pdf.text(108, 107, business);
                pdf.text(177, 107, purok.toString());
                pdf.text(47, 116, barangay);
                pdf.text(30, 125, lot);
                pdf.text(138, 125, tdno.toString());                
                pdf.text(66, 160, returnDate(day));
                pdf.text(105, 160, returnMonth(month) + " " + year.toString());
                pdf.text(47, 168.5, snapshot.child("Last_name").val());               
                pdf.text(135, 235, 'Barangay' + barangay);                
                pdf.save("Business_Clearance_"+ snapshot.child("Last_name").val() +"_"+  snapshot.child("First_name").val() +".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_2.jpg";  // some random imgur image
            
            
        });
      } else if(document.getElementById("selectMe").value == "option3") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var barangay = snapshot.child("Barangay").val();
        var sname = snapshot.child("First_name").val() +  " " +snapshot.child("Last_name").val();
        
        document.getElementById("In_name").value = name;
        document.getElementById("In_barangay").value = barangay;

        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(13);
                pdf.setFont("times");
                pdf.text(89, 120, name);
                pdf.text(70, 129, barangay);
                pdf.text(92, 142, sname);
                pdf.text(62, 185.5, returnDate(day));
                pdf.text(92, 185.5, returnMonth(month) + " " + year.toString());
                pdf.save("Indigency_"+ snapshot.child("Last_name").val() +"_"+  snapshot.child("First_name").val() +".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_3.jpg";  // some random imgur image
            
            
        });
      } else if(document.getElementById("selectMe").value == "option4") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var barangay = snapshot.child("Barangay").val();
        var purok = snapshot.child("Purok_No").val();
        var age = getAge(snapshot.child("Date_birth").val());

        var sname = snapshot.child("First_name").val() +  " " +snapshot.child("Last_name").val();
        
        document.getElementById("Un_name").value = name;
        document.getElementById("Un_barangay").value = barangay;
        document.getElementById("Un_purok_no").value = purok;
        document.getElementById("Un_age").value = age;

        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(14);
                pdf.setFont("times");
                pdf.text(85, 118, name);
                pdf.text(159, 118, age.toString());
                pdf.text(150, 127, purok.toString());
                pdf.text(30, 136, barangay);
                pdf.text(92, 158, sname);
                pdf.text(44, 189, snapshot.child("Last_name").val());
                pdf.text(62, 210.5, returnDate(day));
                pdf.text(92, 210.5, returnMonth(month) + " " + year.toString());
                pdf.save("Unemployment_"+ snapshot.child("Last_name").val() +"_"+  snapshot.child("First_name").val() +".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_4.jpg";  // some random imgur image
            
            
        });
      } else if(document.getElementById("selectMe").value == "option5") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var barangay = snapshot.child("Barangay").val();
        var purok = snapshot.child("Purok_No").val();
        var age = getAge(snapshot.child("Date_birth").val());

        var sname = snapshot.child("First_name").val() +  " " +snapshot.child("Last_name").val();
        
        document.getElementById("Sc_name").value = name;
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var namebk = document.getElementById("Sc_namebk").value
            var agebk = document.getElementById("Sc_agebk").value
            var purokbk = document.getElementById("Sc_purokbk").value
            var barangaybk = document.getElementById("Sc_barangaybk").value
            var relationship = document.getElementById("Sc_relationship").value
            var startdate = document.getElementById("Sc_date_started").value
            
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(14);
                pdf.setFont("times");
                pdf.text(85, 120.5, namebk);
                pdf.text(159, 120.5, agebk.toString());
                pdf.text(150, 129.5, purok.toString());
                pdf.text(30, 138.5, barangaybk);
                pdf.text(35, 148, startdate);
                pdf.text(98, 160.5, name);
                pdf.text(28, 169.5, relationship);
                pdf.text(128, 182, sname);                
                pdf.text(62, 204, returnDate(day));
                pdf.text(92, 204, returnMonth(month) + " " + year.toString());
                pdf.save("Scholarship_"+ snapshot.child("Last_name").val() +"_"+  snapshot.child("First_name").val() +".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_5.jpg";  // some random imgur image
            
            
        });  
      } else if(document.getElementById("selectMe").value == "option6") {
        var name = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " +snapshot.child("Last_name").val();
        var barangay = snapshot.child("Barangay").val();
        var sname = snapshot.child("First_name").val() +  " " +snapshot.child("Last_name").val();
        var purok = snapshot.child("Purok_No").val();

        document.getElementById("Sp_name").value = name;
        document.getElementById("Sp_purok_no").value = purok;
        document.getElementById("Sp_barangay").value = barangay;
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var since = document.getElementById("Sp_year").value
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(13);
                pdf.setFont("times");
                pdf.text(88, 126, name);
                pdf.text(66, 135, purok.toString());
                pdf.text(102, 135, barangay);
                pdf.text(155, 157, since);
                pdf.text(148, 179, snapshot.child("Last_name").val());
                pdf.text(62, 200.5, returnDate(day));
                pdf.text(92, 200.5, returnMonth(month) + " " + year.toString());
                pdf.save("Single_Parent_"+snapshot.child("Last_name").val()+"_"+snapshot.child("First_name").val()+".pdf");
            };
            
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "cert_6.jpg";  // some random imgur image
            
            
        });
      }
    });
}

function returnDate(num) {
    switch(num%10) {
        case 1:
            return num+"st";
            break;
        case 2:
            return num+"nd";
            break;
        default:
            return num+"th";
    }
}

function returnMonth(num) {
    switch(num) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        
    }
}

function getAge(birthday) {
    var today = new Date();
    var bday = new Date(birthday);
    var thisYear = 0;
    if (today.getMonth() < bday.getMonth()) {
        thisYear = 1;
    } else if ((today.getMonth() == bday.getMonth()) && today.getDate() < bday.getDate()) {
        thisYear = 1;
    }
    var age = today.getFullYear() - bday.getFullYear() - thisYear;
    return age;
}

function clearSession() {
    localStorage.removeItem("user");
    window.location.replace("login");
}


