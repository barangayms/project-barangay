var counter;
if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
} else {
    loadBlotters();
}

function loadBlotters() {
    var res;
    var i;
    var rootref = firebase.database().ref().child("Blotters");
      
    var table = $('#example').DataTable();

    rootref.once("value", function(snapshot) {
        var end = snapshot.numChildren();
        rootref.on('child_added', snap => {
            checkDate(snap.child("Blotter_id").val(),snap.child("Validity").val());
            var btn = "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.profile' onclick='viewBlotter("+snap.child("Blotter_id").val()+")'><i class='fa fa-eye'></i></button><button type='button' class='btn btn-danger' data-toggle='modal' data-target='.delete' onclick='deleteBlotter(" +  snap.child("Blotter_id").val() + ")'><i class='fa fa-trash-o'></i></button><button type='button' class='btn btn-success' onclick='closeBlotter(" +  snap.child("Blotter_id").val() + ")'><i class='fa fa-close'></i></button>";
            var name = snap.child("First_name").val() + " " + snap.child("Middle_name").val() + " " + snap.child("Last_name").val();
            var type = snap.child("Type_incident").val();
            var date = snap.child("Date_recorded").val();
            var time = snap.child("Time_recorded").val();
            var status = snap.child("Status").val();
            
            table.row.add([type,name,date,time,status,btn]).draw();
            
            counter++;
            if(counter == end) {
                checkDate() = null;
            }
        });
    });
}

function checkDate(id,date) {
    var valid = new Date(date);
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("Blotters");
    console.log(valid.valueOf());
    if(valid.valueOf() <= Date.now().valueOf()) {

        usersRef.child("Blotter"+id).update({
            Status: "Expired"
        });
    }

}

function viewBlotter(id) {
    var viewRef = firebase.database().ref().child("Blotters");

    viewRef.child("Blotter"+id)
    .once('value')
    .then(function(snapshot) {
      document.getElementById("Date_recorded").innerHTML = snapshot.child("Date_recorded").val();

      document.getElementById("Time_recorded").innerHTML = snapshot.child("Time_recorded").val();

      document.getElementById("Date_incident").innerHTML = snapshot.child("Date_incident").val();
      
      document.getElementById("Time_incident").innerHTML = snapshot.child("Time_incident").val();

      document.getElementById("Name").innerHTML = snapshot.child("First_name").val() + " " + snapshot.child("Middle_name").val() + " " + snapshot.child("Last_name").val();

      document.getElementById("Nickname").innerHTML = snapshot.child("Nickname").val();

      document.getElementById("Citizenship").innerHTML = snapshot.child("Citizenship").val();

      document.getElementById("Gender").innerHTML = snapshot.child("Gender").val();

      document.getElementById("Civil_status").innerHTML = snapshot.child("Civil_status").val();

      document.getElementById("Date_birth").innerHTML = snapshot.child("Date_birth").val();

      document.getElementById("Home").innerHTML = snapshot.child("Home").val();

      document.getElementById("Mobile").innerHTML = snapshot.child("Mobile").val();      

      document.getElementById("Place_birth").innerHTML = snapshot.child("Place_birth").val();

      document.getElementById("Address").innerHTML = snapshot.child("Address").val();

      document.getElementById("HEA").innerHTML = snapshot.child("HEA").val();

      document.getElementById("Occupation").innerHTML = snapshot.child("Occupation").val();

      document.getElementById("Id_card").innerHTML = snapshot.child("Id_card").val();

      document.getElementById("Type_incident").innerHTML = snapshot.child("Type_incident").val();

      document.getElementById("Place_incident").innerHTML = snapshot.child("Place_incident").val();

      document.getElementById("Narrative").innerHTML = snapshot.child("Narrative").val();

      $('#save_blotter').replaceWith($('#save_blotter').clone());
      var btn1 = document.getElementById("save_blotter");
      btn1.addEventListener('click', function(){
          saveBlotter(snapshot.child("Blotter_id").val()) 
      });
    })

    $('#edit_blotter').replaceWith($('#edit_blotter').clone());
    var btn = document.getElementById("edit_blotter");
    btn.addEventListener('click', function(){
        editBlotter(id) 
    });

    $('strong').show();
    $('input').hide();
    $('textarea').hide();
    $('#edit_blotter').show();
    $('#save_blotter').hide();
}

