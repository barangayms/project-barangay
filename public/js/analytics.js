var male = 0;
var female = 0;
var t = 0;
var c = 0;
var y = 0;
var a = 0;
var s = 0;
var vyes = 0;
var vno = 0;


if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
} else {
    getCounter();
    getCounter1();
}



function loadResidents(start) {
    var counter = 0;
    var months = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
    var rootref = firebase.database().ref().child("Residents");
    rootref.on('child_added', snap => {
        
        var x = new Date(snap.child("In_date").val());
        var temp = x.getMonth();
        months[temp] = months[temp] + 1;

        counter++;
        if(counter ==  start) {
            new Chart(document.getElementById("chart-month"), {
                type: 'line',
                data: {
                    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                    datasets: [{
                    label: 'Population Rate '+ new Date(Date.now()).getFullYear(),
                    data: months,
                    borderColor: '#20325a',
                    borderWidth: 4
                    }]
                }, options : {
                    scales: {
                      yAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Population Increase',
                        },
                        ticks: {
                            min: 0,
                            max: 5,
                            stepSize: 1
                        }
                      }],
                      xAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        }
                      }],
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                  }
            })
        }
        
    });

    

}


function loadResidentsGender(start) {
    var counter = 0;
    var rootref = firebase.database().ref().child("Residents");
    rootref.on('child_added', snap => {
        
        if(snap.child("Gender").val() == "Female") {
            female++;
        } else if(snap.child("Gender").val() == "Male") {
            male++;
        }

        counter++;

        if(counter ==  start) {
            
            new Chart(document.getElementById("doughnut-chart-gender"), {
                type: 'doughnut',
                data: {
                  labels: ["Male", "Female"],
                  datasets: [
                    {
                      label: "Population (Gender)",
                      backgroundColor: ["#3e95cd","#e8c3b9"],
                      data: [male,female]
                    }
                  ]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Population By Gender'
                  }
                }
            });
        }
        
    });

    

}

function loadResidentsAge(start) {
    var rootref = firebase.database().ref().child("Residents");
    var counter = 0;
    
    rootref.on('child_added', snap => {
        var birthday = snap.child("Date_birth").val();
        var age = getAge(birthday);

        if(age >= 0 && age<=4) {
            t++;
        } else if(age >= 5 && age<=12) {
            c++;
        } else if(age >= 13 && age<=25) {
            y++;
        } else if(age >= 26 && age<= 59) {
            a++;
        } else if(age >= 60) {
            s++;
        }

        counter++;

        if(counter ==  start) {
            new Chart(document.getElementById("doughnut-chart-age"), {
                type: 'pie',
                data: {
                  labels: ["Toddler", "Children","Teenagers and Young Adults","Adult","Elderly"],
                  datasets: [
                    {
                      label: "Population (Age)",
                      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                      data: [t,c,y,a,s]
                    }
                  ]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Population By Age'
                  }
                }
            });
        }
        
    });

    

}

function loadResidentsVoter(start) {
    var rootref = firebase.database().ref().child("Residents");
    var counter = 0;
    
    rootref.on('child_added', snap => {
        var vstatus = snap.child("Voter_status").val();

        if(vstatus == "Yes") {
            vyes++;
        } else if(vstatus == "No") {
            vno++;
        } 

        counter++;

        if(counter ==  start) {
            new Chart(document.getElementById("doughnut-chart-voter"), {
                type: 'doughnut',
                data: {
                  labels: ["Voter", "Non-voter"],
                  datasets: [
                    {
                      label: "Population (Voter)",
                      backgroundColor: [ "#8e5ea2","#c45850"],
                      data: [vyes,vno]
                    }
                  ]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Population By Voter'
                  }
                }
            });
        }
        
    });

    

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


function getCounter() {
    var counter = 0;
    var rootref = firebase.database().ref().child("Residents");
    
    rootref.once("value", function(snapshot) {
        document.getElementById("totalResidents").innerHTML = "&nbsp;&nbsp;" + snapshot.numChildren();
        loadResidentsGender(snapshot.numChildren());
        loadResidentsAge(snapshot.numChildren());
        loadResidentsVoter(snapshot.numChildren());
        loadResidents(snapshot.numChildren());
        
      })

        

}

function getCounter1() {
    var counter = 0;
    var rootref = firebase.database().ref().child("Blotters");
    
    rootref.once("value", function(snapshot) {
        document.getElementById("totalBlotters").innerHTML = "&nbsp;&nbsp;" + snapshot.numChildren();
        loadBlotters(snapshot.numChildren());
      })

        

}

function clearSession() {
    localStorage.removeItem("user");
    window.location.replace("login");
}


function loadBlotters(end) {
    var timerc = 1500;
    var names = "";
    var rootref = firebase.database().ref().child("Blotters");
    var counter = 1;

    rootref.on('child_added', snap => {
        var validity = snap.child("Validity").val();
        var name = snap.child("First_name").val() +" " + snap.child("Last_name").val();
        

        var date = new Date(addDate());
        var valid = new Date(validity);
        if(valid.valueOf() == date.valueOf()) {
            if(counter == end) {
                names += name+" ";
            } else {
                names += name+", ";
            }
            
            timerc += 500
        }
        counter++;

        if(names != "") {
            swal({
                position: 'top-end',
                type: 'error',
                text: 'Blotter reported by '+ '' + names + ' is now expired!',
                showConfirmButton: false,
                timer: timerc,
                width: '300px',
              })
        }
        
    });
}

function addDate() {
    var result = new Date(Date.now());
    return result.getFullYear()+"-"+fixMonth(result.getMonth())+"-"+fixDate(result.getDate());
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
    } else {
        return date;
    }
}
