var counter;
$('.group').hide();
$('#type0').show();
$('#selectType').change(function () {
  $('.group').hide();
  $('#'+$(this).val()).show();
  changeValue();
})

if(localStorage.getItem("user")===null) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please Login Account',
      }).then(() => {
        window.location.replace("login");
      })
    
}


function changeValue() {
      if(document.getElementById("selectType").value == "type1") {
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var city = document.getElementById("City").value;
            var barangay = document.getElementById("Barangay").value;
            var position = document.querySelector('input[name="gender"]:checked').value;
            var rel = document.getElementById("Rel").value;
            var other = document.getElementById("Other").value;
            var term = document.querySelector('input[name="term"]:checked').value;
            var lname = document.getElementById("Last_name").value;
            var suffix = document.getElementById("Suffix").value;
            var fname = document.getElementById("First_name").value;
            var mname = document.getElementById("Middle_Name").value;
            var birthday = document.getElementById("Birthday").value;
            var bplace = document.getElementById("Birth_place").value;
            var sex = document.getElementById("Sex").value;
            var cstatus = document.getElementById("Civil_Status").value;
            var religion = document.getElementById("Religion").value;
            var address = document.getElementById("Address").value;
            var telephone = document.getElementById("Telephone").value;
            var mobile = document.getElementById("Mobile").value;
            var btelephone = document.getElementById("BTelephone").value;
            var email = document.getElementById("Email").value;
            var hea = document.querySelector('input[name="educ"]:checked').value;
            var hstatus = document.querySelector('input[name="hstatus"]:checked').value;
            var occupation = document.getElementById("Occupation").value;
            var honorarium = document.getElementById("Honorarium").value;

            var n1 = document.getElementById("Name1").value;
            var n2 = document.getElementById("Name2").value;
            var n3 = document.getElementById("Name3").value;
            var n4 = document.getElementById("Name4").value;
            var n5 = document.getElementById("Name5").value;

            var b1 = document.getElementById("Birthday1").value;
            var b2 = document.getElementById("Birthday2").value;
            var b3 = document.getElementById("Birthday3").value;
            var b4 = document.getElementById("Birthday4").value;
            var b5 = document.getElementById("Birthday5").value;

            var r1 = document.getElementById("Relationship1").value;
            var r2 = document.getElementById("Relationship2").value;
            var r3 = document.getElementById("Relationship3").value;
            var r4 = document.getElementById("Relationship4").value;
            var r5 = document.getElementById("Relationship5").value;

            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(10);
                pdf.setFont("helvetica");
                pdf.text(145, 52, city);
                pdf.text(145, 57, barangay);

                
                if(position == "pos1") {
                    pdf.text(44, 74, 'X'); 
                } else if(position == "pos2") {
                    pdf.text(44, 79.5, 'X'); 
                } else if(position == "pos3") {
                    pdf.text(44, 89, 'X'); 
                } else if(position == "pos4") {
                    pdf.text(44, 94.5, 'X');
                } else if(position == "pos5") {
                    pdf.text(119, 74, 'X');
                } else if(position == "pos6") {
                    pdf.text(119, 79, 'X');
                    pdf.text(170, 84.5, rel);
                } else if(position == "pos7") {
                    pdf.text(119, 89.5, 'X');
                } else {
                    pdf.text(119, 94.5, 'X');
                    pdf.text(125, 106, other);
                }

                if(term == "term1") {
                    pdf.text(47, 110.5, 'X');
                } else if(term == "term2") {
                    pdf.text(60, 110.5, "X");
                } else {
                    pdf.text(70, 110.5, "X");
                }

                pdf.text(24, 130, lname);
                pdf.text(78, 130, suffix);
                pdf.text(102, 130, fname);
                pdf.text(155, 130, mname);

                pdf.text(26, 144, birthday);
                pdf.text(55, 144, bplace);
                pdf.text(113, 144, sex);
                pdf.text(126, 144, cstatus);
                pdf.text(150, 144, religion);

                pdf.text(24, 159, address);
                pdf.text(148, 159, telephone);

                pdf.text(28, 174, mobile);
                pdf.text(88, 174, btelephone);
                pdf.text(148, 174, email);
                
                if(hea == "1") {
                    pdf.text(70, 187, 'X'); 
                } else if(hea == "2") {
                    pdf.text(97, 187, 'X'); 
                } else if(hea == "3") {
                    pdf.text(125, 187, 'X'); 
                } else if(hea == "4") {
                    pdf.text(147, 187, 'X');
                } else {
                    pdf.text(172, 187, 'X');
                } 

                if (hstatus == "h1") {
                    pdf.text(101, 193, 'X');
                } else {
                    pdf.text(130, 194, 'X');
                }
                

                pdf.text(40, 201, occupation);
                pdf.text(156, 202, honorarium);

                pdf.text(30, 217, n1);
                pdf.text(30, 223, n2);
                pdf.text(30, 229, n3);
                pdf.text(30, 235, n4);
                pdf.text(30, 240.5, n5);

                pdf.text(112, 217, b1);
                pdf.text(112, 223, b2);
                pdf.text(112, 229, b3);
                pdf.text(112, 235, b4);
                pdf.text(112, 240.5, b5);
                
                pdf.text(154, 217, r1);
                pdf.text(154, 223, r2);
                pdf.text(154, 229, r3);
                pdf.text(154, 235, r4);
                pdf.text(154, 240.5, r5);

                pdf.text(145, 259, returnMonth(month)+" "+day+", "+year);

                pdf.save("Barangay Official's Information Sheet "+ returnMonth(month)+" "+day+", "+year +".pdf");
            };
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/bois.jpg";  

        });
      } else if(document.getElementById("selectType").value == "type2") {
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var barangay = document.getElementById("ABPO_Barangay").value;

            var name_a = document.getElementById("ABPO_Name_Applicant").value;
            var date_a = document.getElementById("ABPO_Date_Applicant").value;
            var add_a = document.getElementById("ABPO_Address_Applicant").value;
            var tel_a = document.getElementById("ABPO_Tel_Applicant").value;
            var rel_a = document.getElementById("ABPO_Rel_Applicant").value;
            var occu_a = document.getElementById("ABPO_Occu_Applicant").value;

            var name_v = document.getElementById("ABPO_Name_Victim").value;
            var date_v = document.getElementById("ABPO_Date_Victim").value;
            var add_v = document.getElementById("ABPO_Address_Victim").value;
            var tel_v = document.getElementById("ABPO_Tel_Victim").value;
            var occu_v = document.getElementById("ABPO_Occu_Victim").value;


            var cvstatus = document.querySelector('input[name="civil"]:checked').value;

            var n1 = document.getElementById("ABPO_Name1").value;
            var b1 = document.getElementById("ABPO_Birthday1").value;
            var s1 = document.getElementById("ABPO_Sex1").value;
            var n2 = document.getElementById("ABPO_Name2").value;
            var b2 = document.getElementById("ABPO_Birthday2").value;
            var s2 = document.getElementById("ABPO_Sex2").value;

            var n3 = document.getElementById("ABPO_Name3").value;
            var b3 = document.getElementById("ABPO_Birthday3").value;
            var s3 = document.getElementById("ABPO_Sex3").value;
            var n4 = document.getElementById("ABPO_Name4").value;
            var b4 = document.getElementById("ABPO_Birthday4").value;
            var s4 = document.getElementById("ABPO_Sex4").value;

            var n5 = document.getElementById("ABPO_Name5").value;
            var b5 = document.getElementById("ABPO_Birthday5").value;
            var s5 = document.getElementById("ABPO_Sex5").value;
            var n6 = document.getElementById("ABPO_Name6").value;
            var b6 = document.getElementById("ABPO_Birthday6").value;
            var s6 = document.getElementById("ABPO_Sex6").value;
            
            var add = document.getElementById("ABPO_Address").value;
            var tel = document.getElementById("ABPO_Tel").value;
            var sex = document.getElementById("ABPO_Sex").value;
            var occu = document.getElementById("ABPO_Occu").value;
            var cvstatus1 = document.querySelector('input[name="civils"]:checked').value;

            var rvr = document.querySelector('input[name="relv"]:checked').value;
            var desc5 = document.getElementById("ABPO_Desc5").value;

            var act = document.querySelector('input[name="acts"]:checked').value;
            var desc6 = document.getElementById("ABPO_Desc6").value;

            var dcomm = document.getElementById("ABPO_Date_Comm").value;
            var pcomm = document.getElementById("ABPO_Place_Comm").value;

            var consent = document.getElementById("ABPO_Consent").value;

            var pdf = new jsPDF();

            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(11);
                pdf.setFont("helvetica");

                pdf.text(95, 47, barangay);

                pdf.text(70, 74, name_a);    
                pdf.text(154, 74, date_a);    
                pdf.text(50, 80, add_a);    
                pdf.text(140, 80, tel_a);    
                pdf.text(79, 85, rel_a);    
                pdf.text(150, 85, occu_a);   

                pdf.text(66, 90, name_v);    
                pdf.text(157, 90, date_v);    
                pdf.text(50, 96, add_v);    
                pdf.text(140, 96, tel_v);    
                pdf.text(97, 102, occu_v);    
                
                if(cvstatus == "c1") {
                    pdf.text(52, 107.5, 'X'); 
                } else if(cvstatus == "c2") {
                    pdf.text(73, 107.5, 'X');
                } else if(cvstatus == "c3") {
                    pdf.text(95, 107.5, 'X');   
                } else if(cvstatus == "c4") {
                    pdf.text(118, 107.5, 'X');   
                } else {
                    pdf.text(147, 107.5, 'X'); 
                }    

                pdf.text(28, 125, n1);    
                pdf.text(128, 125, b1);    
                pdf.text(163, 125, s1);    
                pdf.text(28.5, 130, n2);    
                pdf.text(128, 129, b2);    
                pdf.text(163, 129, s2);    

                pdf.text(28, 140.5, n3);    
                pdf.text(128, 140.5, b3);    
                pdf.text(163, 140.5, s3);    
                pdf.text(28, 146, n4);    
                pdf.text(128, 146, b4);    
                pdf.text(163, 146, s4);   

                pdf.text(28, 158, n5);   
                pdf.text(128, 158, b5);   
                pdf.text(163, 158, s5);   
                pdf.text(28, 164, n6);   
                pdf.text(128, 164, b6);   
                pdf.text(163, 164, s6);   

                pdf.text(46, 178.5, add);   
                pdf.text(144, 178.5, tel);   
                pdf.text(40, 184.5, sex);   
                pdf.text(163, 185, occu);   


                if(cvstatus1 == "cv1") {
                    pdf.text(53, 189, 'X');
                } else if(cvstatus1 == "cv2") {
                    pdf.text(74, 189.5, 'X');  
                } else if(cvstatus1 == "cv3") {
                    pdf.text(123, 189.5, 'X');  
                } else if(cvstatus1 == "cv4") {
                    pdf.text(154, 189.5, 'X');   
                } else {
                    pdf.text(52, 194.5, 'X');   
                }  

                if(rvr == "v1") {
                    pdf.text(31, 214, 'X');
                } else if(rvr == "v2") {
                    pdf.text(90, 214, 'X');  
                } else {
                    pdf.text(141, 214, 'X');
                }

                pdf.text(28, 226, desc5);

                if(act == "a1") {
                    pdf.text(75, 245, 'X');   
                } else {
                    pdf.text(143, 245, 'X');   
                }

                pdf.text(28, 258, desc6);   

                pdf.addPage();
            };

            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/po_1.jpg";  // some random imgur image


            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(12);
                pdf.setFont("helvetica");

                pdf.text(28, 37 , dcomm);
                pdf.text(28, 50, pcomm);
                pdf.text(28, 62, consent);
                pdf.text(28, 86.5, name_a+" "+(month+1)+"-"+day+"-"+year);
                pdf.text(158, 201.5, returnMonth(month)+" "+day+", "+year);

                pdf.save("Application for Barangay Protection Order "+ returnMonth(month)+" "+day+", "+year +".pdf");
                
            };

            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/po_2.jpg";  // some random imgur image


        });
      } else if(document.getElementById("selectType").value == "type3") {
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var nameres = document.getElementById("BPO_Name_Res").value;
            var address = document.getElementById("BPO_Add").value;
            var name = document.getElementById("BPO_Order_Name").value; 
            var date = document.getElementById("Order_Date").value;
            var oath = document.getElementById("Order_Oath").value;
            var harm = document.getElementById("BPO_Order_Harm").value;
            var cn1 = document.getElementById("BPO_Order_Child1").value;
            var cn2 = document.getElementById("BPO_Order_Child2").value;
            var cn3 = document.getElementById("BPO_Order_Child3").value;
            var cn4 = document.getElementById("BPO_Order_Child4").value;
            var cn5 = document.getElementById("BPO_Order_Child5").value;
            var cn6 = document.getElementById("BPO_Order_Child6").value;

            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(11);
                pdf.setFont("helvetica");

                pdf.text(168, 23.5, '123');
                pdf.text(69, 52.5, nameres);
                pdf.text(45, 58, address);
                pdf.text(28, 78, name);
                pdf.text(117, 78, date);
                pdf.text(28, 83.5, oath);
                pdf.text(91, 117, harm);
                pdf.text(48, 136.5, cn1);
                pdf.text(123, 136.5, cn2);
                pdf.text(48, 142, cn3);
                pdf.text(123, 142, cn4);
                pdf.text(48, 146.5, cn5);
                pdf.text(123, 146.5, cn6);

                pdf.text(147, 194, returnMonth(month)+" "+day+", "+year);

                pdf.save("Barangay Protection Order "+ returnMonth(month)+" "+day+", "+year +".pdf");
            };

            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/bpo.jpg";
        });
      } else if(document.getElementById("selectType").value == "type5") {
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){

            var mode = document.querySelector('input[name="mode"]:checked').value;
            var nature = document.querySelector('input[name="nature"]:checked').value;


            var name = document.getElementById("MASA_Name").value;
            var add = document.getElementById("MASA_Add").value;
            var occ = document.getElementById("MASA_Occ").value;
            var num = document.getElementById("MASA_Num").value;
            var email = document.getElementById("MASA_Email").value;
            var concern = document.getElementById("MASA_Concern").value;

            
            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(10);
                pdf.setFont("helvetica");

                if(mode == 1) {
                    pdf.text(66, 53.5, 'X');
                } else if(mode == 2) {
                    pdf.text(66, 59, 'X');
                } else if(mode == 2) {
                    pdf.text(66, 64, 'X');
                } else if(mode == 2) {
                    pdf.text(66, 69, 'X');
                } else {
                    pdf.text(66, 74.5, 'X');
                }
                
                
                if(nature == 1) {
                    pdf.text(135, 54, 'X');
                } else if(nature == 2) {
                    pdf.text(135, 59, 'X');
                } else if(nature == 2) {
                    pdf.text(135, 64.5, 'X');
                } else if(nature == 2) {
                    pdf.text(135, 70, 'X');
                } else {
                    pdf.text(135, 76.5, 'X');
                }
                

                pdf.text(53, 100.5, name);
                pdf.text(53, 105.5, add);
                pdf.text(53, 111, occ);
                pdf.text(53, 116, num);
                pdf.text(53, 121.5, email);

                pdf.text(13, 141.5, concern);

                pdf.save("Masa Masid "+ returnMonth(month)+" "+day+", "+year +".pdf");
            };

            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/masa.jpg";  // some random imgur image

            


        });
      } else if(document.getElementById("selectType").value == "type6") {
        
        $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
        var btn = document.getElementById("modal_okay_print");
        var date = new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();


        btn.addEventListener('click', function(event){
            var barangay = document.getElementById("RN_Barangay").value;

            var num = document.getElementById("RN_Number").value;
            var pbarangay = document.getElementById("RN_Pbarangay").value;

            var n0 = document.getElementById("RN_N0").value;
            var n1 = document.getElementById("RN_N1").value;
            var n2 = document.getElementById("RN_N2").value;
            var n3 = document.getElementById("RN_N3").value;
            var n4 = document.getElementById("RN_N4").value;
            var n5 = document.getElementById("RN_N5").value;
            var n6 = document.getElementById("RN_N6").value;
            var n7 = document.getElementById("RN_N7").value;
            var n8 = document.getElementById("RN_N8").value;
            var n9 = document.getElementById("RN_N9").value;
            var n10 = document.getElementById("RN_N10").value;
            var n11 = document.getElementById("RN_N11").value;
            var n12 = document.getElementById("RN_N12").value;
            var n13 = document.getElementById("RN_N13").value;

            var pdf = new jsPDF();
            var img = new Image;
            img.onload = function() {
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(this, 0, 0,width,height);
                pdf.setFontSize(8);
                pdf.setFont("helvetica");

                pdf.text(100, 44, barangay);
                pdf.text(117, 51.5, num);
                pdf.text(62, 110, pbarangay);
                pdf.text(124, 110, barangay);
                pdf.text(44, 128.5, pbarangay);
                pdf.text(44, 132, n0);
                pdf.text(44, 136, n1);
                pdf.text(44, 139.5, n2);
                pdf.text(44, 143.5, n3);
                pdf.text(44, 147, n4);
                pdf.text(44, 150.5, n5);
                pdf.text(44, 154.5, n6);
                pdf.text(44, 158, n7);
                pdf.text(44, 161.5, n8);

                pdf.text(44, 176, n9);
                pdf.text(52, 180, n10);
                pdf.text(52, 183.5, n11);
                pdf.text(52, 187, n12);
                pdf.text(52, 190.5, n13);

                pdf.text(63, 249.5, barangay);
                pdf.text(96, 249.5, returnMonth(month)+" "+day+", "+year);


                pdf.save("Masa Masid Team and Rehabilitation Network "+ returnMonth(month)+" "+day+", "+year +".pdf");
            };

            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = "/images/masa_masid.jpg";  
        });
      }
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