function saveBlotter(id) {
    var firebaseRef = firebase.database().ref();
    var usersRef = firebaseRef.child("Blotters");

    var dater = document.getElementById("Edit_date_recorded").value;
    var timer = document.getElementById("Edit_time_recorded").value;
    var datei = document.getElementById("Edit_date_incident").value;
    var timei = document.getElementById("Edit_time_incident").value;
    var fname = document.getElementById("Edit_first_name").value;
    var mname = document.getElementById("Edit_middle_name").value;
    var lname = document.getElementById("Edit_last_name").value;
    var nname = document.getElementById("Edit_nickname").value;
    var citizen = document.getElementById("Edit_citizenship").value;
    var gender = document.getElementById("Edit_gender").value;
    var cstatus = document.getElementById("Edit_civil_status").value;
    var dbirth = document.getElementById("Edit_date_birth").value;
    var home = document.getElementById("Edit_home").value;
    var mobile = document.getElementById("Edit_mobile").value;
    var pbirth = document.getElementById("Edit_place_birth").value;
    var address = document.getElementById("Edit_address").value;
    var hea = document.getElementById("Edit_HEA").value;
    var occupation = document.getElementById("Edit_occupation").value;
    var id_card = document.getElementById("Edit_id_card").value;
    var type = document.getElementById("Edit_type_incident").value;
    var place = document.getElementById("Edit_place_incident").value;
    var narrative = document.getElementById("Edit_narr").value;
    //==========================================
    usersRef.child("Blotter"+id).update({
        Blotter_id : id,
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
        Narrative : narrative
    });

    viewBlotter(id);
    var table = $('#example').DataTable();
    table.clear().draw();
    loadBlotters();
}

function editBlotter(id) {
    $('input').show();
    $('textarea').show();
    $('strong').hide();
    $('#edit_blotter').hide();
    $('#save_blotter').show();

    var viewRef = firebase.database().ref().child("Blotters");

    viewRef.child("Blotter"+id)
    .once('value')
    .then(function(snapshot) {
      document.getElementById("Edit_date_recorded").value = snapshot.child("Date_recorded").val();

      document.getElementById("Edit_time_recorded").value = snapshot.child("Time_recorded").val();

      document.getElementById("Edit_date_incident").value = snapshot.child("Date_incident").val();
      
      document.getElementById("Edit_time_incident").value = snapshot.child("Time_incident").val();

      document.getElementById("Edit_first_name").value = snapshot.child("First_name").val();

      document.getElementById("Edit_middle_name").value = snapshot.child("Middle_name").val();

      document.getElementById("Edit_last_name").value = snapshot.child("Last_name").val();

      document.getElementById("Edit_nickname").value = snapshot.child("Nickname").val();

      document.getElementById("Edit_citizenship").value = snapshot.child("Citizenship").val();

      document.getElementById("Edit_gender").value = snapshot.child("Gender").val();

      document.getElementById("Edit_civil_status").value = snapshot.child("Civil_status").val();

      document.getElementById("Edit_date_birth").value = snapshot.child("Date_birth").val();

      document.getElementById("Edit_home").value = snapshot.child("Home").val();

      document.getElementById("Edit_mobile").value = snapshot.child("Mobile").val();      

      document.getElementById("Edit_place_birth").value = snapshot.child("Place_birth").val();

      document.getElementById("Edit_address").value = snapshot.child("Address").val();

      document.getElementById("Edit_HEA").value = snapshot.child("HEA").val();

      document.getElementById("Edit_occupation").value = snapshot.child("Occupation").val();

      document.getElementById("Edit_id_card").value = snapshot.child("Id_card").val();

      document.getElementById("Edit_type_incident").value = snapshot.child("Type_incident").val();

      document.getElementById("Edit_place_incident").value = snapshot.child("Place_incident").val();

      document.getElementById("Edit_narr").value = snapshot.child("Narrative").val();
    });
}

function deleteBlotter(id) {
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
            var deleteRef = firebase.database().ref().child("Blotters");
            deleteRef.child("Blotter"+id).remove();

            var table = $('#example').DataTable();
            table.clear().draw();
            loadBlotters();
          })
          
      
          
        }
        
      })
    
}

function closeBlotter(id) {
    var blotterRef = firebase.database().ref().child("Blotters");

    var status = "Closed"

    //==========================================
    blotterRef.child("Blotter"+id).update({
        Status : status
            
        
    });

    var table = $('#example').DataTable();
    table.clear().draw();
    loadBlotters();
}

function clearSession() {
    localStorage.removeItem("user");
    window.location.replace("login");
}


