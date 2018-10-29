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
      var tdate = document.getElementById("tl_date").value;
      var tmonth = document.getElementById("tl_month").value;
      var tyear = document.getElementById("tl_year").value;

      var dd1 = document.getElementById("tl_dd1").value;
      var dn1 = document.getElementById("tl_dn1").value;
      var cd1 = document.getElementById("tl_cd1").value;
      var cn1 = document.getElementById("tl_cn1").value;
      var p1 = document.getElementById("tl_p1").value;
      var a1 = document.getElementById("tl_a1").value;
      var pd1 = document.getElementById("tl_pd1").value;
      var pn1 = document.getElementById("tl_pn1").value;

      var dd2 = document.getElementById("tl_dd2").value;
      var dn2 = document.getElementById("tl_dn2").value;
      var cd2 = document.getElementById("tl_cd2").value;
      var cn2 = document.getElementById("tl_cn2").value;
      var p2 = document.getElementById("tl_p2").value;
      var a2 = document.getElementById("tl_a2").value;
      var pd2 = document.getElementById("tl_pd2").value;
      var pn2 = document.getElementById("tl_pn2").value;

      var dd3 = document.getElementById("tl_dd3").value;
      var dn3 = document.getElementById("tl_dn3").value;
      var cd3 = document.getElementById("tl_cd3").value;
      var cn3 = document.getElementById("tl_cn3").value;
      var p3 = document.getElementById("tl_p3").value;
      var a3 = document.getElementById("tl_a3").value;
      var pd3 = document.getElementById("tl_pd3").value;
      var pn3 = document.getElementById("tl_pn3").value;

      var dd4 = document.getElementById("tl_dd4").value;
      var dn4 = document.getElementById("tl_dn4").value;
      var cd4 = document.getElementById("tl_cd4").value;
      var cn4 = document.getElementById("tl_cn4").value;
      var p4 = document.getElementById("tl_p4").value;
      var a4 = document.getElementById("tl_a4").value;
      var pd4 = document.getElementById("tl_pd4").value;
      var pn4 = document.getElementById("tl_pn4").value;

      var dd5 = document.getElementById("tl_dd5").value;
      var dn5 = document.getElementById("tl_dn5").value;
      var cd5 = document.getElementById("tl_cd5").value;
      var cn5 = document.getElementById("tl_cn5").value;
      var p5 = document.getElementById("tl_p5").value;
      var a5 = document.getElementById("tl_a5").value;
      var pd5 = document.getElementById("tl_pd5").value;
      var pn5 = document.getElementById("tl_pn5").value;

      var dd6 = document.getElementById("tl_dd6").value;
      var dn6 = document.getElementById("tl_dn6").value;
      var cd6 = document.getElementById("tl_cd6").value;
      var cn6 = document.getElementById("tl_cn6").value;
      var p6 = document.getElementById("tl_p6").value;
      var a6 = document.getElementById("tl_a6").value;
      var pd6 = document.getElementById("tl_pd6").value;
      var pn6 = document.getElementById("tl_pn6").value;

      var dd7 = document.getElementById("tl_dd7").value;
      var dn7 = document.getElementById("tl_dn7").value;
      var cd7 = document.getElementById("tl_cd7").value;
      var cn7 = document.getElementById("tl_cn7").value;
      var p7 = document.getElementById("tl_p7").value;
      var a7 = document.getElementById("tl_a7").value;
      var pd7 = document.getElementById("tl_pd7").value;
      var pn7 = document.getElementById("tl_pn7").value;

      var dd8 = document.getElementById("tl_dd8").value;
      var dn8 = document.getElementById("tl_dn8").value;
      var cd8 = document.getElementById("tl_cd8").value;
      var cn8 = document.getElementById("tl_cn8").value;
      var p8 = document.getElementById("tl_p8").value;
      var a8 = document.getElementById("tl_a8").value;
      var pd8 = document.getElementById("tl_pd8").value;
      var pn8 = document.getElementById("tl_pn8").value;

      var dd9 = document.getElementById("tl_dd9").value;
      var dn9 = document.getElementById("tl_dn9").value;
      var cd9 = document.getElementById("tl_cd9").value;
      var cn9 = document.getElementById("tl_cn9").value;
      var p9 = document.getElementById("tl_p9").value;
      var a9 = document.getElementById("tl_a9").value;
      var pd9 = document.getElementById("tl_pd9").value;
      var pn9 = document.getElementById("tl_pn9").value;

      var dd10 = document.getElementById("tl_dd10").value;
      var dn10 = document.getElementById("tl_dn10").value;
      var cd10 = document.getElementById("tl_cd10").value;
      var cn10 = document.getElementById("tl_cn10").value;
      var p10 = document.getElementById("tl_p10").value;
      var a10 = document.getElementById("tl_a10").value;
      var pd10 = document.getElementById("tl_pd10").value;
      var pn10 = document.getElementById("tl_pn10").value;

      var dd11 = document.getElementById("tl_dd11").value;
      var dn11 = document.getElementById("tl_dn11").value;
      var cd11 = document.getElementById("tl_cd11").value;
      var cn11 = document.getElementById("tl_cn11").value;
      var p11 = document.getElementById("tl_p11").value;
      var a11 = document.getElementById("tl_a11").value;
      var pd11 = document.getElementById("tl_pd11").value;
      var pn11 = document.getElementById("tl_pn11").value;

      var dd12 = document.getElementById("tl_dd12").value;
      var dn12 = document.getElementById("tl_dn12").value;
      var cd12 = document.getElementById("tl_cd12").value;
      var cn12 = document.getElementById("tl_cn12").value;
      var p12 = document.getElementById("tl_p12").value;
      var a12 = document.getElementById("tl_a12").value;
      var pd12 = document.getElementById("tl_pd12").value;
      var pn12 = document.getElementById("tl_pn12").value;

      var dd13 = document.getElementById("tl_dd13").value;
      var dn13 = document.getElementById("tl_dn13").value;
      var cd13 = document.getElementById("tl_cd13").value;
      var cn13 = document.getElementById("tl_cn13").value;
      var p13 = document.getElementById("tl_p13").value;
      var a13 = document.getElementById("tl_a13").value;
      var pd13 = document.getElementById("tl_pd13").value;
      var pn13 = document.getElementById("tl_pn13").value;

      var dd14 = document.getElementById("tl_dd14").value;
      var dn14 = document.getElementById("tl_dn14").value;
      var cd14 = document.getElementById("tl_cd14").value;
      var cn14 = document.getElementById("tl_cn14").value;
      var p14 = document.getElementById("tl_p14").value;
      var a14 = document.getElementById("tl_a14").value;
      var pd14 = document.getElementById("tl_pd14").value;
      var pn14 = document.getElementById("tl_pn14").value;

      var dd15 = document.getElementById("tl_dd15").value;
      var dn15 = document.getElementById("tl_dn15").value;
      var cd15 = document.getElementById("tl_cd15").value;
      var cn15 = document.getElementById("tl_cn15").value;
      var p15 = document.getElementById("tl_p15").value;
      var a15 = document.getElementById("tl_a15").value;
      var pd15 = document.getElementById("tl_pd15").value;
      var pn15 = document.getElementById("tl_pn15").value;

      var pdf = new jsPDF();
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(155, 42, tdate);
          pdf.text(156, 70, tmonth);
          pdf.text(25, 74.7, tyear);

          //date
          pdf.text(24.5, 100.5, fixDate(dd1));
          pdf.text(24.5, 105, fixDate(dd2));
          pdf.text(24.5, 110, fixDate(dd3));
          pdf.text(24.5, 115, fixDate(dd4));
          pdf.text(24.5, 120, fixDate(dd5));
          pdf.text(24.5, 125, fixDate(dd6));
          pdf.text(24.5, 130, fixDate(dd7));
          pdf.text(24.5, 134.5, fixDate(dd8));
          pdf.text(24.5, 139.5, fixDate(dd9));
          pdf.text(24.5, 144.5, fixDate(dd10));
          pdf.text(24.5, 149.5, fixDate(dd11));
          pdf.text(24.5, 154.5, fixDate(dd12));
          pdf.text(24.5, 159.5, fixDate(dd13));
          pdf.text(24.5, 164.5, fixDate(dd14));
          pdf.text(24.5, 169.5, fixDate(dd15));

          //dv no
          pdf.text(40, 100.5, dn1);
          pdf.text(40, 105, dn2);
          pdf.text(40, 110, dn3);
          pdf.text(40, 115, dn4);
          pdf.text(40, 120, dn5);
          pdf.text(40, 125, dn6);
          pdf.text(40, 130, dn7);
          pdf.text(40, 134.5, dn8);
          pdf.text(40, 139.5, dn9);
          pdf.text(40, 144.5, dn10);
          pdf.text(40, 149.5, dn11);
          pdf.text(40, 154.5, dn12);
          pdf.text(40, 159.5, dn13);
          pdf.text(40, 164.5, dn14);
          pdf.text(40, 169.5, dn15);

          pdf.text(59, 100.5, fixDate(cd1));
          pdf.text(59, 105, fixDate(cd2));
          pdf.text(59, 110, fixDate(cd3));
          pdf.text(59, 115, fixDate(cd4));
          pdf.text(59, 120, fixDate(cd5));
          pdf.text(59, 125, fixDate(cd6));
          pdf.text(59, 130, fixDate(cd7));
          pdf.text(59, 134.5, fixDate(cd8));
          pdf.text(59, 139.5, fixDate(cd9));
          pdf.text(59, 144.5, fixDate(cd10));
          pdf.text(59, 149.5, fixDate(cd11));
          pdf.text(59, 154.5, fixDate(cd12));
          pdf.text(59, 159.5, fixDate(cd13));
          pdf.text(59, 164.5, fixDate(cd14));
          pdf.text(59, 169.5, fixDate(cd15));

          pdf.text(74.5, 100.5, cn1);
          pdf.text(74.5, 105, cn2);
          pdf.text(74.5, 110, cn3);
          pdf.text(74.5, 115, cn4);
          pdf.text(74.5, 120, cn5);
          pdf.text(74.5, 125, cn6);
          pdf.text(74.5, 130, cn7);
          pdf.text(74.5, 134.5, cn8);
          pdf.text(74.5, 139.5, cn9);
          pdf.text(74.5, 144.5, cn10);
          pdf.text(74.5, 149.5, cn11);
          pdf.text(74.5, 154.5, cn12);
          pdf.text(74.5, 159.5, cn13);
          pdf.text(74.5, 164.5, cn14);
          pdf.text(74.5, 169.5, cn15);

          pdf.text(93, 100.5, p1);
          pdf.text(93, 105, p2);
          pdf.text(93, 110, p3);
          pdf.text(93, 115, p4);
          pdf.text(93, 120, p5);
          pdf.text(93, 125, p6);
          pdf.text(93, 130, p7);
          pdf.text(93, 134.5, p8);
          pdf.text(93, 139.5, p9);
          pdf.text(93, 144.5, p10);
          pdf.text(93, 149.5, p11);
          pdf.text(93, 154.5, p12);
          pdf.text(93, 159.5, p13);
          pdf.text(93, 164.5, p14);
          pdf.text(93, 169.5, p15);

          pdf.text(130, 100.5, a1);
          pdf.text(130, 105, a2);
          pdf.text(130, 110, a3);
          pdf.text(130, 115, a4);
          pdf.text(130, 120, a5);
          pdf.text(130, 125, a6);
          pdf.text(130, 130, a7);
          pdf.text(130, 134.5, a8);
          pdf.text(130, 139.5, a9);
          pdf.text(130, 144.5, a10);
          pdf.text(130, 149.5, a11);
          pdf.text(130, 154.5, a12);
          pdf.text(130, 159.5, a13);
          pdf.text(130, 164.5, a14);
          pdf.text(130, 169.5, a15);

          pdf.text(152, 100.5, fixDate(pd1));
          pdf.text(152, 105, fixDate(pd2));
          pdf.text(152, 110, fixDate(pd3));
          pdf.text(152, 115, fixDate(pd4));
          pdf.text(152, 120, fixDate(pd5));
          pdf.text(152, 125, fixDate(pd6));
          pdf.text(152, 130, fixDate(pd7));
          pdf.text(152, 134.5, fixDate(pd8));
          pdf.text(152, 139.5, fixDate(pd9));
          pdf.text(152, 144.5, fixDate(pd10));
          pdf.text(152, 149.5, fixDate(pd11));
          pdf.text(152, 154.5, fixDate(pd12));
          pdf.text(152, 159.5, fixDate(pd13));
          pdf.text(152, 164.5, fixDate(pd14));
          pdf.text(152, 169.5, fixDate(pd15));

          pdf.text(171, 100.5, pn1);
          pdf.text(171, 105, pn2);
          pdf.text(171, 110, pn3);
          pdf.text(171, 115, pn4);
          pdf.text(171, 120, pn5);
          pdf.text(171, 125, pn6);
          pdf.text(171, 130, pn7);
          pdf.text(171, 134.5, pn8);
          pdf.text(171, 139.5, pn9);
          pdf.text(171, 144.5, pn10);
          pdf.text(171, 149.5, pn11);
          pdf.text(171, 154.5, pn12);
          pdf.text(171, 159.5, pn13);
          pdf.text(171, 164.5, pn14);
          pdf.text(171, 169.5, pn15);

          pdf.text(148, 180, 'Treasurer');

          pdf.save("Transmittal Letter "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

img.crossOrigin = "";  // for demo as we are at different origin than image
img.src = "/images/tl.jpg";  // some random imgur image
      
    });
  } else if(document.getElementById("selectType").value == "type2") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){
      var month1 = document.getElementById("sci_month").value;
      var sno = document.getElementById("sci_sno").value;
      var barangay = document.getElementById("sci_barangay").value;
      var page = document.getElementById("sci_page").value;
      var treasurer = document.getElementById("sci_treasurer").value;
      var city = document.getElementById("sci_city").value;
      var province = document.getElementById("sci_province").value;

      var d1 = document.getElementById("sci_d1").value;
      var cn1 = document.getElementById("sci_cn1").value;
      var da1 = document.getElementById("sci_da1").value;
      var dn1 = document.getElementById("sci_dn1").value;
      var db1 = document.getElementById("sci_db1").value;
      var f1 = document.getElementById("sci_f1").value;
      var dc1 = document.getElementById("sci_dc1").value;
      var py1 = document.getElementById("sci_py1").value;
      var dd1 = document.getElementById("sci_dd1").value;
      var p1 = document.getElementById("sci_p1").value;
      var ga1 = document.getElementById("sci_ga1").value;
      var na1 = document.getElementById("sci_na1").value;

      var d2 = document.getElementById("sci_d2").value;
      var cn2 = document.getElementById("sci_cn2").value;
      var da2 = document.getElementById("sci_da2").value;
      var dn2 = document.getElementById("sci_dn2").value;
      var db2 = document.getElementById("sci_db2").value;
      var f2 = document.getElementById("sci_f2").value;
      var dc2 = document.getElementById("sci_dc2").value;
      var py2 = document.getElementById("sci_py2").value;
      var dd2 = document.getElementById("sci_dd2").value;
      var p2 = document.getElementById("sci_p2").value;
      var ga2 = document.getElementById("sci_ga2").value;
      var na2 = document.getElementById("sci_na2").value;

      var d3 = document.getElementById("sci_d3").value;
      var cn3 = document.getElementById("sci_cn3").value;
      var da3 = document.getElementById("sci_da3").value;
      var dn3 = document.getElementById("sci_dn3").value;
      var db3 = document.getElementById("sci_db3").value;
      var f3 = document.getElementById("sci_f3").value;
      var dc3 = document.getElementById("sci_dc3").value;
      var py3 = document.getElementById("sci_py3").value;
      var dd3 = document.getElementById("sci_dd3").value;
      var p3 = document.getElementById("sci_p3").value;
      var ga3 = document.getElementById("sci_ga3").value;
      var na3 = document.getElementById("sci_na3").value;

      var d4 = document.getElementById("sci_d4").value;
      var cn4 = document.getElementById("sci_cn4").value;
      var da4 = document.getElementById("sci_da4").value;
      var dn4 = document.getElementById("sci_dn4").value;
      var db4 = document.getElementById("sci_db4").value;
      var f4 = document.getElementById("sci_f4").value;
      var dc4 = document.getElementById("sci_dc4").value;
      var py4 = document.getElementById("sci_py4").value;
      var dd4 = document.getElementById("sci_dd4").value;
      var p4 = document.getElementById("sci_p4").value;
      var ga4 = document.getElementById("sci_ga4").value;
      var na4 = document.getElementById("sci_na4").value;

      var d5 = document.getElementById("sci_d5").value;
      var cn5 = document.getElementById("sci_cn5").value;
      var da5 = document.getElementById("sci_da5").value;
      var dn5 = document.getElementById("sci_dn5").value;
      var db5 = document.getElementById("sci_db5").value;
      var f5 = document.getElementById("sci_f5").value;
      var dc5 = document.getElementById("sci_dc5").value;
      var py5 = document.getElementById("sci_py5").value;
      var dd5 = document.getElementById("sci_dd5").value;
      var p5 = document.getElementById("sci_p5").value;
      var ga5 = document.getElementById("sci_ga5").value;
      var na5 = document.getElementById("sci_na5").value;

      var d6 = document.getElementById("sci_d6").value;
      var cn6 = document.getElementById("sci_cn6").value;
      var da6 = document.getElementById("sci_da6").value;
      var dn6 = document.getElementById("sci_dn6").value;
      var db6 = document.getElementById("sci_db6").value;
      var f6 = document.getElementById("sci_f6").value;
      var dc6 = document.getElementById("sci_dc6").value;
      var py6 = document.getElementById("sci_py6").value;
      var dd6 = document.getElementById("sci_dd6").value;
      var p6 = document.getElementById("sci_p6").value;
      var ga6 = document.getElementById("sci_ga6").value;
      var na6 = document.getElementById("sci_na6").value;

      var d7 = document.getElementById("sci_d7").value;
      var cn7 = document.getElementById("sci_cn7").value;
      var da7 = document.getElementById("sci_da7").value;
      var dn7 = document.getElementById("sci_dn7").value;
      var db7 = document.getElementById("sci_db7").value;
      var f7 = document.getElementById("sci_f7").value;
      var dc7 = document.getElementById("sci_dc7").value;
      var py7 = document.getElementById("sci_py7").value;
      var dd7 = document.getElementById("sci_dd7").value;
      var p7 = document.getElementById("sci_p7").value;
      var ga7 = document.getElementById("sci_ga7").value;
      var na7 = document.getElementById("sci_na7").value;

      var d8 = document.getElementById("sci_d8").value;
      var cn8 = document.getElementById("sci_cn8").value;
      var da8 = document.getElementById("sci_da8").value;
      var dn8 = document.getElementById("sci_dn8").value;
      var db8 = document.getElementById("sci_db8").value;
      var f8 = document.getElementById("sci_f8").value;
      var dc8 = document.getElementById("sci_dc8").value;
      var py8 = document.getElementById("sci_py8").value;
      var dd8 = document.getElementById("sci_dd8").value;
      var p8 = document.getElementById("sci_p8").value;
      var ga8 = document.getElementById("sci_ga8").value;
      var na8 = document.getElementById("sci_na8").value;

      var d9 = document.getElementById("sci_d9").value;
      var cn9 = document.getElementById("sci_cn9").value;
      var da9 = document.getElementById("sci_da9").value;
      var dn9 = document.getElementById("sci_dn9").value;
      var db9 = document.getElementById("sci_db9").value;
      var f9 = document.getElementById("sci_f9").value;
      var dc9 = document.getElementById("sci_dc9").value;
      var py9 = document.getElementById("sci_py9").value;
      var dd9 = document.getElementById("sci_dd9").value;
      var p9 = document.getElementById("sci_p9").value;
      var ga9 = document.getElementById("sci_ga9").value;
      var na9 = document.getElementById("sci_na9").value;

      var d10 = document.getElementById("sci_d10").value;
      var cn10 = document.getElementById("sci_cn10").value;
      var da10 = document.getElementById("sci_da10").value;
      var dn10 = document.getElementById("sci_dn10").value;
      var db10 = document.getElementById("sci_db10").value;
      var f10 = document.getElementById("sci_f10").value;
      var dc10 = document.getElementById("sci_dc10").value;
      var py10 = document.getElementById("sci_py10").value;
      var dd10 = document.getElementById("sci_dd10").value;
      var p10 = document.getElementById("sci_p10").value;
      var ga10 = document.getElementById("sci_ga10").value;
      var na10 = document.getElementById("sci_na10").value;

      var d11 = document.getElementById("sci_d11").value;
      var cn11 = document.getElementById("sci_cn11").value;
      var da11 = document.getElementById("sci_da11").value;
      var dn11 = document.getElementById("sci_dn11").value;
      var db11 = document.getElementById("sci_db11").value;
      var f11 = document.getElementById("sci_f11").value;
      var dc11 = document.getElementById("sci_dc11").value;
      var py11 = document.getElementById("sci_py11").value;
      var dd11 = document.getElementById("sci_dd11").value;
      var p11 = document.getElementById("sci_p11").value;
      var ga11 = document.getElementById("sci_ga11").value;
      var na11 = document.getElementById("sci_na11").value;

      var d12 = document.getElementById("sci_d12").value;
      var cn12 = document.getElementById("sci_cn12").value;
      var da12 = document.getElementById("sci_da12").value;
      var dn12 = document.getElementById("sci_dn12").value;
      var db12 = document.getElementById("sci_db12").value;
      var f12 = document.getElementById("sci_f12").value;
      var dc12 = document.getElementById("sci_dc12").value;
      var py12 = document.getElementById("sci_py12").value;
      var dd12 = document.getElementById("sci_dd12").value;
      var p12 = document.getElementById("sci_p12").value;
      var ga12 = document.getElementById("sci_ga12").value;
      var na12 = document.getElementById("sci_na12").value;

      var d13 = document.getElementById("sci_d13").value;
      var cn13 = document.getElementById("sci_cn13").value;
      var da13 = document.getElementById("sci_da13").value;
      var dn13 = document.getElementById("sci_dn13").value;
      var db13 = document.getElementById("sci_db13").value;
      var f13 = document.getElementById("sci_f13").value;
      var dc13 = document.getElementById("sci_dc13").value;
      var py13 = document.getElementById("sci_py13").value;
      var dd13 = document.getElementById("sci_dd13").value;
      var p13 = document.getElementById("sci_p13").value;
      var ga13 = document.getElementById("sci_ga13").value;
      var na13 = document.getElementById("sci_na13").value;

      var d14 = document.getElementById("sci_d14").value;
      var cn14 = document.getElementById("sci_cn14").value;
      var da14 = document.getElementById("sci_da14").value;
      var dn14 = document.getElementById("sci_dn14").value;
      var db14 = document.getElementById("sci_db14").value;
      var f14 = document.getElementById("sci_f14").value;
      var dc14 = document.getElementById("sci_dc14").value;
      var py14 = document.getElementById("sci_py14").value;
      var dd14 = document.getElementById("sci_dd14").value;
      var p14 = document.getElementById("sci_p14").value;
      var ga14 = document.getElementById("sci_ga14").value;
      var na14 = document.getElementById("sci_na14").value;

      var d15 = document.getElementById("sci_d15").value;
      var cn15 = document.getElementById("sci_cn15").value;
      var da15 = document.getElementById("sci_da15").value;
      var dn15 = document.getElementById("sci_dn15").value;
      var db15 = document.getElementById("sci_db15").value;
      var f15 = document.getElementById("sci_f15").value;
      var dc15 = document.getElementById("sci_dc15").value;
      var py15 = document.getElementById("sci_py15").value;
      var dd15 = document.getElementById("sci_dd15").value;
      var p15 = document.getElementById("sci_p15").value;
      var ga15 = document.getElementById("sci_ga15").value;
      var na15 = document.getElementById("sci_na15").value;

      var d16 = document.getElementById("sci_d16").value;
      var cn16 = document.getElementById("sci_cn16").value;
      var da16 = document.getElementById("sci_da16").value;
      var dn16 = document.getElementById("sci_dn16").value;
      var db16 = document.getElementById("sci_db16").value;
      var f16 = document.getElementById("sci_f16").value;
      var dc16 = document.getElementById("sci_dc16").value;
      var py16 = document.getElementById("sci_py16").value;
      var dd16 = document.getElementById("sci_dd16").value;
      var p16 = document.getElementById("sci_p16").value;
      var ga16 = document.getElementById("sci_ga16").value;
      var na16 = document.getElementById("sci_na16").value;

      var pdf = new jsPDF('landscape');
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(153, 20, month1);
          pdf.text(38, 28.5, barangay);
          pdf.text(53, 33, treasurer);
          pdf.text(176, 28.5, city);
          pdf.text(165, 33, province);
          pdf.text(247, 28.5, sno);
          pdf.text(247, 33, page);

          pdf.text(20, 54.5, fixDate(d1));
          pdf.text(20, 60, fixDate(d2));
          pdf.text(20, 65, fixDate(d3));
          pdf.text(20, 70, fixDate(d4));
          pdf.text(20, 76, fixDate(d5));
          pdf.text(20, 82.5, fixDate(d6));
          pdf.text(20, 89, fixDate(d7));
          pdf.text(20, 94.5, fixDate(d8));
          pdf.text(20, 100, fixDate(d9));
          pdf.text(20, 106, fixDate(d10));
          pdf.text(20, 112, fixDate(d11));
          pdf.text(20, 118, fixDate(d12));
          pdf.text(20, 124.5, fixDate(d13));
          pdf.text(20, 131, fixDate(d14));
          pdf.text(20, 137, fixDate(d15));
          pdf.text(20, 142.5, fixDate(d16));
          

          pdf.text(36, 54.5, cn1);
          pdf.text(36, 60, cn2);
          pdf.text(36, 65, cn3);
          pdf.text(36, 70, cn4);
          pdf.text(36, 76, cn5);
          pdf.text(36, 82.5, cn6);
          pdf.text(36, 89, cn7);
          pdf.text(36, 94.5, cn8);
          pdf.text(36, 100, cn9);
          pdf.text(36, 106, cn10);
          pdf.text(36, 112, cn11);
          pdf.text(36, 118, cn12);
          pdf.text(36, 124.5, cn13);
          pdf.text(36, 131, cn14);
          pdf.text(36, 137, cn15);
          pdf.text(36, 142.5, cn16);

          pdf.text(51, 54.5, dn1);
          pdf.text(51, 60, dn2);
          pdf.text(51, 65, dn3);
          pdf.text(51, 70, dn4);
          pdf.text(51, 76, dn5);
          pdf.text(51, 82.5, dn6);
          pdf.text(51, 89, dn7);
          pdf.text(51, 94.5, dn8);
          pdf.text(51, 100, dn9);
          pdf.text(51, 106, dn10);
          pdf.text(51, 112, dn11);
          pdf.text(51, 118, dn12);
          pdf.text(51, 124.5, dn13);
          pdf.text(51, 131, dn14);
          pdf.text(51, 137, dn15);
          pdf.text(51, 142.5, dn16);

          pdf.text(66, 54.5, f1);
          pdf.text(66, 60, f2);
          pdf.text(66, 65, f3);
          pdf.text(66, 70, f4);
          pdf.text(66, 76, f5);
          pdf.text(66, 82.5, f6);
          pdf.text(66, 89, f7);
          pdf.text(66, 94.5, f8);
          pdf.text(66, 100, f9);
          pdf.text(66, 106, f10);
          pdf.text(66, 112, f11);
          pdf.text(66, 118, f12);
          pdf.text(66, 124.5, f13);
          pdf.text(66, 131, f14);
          pdf.text(66, 137, f15);
          pdf.text(66, 142.5, f16);

          pdf.text(84, 54.5, py1);
          pdf.text(84, 60, py2);
          pdf.text(84, 65, py3);
          pdf.text(84, 70, py4);
          pdf.text(84, 76, py5);
          pdf.text(84, 82.5, py6);
          pdf.text(84, 89, py7);
          pdf.text(84, 94.5, py8);
          pdf.text(84, 100, py9);
          pdf.text(84, 106, py10);
          pdf.text(84, 112, py11);
          pdf.text(84, 118, py12);
          pdf.text(84, 124.5, py13);
          pdf.text(84, 131, py14);
          pdf.text(84, 137, py15);
          pdf.text(84, 142.5, py16);

          pdf.text(124, 54.5, p1);
          pdf.text(124, 60, p2);
          pdf.text(124, 65, p3);
          pdf.text(124, 70, p4);
          pdf.text(124, 76, p5);
          pdf.text(124, 82.5, p6);
          pdf.text(124, 89, p7);
          pdf.text(124, 94.5, p8);
          pdf.text(124, 100, p9);
          pdf.text(124, 106, p10);
          pdf.text(124, 112, p11);
          pdf.text(124, 118, p12);
          pdf.text(124, 124.5, p13);
          pdf.text(124, 131, p14);
          pdf.text(124, 137, p15);
          pdf.text(124, 142.5, p16);

          pdf.text(164, 54.5, ga1);
          pdf.text(164, 60, ga2);
          pdf.text(164, 65, ga3);
          pdf.text(164, 70, ga4);
          pdf.text(164, 76, ga5);
          pdf.text(164, 82.5, ga6);
          pdf.text(164, 89, ga7);
          pdf.text(164, 94.5, ga8);
          pdf.text(164, 100, ga9);
          pdf.text(164, 106, ga10);
          pdf.text(164, 112, ga11);
          pdf.text(164, 118, ga12);
          pdf.text(164, 124.5, ga13);
          pdf.text(164, 131, ga14);
          pdf.text(164, 137, ga15);
          pdf.text(164, 142.5, ga16);

          pdf.text(193, 54.5, da1);
          pdf.text(193, 60, da2);
          pdf.text(193, 65, da3);
          pdf.text(193, 70, da4);
          pdf.text(193, 76, da5);
          pdf.text(193, 82.5, da6);
          pdf.text(193, 89, da7);
          pdf.text(193, 94.5, da8);
          pdf.text(193, 100, da9);
          pdf.text(193, 106, da10);
          pdf.text(193, 112, da11);
          pdf.text(193, 118, da12);
          pdf.text(193, 124.5, da13);
          pdf.text(193, 131, da14);
          pdf.text(193, 137, da15);
          pdf.text(193, 142.5, da16);

          pdf.text(210, 54.5, db1);
          pdf.text(210, 60, db2);
          pdf.text(210, 65, db3);
          pdf.text(210, 70, db4);
          pdf.text(210, 76, db5);
          pdf.text(210, 82.5, db6);
          pdf.text(210, 89, db7);
          pdf.text(210, 94.5, db8);
          pdf.text(210, 100, db9);
          pdf.text(210, 106, db10);
          pdf.text(210, 112, db11);
          pdf.text(210, 118, db12);
          pdf.text(210, 124.5, db13);
          pdf.text(210, 131, db14);
          pdf.text(210, 137, db15);
          pdf.text(210, 142.5, db16);

          pdf.text(224, 54.5, dc1);
          pdf.text(224, 60, dc2);
          pdf.text(224, 65, dc3);
          pdf.text(224, 70, dc4);
          pdf.text(224, 76, dc5);
          pdf.text(224, 82.5, dc6);
          pdf.text(224, 89, dc7);
          pdf.text(224, 94.5, dc8);
          pdf.text(224, 100, dc9);
          pdf.text(224, 106, dc10);
          pdf.text(224, 112, dc11);
          pdf.text(224, 118, dc12);
          pdf.text(224, 124.5, dc13);
          pdf.text(224, 131, dc14);
          pdf.text(224, 137, dc15);
          pdf.text(224, 142.5, dc16);

          pdf.text(239, 54.5, dd1);
          pdf.text(239, 60, dd2);
          pdf.text(239, 65, dd3);
          pdf.text(239, 70, dd4);
          pdf.text(239, 76, dd5);
          pdf.text(239, 82.5, dd6);
          pdf.text(239, 89, dd7);
          pdf.text(239, 94.5, dd8);
          pdf.text(239, 100, dd9);
          pdf.text(239, 106, dd10);
          pdf.text(239, 112, dd11);
          pdf.text(239, 118, dd12);
          pdf.text(239, 124.5, dd13);
          pdf.text(239, 131, dd14);
          pdf.text(239, 137, dd15);
          pdf.text(239, 142.5, dd16);

          pdf.text(254, 54.5, na1);
          pdf.text(254, 60, na2);
          pdf.text(254, 65, na3);
          pdf.text(254, 70, na4);
          pdf.text(254, 76, na5);
          pdf.text(254, 82.5, na6);
          pdf.text(254, 89, na7);
          pdf.text(254, 94.5, na8);
          pdf.text(254, 100, na9);
          pdf.text(254, 106, na10);
          pdf.text(254, 112, na11);
          pdf.text(254, 118, na12);
          pdf.text(254, 124.5, na13);
          pdf.text(254, 131, na14);
          pdf.text(254, 137, na15);
          pdf.text(254, 142.5, na16);

          pdf.text(69, 160, 'Fund');
          pdf.text(30, 186.5, 'Treasurer');
          pdf.text(84, 186.5, 'Date');

          pdf.save("Summary of Check Issued "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/sci.jpg";  

    });
  } else if(document.getElementById("selectType").value == "type3") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){
      var period = document.getElementById("scp_period").value;
      var city = document.getElementById("scp_city").value;
      var barangay = document.getElementById("scp_barangay").value;
      var province = document.getElementById("scp_province").value;
      var treasurer = document.getElementById("scp_treasurer").value;
      var no = document.getElementById("scp_no").value;

      var d1 = document.getElementById("scp_d1").value;
      var pn1 = document.getElementById("scp_pn1").value;
      var py1 = document.getElementById("scp_py1").value;
      var p1 = document.getElementById("scp_p1").value;
      var ga1 = document.getElementById("scp_ga1").value;
      var w1 = document.getElementById("scp_w1").value;
      var na1 = document.getElementById("scp_na1").value;

      var d2 = document.getElementById("scp_d2").value;
      var pn2 = document.getElementById("scp_pn2").value;
      var py2 = document.getElementById("scp_py2").value;
      var p2 = document.getElementById("scp_p2").value;
      var ga2 = document.getElementById("scp_ga2").value;
      var w2 = document.getElementById("scp_w2").value;
      var na2 = document.getElementById("scp_na2").value;

      var d3 = document.getElementById("scp_d3").value;
      var pn3 = document.getElementById("scp_pn3").value;
      var py3 = document.getElementById("scp_py3").value;
      var p3 = document.getElementById("scp_p3").value;
      var ga3 = document.getElementById("scp_ga3").value;
      var w3 = document.getElementById("scp_w3").value;
      var na3 = document.getElementById("scp_na3").value;

      var d4 = document.getElementById("scp_d4").value;
      var pn4 = document.getElementById("scp_pn4").value;
      var py4 = document.getElementById("scp_py4").value;
      var p4 = document.getElementById("scp_p4").value;
      var ga4 = document.getElementById("scp_ga4").value;
      var w4 = document.getElementById("scp_w4").value;
      var na4 = document.getElementById("scp_na4").value;

      var d5 = document.getElementById("scp_d5").value;
      var pn5 = document.getElementById("scp_pn5").value;
      var py5 = document.getElementById("scp_py5").value;
      var p5 = document.getElementById("scp_p5").value;
      var ga5 = document.getElementById("scp_ga5").value;
      var w5 = document.getElementById("scp_w5").value;
      var na5 = document.getElementById("scp_na5").value;

      var d6 = document.getElementById("scp_d6").value;
      var pn6 = document.getElementById("scp_pn6").value;
      var py6 = document.getElementById("scp_py6").value;
      var p6 = document.getElementById("scp_p6").value;
      var ga6 = document.getElementById("scp_ga6").value;
      var w6 = document.getElementById("scp_w6").value;
      var na6 = document.getElementById("scp_na6").value;

      var d7 = document.getElementById("scp_d7").value;
      var pn7 = document.getElementById("scp_pn7").value;
      var py7 = document.getElementById("scp_py7").value;
      var p7 = document.getElementById("scp_p7").value;
      var ga7 = document.getElementById("scp_ga7").value;
      var w7 = document.getElementById("scp_w7").value;
      var na7 = document.getElementById("scp_na7").value;

      var d8 = document.getElementById("scp_d8").value;
      var pn8 = document.getElementById("scp_pn8").value;
      var py8 = document.getElementById("scp_py8").value;
      var p8 = document.getElementById("scp_p8").value;
      var ga8 = document.getElementById("scp_ga8").value;
      var w8 = document.getElementById("scp_w8").value;
      var na8 = document.getElementById("scp_na8").value;

      var d9 = document.getElementById("scp_d9").value;
      var pn9 = document.getElementById("scp_pn9").value;
      var py9 = document.getElementById("scp_py9").value;
      var p9 = document.getElementById("scp_p9").value;
      var ga9 = document.getElementById("scp_ga9").value;
      var w9 = document.getElementById("scp_w9").value;
      var na9 = document.getElementById("scp_na9").value;

      var d10 = document.getElementById("scp_d10").value;
      var pn10 = document.getElementById("scp_pn10").value;
      var py10 = document.getElementById("scp_py10").value;
      var p10 = document.getElementById("scp_p10").value;
      var ga10 = document.getElementById("scp_ga10").value;
      var w10 = document.getElementById("scp_w10").value;
      var na10 = document.getElementById("scp_na10").value;

      var d11 = document.getElementById("scp_d11").value;
      var pn11 = document.getElementById("scp_pn11").value;
      var py11 = document.getElementById("scp_py11").value;
      var p11 = document.getElementById("scp_p11").value;
      var ga11 = document.getElementById("scp_ga11").value;
      var w11 = document.getElementById("scp_w11").value;
      var na11 = document.getElementById("scp_na11").value;

      var d12 = document.getElementById("scp_d12").value;
      var pn12 = document.getElementById("scp_pn12").value;
      var py12 = document.getElementById("scp_py12").value;
      var p12 = document.getElementById("scp_p12").value;
      var ga12 = document.getElementById("scp_ga12").value;
      var w12 = document.getElementById("scp_w12").value;
      var na12 = document.getElementById("scp_na12").value;

      var d13 = document.getElementById("scp_d13").value;
      var pn13 = document.getElementById("scp_pn13").value;
      var py13 = document.getElementById("scp_py13").value;
      var p13 = document.getElementById("scp_p13").value;
      var ga13 = document.getElementById("scp_ga13").value;
      var w13 = document.getElementById("scp_w13").value;
      var na13 = document.getElementById("scp_na13").value;

      var d14 = document.getElementById("scp_d14").value;
      var pn14 = document.getElementById("scp_pn14").value;
      var py14 = document.getElementById("scp_py14").value;
      var p14 = document.getElementById("scp_p14").value;
      var ga14 = document.getElementById("scp_ga14").value;
      var w14 = document.getElementById("scp_w14").value;
      var na14 = document.getElementById("scp_na14").value;

      var d15 = document.getElementById("scp_d15").value;
      var pn15 = document.getElementById("scp_pn15").value;
      var py15 = document.getElementById("scp_py15").value;
      var p15 = document.getElementById("scp_p15").value;
      var ga15 = document.getElementById("scp_ga15").value;
      var w15 = document.getElementById("scp_w15").value;
      var na15 = document.getElementById("scp_na15").value;

      var d16 = document.getElementById("scp_d16").value;
      var pn16 = document.getElementById("scp_pn16").value;
      var py16 = document.getElementById("scp_py16").value;
      var p16 = document.getElementById("scp_p16").value;
      var ga16 = document.getElementById("scp_ga16").value;
      var w16 = document.getElementById("scp_w16").value;
      var na16 = document.getElementById("scp_na16").value;

      var d17 = document.getElementById("scp_d17").value;
      var pn17 = document.getElementById("scp_pn17").value;
      var py17 = document.getElementById("scp_py17").value;
      var p17 = document.getElementById("scp_p17").value;
      var ga17 = document.getElementById("scp_ga17").value;
      var w17 = document.getElementById("scp_w17").value;
      var na17 = document.getElementById("scp_na17").value;

      var d18 = document.getElementById("scp_d18").value;
      var pn18 = document.getElementById("scp_pn18").value;
      var py18 = document.getElementById("scp_py18").value;
      var p18 = document.getElementById("scp_p18").value;
      var ga18 = document.getElementById("scp_ga18").value;
      var w18 = document.getElementById("scp_w18").value;
      var na18 = document.getElementById("scp_na18").value;

      var d19 = document.getElementById("scp_d19").value;
      var pn19 = document.getElementById("scp_pn19").value;
      var py19 = document.getElementById("scp_py19").value;
      var p19 = document.getElementById("scp_p19").value;
      var ga19 = document.getElementById("scp_ga19").value;
      var w19 = document.getElementById("scp_w19").value;
      var na19 = document.getElementById("scp_na19").value;

      var d20 = document.getElementById("scp_d20").value;
      var pn20 = document.getElementById("scp_pn20").value;
      var py20 = document.getElementById("scp_py20").value;
      var p20 = document.getElementById("scp_p20").value;
      var ga20 = document.getElementById("scp_ga20").value;
      var w20 = document.getElementById("scp_w20").value;
      var na20 = document.getElementById("scp_na20").value;

      var d21 = document.getElementById("scp_d21").value;
      var pn21 = document.getElementById("scp_pn21").value;
      var py21 = document.getElementById("scp_py21").value;
      var p21 = document.getElementById("scp_p21").value;
      var ga21 = document.getElementById("scp_ga21").value;
      var w21 = document.getElementById("scp_w21").value;
      var na21 = document.getElementById("scp_na21").value;

      var d22 = document.getElementById("scp_d22").value;
      var pn22 = document.getElementById("scp_pn22").value;
      var py22 = document.getElementById("scp_py22").value;
      var p22 = document.getElementById("scp_p22").value;
      var ga22 = document.getElementById("scp_ga22").value;
      var w22 = document.getElementById("scp_w22").value;
      var na22 = document.getElementById("scp_na22").value;

      var d23 = document.getElementById("scp_d23").value;
      var pn23 = document.getElementById("scp_pn23").value;
      var py23 = document.getElementById("scp_py23").value;
      var p23 = document.getElementById("scp_p23").value;
      var ga23 = document.getElementById("scp_ga23").value;
      var w23 = document.getElementById("scp_w23").value;
      var na23 = document.getElementById("scp_na23").value;

      var d24 = document.getElementById("scp_d24").value;
      var pn24 = document.getElementById("scp_pn24").value;
      var py24 = document.getElementById("scp_py24").value;
      var p24 = document.getElementById("scp_p24").value;
      var ga24 = document.getElementById("scp_ga24").value;
      var w24 = document.getElementById("scp_w24").value;
      var na24 = document.getElementById("scp_na24").value;

      var d25 = document.getElementById("scp_d25").value;
      var pn25 = document.getElementById("scp_pn25").value;
      var py25 = document.getElementById("scp_py25").value;
      var p25 = document.getElementById("scp_p25").value;
      var ga25 = document.getElementById("scp_ga25").value;
      var w25 = document.getElementById("scp_w25").value;
      var na25 = document.getElementById("scp_na25").value;

      var d26 = document.getElementById("scp_d26").value;
      var pn26 = document.getElementById("scp_pn26").value;
      var py26 = document.getElementById("scp_py26").value;
      var p26 = document.getElementById("scp_p26").value;
      var ga26 = document.getElementById("scp_ga26").value;
      var w26 = document.getElementById("scp_w26").value;
      var na26 = document.getElementById("scp_na26").value;

      var d27 = document.getElementById("scp_d27").value;
      var pn27 = document.getElementById("scp_pn27").value;
      var py27 = document.getElementById("scp_py27").value;
      var p27 = document.getElementById("scp_p27").value;
      var ga27 = document.getElementById("scp_ga27").value;
      var w27 = document.getElementById("scp_w27").value;
      var na27 = document.getElementById("scp_na27").value;

      var d28 = document.getElementById("scp_d28").value;
      var pn28 = document.getElementById("scp_pn28").value;
      var py28 = document.getElementById("scp_py28").value;
      var p28 = document.getElementById("scp_p28").value;
      var ga28 = document.getElementById("scp_ga28").value;
      var w28 = document.getElementById("scp_w28").value;
      var na28 = document.getElementById("scp_na28").value;

      var d29 = document.getElementById("scp_d29").value;
      var pn29 = document.getElementById("scp_pn29").value;
      var py29 = document.getElementById("scp_py29").value;
      var p29 = document.getElementById("scp_p29").value;
      var ga29 = document.getElementById("scp_ga29").value;
      var w29 = document.getElementById("scp_w29").value;
      var na29 = document.getElementById("scp_na29").value;

      var d30 = document.getElementById("scp_d30").value;
      var pn30 = document.getElementById("scp_pn30").value;
      var py30 = document.getElementById("scp_py30").value;
      var p30 = document.getElementById("scp_p30").value;
      var ga30 = document.getElementById("scp_ga30").value;
      var w30 = document.getElementById("scp_w30").value;
      var na30 = document.getElementById("scp_na30").value;

      var d31 = document.getElementById("scp_d31").value;
      var pn31 = document.getElementById("scp_pn31").value;
      var py31 = document.getElementById("scp_py31").value;
      var p31 = document.getElementById("scp_p31").value;
      var ga31 = document.getElementById("scp_ga31").value;
      var w31 = document.getElementById("scp_w31").value;
      var na31 = document.getElementById("scp_na31").value;

      var d32 = document.getElementById("scp_d32").value;
      var pn32 = document.getElementById("scp_pn32").value;
      var py32 = document.getElementById("scp_py32").value;
      var p32 = document.getElementById("scp_p32").value;
      var ga32 = document.getElementById("scp_ga32").value;
      var w32 = document.getElementById("scp_w32").value;
      var na32 = document.getElementById("scp_na32").value;

      var d33 = document.getElementById("scp_d33").value;
      var pn33 = document.getElementById("scp_pn33").value;
      var py33 = document.getElementById("scp_py33").value;
      var p33 = document.getElementById("scp_p33").value;
      var ga33 = document.getElementById("scp_ga33").value;
      var w33 = document.getElementById("scp_w33").value;
      var na33 = document.getElementById("scp_na33").value;

      var d34 = document.getElementById("scp_d34").value;
      var pn34 = document.getElementById("scp_pn34").value;
      var py34 = document.getElementById("scp_py34").value;
      var p34 = document.getElementById("scp_p34").value;
      var ga34 = document.getElementById("scp_ga34").value;
      var w34 = document.getElementById("scp_w34").value;
      var na34 = document.getElementById("scp_na34").value;


      var pdf = new jsPDF();
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(105, 28, period);
          pdf.text(33, 33, barangay);
          pdf.text(51, 37, treasurer);
          pdf.text(128, 33, city);
          pdf.text(115, 37, province);
          pdf.text(185, 33, no);
          
          //date
          pdf.text(11, 54.5, fixDate(d1));
          pdf.text(11, 58.5, fixDate(d2));
          pdf.text(11, 62.5, fixDate(d3));
          pdf.text(11, 66.5, fixDate(d4));
          pdf.text(11, 70.5, fixDate(d5));
          pdf.text(11, 74.5, fixDate(d6));
          pdf.text(11, 79.5, fixDate(d7));
          pdf.text(11, 83.5, fixDate(d8));
          pdf.text(11, 87.5, fixDate(d9));
          pdf.text(11, 91.5, fixDate(d10));
          pdf.text(11, 95.5, fixDate(d11));
          pdf.text(11, 100, fixDate(d12));
          pdf.text(11, 103.5, fixDate(d13));
          pdf.text(11, 108, fixDate(d14));
          pdf.text(11, 112, fixDate(d15));
          pdf.text(11, 116, fixDate(d16));
          pdf.text(11, 120.5, fixDate(d17));
          pdf.text(11, 124.5, fixDate(d18));
          pdf.text(11, 129.5, fixDate(d19));
          pdf.text(11, 134.5, fixDate(d20)); 
          pdf.text(11, 140.5, fixDate(d21));
          pdf.text(11, 146.5, fixDate(d22));
          pdf.text(11, 150.5, fixDate(d23));
          pdf.text(11, 155, fixDate(d24));
          pdf.text(11, 160.5, fixDate(d25));
          pdf.text(11, 164.5, fixDate(d26));
          pdf.text(11, 169, fixDate(d27));
          pdf.text(11, 174, fixDate(d28));
          pdf.text(11, 179, fixDate(d29));
          pdf.text(11, 184, fixDate(d30));
          pdf.text(11, 189.5, fixDate(d31));
          pdf.text(11, 194, fixDate(d32));
          pdf.text(11, 199, fixDate(d33));
          pdf.text(11, 203.5, fixDate(d34));

          //Dv/Payroll No.
          pdf.text(27, 54.5, pn1);
          pdf.text(27, 58.5, pn2);
          pdf.text(27, 62.5, pn3);
          pdf.text(27, 66.5, pn4);
          pdf.text(27, 70.5, pn5);
          pdf.text(27, 74.5, pn6);
          pdf.text(27, 79.5, pn7);
          pdf.text(27, 83.5, pn8);
          pdf.text(27, 87.5, pn9);
          pdf.text(27, 91.5, pn10);
          pdf.text(27, 95.5, pn11);
          pdf.text(27, 100, pn12);
          pdf.text(27, 103.5, pn13);
          pdf.text(27, 108, pn14);
          pdf.text(27, 112, pn15);
          pdf.text(27, 116, pn16);
          pdf.text(27, 120.5, pn17);
          pdf.text(27, 124.5, pn18);
          pdf.text(27, 129.5, pn19);
          pdf.text(27, 134.5, pn20);
          pdf.text(27, 140.5, pn21);
          pdf.text(27, 146.5, pn22);
          pdf.text(27, 150.5, pn23);
          pdf.text(27, 155, pn24);
          pdf.text(27, 160.5, pn25);
          pdf.text(27, 164.5, pn26);
          pdf.text(27, 169, pn27);
          pdf.text(27, 174, pn28);
          pdf.text(27, 179, pn29);
          pdf.text(27, 184, pn30);
          pdf.text(27, 189.5, pn31);
          pdf.text(27, 194, pn32);
          pdf.text(27, 199, pn33);
          pdf.text(27, 203.5, pn34);


          //Payee
          pdf.text(50, 54.5, py1);
          pdf.text(50, 58.5, py2);
          pdf.text(50, 62.5, py3);
          pdf.text(50, 66.5, py4);
          pdf.text(50, 70.5, py5);
          pdf.text(50, 74.5, py6);
          pdf.text(50, 79.5, py7);
          pdf.text(50, 83.5, py8);
          pdf.text(50, 87.5, py9);
          pdf.text(50, 91.5, py10);
          pdf.text(50, 95.5, py11);
          pdf.text(50, 100, py12);
          pdf.text(50, 103.5, py13);
          pdf.text(50, 108, py14);
          pdf.text(50, 112, py15);
          pdf.text(50, 116, py16);
          pdf.text(50, 120.5, py17);
          pdf.text(50, 124.5, py18);
          pdf.text(50, 129.5, py19);
          pdf.text(50, 134.5, py20);
          pdf.text(50, 140.5, py21);
          pdf.text(50, 146.5, py22);
          pdf.text(50, 150.5, py23);
          pdf.text(50, 155, py24);
          pdf.text(50, 160.5, py25);
          pdf.text(50, 164.5, py26);
          pdf.text(50, 169, py27);
          pdf.text(50, 174, py28);
          pdf.text(50, 179, py29);
          pdf.text(50, 184, py30);
          pdf.text(50, 189.5, py31);
          pdf.text(50, 194, py32);
          pdf.text(50, 199, py33);
          pdf.text(50, 203.5, py34);


          //Particulars
          pdf.text(92, 54.5, p1);
          pdf.text(92, 58.5, p2);
          pdf.text(92, 62.5, p3);
          pdf.text(92, 66.5, p4);
          pdf.text(92, 70.5, p5);
          pdf.text(92, 74.5, p6);
          pdf.text(92, 79.5, p7);
          pdf.text(92, 83.5, p8);
          pdf.text(92, 87.5, p9);
          pdf.text(92, 91.5, p10);
          pdf.text(92, 95.5, p11);
          pdf.text(92, 100, p12);
          pdf.text(92, 103.5, p13);
          pdf.text(92, 108, p14);
          pdf.text(92, 112, p15);
          pdf.text(92, 116, p16);
          pdf.text(92, 120.5, p17);
          pdf.text(92, 124.5, p18);
          pdf.text(92, 129.5, p19);
          pdf.text(92, 134.5, p20);
          pdf.text(92, 140.5, p21);
          pdf.text(92, 146.5, p22);
          pdf.text(92, 150.5, p23);
          pdf.text(92, 155, p24);
          pdf.text(92, 160.5, p25);
          pdf.text(92, 164.5, p26);
          pdf.text(92, 169, p27);
          pdf.text(92, 174, p28);
          pdf.text(92, 179, p29);
          pdf.text(92, 184, p30);
          pdf.text(92, 189.5, p31);
          pdf.text(92, 194, p32);
          pdf.text(92, 199, p33);
          pdf.text(92, 203.5, p34);

          //Gross
          pdf.text(143, 54.5, ga1);
          pdf.text(143, 58.5, ga2);
          pdf.text(143, 62.5, ga3);
          pdf.text(143, 66.5, ga4);
          pdf.text(143, 70.5, ga5);
          pdf.text(143, 74.5, ga6);
          pdf.text(143, 79.5, ga7);
          pdf.text(143, 83.5, ga8);
          pdf.text(143, 87.5, ga9);
          pdf.text(143, 91.5, ga10);
          pdf.text(143, 95.5, ga11);
          pdf.text(143, 100, ga12);
          pdf.text(143, 103.5, ga13);
          pdf.text(143, 108, ga14);
          pdf.text(143, 112, ga15);
          pdf.text(143, 116, ga16);
          pdf.text(143, 120.5, ga17);
          pdf.text(143, 124.5, ga18);
          pdf.text(143, 129.5, ga19);
          pdf.text(143, 134.5, ga20);
          pdf.text(143, 140.5, ga21);
          pdf.text(143, 146.5, ga22);
          pdf.text(143, 150.5, ga23);
          pdf.text(143, 155, ga24);
          pdf.text(143, 160.5, ga25);
          pdf.text(143, 164.5, ga26);
          pdf.text(143, 169, ga27);
          pdf.text(143, 174, ga28);
          pdf.text(143, 179, ga29);
          pdf.text(143, 184, ga30);
          pdf.text(143, 189.5, ga31);
          pdf.text(143, 194, ga32);
          pdf.text(143, 199, ga33);
          pdf.text(143, 203.5, ga34);


          //Tax
          pdf.text(164, 54.5, w1);
          pdf.text(164, 58.5, w2);
          pdf.text(164, 62.5, w3);
          pdf.text(164, 66.5, w4);
          pdf.text(164, 70.5, w5);
          pdf.text(164, 74.5, w6);
          pdf.text(164, 79.5, w7);
          pdf.text(164, 83.5, w8);
          pdf.text(164, 87.5, w9);
          pdf.text(164, 91.5, w10);
          pdf.text(164, 95.5, w11);
          pdf.text(164, 100, w12);
          pdf.text(164, 103.5, w13);
          pdf.text(164, 108, w14);
          pdf.text(164, 112, w15);
          pdf.text(164, 116, w16);
          pdf.text(164, 120.5, w17);
          pdf.text(164, 124.5, w18);
          pdf.text(164, 129.5, w19);
          pdf.text(164, 134.5, w20);
          pdf.text(164, 140.5, w21);
          pdf.text(164, 146.5, w22);
          pdf.text(164, 150.5, w23);
          pdf.text(164, 155, w24);
          pdf.text(164, 160.5, w25);
          pdf.text(164, 164.5, w26);
          pdf.text(164, 169, w27);
          pdf.text(164, 174, w28);
          pdf.text(164, 179, w29);
          pdf.text(164, 184, w30);
          pdf.text(164, 189.5, w31);
          pdf.text(164, 194, w32);
          pdf.text(164, 199, w33);
          pdf.text(164, 203.5, w34);

          //Net
          pdf.text(187, 54.5, na1);
          pdf.text(187, 58.5, na2);
          pdf.text(187, 62.5, na3);
          pdf.text(187, 66.5, na4);
          pdf.text(187, 70.5, na5);
          pdf.text(187, 74.5, na6);
          pdf.text(187, 79.5, na7);
          pdf.text(187, 83.5, na8);
          pdf.text(187, 87.5, na9);
          pdf.text(187, 91.5, na10);
          pdf.text(187, 95.5, na11);
          pdf.text(187, 100, na12);
          pdf.text(187, 103.5, na13);
          pdf.text(187, 108, na14);
          pdf.text(187, 112, na15);
          pdf.text(187, 116, na16);
          pdf.text(187, 120.5, na17);
          pdf.text(187, 124.5, na18);
          pdf.text(187, 129.5, na19);
          pdf.text(187, 134.5, na20);
          pdf.text(187, 140.5, na21);
          pdf.text(187, 146.5, na22);
          pdf.text(187, 150.5, na23);
          pdf.text(187, 155, na24);
          pdf.text(187, 160.5, na25);
          pdf.text(187, 164.5, na26);
          pdf.text(187, 169, na27);
          pdf.text(187, 174, na28);
          pdf.text(187, 179, na29);
          pdf.text(187, 184, na30);
          pdf.text(187, 189.5, na31);
          pdf.text(187, 194, na32);
          pdf.text(187, 199, na33);
          pdf.text(187, 203.5, na34);

          pdf.save("Summary of Cash Payments "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/scp.jpg"; 
    });
  } else if(document.getElementById("selectType").value == "type4") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){
      var month1 = document.getElementById("ra_month").value;
      var barangay = document.getElementById("ra_barangay").value;
      var treasurer = document.getElementById("ra_treasurer").value;
      var no = document.getElementById("ra_no").value;

      var name1 = document.getElementById("ra_name1").value;
      var gf1 = document.getElementById("ra_gf1").value;
      var f1 = document.getElementById("ra_f1").value;
      var qa1 = document.getElementById("ra_qa1").value;
      var fa1 = document.getElementById("ra_fa1").value;
      var ta1 = document.getElementById("ra_ta1").value;
      var qb1 = document.getElementById("ra_qb1").value;
      var fb1 = document.getElementById("ra_fb1").value;
      var tb1 = document.getElementById("ra_tb1").value;
      var qc1 = document.getElementById("ra_qc1").value;
      var fc1 = document.getElementById("ra_fc1").value;
      var tc1 = document.getElementById("ra_tc1").value;
      var qd1 = document.getElementById("ra_qd1").value;
      var fd1 = document.getElementById("ra_fd1").value;
      var td1 = document.getElementById("ra_td1").value;

      var name2 = document.getElementById("ra_name2").value;
      var gf2 = document.getElementById("ra_gf2").value;
      var f2 = document.getElementById("ra_f2").value;
      var qa2 = document.getElementById("ra_qa2").value;
      var fa2 = document.getElementById("ra_fa2").value;
      var ta2 = document.getElementById("ra_ta2").value;
      var qb2 = document.getElementById("ra_qb2").value;
      var fb2 = document.getElementById("ra_fb2").value;
      var tb2 = document.getElementById("ra_tb2").value;
      var qc2 = document.getElementById("ra_qc2").value;
      var fc2 = document.getElementById("ra_fc2").value;
      var tc2 = document.getElementById("ra_tc2").value;
      var qd2 = document.getElementById("ra_qd2").value;
      var fd2 = document.getElementById("ra_fd2").value;
      var td2 = document.getElementById("ra_td2").value;

      var name3 = document.getElementById("ra_name3").value;
      var gf3 = document.getElementById("ra_gf3").value;
      var f3 = document.getElementById("ra_f3").value;
      var qa3 = document.getElementById("ra_qa3").value;
      var fa3 = document.getElementById("ra_fa3").value;
      var ta3 = document.getElementById("ra_ta3").value;
      var qb3 = document.getElementById("ra_qb3").value;
      var fb3 = document.getElementById("ra_fb3").value;
      var tb3 = document.getElementById("ra_tb3").value;
      var qc3 = document.getElementById("ra_qc3").value;
      var fc3 = document.getElementById("ra_fc3").value;
      var tc3 = document.getElementById("ra_tc3").value;
      var qd3 = document.getElementById("ra_qd3").value;
      var fd3 = document.getElementById("ra_fd3").value;
      var td3 = document.getElementById("ra_td3").value;

      var name4 = document.getElementById("ra_name4").value;
      var gf4 = document.getElementById("ra_gf4").value;
      var f4 = document.getElementById("ra_f4").value;
      var qa4 = document.getElementById("ra_qa4").value;
      var fa4 = document.getElementById("ra_fa4").value;
      var ta4 = document.getElementById("ra_ta4").value;
      var qb4 = document.getElementById("ra_qb4").value;
      var fb4 = document.getElementById("ra_fb4").value;
      var tb4 = document.getElementById("ra_tb4").value;
      var qc4 = document.getElementById("ra_qc4").value;
      var fc4 = document.getElementById("ra_fc4").value;
      var tc4 = document.getElementById("ra_tc4").value;
      var qd4 = document.getElementById("ra_qd4").value;
      var fd4 = document.getElementById("ra_fd4").value;
      var td4 = document.getElementById("ra_td4").value;

      var name5 = document.getElementById("ra_name5").value;
      var gf5 = document.getElementById("ra_gf5").value;
      var f5 = document.getElementById("ra_f5").value;
      var qa5 = document.getElementById("ra_qa5").value;
      var fa5 = document.getElementById("ra_fa5").value;
      var ta5 = document.getElementById("ra_ta5").value;
      var qb5 = document.getElementById("ra_qb5").value;
      var fb5 = document.getElementById("ra_fb5").value;
      var tb5 = document.getElementById("ra_tb5").value;
      var qc5 = document.getElementById("ra_qc5").value;
      var fc5 = document.getElementById("ra_fc5").value;
      var tc5 = document.getElementById("ra_tc5").value;
      var qd5 = document.getElementById("ra_qd5").value;
      var fd5 = document.getElementById("ra_fd5").value;
      var td5 = document.getElementById("ra_td5").value;

      var name6 = document.getElementById("ra_name6").value;
      var gf6 = document.getElementById("ra_gf6").value;
      var f6 = document.getElementById("ra_f6").value;
      var qa6 = document.getElementById("ra_qa6").value;
      var fa6 = document.getElementById("ra_fa6").value;
      var ta6 = document.getElementById("ra_ta6").value;
      var qb6 = document.getElementById("ra_qb6").value;
      var fb6 = document.getElementById("ra_fb6").value;
      var tb6 = document.getElementById("ra_tb6").value;
      var qc6 = document.getElementById("ra_qc6").value;
      var fc6 = document.getElementById("ra_fc6").value;
      var tc6 = document.getElementById("ra_tc6").value;
      var qd6 = document.getElementById("ra_qd6").value;
      var fd6 = document.getElementById("ra_fd6").value;
      var td6 = document.getElementById("ra_td6").value;

      var name7 = document.getElementById("ra_name7").value;
      var gf7 = document.getElementById("ra_gf7").value;
      var f7 = document.getElementById("ra_f7").value;
      var qa7 = document.getElementById("ra_qa7").value;
      var fa7 = document.getElementById("ra_fa7").value;
      var ta7 = document.getElementById("ra_ta7").value;
      var qb7 = document.getElementById("ra_qb7").value;
      var fb7 = document.getElementById("ra_fb7").value;
      var tb7 = document.getElementById("ra_tb7").value;
      var qc7 = document.getElementById("ra_qc7").value;
      var fc7 = document.getElementById("ra_fc7").value;
      var tc7 = document.getElementById("ra_tc7").value;
      var qd7 = document.getElementById("ra_qd7").value;
      var fd7 = document.getElementById("ra_fd7").value;
      var td7 = document.getElementById("ra_td7").value;

      var name8 = document.getElementById("ra_name8").value;
      var gf8 = document.getElementById("ra_gf8").value;
      var f8 = document.getElementById("ra_f8").value;
      var qa8 = document.getElementById("ra_qa8").value;
      var fa8 = document.getElementById("ra_fa8").value;
      var ta8 = document.getElementById("ra_ta8").value;
      var qb8 = document.getElementById("ra_qb8").value;
      var fb8 = document.getElementById("ra_fb8").value;
      var tb8 = document.getElementById("ra_tb8").value;
      var qc8 = document.getElementById("ra_qc8").value;
      var fc8 = document.getElementById("ra_fc8").value;
      var tc8 = document.getElementById("ra_tc8").value;
      var qd8 = document.getElementById("ra_qd8").value;
      var fd8 = document.getElementById("ra_fd8").value;
      var td8 = document.getElementById("ra_td8").value;

      var name9 = document.getElementById("ra_name9").value;
      var gf9 = document.getElementById("ra_gf9").value;
      var f9 = document.getElementById("ra_f9").value;
      var qa9 = document.getElementById("ra_qa9").value;
      var fa9 = document.getElementById("ra_fa9").value;
      var ta9 = document.getElementById("ra_ta9").value;
      var qb9 = document.getElementById("ra_qb9").value;
      var fb9 = document.getElementById("ra_fb9").value;
      var tb9 = document.getElementById("ra_tb9").value;
      var qc9 = document.getElementById("ra_qc9").value;
      var fc9 = document.getElementById("ra_fc9").value;
      var tc9 = document.getElementById("ra_tc9").value;
      var qd9 = document.getElementById("ra_qd9").value;
      var fd9 = document.getElementById("ra_fd9").value;
      var td9 = document.getElementById("ra_td9").value;

      var name10 = document.getElementById("ra_name10").value;
      var gf10 = document.getElementById("ra_gf10").value;
      var f10 = document.getElementById("ra_f10").value;
      var qa10 = document.getElementById("ra_qa10").value;
      var fa10 = document.getElementById("ra_fa10").value;
      var ta10 = document.getElementById("ra_ta10").value;
      var qb10 = document.getElementById("ra_qb10").value;
      var fb10 = document.getElementById("ra_fb10").value;
      var tb10 = document.getElementById("ra_tb10").value;
      var qc10 = document.getElementById("ra_qc10").value;
      var fc10 = document.getElementById("ra_fc10").value;
      var tc10 = document.getElementById("ra_tc10").value;
      var qd10 = document.getElementById("ra_qd10").value;
      var fd10 = document.getElementById("ra_fd10").value;
      var td10 = document.getElementById("ra_td10").value;

      var name11 = document.getElementById("ra_name11").value;
      var gf11 = document.getElementById("ra_gf11").value;
      var f11 = document.getElementById("ra_f11").value;
      var qa11 = document.getElementById("ra_qa11").value;
      var fa11 = document.getElementById("ra_fa11").value;
      var ta11 = document.getElementById("ra_ta11").value;
      var qb11 = document.getElementById("ra_qb11").value;
      var fb11 = document.getElementById("ra_fb11").value;
      var tb11 = document.getElementById("ra_tb11").value;
      var qc11 = document.getElementById("ra_qc11").value;
      var fc11 = document.getElementById("ra_fc11").value;
      var tc11 = document.getElementById("ra_tc11").value;
      var qd11 = document.getElementById("ra_qd11").value;
      var fd11 = document.getElementById("ra_fd11").value;
      var td11 = document.getElementById("ra_td11").value;

      var name12 = document.getElementById("ra_name12").value;
      var gf12 = document.getElementById("ra_gf12").value;
      var f12 = document.getElementById("ra_f12").value;
      var qa12 = document.getElementById("ra_qa12").value;
      var fa12 = document.getElementById("ra_fa12").value;
      var ta12 = document.getElementById("ra_ta12").value;
      var qb12 = document.getElementById("ra_qb12").value;
      var fb12 = document.getElementById("ra_fb12").value;
      var tb12 = document.getElementById("ra_tb12").value;
      var qc12 = document.getElementById("ra_qc12").value;
      var fc12 = document.getElementById("ra_fc12").value;
      var tc12 = document.getElementById("ra_tc12").value;
      var qd12 = document.getElementById("ra_qd12").value;
      var fd12 = document.getElementById("ra_fd12").value;
      var td12 = document.getElementById("ra_td12").value;

      var name13 = document.getElementById("ra_name13").value;
      var gf13 = document.getElementById("ra_gf13").value;
      var f13 = document.getElementById("ra_f13").value;
      var qa13 = document.getElementById("ra_qa13").value;
      var fa13 = document.getElementById("ra_fa13").value;
      var ta13 = document.getElementById("ra_ta13").value;
      var qb13 = document.getElementById("ra_qb13").value;
      var fb13 = document.getElementById("ra_fb13").value;
      var tb13 = document.getElementById("ra_tb13").value;
      var qc13 = document.getElementById("ra_qc13").value;
      var fc13 = document.getElementById("ra_fc13").value;
      var tc13 = document.getElementById("ra_tc13").value;
      var qd13 = document.getElementById("ra_qd13").value;
      var fd13 = document.getElementById("ra_fd13").value;
      var td13 = document.getElementById("ra_td13").value;

      var pdf = new jsPDF('landscape');
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(155, 23, month1);
          pdf.text(57, 28.5, barangay);
          pdf.text(57, 33, treasurer);
          pdf.text(227, 27.5, no);

          pdf.text(13, 59, name1);
          pdf.text(13, 65.5, name2);
          pdf.text(13, 71.5, name3);
          pdf.text(13, 77, name4);
          pdf.text(13, 83, name5);
          pdf.text(13, 89, name6);
          pdf.text(13, 95, name7);
          pdf.text(13, 101.5, name8);
          pdf.text(13, 107.5, name9);
          pdf.text(13, 113, name10);
          pdf.text(13, 119.5, name11);
          pdf.text(13, 125.5, name12);
          pdf.text(13, 131.5, name13);

          pdf.text(43, 59, gf1);
          pdf.text(43, 65.5, gf2);
          pdf.text(43, 71.5, gf3);
          pdf.text(43, 77, gf4);
          pdf.text(43, 83, gf5);
          pdf.text(43, 89, gf6);
          pdf.text(43, 95, gf7);
          pdf.text(43, 101.5, gf8);
          pdf.text(43, 107.5, gf9);
          pdf.text(43, 113, gf10);
          pdf.text(43, 119.5, gf11);
          pdf.text(43, 125.5, gf12);
          pdf.text(43, 131.5, gf13);

          pdf.text(56.5, 59, f1);
          pdf.text(56.5, 65.5, f2);
          pdf.text(56.5, 71.5, f3);
          pdf.text(56.5, 77, f4);
          pdf.text(56.5, 83, f5);
          pdf.text(56.5, 89, f6);
          pdf.text(56.5, 95, f7);
          pdf.text(56.5, 101.5, f8);
          pdf.text(56.5, 107.5, f9);
          pdf.text(56.5, 113, f10);
          pdf.text(56.5, 119.5, f11);
          pdf.text(56.5, 125.5, f12);
          pdf.text(56.5, 131.5, f13);

          pdf.text(68, 59, qa1);
          pdf.text(68, 65.5, qa2);
          pdf.text(68, 71.5, qa3);
          pdf.text(68, 77, qa4);
          pdf.text(68, 83, qa5);
          pdf.text(68, 89, qa6);
          pdf.text(68, 95, qa7);
          pdf.text(68, 101.5, qa8);
          pdf.text(68, 107.5, qa9);
          pdf.text(68, 113, qa10);
          pdf.text(68, 119.5, qa11);
          pdf.text(68, 125.5, qa12);
          pdf.text(68, 131.5, qa13);

          pdf.text(85, 59, fa1);
          pdf.text(85, 65.5, fa2);
          pdf.text(85, 71.5, fa3);
          pdf.text(85, 77, fa4);
          pdf.text(85, 83, fa5);
          pdf.text(85, 89, fa6);
          pdf.text(85, 95, fa7);
          pdf.text(85, 101.5, fa8);
          pdf.text(85, 107.5, fa9);
          pdf.text(85, 113, fa10);
          pdf.text(85, 119.5, fa11);
          pdf.text(85, 125.5, fa12);
          pdf.text(85, 131.5, fa13);

          pdf.text(101, 59, ta1);
          pdf.text(101, 65.5, ta2);
          pdf.text(101, 71.5, ta3);
          pdf.text(101, 77, ta4);
          pdf.text(101, 83, ta5);
          pdf.text(101, 89, ta6);
          pdf.text(101, 95, ta7);
          pdf.text(101, 101.5, ta8);
          pdf.text(101, 107.5, ta9);
          pdf.text(101, 113, ta10);
          pdf.text(101, 119.5, ta11);
          pdf.text(101, 125.5, ta12);
          pdf.text(101, 131.5, ta13);

          pdf.text(117, 59,qb1);
          pdf.text(117, 65.5,qb2);
          pdf.text(117, 71.5,qb3);
          pdf.text(117, 77,qb4);
          pdf.text(117, 83,qb5);
          pdf.text(117, 89,qb6);
          pdf.text(117, 95,qb7);
          pdf.text(117, 101.5,qb8);
          pdf.text(117, 107.5,qb9);
          pdf.text(117, 113,qb10);
          pdf.text(117, 119.5,qb11);
          pdf.text(117, 125.5,qb12);
          pdf.text(117, 131.5,qb13);

          pdf.text(133, 59, fb1);
          pdf.text(133, 65.5, fb2);
          pdf.text(133, 71.5, fb3);
          pdf.text(133, 77, fb4);
          pdf.text(133, 83, fb5);
          pdf.text(133, 89, fb6);
          pdf.text(133, 95, fb7);
          pdf.text(133, 101.5, fb8);
          pdf.text(133, 107.5, fb9);
          pdf.text(133, 113, fb10);
          pdf.text(133, 119.5, fb11);
          pdf.text(133, 125.5, fb12);
          pdf.text(133, 131.5, fb13);

          pdf.text(152, 59, tb1);
          pdf.text(152, 65.5, tb2);
          pdf.text(152, 71.5, tb3);
          pdf.text(152, 77, tb4);
          pdf.text(152, 83, tb5);
          pdf.text(152, 89, tb6);
          pdf.text(152, 95, tb7);
          pdf.text(152, 101.5, tb8);
          pdf.text(152, 107.5, tb9);
          pdf.text(152, 113, tb10);
          pdf.text(152, 119.5, tb11);
          pdf.text(152, 125.5, tb12);
          pdf.text(152, 131.5, tb13);

          pdf.text(171, 59, qc1);
          pdf.text(171, 65.5, qc2);
          pdf.text(171, 71.5, qc3);
          pdf.text(171, 77, qc4);
          pdf.text(171, 83, qc5);
          pdf.text(171, 89, qc6);
          pdf.text(171, 95, qc7);
          pdf.text(171, 101.5, qc8);
          pdf.text(171, 107.5, qc9);
          pdf.text(171, 113, qc10);
          pdf.text(171, 119.5, qc11);
          pdf.text(171, 125.5, qc12);
          pdf.text(171, 131.5, qc13);

          pdf.text(188, 59, fc1);
          pdf.text(188, 65.5, fc2);
          pdf.text(188, 71.5, fc3);
          pdf.text(188, 77, fc4);
          pdf.text(188, 83, fc5);
          pdf.text(188, 89, fc6);
          pdf.text(188, 95, fc7);
          pdf.text(188, 101.5, fc8);
          pdf.text(188, 107.5, fc9);
          pdf.text(188, 113, fc10);
          pdf.text(188, 119.5, fc11);
          pdf.text(188, 125.5, fc12);
          pdf.text(188, 131.5, fc13);

          pdf.text(204, 59, tc1);
          pdf.text(204, 65.5, tc2);
          pdf.text(204, 71.5, tc3);
          pdf.text(204, 77, tc4);
          pdf.text(204, 83, tc5);
          pdf.text(204, 89, tc6);
          pdf.text(204, 95, tc7);
          pdf.text(204, 101.5, tc8);
          pdf.text(204, 107.5, tc9);
          pdf.text(204, 113, tc10);
          pdf.text(204, 119.5, tc11);
          pdf.text(204, 125.5, tc12);
          pdf.text(204, 131.5, tc13);

          pdf.text(221, 59, qd1);
          pdf.text(221, 65.5, qd2);
          pdf.text(221, 71.5, qd3);
          pdf.text(221, 77, qd4);
          pdf.text(221, 83, qd5);
          pdf.text(221, 89, qd6);
          pdf.text(221, 95, qd7);
          pdf.text(221, 101.5, qd8);
          pdf.text(221, 107.5, qd9);
          pdf.text(221, 113, qd10);
          pdf.text(221, 119.5, qd11);
          pdf.text(221, 125.5, qd12);
          pdf.text(221, 131.5, qd13);

          pdf.text(242, 59, fd1);
          pdf.text(242, 65.5, fd2);
          pdf.text(242, 71.5, fd3);
          pdf.text(242, 77, fd4);
          pdf.text(242, 83, fd5);
          pdf.text(242, 89, fd6);
          pdf.text(242, 95, fd7);
          pdf.text(242, 101.5, fd8);
          pdf.text(242, 107.5, fd9);
          pdf.text(242, 113, fd10);
          pdf.text(242, 119.5, fd11);
          pdf.text(242, 125.5, fd12);
          pdf.text(242, 131.5, fd13);

          pdf.text(263, 59, td1);
          pdf.text(263, 65.5, td2);
          pdf.text(263, 71.5, td3);
          pdf.text(263, 77, td4);
          pdf.text(263, 83, td5);
          pdf.text(263, 89, td6);
          pdf.text(263, 95, td7);
          pdf.text(263, 101.5, td8);
          pdf.text(263, 107.5, td9);
          pdf.text(263, 113, td10);
          pdf.text(263, 119.5, td11);
          pdf.text(263, 125.5, td12);
          pdf.text(263, 131.5, td13);

          pdf.text(26, 180.5, treasurer);
          // pdf.text(85, 180.5, 'Date');

          pdf.save("Report of Accountability for Accountable Forms "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/ra.jpg"; 

      
    });
  } else if(document.getElementById("selectType").value == "type5") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){
      var pbc = document.getElementById("pbc_no").value;
      var pdate = document.getElementById("pbc_date").value;

      var ac1 = document.getElementById("pbc_ac1").value;
      var c1 = document.getElementById("pbc_c1").value;
      var d1 = document.getElementById("pbc_d1").value;
      var p1 = document.getElementById("pbc_p1").value;
      var am1 = document.getElementById("pbc_am1").value;

      var ac2 = document.getElementById("pbc_ac2").value;
      var c2 = document.getElementById("pbc_c2").value;
      var d2 = document.getElementById("pbc_d2").value;
      var p2 = document.getElementById("pbc_p2").value;
      var am2 = document.getElementById("pbc_am2").value;

      var ac3 = document.getElementById("pbc_ac3").value;
      var c3 = document.getElementById("pbc_c3").value;
      var d3 = document.getElementById("pbc_d3").value;
      var p3 = document.getElementById("pbc_p3").value;
      var am3 = document.getElementById("pbc_am3").value;

      var ac4 = document.getElementById("pbc_ac4").value;
      var c4 = document.getElementById("pbc_c4").value;
      var d4 = document.getElementById("pbc_d4").value;
      var p4 = document.getElementById("pbc_p4").value;
      var am4 = document.getElementById("pbc_am4").value;

      var ac5 = document.getElementById("pbc_ac5").value;
      var c5 = document.getElementById("pbc_c5").value;
      var d5 = document.getElementById("pbc_d5").value;
      var p5 = document.getElementById("pbc_p5").value;
      var am5 = document.getElementById("pbc_am5").value;

      var ac6 = document.getElementById("pbc_ac6").value;
      var c6 = document.getElementById("pbc_c6").value;
      var d6 = document.getElementById("pbc_d6").value;
      var p6 = document.getElementById("pbc_p6").value;
      var am6 = document.getElementById("pbc_am6").value;

      var ac7 = document.getElementById("pbc_ac7").value;
      var c7 = document.getElementById("pbc_c7").value;
      var d7 = document.getElementById("pbc_d7").value;
      var p7 = document.getElementById("pbc_p7").value;
      var am7 = document.getElementById("pbc_am7").value;

      var pdf = new jsPDF();
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(149, 35, pbc);
          pdf.text(148, 39, pdate);
          
          //account
          pdf.text(25, 85, ac1);
          pdf.text(25, 92.5, ac2);
          pdf.text(25, 100, ac3);
          pdf.text(25, 107.5, ac4);
          pdf.text(25, 115, ac5);
          pdf.text(25, 123, ac6);
          pdf.text(25, 130.5, ac7);

          pdf.text(59, 85, c1);
          pdf.text(59, 92.5, c2);
          pdf.text(59, 100, c3);
          pdf.text(59, 107.5, c4);
          pdf.text(59, 115, c5);
          pdf.text(59, 123, c6);
          pdf.text(59, 130.5, c7);

          pdf.text(92, 85, fixDate(d1));
          pdf.text(92, 92.5, fixDate(d2));
          pdf.text(92, 100, fixDate(d3));
          pdf.text(92, 107.5, fixDate(d4));
          pdf.text(92, 115, fixDate(d5));
          pdf.text(92, 123, fixDate(d6));
          pdf.text(92, 130.5, fixDate(d7));

          pdf.text(116, 85, p1);
          pdf.text(116, 92.5, p2);
          pdf.text(116, 100, p3);
          pdf.text(116, 107.5, p4);
          pdf.text(116, 115, p5);
          pdf.text(116, 123, p6);
          pdf.text(116, 130.5, p7);

          pdf.text(177, 85, am1);
          pdf.text(177, 92.5, am2);
          pdf.text(177, 100, am3);
          pdf.text(177, 107.5, am4);
          pdf.text(177, 115, am5);
          pdf.text(177, 123, am6);
          pdf.text(177, 130.5, am7);

          // pdf.text(137, 148, 'Chairman');

          // pdf.text(128, 160.5, '12');
          // pdf.text(153, 160.5, 'October');

          // pdf.text(26, 165, 'abcdef');
          // pdf.text(165, 165, '12345');

          // pdf.text(59, 169, 'Barangay');

          // pdf.text(45, 180.5, '12345');
          // pdf.text(45, 185, '12345');
          // pdf.text(45, 189, '12345');
          // pdf.text(45, 193, '12345');

          // pdf.text(26, 221, 'Treasurer');

          pdf.save("PBC Veterans Bank "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/pbc.jpg";  // some random imgur image

    });
  } else if(document.getElementById("selectType").value == "type6") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){ 
      var cmonth = document.getElementById("cr_month").value;
      var cyear = document.getElementById("cr_year").value;
      var cbarangay = document.getElementById("cr_barangay").value;
      var ccity = document.getElementById("cr_city").value;
      var ctrea = document.getElementById("cr_treasurer").value;
      var cpro = document.getElementById("cr_province").value;

      var d1 = document.getElementById("cr_d1").value;
      var rpt1 = document.getElementById("cr_rpt1").value;
      var p1 = document.getElementById("cr_particulars1").value;
      var ctc1 = document.getElementById("cr_ctc1").value;
      var ref1 = document.getElementById("cr_ref1").value;
      var ira1 = document.getElementById("cr_ira1").value;
      var r1 = document.getElementById("cr_receipt1").value;
      var de1 = document.getElementById("cr_deposit1").value;
      var ca1 = document.getElementById("cr_cityA1").value;

      var d2 = document.getElementById("cr_d2").value;
      var rpt2 = document.getElementById("cr_rpt2").value;
      var p2 = document.getElementById("cr_particulars2").value;
      var ctc2 = document.getElementById("cr_ctc2").value;
      var ref2 = document.getElementById("cr_ref2").value;
      var ira2 = document.getElementById("cr_ira2").value;
      var r2 = document.getElementById("cr_receipt2").value;
      var de2 = document.getElementById("cr_deposit2").value;
      var ca2 = document.getElementById("cr_cityA2").value;

      var d3 = document.getElementById("cr_d3").value;
      var rpt3 = document.getElementById("cr_rpt3").value;
      var p3 = document.getElementById("cr_particulars3").value;
      var ctc3 = document.getElementById("cr_ctc3").value;
      var ref3 = document.getElementById("cr_ref3").value;
      var ira3 = document.getElementById("cr_ira3").value;
      var r3 = document.getElementById("cr_receipt3").value;
      var de3 = document.getElementById("cr_deposit3").value;
      var ca3 = document.getElementById("cr_cityA3").value;

      var d4 = document.getElementById("cr_d4").value;
      var rpt4 = document.getElementById("cr_rpt4").value;
      var p4 = document.getElementById("cr_particulars4").value;
      var ctc4 = document.getElementById("cr_ctc4").value;
      var ref4 = document.getElementById("cr_ref4").value;
      var ira4 = document.getElementById("cr_ira4").value;
      var r4 = document.getElementById("cr_receipt4").value;
      var de4 = document.getElementById("cr_deposit4").value;
      var ca4 = document.getElementById("cr_cityA4").value;

      var d5 = document.getElementById("cr_d5").value;
      var rpt5 = document.getElementById("cr_rpt5").value;
      var p5 = document.getElementById("cr_particulars5").value;
      var ctc5 = document.getElementById("cr_ctc5").value;
      var ref5 = document.getElementById("cr_ref5").value;
      var ira5 = document.getElementById("cr_ira5").value;
      var r5 = document.getElementById("cr_receipt5").value;
      var de5 = document.getElementById("cr_deposit5").value;
      var ca5 = document.getElementById("cr_cityA5").value;

      var d6 = document.getElementById("cr_d6").value;
      var rpt6 = document.getElementById("cr_rpt6").value;
      var p6 = document.getElementById("cr_particulars6").value;
      var ctc6 = document.getElementById("cr_ctc6").value;
      var ref6 = document.getElementById("cr_ref6").value;
      var ira6 = document.getElementById("cr_ira6").value;
      var r6 = document.getElementById("cr_receipt6").value;
      var de6 = document.getElementById("cr_deposit6").value;
      var ca6 = document.getElementById("cr_cityA6").value;

      var d7 = document.getElementById("cr_d7").value;
      var rpt7 = document.getElementById("cr_rpt7").value;
      var p7 = document.getElementById("cr_particulars7").value;
      var ctc7 = document.getElementById("cr_ctc7").value;
      var ref7 = document.getElementById("cr_ref7").value;
      var ira7 = document.getElementById("cr_ira7").value;
      var r7 = document.getElementById("cr_receipt7").value;
      var de7 = document.getElementById("cr_deposit7").value;
      var ca7 = document.getElementById("cr_cityA7").value;

      var d8 = document.getElementById("cr_d8").value;
      var rpt8 = document.getElementById("cr_rpt8").value;
      var p8 = document.getElementById("cr_particulars8").value;
      var ctc8 = document.getElementById("cr_ctc8").value;
      var ref8 = document.getElementById("cr_ref8").value;
      var ira8 = document.getElementById("cr_ira8").value;
      var r8 = document.getElementById("cr_receipt8").value;
      var de8 = document.getElementById("cr_deposit8").value;
      var ca8 = document.getElementById("cr_cityA8").value;

      var d9 = document.getElementById("cr_d9").value;
      var rpt9 = document.getElementById("cr_rpt9").value;
      var p9 = document.getElementById("cr_particulars9").value;
      var ctc9 = document.getElementById("cr_ctc9").value;
      var ref9 = document.getElementById("cr_ref9").value;
      var ira9 = document.getElementById("cr_ira9").value;
      var r9 = document.getElementById("cr_receipt9").value;
      var de9 = document.getElementById("cr_deposit9").value;
      var ca9 = document.getElementById("cr_cityA9").value;

      var d10 = document.getElementById("cr_d10").value;
      var rpt10 = document.getElementById("cr_rpt10").value;
      var p10 = document.getElementById("cr_particulars10").value;
      var ctc10 = document.getElementById("cr_ctc10").value;
      var ref10 = document.getElementById("cr_ref10").value;
      var ira10 = document.getElementById("cr_ira10").value;
      var r10 = document.getElementById("cr_receipt10").value;
      var de10 = document.getElementById("cr_deposit10").value;
      var ca10 = document.getElementById("cr_cityA10").value;

      var d11 = document.getElementById("cr_d11").value;
      var rpt11 = document.getElementById("cr_rpt11").value;
      var p11 = document.getElementById("cr_particulars11").value;
      var ctc11 = document.getElementById("cr_ctc11").value;
      var ref11 = document.getElementById("cr_ref11").value;
      var ira11 = document.getElementById("cr_ira11").value;
      var r11 = document.getElementById("cr_receipt11").value;
      var de11 = document.getElementById("cr_deposit11").value;
      var ca11 = document.getElementById("cr_cityA11").value;

      var d12 = document.getElementById("cr_d12").value;
      var rpt12 = document.getElementById("cr_rpt12").value;
      var p12 = document.getElementById("cr_particulars12").value;
      var ctc12 = document.getElementById("cr_ctc12").value;
      var ref12 = document.getElementById("cr_ref12").value;
      var ira12 = document.getElementById("cr_ira12").value;
      var r12 = document.getElementById("cr_receipt12").value;
      var de12 = document.getElementById("cr_deposit12").value;
      var ca12 = document.getElementById("cr_cityA12").value;

      var d13 = document.getElementById("cr_d13").value;
      var rpt13 = document.getElementById("cr_rpt13").value;
      var p13 = document.getElementById("cr_particulars13").value;
      var ctc13 = document.getElementById("cr_ctc13").value;
      var ref13 = document.getElementById("cr_ref13").value;
      var ira13 = document.getElementById("cr_ira13").value;
      var r13 = document.getElementById("cr_receipt13").value;
      var de13 = document.getElementById("cr_deposit13").value;
      var ca13 = document.getElementById("cr_cityA13").value;

      var d14 = document.getElementById("cr_d14").value;
      var rpt14 = document.getElementById("cr_rpt14").value;
      var p14 = document.getElementById("cr_particulars14").value;
      var ctc14 = document.getElementById("cr_ctc14").value;
      var ref14 = document.getElementById("cr_ref14").value;
      var ira14 = document.getElementById("cr_ira14").value;
      var r14 = document.getElementById("cr_receipt14").value;
      var de14 = document.getElementById("cr_deposit14").value;
      var ca14 = document.getElementById("cr_cityA14").value;

      var d15 = document.getElementById("cr_d15").value;
      var rpt15 = document.getElementById("cr_rpt15").value;
      var p15 = document.getElementById("cr_particulars15").value;
      var ctc15 = document.getElementById("cr_ctc15").value;
      var ref15 = document.getElementById("cr_ref15").value;
      var ira15 = document.getElementById("cr_ira15").value;
      var r15 = document.getElementById("cr_receipt15").value;
      var de15 = document.getElementById("cr_deposit15").value;
      var ca15 = document.getElementById("cr_cityA15").value;

      var d16 = document.getElementById("cr_d16").value;
      var rpt16 = document.getElementById("cr_rpt16").value;
      var p16 = document.getElementById("cr_particulars16").value;
      var ctc16 = document.getElementById("cr_ctc16").value;
      var ref16 = document.getElementById("cr_ref16").value;
      var ira16 = document.getElementById("cr_ira16").value;
      var r16 = document.getElementById("cr_receipt16").value;
      var de16 = document.getElementById("cr_deposit16").value;
      var ca16 = document.getElementById("cr_cityA16").value;

      var pdf = new jsPDF('landscape');
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(155, 21, cmonth);
          pdf.text(175, 21, cyear);
          pdf.text(38, 32.5, cbarangay);
          pdf.text(53, 37, ctrea);
          pdf.text(245, 32.5, ccity);
          pdf.text(234, 37, cpro);

          pdf.text(20, 54, fixDate(d1));
          pdf.text(20, 59, fixDate(d2));
          pdf.text(20, 64, fixDate(d3));
          pdf.text(20, 70, fixDate(d4));
          pdf.text(20, 75.5, fixDate(d5));
          pdf.text(20, 80, fixDate(d6));
          pdf.text(20, 85.5, fixDate(d7));
          pdf.text(20, 91.5, fixDate(d8));
          pdf.text(20, 96.5, fixDate(d9));
          pdf.text(20, 101.5, fixDate(d10));
          pdf.text(20, 107, fixDate(d11));
          pdf.text(20, 112, fixDate(d12));
          pdf.text(20, 117.5, fixDate(d13));
          pdf.text(20, 123, fixDate(d14));
          pdf.text(20, 128.5, fixDate(d15));
          pdf.text(20, 135, fixDate(d16));

          pdf.text(38, 54, p1);
          pdf.text(38, 59, p2);
          pdf.text(38, 64, p3);
          pdf.text(38, 70, p4);
          pdf.text(38, 75.5, p5);
          pdf.text(38, 80, p6);
          pdf.text(38, 85.5, p7);
          pdf.text(38, 91.5, p8);
          pdf.text(38, 96.5, p9);
          pdf.text(38, 101.5, p10);
          pdf.text(38, 107, p11);
          pdf.text(38, 112, p12);
          pdf.text(38, 117.5, p13);
          pdf.text(38, 123, p14);
          pdf.text(38, 128.5, p15);
          pdf.text(38, 135, p16);

          pdf.text(83, 54, ref1);
          pdf.text(83, 59,ref2);
          pdf.text(83, 64, ref3);
          pdf.text(83, 70, ref4);
          pdf.text(83, 75.5, ref5);
          pdf.text(83, 80, ref6);
          pdf.text(83, 85.5, ref7);
          pdf.text(83, 91.5, ref8);
          pdf.text(83, 96.5, ref9);
          pdf.text(83, 101.5, ref10);
          pdf.text(83, 107, ref11);
          pdf.text(83, 112, ref12);
          pdf.text(83, 117.5, ref13);
          pdf.text(83, 123, ref14);
          pdf.text(83, 128.5, ref15);
          pdf.text(83, 135, ref16);

          pdf.text(118, 54, r1);
          pdf.text(118, 59, r2);
          pdf.text(118, 64, r3);
          pdf.text(118, 70, r4);
          pdf.text(118, 75.5, r5);
          pdf.text(118, 80, r6);
          pdf.text(118, 85.5, r7);
          pdf.text(118, 91.5, r8);
          pdf.text(118, 96.5, r9);
          pdf.text(118, 101.5, r10);
          pdf.text(118, 107, r11);
          pdf.text(118, 112, r12);
          pdf.text(118, 117.5, r13);
          pdf.text(118, 123, r14);
          pdf.text(118, 128.5, r15);
          pdf.text(118, 135, r16);

          pdf.text(150, 54, de1);
          pdf.text(150, 59, de2);
          pdf.text(150, 64, de3);
          pdf.text(150, 70, de4);
          pdf.text(150, 75.5, de5);
          pdf.text(150, 80, de6);
          pdf.text(150, 85.5, de7);
          pdf.text(150, 91.5, de8);
          pdf.text(150, 96.5, de9);
          pdf.text(150, 101.5, de10);
          pdf.text(150, 107, de11);
          pdf.text(150, 112, de12);
          pdf.text(150, 117.5, de13);
          pdf.text(150, 123, de14);
          pdf.text(150, 128.5, de15);
          pdf.text(150, 135, de16);

          pdf.text(188, 54, rpt1);
          pdf.text(188, 59,rpt2);
          pdf.text(188, 64, rpt3);
          pdf.text(188, 70, rpt4);
          pdf.text(188, 75.5, rpt5);
          pdf.text(188, 80, rpt6);
          pdf.text(188, 85.5, rpt7);
          pdf.text(188, 91.5, rpt8);
          pdf.text(188, 96.5, rpt9);
          pdf.text(188, 101.5, rpt10);
          pdf.text(188, 107, rpt11);
          pdf.text(188, 112, rpt12);
          pdf.text(188, 117.5, rpt13);
          pdf.text(188, 123, rpt14);
          pdf.text(188, 128.5, rpt15);
          pdf.text(188, 135, rpt16);

          pdf.text(211, 54, ctc1);
          pdf.text(211, 59,ctc2);
          pdf.text(211, 64, ctc3);
          pdf.text(211, 70, ctc4);
          pdf.text(211, 75.5, ctc5);
          pdf.text(211, 80, ctc6);
          pdf.text(211, 85.5, ctc7);
          pdf.text(211, 91.5, ctc8);
          pdf.text(211, 96.5, ctc9);
          pdf.text(211, 101.5, ctc10);
          pdf.text(211, 107, ctc11);
          pdf.text(211, 112, ctc12);
          pdf.text(211, 117.5, ctc13);
          pdf.text(211, 123, ctc14);
          pdf.text(211, 128.5, ctc15);
          pdf.text(211, 135, ctc16);

          pdf.text(236, 54, ira1);
          pdf.text(236, 59,ira2);
          pdf.text(236, 64, ira3);
          pdf.text(236, 70, ira4);
          pdf.text(236, 75.5, ira5);
          pdf.text(236, 80, ira6);
          pdf.text(236, 85.5, ira7);
          pdf.text(236, 91.5, ira8);
          pdf.text(236, 96.5, ira9);
          pdf.text(236, 101.5, ira10);
          pdf.text(236, 107, ira11);
          pdf.text(236, 112, ira12);
          pdf.text(236, 117.5, ira13);
          pdf.text(236, 123, ira14);
          pdf.text(236, 128.5, ira15);
          pdf.text(236, 135, ira16);

          pdf.text(260, 54, ca1);
          pdf.text(260, 59,ca2);
          pdf.text(260, 64, ca3);
          pdf.text(260, 70, ca4);
          pdf.text(260, 75.5, ca5);
          pdf.text(260, 80, ca6);
          pdf.text(260, 85.5, ca7);
          pdf.text(260, 91.5, ca8);
          pdf.text(260, 96.5, ca9);
          pdf.text(260, 101.5, ca10);
          pdf.text(260, 107, ca11);
          pdf.text(260, 112, ca12);
          pdf.text(260, 117.5, ca13);
          pdf.text(260, 123, ca14);
          pdf.text(260, 128.5, ca15);
          pdf.text(260, 135, ca16);

          // pdf.text(50, 175.5, 'Barangay Treasurer');
          // pdf.text(178, 175.5, 'Date');

          pdf.save("Cash Receipts and Deposits Register "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/cr.jpg";  

    });
  } else if(document.getElementById("selectType").value == "type7") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){ 
      var month1 = document.getElementById("ch_month").value;
      var reg = document.getElementById("ch_reg").value;
      var barangay = document.getElementById("ch_barangay").value;
      var page = document.getElementById("ch_page").value;
      var treasurer = document.getElementById("ch_treasurer").value;
      var city = document.getElementById("ch_city").value;
      var province = document.getElementById("ch_province").value;
      
      var d1 = document.getElementById("ch_d1").value;
      var ri1 = document.getElementById("ch_ri1").value;
      var di1 = document.getElementById("ch_di1").value;
      var p1 = document.getElementById("ch_p1").value;
      var do1 = document.getElementById("ch_do1").value;
      var co1 = document.getElementById("ch_co1").value;
      var ref1 = document.getElementById("ch_ref1").value;
      var ba1 = document.getElementById("ch_ba1").value;
      var bb1 = document.getElementById("ch_bb1").value;

      var d2 = document.getElementById("ch_d2").value;
      var ri2 = document.getElementById("ch_ri2").value;
      var di2 = document.getElementById("ch_di2").value;
      var p2 = document.getElementById("ch_p2").value;
      var do2 = document.getElementById("ch_do2").value;
      var co2 = document.getElementById("ch_co2").value;
      var ref2 = document.getElementById("ch_ref2").value;
      var ba2 = document.getElementById("ch_ba2").value;
      var bb2 = document.getElementById("ch_bb2").value;

      var d3 = document.getElementById("ch_d3").value;
      var ri3 = document.getElementById("ch_ri3").value;
      var di3 = document.getElementById("ch_di3").value;
      var p3 = document.getElementById("ch_p3").value;
      var do3 = document.getElementById("ch_do3").value;
      var co3 = document.getElementById("ch_co3").value;
      var ref3 = document.getElementById("ch_ref3").value;
      var ba3 = document.getElementById("ch_ba3").value;
      var bb3 = document.getElementById("ch_bb3").value;

      var d4 = document.getElementById("ch_d4").value;
      var ri4 = document.getElementById("ch_ri4").value;
      var di4 = document.getElementById("ch_di4").value;
      var p4 = document.getElementById("ch_p4").value;
      var do4 = document.getElementById("ch_do4").value;
      var co4 = document.getElementById("ch_co4").value;
      var ref4 = document.getElementById("ch_ref4").value;
      var ba4 = document.getElementById("ch_ba4").value;
      var bb4 = document.getElementById("ch_bb4").value;

      var d5 = document.getElementById("ch_d5").value;
      var ri5 = document.getElementById("ch_ri5").value;
      var di5 = document.getElementById("ch_di5").value;
      var p5 = document.getElementById("ch_p5").value;
      var do5 = document.getElementById("ch_do5").value;
      var co5 = document.getElementById("ch_co5").value;
      var ref5 = document.getElementById("ch_ref5").value;
      var ba5 = document.getElementById("ch_ba5").value;
      var bb5 = document.getElementById("ch_bb5").value;

      var d6 = document.getElementById("ch_d6").value;
      var ri6 = document.getElementById("ch_ri6").value;
      var di6 = document.getElementById("ch_di6").value;
      var p6 = document.getElementById("ch_p6").value;
      var do6 = document.getElementById("ch_do6").value;
      var co6 = document.getElementById("ch_co6").value;
      var ref6 = document.getElementById("ch_ref6").value;
      var ba6 = document.getElementById("ch_ba6").value;
      var bb6 = document.getElementById("ch_bb6").value;

      var d7 = document.getElementById("ch_d7").value;
      var ri7 = document.getElementById("ch_ri7").value;
      var di7 = document.getElementById("ch_di7").value;
      var p7 = document.getElementById("ch_p7").value;
      var do7 = document.getElementById("ch_do7").value;
      var co7 = document.getElementById("ch_co7").value;
      var ref7 = document.getElementById("ch_ref7").value;
      var ba7 = document.getElementById("ch_ba7").value;
      var bb7 = document.getElementById("ch_bb7").value;

      var d8 = document.getElementById("ch_d8").value;
      var ri8 = document.getElementById("ch_ri8").value;
      var di8 = document.getElementById("ch_di8").value;
      var p8 = document.getElementById("ch_p8").value;
      var do8 = document.getElementById("ch_do8").value;
      var co8 = document.getElementById("ch_co8").value;
      var ref8 = document.getElementById("ch_ref8").value;
      var ba8 = document.getElementById("ch_ba8").value;
      var bb8 = document.getElementById("ch_bb8").value;

      var d9 = document.getElementById("ch_d9").value;
      var ri9 = document.getElementById("ch_ri9").value;
      var di9 = document.getElementById("ch_di9").value;
      var p9 = document.getElementById("ch_p9").value;
      var do9 = document.getElementById("ch_do9").value;
      var co9 = document.getElementById("ch_co9").value;
      var ref9 = document.getElementById("ch_ref9").value;
      var ba9 = document.getElementById("ch_ba9").value;
      var bb9 = document.getElementById("ch_bb9").value;

      var d10 = document.getElementById("ch_d10").value;
      var ri10 = document.getElementById("ch_ri10").value;
      var di10 = document.getElementById("ch_di10").value;
      var p10 = document.getElementById("ch_p10").value;
      var do10 = document.getElementById("ch_do10").value;
      var co10 = document.getElementById("ch_co10").value;
      var ref10 = document.getElementById("ch_ref10").value;
      var ba10 = document.getElementById("ch_ba10").value;
      var bb10 = document.getElementById("ch_bb10").value;

      var d11 = document.getElementById("ch_d11").value;
      var ri11 = document.getElementById("ch_ri11").value;
      var di11 = document.getElementById("ch_di11").value;
      var p11 = document.getElementById("ch_p11").value;
      var do11 = document.getElementById("ch_do11").value;
      var co11 = document.getElementById("ch_co11").value;
      var ref11 = document.getElementById("ch_ref11").value;
      var ba11 = document.getElementById("ch_ba11").value;
      var bb11 = document.getElementById("ch_bb11").value;

      var d12 = document.getElementById("ch_d12").value;
      var ri12 = document.getElementById("ch_ri12").value;
      var di12 = document.getElementById("ch_di12").value;
      var p12 = document.getElementById("ch_p12").value;
      var do12 = document.getElementById("ch_do12").value;
      var co12 = document.getElementById("ch_co12").value;
      var ref12 = document.getElementById("ch_ref12").value;
      var ba12 = document.getElementById("ch_ba12").value;
      var bb12 = document.getElementById("ch_bb12").value;

      var d13 = document.getElementById("ch_d13").value;
      var ri13 = document.getElementById("ch_ri13").value;
      var di13 = document.getElementById("ch_di13").value;
      var p13 = document.getElementById("ch_p13").value;
      var do13 = document.getElementById("ch_do13").value;
      var co13 = document.getElementById("ch_co13").value;
      var ref13 = document.getElementById("ch_ref13").value;
      var ba13 = document.getElementById("ch_ba13").value;
      var bb13 = document.getElementById("ch_bb13").value;

      var d14 = document.getElementById("ch_d14").value;
      var ri14 = document.getElementById("ch_ri14").value;
      var di14 = document.getElementById("ch_di14").value;
      var p14 = document.getElementById("ch_p14").value;
      var do14 = document.getElementById("ch_do14").value;
      var co14 = document.getElementById("ch_co14").value;
      var ref14 = document.getElementById("ch_ref14").value;
      var ba14 = document.getElementById("ch_ba14").value;
      var bb14 = document.getElementById("ch_bb14").value;

      var d15 = document.getElementById("ch_d15").value;
      var ri15 = document.getElementById("ch_ri15").value;
      var di15 = document.getElementById("ch_di15").value;
      var p15 = document.getElementById("ch_p15").value;
      var do15 = document.getElementById("ch_do15").value;
      var co15 = document.getElementById("ch_co15").value;
      var ref15 = document.getElementById("ch_ref15").value;
      var ba15 = document.getElementById("ch_ba15").value;
      var bb15 = document.getElementById("ch_bb15").value;

      var pdf = new jsPDF('landscape');
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(155, 21, month1);
          pdf.text(38, 28.5, barangay);
          pdf.text(53, 33, treasurer);
          pdf.text(176, 28.5, city);
          pdf.text(165, 33, province);
          pdf.text(247, 28.5, reg);
          pdf.text(247, 33, page);

          pdf.text(20, 55.5, fixDate(d1));
          pdf.text(20, 61, fixDate(d2));
          pdf.text(20, 66, fixDate(d3));
          pdf.text(20, 70.5, fixDate(d4));
          pdf.text(20, 76, fixDate(d5));
          pdf.text(20, 82.5, fixDate(d6));
          pdf.text(20, 89, fixDate(d7));
          pdf.text(20, 94.5, fixDate(d8));
          pdf.text(20, 100, fixDate(d9));
          pdf.text(20, 105.5, fixDate(d10));
          pdf.text(20, 111, fixDate(d11));
          pdf.text(20, 117.5, fixDate(d12));
          pdf.text(20, 124, fixDate(d13));
          pdf.text(20, 130, fixDate(d14));
          pdf.text(20, 135.5, fixDate(d15));

          pdf.text(41, 55.5, p1);
          pdf.text(41, 61, p2);
          pdf.text(41, 66, p3);
          pdf.text(41, 70.5, p4);
          pdf.text(41, 76, p5);
          pdf.text(41, 82.5, p6);
          pdf.text(41, 89, p7);
          pdf.text(41, 94.5, p8);
          pdf.text(41, 100, p9);
          pdf.text(41, 105.5, p10);
          pdf.text(41, 111, p11);
          pdf.text(41, 117.5, p12);
          pdf.text(41, 124, p13);
          pdf.text(41, 130, p14);
          pdf.text(41, 135.5, p15);

          pdf.text(86, 55.5, ref1);
          pdf.text(86, 61, ref2);
          pdf.text(86, 66, ref3);
          pdf.text(86, 70.5, ref4);
          pdf.text(86, 76, ref5);
          pdf.text(86, 82.5, ref6);
          pdf.text(86, 89, ref7);
          pdf.text(86, 94.5, ref8);
          pdf.text(86, 100, ref9);
          pdf.text(86, 105.5, ref10);
          pdf.text(86, 111, ref11);
          pdf.text(86, 117.5, ref12);
          pdf.text(86, 124, ref13);
          pdf.text(86, 130, ref14);
          pdf.text(86, 135.5, ref15);
          pdf.text(86, 141, getTotal("ch_ref").toString());

          pdf.text(113, 55.5, ri1);
          pdf.text(113, 61,ri2);
          pdf.text(113, 66, ri3);
          pdf.text(113, 70.5, ri4);
          pdf.text(113, 76, ri5);
          pdf.text(113, 82.5, ri6);
          pdf.text(113, 89, ri7);
          pdf.text(113, 94.5, ri8);
          pdf.text(113, 100, ri9);
          pdf.text(113, 105.5, ri10);
          pdf.text(113, 111, ri11);
          pdf.text(113, 117.5, ri12);
          pdf.text(113, 124, ri13);
          pdf.text(113, 130, ri14);
          pdf.text(113, 135.5, ri15);
          pdf.text(113, 141, getTotal("ch_ri").toString());

          pdf.text(136, 55.5, do1);
          pdf.text(136, 61,do2);
          pdf.text(136, 66, do3);
          pdf.text(136, 70.5, do4);
          pdf.text(136, 76, do5);
          pdf.text(136, 82.5, do6);
          pdf.text(136, 89, do7);
          pdf.text(136, 94.5, do8);
          pdf.text(136, 100, do9);
          pdf.text(136, 105.5, do10);
          pdf.text(136, 111, do11);
          pdf.text(136, 117.5, do12);
          pdf.text(136, 124, do13);
          pdf.text(136, 130, do14);
          pdf.text(136, 135.5, do15);
          pdf.text(136, 141, getTotal("ch_do").toString());

          pdf.text(161, 55.5, ba1);
          pdf.text(161, 61,ba2);
          pdf.text(161, 66, ba3);
          pdf.text(161, 70.5, ba4);
          pdf.text(161, 76, ba5);
          pdf.text(161, 82.5, ba6);
          pdf.text(161, 89, ba7);
          pdf.text(161, 94.5, ba8);
          pdf.text(161, 100, ba9);
          pdf.text(161, 105.5, ba10);
          pdf.text(161, 111, ba11);
          pdf.text(161, 117.5, ba12);
          pdf.text(161, 124, ba13);
          pdf.text(161, 130, ba14);
          pdf.text(161, 135.5, ba15);
          pdf.text(161, 141, getTotal("ch_ba").toString());

          pdf.text(187, 55.5, di1);
          pdf.text(187, 61, di2);
          pdf.text(187, 66, di3);
          pdf.text(187, 70.5, di4);
          pdf.text(187, 76, di5);
          pdf.text(187, 82.5, di6);
          pdf.text(187, 89, di7);
          pdf.text(187, 94.5, di8);
          pdf.text(187, 100, di9);
          pdf.text(187, 105.5, di10);
          pdf.text(187, 111, di11);
          pdf.text(187, 117.5, di12);
          pdf.text(187, 124, di13);
          pdf.text(187, 130, di14);
          pdf.text(187, 135.5, di15);
          pdf.text(187, 141, getTotal("ch_di").toString());


          pdf.text(217, 55.5, co1);
          pdf.text(217, 61,co2);
          pdf.text(217, 66, co3);
          pdf.text(217, 70.5, co4);
          pdf.text(217, 76, co5);
          pdf.text(217, 82.5, co6);
          pdf.text(217, 89, co7);
          pdf.text(217, 94.5, co8);
          pdf.text(217, 100, co9);
          pdf.text(217, 105.5, co10);
          pdf.text(217, 111, co11);
          pdf.text(217, 117.5, co12);
          pdf.text(217, 124, co13);
          pdf.text(217, 130, co14);
          pdf.text(217, 135.5, co15);
          pdf.text(217, 141, getTotal("ch_co").toString());

          pdf.text(247, 55.5, bb1);
          pdf.text(247, 61,bb2);
          pdf.text(247, 66, bb3);
          pdf.text(247, 70.5, bb4);
          pdf.text(247, 76, bb5);
          pdf.text(247, 82.5, bb6);
          pdf.text(247, 89, bb7);
          pdf.text(247, 94.5, bb8);
          pdf.text(247, 100, bb9);
          pdf.text(247, 105.5, bb10);
          pdf.text(247, 111, bb11);
          pdf.text(247, 117.5, bb12);
          pdf.text(247, 124, bb13);
          pdf.text(247, 130, bb14);
          pdf.text(247, 135.5, bb15);
          pdf.text(247, 141, getTotal("ch_bb").toString());

          pdf.text(26, 180.5, treasurer);
          // pdf.text(85, 180.5, 'Date');
          // pdf.text(219, 174, 'Date');

          pdf.save("Cash On Hand and In Bank Register "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/ch.jpg"; 
    });
  } else if(document.getElementById("selectType").value == "type8") {
    
    $('#modal_okay_print').replaceWith($('#modal_okay_print').clone());
    var btn = document.getElementById("modal_okay_print");
    var date = new Date(Date.now());
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();


    btn.addEventListener('click', function(event){ 
      var month1 = document.getElementById("cd_month").value;
      var reg = document.getElementById("cd_reg").value;
      var barangay = document.getElementById("cd_barangay").value;
      var page = document.getElementById("cd_page").value;
      var treasurer = document.getElementById("cd_treasurer").value;
      var city = document.getElementById("cd_city").value;
      var province = document.getElementById("cd_province").value; 

      var d1 = document.getElementById("cd_d1").value;
      var p1 = document.getElementById("cd_p1").value;
      var ref1 = document.getElementById("cd_ref1").value;
      var ca1 = document.getElementById("cd_ca1").value;
      var di1 = document.getElementById("cd_di1").value;
      var ba1 = document.getElementById("cd_ba1").value;
      var bpa1 = document.getElementById("cd_bpa1").value;
      var bpb1 = document.getElementById("cd_bpb1").value;
      var bpc1 = document.getElementById("cd_bpc1").value;
      var w1 = document.getElementById("cd_w1").value;

      var d2 = document.getElementById("cd_d2").value;
      var p2 = document.getElementById("cd_p2").value;
      var ref2 = document.getElementById("cd_ref2").value;
      var ca2 = document.getElementById("cd_ca2").value;
      var di2 = document.getElementById("cd_di2").value;
      var ba2 = document.getElementById("cd_ba2").value;
      var bpa2 = document.getElementById("cd_bpa2").value;
      var bpb2 = document.getElementById("cd_bpb2").value;
      var bpc2 = document.getElementById("cd_bpc2").value;
      var w2 = document.getElementById("cd_w2").value;

      var d3 = document.getElementById("cd_d3").value;
      var p3 = document.getElementById("cd_p3").value;
      var ref3 = document.getElementById("cd_ref3").value;
      var ca3 = document.getElementById("cd_ca3").value;
      var di3 = document.getElementById("cd_di3").value;
      var ba3 = document.getElementById("cd_ba3").value;
      var bpa3 = document.getElementById("cd_bpa3").value;
      var bpb3 = document.getElementById("cd_bpb3").value;
      var bpc3 = document.getElementById("cd_bpc3").value;
      var w3 = document.getElementById("cd_w3").value;

      var d4 = document.getElementById("cd_d4").value;
      var p4 = document.getElementById("cd_p4").value;
      var ref4 = document.getElementById("cd_ref4").value;
      var ca4 = document.getElementById("cd_ca4").value;
      var di4 = document.getElementById("cd_di4").value;
      var ba4 = document.getElementById("cd_ba4").value;
      var bpa4 = document.getElementById("cd_bpa4").value;
      var bpb4 = document.getElementById("cd_bpb4").value;
      var bpc4 = document.getElementById("cd_bpc4").value;
      var w4 = document.getElementById("cd_w4").value;

      var d5 = document.getElementById("cd_d5").value;
      var p5 = document.getElementById("cd_p5").value;
      var ref5 = document.getElementById("cd_ref5").value;
      var ca5 = document.getElementById("cd_ca5").value;
      var di5 = document.getElementById("cd_di5").value;
      var ba5 = document.getElementById("cd_ba5").value;
      var bpa5 = document.getElementById("cd_bpa5").value;
      var bpb5 = document.getElementById("cd_bpb5").value;
      var bpc5 = document.getElementById("cd_bpc5").value;
      var w5 = document.getElementById("cd_w5").value;

      var d6 = document.getElementById("cd_d6").value;
      var p6 = document.getElementById("cd_p6").value;
      var ref6 = document.getElementById("cd_ref6").value;
      var ca6 = document.getElementById("cd_ca6").value;
      var di6 = document.getElementById("cd_di6").value;
      var ba6 = document.getElementById("cd_ba6").value;
      var bpa6 = document.getElementById("cd_bpa6").value;
      var bpb6 = document.getElementById("cd_bpb6").value;
      var bpc6 = document.getElementById("cd_bpc6").value;
      var w6 = document.getElementById("cd_w6").value;

      var d7 = document.getElementById("cd_d7").value;
      var p7 = document.getElementById("cd_p7").value;
      var ref7 = document.getElementById("cd_ref7").value;
      var ca7 = document.getElementById("cd_ca7").value;
      var di7 = document.getElementById("cd_di7").value;
      var ba7 = document.getElementById("cd_ba7").value;
      var bpa7 = document.getElementById("cd_bpa7").value;
      var bpb7 = document.getElementById("cd_bpb7").value;
      var bpc7 = document.getElementById("cd_bpc7").value;
      var w7 = document.getElementById("cd_w7").value;

      var d8 = document.getElementById("cd_d8").value;
      var p8 = document.getElementById("cd_p8").value;
      var ref8 = document.getElementById("cd_ref8").value;
      var ca8 = document.getElementById("cd_ca8").value;
      var di8 = document.getElementById("cd_di8").value;
      var ba8 = document.getElementById("cd_ba8").value;
      var bpa8 = document.getElementById("cd_bpa8").value;
      var bpb8 = document.getElementById("cd_bpb8").value;
      var bpc8 = document.getElementById("cd_bpc8").value;
      var w8 = document.getElementById("cd_w8").value;

      var d9 = document.getElementById("cd_d9").value;
      var p9 = document.getElementById("cd_p9").value;
      var ref9 = document.getElementById("cd_ref9").value;
      var ca9 = document.getElementById("cd_ca9").value;
      var di9 = document.getElementById("cd_di9").value;
      var ba9 = document.getElementById("cd_ba9").value;
      var bpa9 = document.getElementById("cd_bpa9").value;
      var bpb9 = document.getElementById("cd_bpb9").value;
      var bpc9 = document.getElementById("cd_bpc9").value;
      var w9 = document.getElementById("cd_w9").value;

      var d10 = document.getElementById("cd_d10").value;
      var p10 = document.getElementById("cd_p10").value;
      var ref10 = document.getElementById("cd_ref10").value;
      var ca10 = document.getElementById("cd_ca10").value;
      var di10 = document.getElementById("cd_di10").value;
      var ba10 = document.getElementById("cd_ba10").value;
      var bpa10 = document.getElementById("cd_bpa10").value;
      var bpb10 = document.getElementById("cd_bpb10").value;
      var bpc10 = document.getElementById("cd_bpc10").value;
      var w10 = document.getElementById("cd_w10").value;

      var d11 = document.getElementById("cd_d11").value;
      var p11 = document.getElementById("cd_p11").value;
      var ref11 = document.getElementById("cd_ref11").value;
      var ca11 = document.getElementById("cd_ca11").value;
      var di11 = document.getElementById("cd_di11").value;
      var ba11 = document.getElementById("cd_ba11").value;
      var bpa11 = document.getElementById("cd_bpa11").value;
      var bpb11 = document.getElementById("cd_bpb11").value;
      var bpc11 = document.getElementById("cd_bpc11").value;
      var w11 = document.getElementById("cd_w11").value;

      var d12 = document.getElementById("cd_d12").value;
      var p12 = document.getElementById("cd_p12").value;
      var ref12 = document.getElementById("cd_ref12").value;
      var ca12 = document.getElementById("cd_ca12").value;
      var di12 = document.getElementById("cd_di12").value;
      var ba12 = document.getElementById("cd_ba12").value;
      var bpa12 = document.getElementById("cd_bpa12").value;
      var bpb12 = document.getElementById("cd_bpb12").value;
      var bpc12 = document.getElementById("cd_bpc12").value;
      var w12 = document.getElementById("cd_w12").value;

      var d13 = document.getElementById("cd_d13").value;
      var p13 = document.getElementById("cd_p13").value;
      var ref13 = document.getElementById("cd_ref13").value;
      var ca13 = document.getElementById("cd_ca13").value;
      var di13 = document.getElementById("cd_di13").value;
      var ba13 = document.getElementById("cd_ba13").value;
      var bpa13 = document.getElementById("cd_bpa13").value;
      var bpb13 = document.getElementById("cd_bpb13").value;
      var bpc13 = document.getElementById("cd_bpc13").value;
      var w13 = document.getElementById("cd_w13").value;

      var d14 = document.getElementById("cd_d14").value;
      var p14 = document.getElementById("cd_p14").value;
      var ref14 = document.getElementById("cd_ref14").value;
      var ca14 = document.getElementById("cd_ca14").value;
      var di14 = document.getElementById("cd_di14").value;
      var ba14 = document.getElementById("cd_ba14").value;
      var bpa14 = document.getElementById("cd_bpa14").value;
      var bpb14 = document.getElementById("cd_bpb14").value;
      var bpc14 = document.getElementById("cd_bpc14").value;
      var w14 = document.getElementById("cd_w14").value;

      var d15 = document.getElementById("cd_d15").value;
      var p15 = document.getElementById("cd_p15").value;
      var ref15 = document.getElementById("cd_ref15").value;
      var ca15 = document.getElementById("cd_ca15").value;
      var di15 = document.getElementById("cd_di15").value;
      var ba15 = document.getElementById("cd_ba15").value;
      var bpa15 = document.getElementById("cd_bpa15").value;
      var bpb15 = document.getElementById("cd_bpb15").value;
      var bpc15 = document.getElementById("cd_bpc15").value;
      var w15 = document.getElementById("cd_w15").value;

      var pdf = new jsPDF('landscape');
      var img = new Image;
      img.onload = function() {
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(this, 0, 0,width,height);
          pdf.setFontSize(10);
          pdf.setFont("helvetica");

          pdf.text(155, 21, month1);
          pdf.text(38, 28.5, barangay);
          pdf.text(53, 33, treasurer);
          pdf.text(176, 28.5, city);
          pdf.text(165, 33, province);
          pdf.text(247, 28.5, reg);
          pdf.text(247, 33, page);

          pdf.text(20, 55.5, fixDate(d1));
          pdf.text(20, 61, fixDate(d2));
          pdf.text(20, 65.5, fixDate(d3));
          pdf.text(20, 70.5, fixDate(d4));
          pdf.text(20, 75.5, fixDate(d5));
          pdf.text(20, 80.5, fixDate(d6));
          pdf.text(20, 85, fixDate(d7));
          pdf.text(20, 89.5, fixDate(d8));
          pdf.text(20, 95, fixDate(d9));
          pdf.text(20, 101, fixDate(d10));
          pdf.text(20, 106.5, fixDate(d11));
          pdf.text(20, 112.5, fixDate(d12));
          pdf.text(20, 119, fixDate(d13));
          pdf.text(20, 125, fixDate(d14));
          pdf.text(20, 131, fixDate(d15));

          pdf.text(41, 55.5, p1);
          pdf.text(41, 61, p2);
          pdf.text(41, 65.5, p3);
          pdf.text(41, 70.5, p4);
          pdf.text(41, 75.5, p5);
          pdf.text(41, 80.5, p6);
          pdf.text(41, 85, p7);
          pdf.text(41, 89.5, p8);
          pdf.text(41, 95, p9);
          pdf.text(41, 101, p10);
          pdf.text(41, 106.5, p11);
          pdf.text(41, 112.5, p12);
          pdf.text(41, 119, p13);
          pdf.text(41, 125, p14);
          pdf.text(41, 131, p15);

          pdf.text(86, 55.5, ref1);
          pdf.text(86, 61, ref2);
          pdf.text(86, 65.5, ref3);
          pdf.text(86, 70.5, ref4);
          pdf.text(86, 75.5, ref5);
          pdf.text(86, 80.5, ref6);
          pdf.text(86, 85, ref7);
          pdf.text(86, 89.5, ref8);
          pdf.text(86, 95, ref9);
          pdf.text(86, 101, ref10);
          pdf.text(86, 106.5, ref11);
          pdf.text(86, 112.5, ref12);
          pdf.text(86, 119, ref13);
          pdf.text(86, 125, ref14);
          pdf.text(86, 131, ref15);
          pdf.text(86, 136, getTotal("cd_ref").toString());

          pdf.text(109, 55.5, ca1);
          pdf.text(109, 61, ca2);
          pdf.text(109, 65.5, ca3);
          pdf.text(109, 70.5, ca4);
          pdf.text(109, 75.5, ca5);
          pdf.text(109, 80.5, ca6);
          pdf.text(109, 85, ca7);
          pdf.text(109, 89.5, ca8);
          pdf.text(109, 95, ca9);
          pdf.text(109, 101, ca10);
          pdf.text(109, 106.5, ca11);
          pdf.text(109, 112.5, ca12);
          pdf.text(109, 119, ca13);
          pdf.text(109, 125, ca14);
          pdf.text(109, 131, ca15);
          pdf.text(109, 136, getTotal("cd_ca").toString());

          pdf.text(135, 55.5, di1);
          pdf.text(135, 61,di2);
          pdf.text(135, 65.5, di3);
          pdf.text(135, 70.5, di4);
          pdf.text(135, 75.5, di5);
          pdf.text(135, 80.5, di6);
          pdf.text(135, 85, di7);
          pdf.text(135, 89.5, di8);
          pdf.text(135, 95, di9);
          pdf.text(135, 101, di10);
          pdf.text(135, 106.5, di11);
          pdf.text(135, 112.5, di12);
          pdf.text(135, 119, di13);
          pdf.text(135, 125, di14);
          pdf.text(135, 131, di15);
          pdf.text(135, 136, getTotal("cd_di").toString());

          pdf.text(163, 55.5, ba1);
          pdf.text(163, 61,ba2);
          pdf.text(163, 65.5, ba3);
          pdf.text(163, 70.5, ba4);
          pdf.text(163, 75.5, ba5);
          pdf.text(163, 80.5, ba6);
          pdf.text(163, 85, ba7);
          pdf.text(163, 89.5, ba8);
          pdf.text(163, 95, ba9);
          pdf.text(163, 101, ba10);
          pdf.text(163, 106.5, ba11);
          pdf.text(163, 112.5, ba12);
          pdf.text(163, 119, ba13);
          pdf.text(163, 125, ba14);
          pdf.text(163, 131, ba15);
          pdf.text(163, 136, getTotal("cd_ba").toString());

          pdf.text(187, 55.5, bpa1);
          pdf.text(187, 61,bpa2);
          pdf.text(187, 65.5, bpa3);
          pdf.text(187, 70.5, bpa4);
          pdf.text(187, 75.5, bpa5);
          pdf.text(187, 80.5, bpa6);
          pdf.text(187, 85, bpa7);
          pdf.text(187, 89.5, bpa8);
          pdf.text(187, 95, bpa9);
          pdf.text(187, 101, bpa10);
          pdf.text(187, 106.5, bpa11);
          pdf.text(187, 112.5, bpa12);
          pdf.text(187, 119, bpa13);
          pdf.text(187, 125, bpa14);
          pdf.text(187, 131, bpa15);
          pdf.text(187, 136, getTotal("cd_bpa").toString());

          pdf.text(205, 55.5, bpb1);
          pdf.text(205, 61,bpb2);
          pdf.text(205, 65.5, bpb3);
          pdf.text(205, 70.5, bpb4);
          pdf.text(205, 75.5, bpb5);
          pdf.text(205, 80.5, bpb6);
          pdf.text(205, 85, bpb7);
          pdf.text(205, 89.5, bpb8);
          pdf.text(205, 95, bpb9);
          pdf.text(205, 101, bpb10);
          pdf.text(205, 106.5, bpb11);
          pdf.text(205, 112.5, bpb12);
          pdf.text(205, 119, bpb13);
          pdf.text(205, 125, bpb14);
          pdf.text(205, 131, bpb15);
          pdf.text(205, 136, getTotal("cd_bpb").toString());

          pdf.text(225, 55.5, bpc1);
          pdf.text(225, 61,bpc2);
          pdf.text(225, 65.5, bpc3);
          pdf.text(225, 70.5, bpc4);
          pdf.text(225, 75.5, bpc5);
          pdf.text(225, 80.5, bpc6);
          pdf.text(225, 85, bpc7);
          pdf.text(225, 89.5, bpc8);
          pdf.text(225, 95, bpc9);
          pdf.text(225, 101, bpc10);
          pdf.text(225, 106.5, bpc11);
          pdf.text(225, 112.5, bpc12);
          pdf.text(225, 119, bpc13);
          pdf.text(225, 125, bpc14);
          pdf.text(225, 131, bpc15);
          pdf.text(225, 136, getTotal("cd_bpc").toString());

          pdf.text(247, 55.5, w1);
          pdf.text(247, 61,w2);
          pdf.text(247, 65.5, w3);
          pdf.text(247, 70.5, w4);
          pdf.text(247, 75.5, w5);
          pdf.text(247, 80.5, w6);
          pdf.text(247, 85, w7);
          pdf.text(247, 89.5, w8);
          pdf.text(247, 95, w9);
          pdf.text(247, 101, w10);
          pdf.text(247, 106.5, w11);
          pdf.text(247, 112.5, w12);
          pdf.text(247, 119, w13);
          pdf.text(247, 125, w14);
          pdf.text(247, 131, w15);
          pdf.text(247, 136, getTotal("cd_w").toString());

          pdf.text(110, 179.5, treasurer);
          // pdf.text(185, 179.5, 'Date');

          pdf.save("Cash Disbursement Register "+ returnMonth(month)+" "+day+", "+year +".pdf");
      };

      img.crossOrigin = "";  // for demo as we are at different origin than image
      img.src = "/images/cd.jpg";  

    });
  }
}

function getTotal(id) {
  var i;
  var total = 0;
  total = parseFloat(total);
  for(i=1; i <= 15; i++) {
    if(document.getElementById(id+i).value != "") {
      total+= parseFloat(document.getElementById(id+i).value);
    }
    
  }

  return total;
}

function clearSession() {
  localStorage.removeItem("user");
  window.location.replace("login");
}


function fixDate(date) {
  
  var d = new Date(date);
  if(d.toDateString() != "Invalid Date") {
    return fixMonth(d.getMonth())+"/"+fixDay(d.getDate())+"/"+d.getFullYear().toString().substr(2,2);  
  } else {
    return "";
  }
  
}

function fixMonth(month) {
  var temp = month+1;
  if(temp <= 9) {
      return "0"+temp;
  } else {
      return temp;
  }
}

function fixDay(date) {
  if(date <= 9) {
      return "0"+date;
  } else {
      return date;
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