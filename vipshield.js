/* This file is: script.js */
function getID(i) {
  return document.getElementById(i);
}
function getVal(i) {
  return getID(i).value;
}

function meas() {
 //IMPLEMENT ME, PLEASE!
}
var submitButton = document.getElementById("submit");
submitButton.onclick = function() {
  meas();
};
function meas() {
  var IOsw = parseInt( getVal("IOsw") );
  var Ebeam = parseInt( getVal("Ebeam") );
  var NamTar = parseInt( getVal("NamTar") );
  var TarLen = parseInt( getVal("TarLen") );
  var TarRad =parseInt( getVal("TarRad") );
  var IattSW =parseInt( getVal("IattSW") );
  var NamShl =parseInt( getVal("NamShl") );
  var AngShl =parseInt( getVal("AngShl") );
  var DisShl =parseInt( getVal("DisShl") );
  var ThkShl =parseInt( getVal("ThkShl") );
  var NTheta =parseInt( getVal("NTheta") );
  var DTheta =parseInt( getVal("DTheta") );
  var Theta0 =parseInt( getVal("Theta0") );
  var AddCONC =parseInt( getVal("AddCONC") );
  var AddALNH =parseInt( getVal("AddALNH") );
  var AddFE = parseInt( getVal("AddFE") );
  var AddPB = parseInt( getVal("AddPB") );
  var AddPBNH =parseInt( getVal("AddPBNH") );
  var AddEARTH =parseInt( getVal("AddEARTH") );
  if ( isNaN(IOsw) ) { IOsw = 1; }
  if ( isNaN(Ebeam) ) { Ebeam = 10; }
  if ( isNaN(NamTar) ) { NamTar = "FE"; }
  if ( isNaN(TarLen) ) { TarLen = 12*2.54; }
  if ( isNaN(TarRad) ) { TarRad = 2*2.54; }
  if ( isNaN(IattSW) ) { IattSW = 0; }
  if ( isNaN(NamShl) ) { NamShl = "CONC"; }
  if ( isNaN(AngShl) ) { AngShl = 90; }
  if ( isNaN(DisShl) ) { DisShl = 39.370*2.54; }
  if ( isNaN(ThkShl) ) { ThkShl = 0*2.54; }
  if ( isNaN(NTheta) ) { NTheta = 1; }
  if ( isNaN(DTheta) ) { DTheta = 0; }
  if ( isNaN(Theta0) ) { Theta0 = 90; }
  if ( isNaN(AddCONC) ) { AddCONC = 0*2.54; }
  if ( isNaN(AddALNH) ) { AddALNH = 0*2.54; }
  if ( isNaN(AddFE) ) { AddFE = 0*2.54; }
  if ( isNaN(AddPB) ) { AddPB = 0*2.54; }
  if ( isNaN(AddPBNH) ) { AddPBNH = 0*2.54; }
  if ( isNaN(AddEARTH) ) { AddEARTH = 0*2.54; }
  /*document.write("<br>IOsw=",IOsw);
  document.write("<br>Ebeam=",Ebeam);
  document.write("<br>NamTar=",NamTar);
  document.write("<br>TarLen=",TarLen);
  document.write("<br>TarRad=",TarRad);
  document.write("<br>IattSW=",IattSW);
  document.write("<br>NamShl=",NamShl);
  document.write("<br>AngShl=",AngShl);
  document.write("<br>DisShl=",DisShl);
  document.write("<br>ThkShl=",ThkShl);
  document.write("<br>NTheta=",NTheta);
  document.write("<br>DTheta=",DTheta);
  document.write("<br>Theta0=",Theta0);
  document.write("<br>AddCONC=",AddCONC);
  document.write("<br>AddALNH=",AddALNH);
  document.write("<br>AddFE=",AddFE);
  document.write("<br>AddPB=",AddPB);
  document.write("<br>AddPBNH=",AddPBNH);
  document.write("<br>AddEARTH=",AddEARTH);*/
  var MatID=['CONC','ALNH','FE','PB','PBNH','EARTH'];
var Zmat=[13.0, 13.0,26.0, 82.0, 82.0,13.0];
var Amat=[26.98, 26.98, 55.85, 207.19, 207.19,26.98];
var RHOmat=[2.35, 2.70, 7.87, 11.35, 11.35,1.7];
var RLmat=[26.7, 26.7, 13.84, 6.37, 6.37,26.7];
var XMUmat=[11.1, 11.1, 10.7, 14.2, 14.2,11.1];
var Isorc=0;
var Xmfp= new Array(5);
Xmfp[1]=[30.0, 30.0, 47.0, 97.0, 135.0,30.0];
Xmfp[2]=[55.0, 55.0, 145.0, 200.0, 200.0,55.0];
Xmfp[3]=[120.0, 120.0, 145.0, 200.0, 200.0,120];
Xmfp[4]=[42.0, 42.0, 33.6, 24.0, 24.0,42.0];
Xmfp[5]=[120.0, 120.0, 145.0, 200.0, 200.0,120.0];
var E_HEN=[0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21,0.22, 0.23, 0.24, 0.25, 0.27, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.70, 0.80,0.90, 1.00];
var CS_HEN=[0.00444,0.00711, 0.0111, 0.0156, 0.0222, 0.0298, 0.0382,0.0489, 0.0547, 0.0622, 0.0711, 0.0889, 0.116, 0.162, 0.211, 0.276, 0.338, 0.404, 0.502, 0.601, 0.711,0.813, 1.00];
var DegRad=1.745329e-2;
var ThrHEN=0.150e0;
TarLenG=0.01e0;
TarLenN=17.332196e0;
TarRadG=1.189869e0;
TarRadN=3.736411e0;
if(NamTar=="CONC"){
  var IDtar=0;
}
else if (NamTar=="ALNH"){
  var IDtar=1;
}
else if (NamTar=="FE"){
  var IDtar=2;
}
else if (NamTar=="PB"){
  var IDtar=3;
}
  else if (NamTar=="PBNH"){
    var IDtar=4;
}
else if(NamTar=="EARTH") {
  var IDtar=5;
}
else document.write("Program stopped: Bad values for Target Name=",NamTar);
if(NamShl=="CONC"){
  var IDshl=0;
}
else if (NamShl=="ALNH"){
  var IDshl=1;
}
else if (NamShl=="FE"){
  var IDshl=2;
}
else if (NamShl=="PB"){
  var IDshl=3;
}
else if (NamShl=="PBNH"){
  var IDshl=4;
}
else if(NamShl=="EARTH") {
  var IDshl=5;
}
else {
  document.write("Program stopped: Bad values for Shield Name=",NamShl);
  }
for (ITheta=1;ITheta<=NTheta;ITheta++) {
  var Theta=Theta0+(ITheta-1)*DTheta;
  //document.write("<br>Theta=",Theta);
  var AMTdeg=AngShl-Theta;
 //document.write("<br>AMTdeg=",AMTdeg);
  if(Math.abs(AMTdeg)>= 90) {
   document.write("Program stopped: Bad values for AngShl,Theta=",AngShl,Theta);
  }
  var CosAMT= Math.cos(DegRad*AMTdeg);
  //document.write("<br>CosAMT=",CosAMT);
  var SltShl=ThkShl*RHOmat[IDshl]/CosAMT;
  //document.write("<br>IDshl=",IDshl);
  //document.write("<br>RHOmat[IDshl]=",RHOmat[IDshl]);
//  document.write("<br>SltShl=",SltShl);
  var Rsq=Math.pow(((DisShl+ThkShl)/CosAMT),2);
//  document.write("<br>DisShl=",DisShl);
 //document.write("<br>ThkShl=",ThkShl);
//  document.write("<br>Rsq=",Rsq);
  var SltCONC=AddCONC*RHOmat[0]/CosAMT;
//  document.write("<br>SltCONC=",SltCONC);
  var SltALNH=AddALNH*RHOmat[1]/CosAMT;
//  document.write("<br>SltALNH=",SltALNH);
  var SltFE=AddFE*RHOmat[2]/CosAMT;
  //document.write("<br>SltFE=",SltFE);
  var SltPB=AddPB*RHOmat[3]/CosAMT;
//  document.write("<br>AddPB=",AddPB);
  var SltPBNH=AddPBNH*RHOmat[4]/CosAMT;
// document.write("<br>AddPBNH=",AddPBNH);
  var SltEARTH=AddEARTH*RHOmat[5]/CosAMT;
 //document.write("<br>AddEARTH=",AddEARTH);
  var Dose = [];
  for (Isorc=1;Isorc<=5;Isorc++){
      var D1=Sorc(Isorc,Theta, IDtar,TarLen,TarRad,IattSW,Ebeam,AMTdeg,DegRad);
      //document.write("<br>D1=",D1);
        var Attn=Math.exp(-SltShl/Xmfp[Isorc][IDshl])*Math.exp(-SltCONC/Xmfp[Isorc][0])*Math.exp(-SltALNH/Xmfp[Isorc][1])*Math.exp(-SltFE/Xmfp[Isorc][2])*Math.exp(-SltPB/Xmfp[Isorc][3])*Math.exp(-SltPBNH/Xmfp[Isorc][4])*Math.exp(-SltEARTH/Xmfp[Isorc][5])/Rsq;
      //  document.write("<br>Pri Attn=",Math.exp(-SltShl/Xmfp[Isorc][IDshl]));
      //document.write("<br>AddCONC Attn=",Math.exp(-SltCONC/Xmfp[Isorc][0]));
    //    document.write("<br>AddALNH Attn=",Math.exp(-SltALNH/Xmfp[Isorc][1]));
    //    document.write("<br>AddFE Attn=",Math.exp(-SltFE/Xmfp[Isorc][2]));
    //    document.write("<br>AddPB Attn=",Math.exp(-SltPB/Xmfp[Isorc][3]));
    //    document.write("<br>AddPBNH Attn=",Math.exp(-SltPBNH/Xmfp[Isorc][4]));
    //    document.write("<br>AddEARTH Attn=",Math.exp(-SltEARTH/Xmfp[Isorc][5]));
    //    document.write("<br>Attn=",Attn);
          Dose[Isorc]=D1*Attn;
      //    document.write("<br>Dose=",Dose[Isorc]);
  } //end of Isorc loop
if(ITheta==1){
  //document.write("<br><hr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspRESULT OF CALCULATION<hr>");
}
var EkWh=2.25e15;
var DoseN= Dose[1]+Dose[2]+Dose[3]; //Total neutron Dose
var DoseG = Dose[4]+Dose[5]; //Total photon DoseG
var DoseT=DoseN + DoseG; //Total DoseG
var GNratio = DoseG/DoseN;
//var Theta=document.getElementById("PA");
//var GNratio= getID("GNRatio");
var DoseeGRN=Dose[1];
var DosepGRN=Dose[1]*EkWh;
//var DoseeGRN=getID("eGRN");
//var DosepGRN=getID("pGRN");
//var DoseeMID=Dose[2];
//var DosepMID=Dose[2]*EkWh;
//var DoseeMID=getID("eMID");
//var DosepMID=getID("pMID");
//var DoseeHEN=Dose[3];
//var DosepHEN=Dose[3]*EkWh;
//var DoseeHEN=getID("eHEN");
//var DosepHEN=getID("pHEN");
//var DoseN=getID("eTotalNeutron");
//var DoseNp=DoseN*EkWh;
//var DoseNp=getID("pTotalNeutron");
//var DoseeGamD=Dose[4];
//var DosepGamD=Dose[4]*EkWh;
//var DoseeGamD=getID("eGamD");
//var DosepGamD=getID("pGamD");
//var DoseeGamI=Dose[5];
//var DosepGamI=Dose[5]*EkWh;
//var DoseeGamI=getID("eGamI");
//var DosepGamI=getID("pGamI");
//var DoseG=getID("eTotalGamma");
//var DoseGp=DoseG*EkWh;
//var DoseGp=getID("pTotalGamma");
//var DoseT=getID("eTotal");
//var DoseTp=DoseT*EkWh;
//var DoseTp=getID("pTotal");
//Theta.innerHTML=PA.toString();
/*document.getElementById("PA").innerHTML ="Production angle="+Theta+"  degree";
document.getElementById("GNRatio").innerHTML =GNratio;
document.write("<br>GNratio=",GNratio);
document.getElementById("eGRN").innerHTML =DoseeGRN;
document.getElementById("pGRN").innerHTML =DosepGRN;
document.getElementById("eMID").innerHTML =DoseeMID;
document.getElementById("pMID").innerHTML =DosepMID;
document.getElementById("eHEN").innerHTML =DoseeHEN;
document.getElementById("pHEN").innerHTML =DosepHEN;
document.getElementById("eTotalNeutron").innerHTML =DoseN;
document.getElementById("pTotalNeutron").innerHTML =DoseNp;
document.getElementById("eGamD").innerHTML =DoseeGamD;
document.getElementById("pGamD").innerHTML =DosepGamD;
document.getElementById("eGamI").innerHTML =DoseeGamI;
document.getElementById("pGamI").innerHTML =DosepGamI;
document.getElementById("eTotalGamma").innerHTML =DoseG;
document.getElementById("pTotalGamma").innerHTML =DoseGp;
document.getElementById("eTotal").innerHTML =DoseT;
document.getElementById("pTotal").innerHTML =DoseTp;*/
//GNratio.innerHTML='G/N ratio= <span id="GNRatio"></span>';
//GNRatio.innerHTML=GNRatio.toString();
//DoseeGRN.innerHTML='DoseeGRN= <span id="eGRN"></span>';
//DosepGRN.innerHTML='DosepGRN= <span id="pGRN"></span>';
//DoseeMID.innerHTML='DoseeMID= <span id="eMID"></span>';
//DosepMID.innerHTML='DosepMID= <span id="pMID"></span>';
//DoseeHEN.innerHTML='DoseeHEN= <span id="eHEN"></span>';
//DosepHEN.innerHTML='DosepHEN= <span id="pHEN"></span>';
//DoseN.innerHTML='DoseN= <span id="eTotalNeutron"></span>';
//DoseNp.innerHTML='DoseNp= <span id="pTotalNeutron"></span>';
//DoseeGamD.innerHTML='DoseeGamD= <span id="eGamD"></span>';
//DosepGamD.innerHTML='DosepGamD= <span id="pGamD"></span>';
//DoseeGamI.innerHTML='DoseeGamI= <span id="eGamI"></span>';
//DosepGamI.innerHTML='DosepGamI= <span id="pGamI"></span>';
//DoseG.innerHTML='DoseG= <span id="eTotalGamma"></span>';
//DoseGp.innerHTML='DoseGp= <span id="pTotalGamma"></span>';
//DoseT.innerHTML='DoseT= <span id="eTotal"></span>';
//DoseTp.innerHTML='DoseTp= <span id="pTotal"></span>';
//document.getElementById("PA").innerHTML = "Production Angle : <font color='red'>" + Theta0 + "</font>";
//document.getElementById("GNRatio").innerHTML="GN Ratio= <font color='red'>" + GNratio + "</font>";
document.getElementById("PA").innerHTML="<hr>"+"Production Angle= <font color='red'>"+Theta0+"</font>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"GN Ratio ="+"<font color='red'>"+GNratio.toFixed(5)+"</font>";
document.getElementById("GNRatio").innerHTML= "<hr>"+"<br><br><hr>&nbsp;&nbsp;&nbsp;"+"GRN"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"MID"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"HEN"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Total Neutron Dose"+"<hr>";
document.getElementById("eGRN").innerHTML="<br><font color='red'>"+Dose[1].toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;"+Dose[2].toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Dose[3].toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+DoseN.toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"</font>"+"rem/e";
document.getElementById("pGRN").innerHTML="<br><font color='red'>"+(Dose[1]*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(Dose[2]*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(Dose[3]*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(DoseN*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"</font>"+"rem/h/kW"+"<br><br><hr>&nbsp;&nbsp;&nbsp;&nbsp;"+"GamD"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"GamI"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Total Photon Dose"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Total Dose"+"<hr>";
document.getElementById("eGamI").innerHTML="<br> <font color='red'>"+Dose[4].toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Dose[5].toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+DoseG.toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+DoseT.toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;"+"</font>"+"rem/e";
document.getElementById("pGamI").innerHTML="<br> <font color='red'>"+(Dose[4]*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(Dose[5]*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(DoseG*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"</font>"+"<font color='blue'>"+(DoseT*EkWh).toExponential(4)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"</font>"+"rem/h/kW";
//document.write("<hr><br><br>");*/
//Theta.innerHTML="Production Angle= <span id="PA">"+Theta+"</span>";
/*document.write("<br><hr>Production Angle=",Theta,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G/N Ratio =",GNratio.toFixed(5),"<hr>");
document.write("<br><br><hr>&nbsp;&nbsp;&nbsp;GRN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HEN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Neutron Dose<hr>");
document.write("<br>",Dose[1].toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;",Dose[2].toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",Dose[3].toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",DoseN.toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","rem/e");
document.write("<br>",(Dose[1]*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(Dose[2]*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(Dose[3]*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(DoseN*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","rem/h/kW");
document.write("<br><br><hr>&nbsp;&nbsp;&nbsp;&nbsp;GamD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GamI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Photon Dose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Dose");
document.write("<br>",Dose[4].toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",Dose[5].toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",DoseG.toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",DoseT.toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;","rem/e");
document.write("<br>",(Dose[4]*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(Dose[5]*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(DoseG*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(DoseT*EkWh).toExponential(4),"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","rem/h/kW");
document.write("<hr><br><br>");*/
} //End of ITheta loop
} // End of mea()
function Sorc(Isorc,Theta, IDtar, TarLen, TarRad, IattSW, Ebeam, AMTdeg, DegRad)
{
  var MatID=['CONC','ALNH','FE','PB','PBNH','EARTH'];
  var Zmat=[13.0, 13.0,26.0, 82.0, 82.0,13.0];
  var Amat=[26.98, 26.98, 55.85, 207.19, 207.19,26.98];
  var RHOmat=[2.35, 2.70, 7.87, 11.35, 11.35,1.7];
  var RLmat=[26.7, 26.7, 13.84, 6.37, 6.37,26.7];
  var XMUmat=[11.1, 11.1, 10.7, 14.2, 14.2,11.1];
  var Xmfp= new Array(5);
  Xmfp[1]=[30.0, 30.0, 47.0, 97.0, 135.0,30.0];
  Xmfp[2]=[55.0, 55.0, 145.0, 200.0, 200.0,55.0];
  Xmfp[3]=[120.0, 120.0, 145.0, 200.0, 200.0,120];
  Xmfp[4]=[42.0, 42.0, 33.6, 24.0, 24.0,42.0];
  Xmfp[5]=[120.0, 120.0, 145.0, 200.0, 200.0,120.0];
  var E_HEN=[0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21,0.22, 0.23, 0.24, 0.25, 0.27, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.70, 0.80,0.90, 1.00];
  var CS_HEN=[0.00444,0.00711, 0.0111, 0.0156, 0.0222, 0.0298, 0.0382,0.0489, 0.0547, 0.0622, 0.0711, 0.0889, 0.116, 0.162, 0.211, 0.276, 0.338, 0.404, 0.502, 0.601, 0.711,0.813, 1.00];
  var DegRad=1.745329e-2;
  var ThrHEN=0.150e0;
  TarLenG=0.01e0;
  TarLenN=17.332196e0;
  TarRadG=1.189869e0;
  TarRadN=3.736411e0;
//ocument.write("<br> Isorc=",Isorc);
//document.write("<br> Theta=",Theta);
//document.write("<br> IDtar=",IDtar);
//document.write("<br> TarLen=",TarLen);
//document.write("<br> TarRad=",TarRad);
//document.write("<br> Ebeam=",Ebeam);
//document.write("<br> AMTdeg=",AMTdeg);
//document.write("<br> DegRad=",DegRad);
  var Angle=Theta;
//  document.write("<br> Angle=",Angle);
  var AbsAng=Math.abs(Angle);
  //document.write("<br>AbsAng=",AbsAng);
  var CosThe = Math.cos(DegRad*AbsAng);
//  document.write("<br> CosThe=",CosThe);
  var SinThe = Math.sin(DegRad*AbsAng);
//  document.write("<br> SinThe=",SinThe);
//  document.write("<br> IDtar=",IDtar);
//  document.write("<br> RHOmat[IDtar]=",RHOmat[IDtar]);
  var TarLenGCM = TarLen*RHOmat[IDtar]; // Target length (g/sq.cm)
//  document.write("<br> TarLenGCM=",TarLenGCM);
  var TarLenRL = TarLenGCM/RLmat[IDtar]; // ! Target length (r.l.)
//  document.write("<br> TarLenRL=",TarLenRL);
  var TarRadGCM = TarRad*RHOmat[IDtar]; // ! Target radius (g/sq.cm)
//  document.write("<br> TarRadGCM=",TarRadGCM);
  var TarRadMU = TarRadGCM/XMUmat[IDtar];  // ! Target radius (Moliere units)
//  document.write("<br> TarRadMU=",TarRadMU);
  var TarRadRelax = TarRadGCM/Xmfp[4][IDtar]; // ! Relaxation units
//  document.write("<br> Xmfp[",IDtar,"]=",Xmfp[4][IDtar]);
//  document.write("<br> TarRadRelax=",TarRadRelax);
    var SltSor = 0.0;
  //    document.write("<br> SltSor=",SltSor);
  // Check for neutron attenuation by target  (GRN, MID, HEN, and GamI only)
 if (IattSW ==1 && Isorc!=4) {
   if (TarLenRL<=TarLenN) {
     document.write("Stopped in FUNCTION Sorc with TarLenRL<TarLen=",TarLenRL);
  }
 if (TarRadMU<TarRadN) {
document.write("Stopped in FUNCTION Sorc with TarRadMU<TarRadN",TarLenRL);
}
// Find critical angle and SltTar for cylindrical target
var CritTar = atan(TarRad/TarLen)/DegRad; // ! (degrees)
//    document.write("<br> CritTar=",CritTar);
  if (AbsAng>=CritTar) {
SltTar = TarRadGCM/SinThe; // ! (g/sq.cm)
document.write("<br> SltTar=",SltTar);
}
else {
SltTar = TarLenGCM/CosThe; // ! (g/sq.cm)
document.write("<br> SltTar=",SltTar);
}
// Find critical angle and SltCor for cylindrical core
var CritCor = atan(TarRadN*XMUmat[IDtar]/TarLenN/RLmat[IDtar])/DegRad; // ! (degrees)]
//  document.write("<br> CritCor=",CritCor);
if (AbsAng>=CritCor) {
SltCor = TarRadN*XMUmat[IDtar]/SinThe; // ! (g/sq.cm)
document.write("<br> SltCor=",SltCor);
}
else {
SltCor = TarLenN*RLmat[IDtar]/CosThe; // ! (g/sq.cm)
document.write("<br> SltCor=",SltCor);
}
SltSor = SltTar - SltCor ; // ! (g/sq.cm)
document.write("<br> SltSor=",SltSor);
  if (AbsAng>90) {// NO target attenuation
    SltSor = 0.0; //  in backward direction
}
} //end if ! End of IattSW.eq.1 .and. Isorc.ne.4 loop

switch (Isorc) {
case 1: // GIANT-RESONANCE NEUTRONS (GRN)
     DSorc = 4.93*Math.pow(Zmat[IDtar],0.662);
  //   document.write("<br> DSorcGRN=",DSorc);
     DSorc=DSorc*Ebeam*1e-11; // ! rem/e at 1 cm
  //   document.write("<br>with E, DSorcGRN=",DSorc);
if (IattSW==1) { // Apply target attenuation
  DSorc = DSorc*exp(-SltSor/Xmfp[Isorc][IDtar]);
  //document.write("<br> if IattSW==1,DSorc=",DSorc);
}
  return DSorc;
  case 2: // MID-ENERGY NEUTRONS (MID)
      DSorc = 43.9/Math.pow(Amat[IDtar],0.37)/(1.0 - 0.75*CosThe);
  //      document.write("<br>DSorcMID=",DSorc);
    if (Ebeam<=0.5) {
    DSorc = DSorc*1.6*Math.pow(Ebeam,1.5);
  //  document.write("<br>E<=0.5GeV,DSorcMID=",DSorc);
  }
    else if (Ebeam>0.5 && Ebeam<1.0) {
    DSorc = DSorc*(0.566 + 0.434*(Ebeam - 0.5)/0.5);
  //    document.write("<br> E>0.5&E<1 GeV,DSorcMID=",DSorc);
  }
    DSorc = DSorc*Ebeam*1e-11; // ! rem/e at 1 cm
  //    document.write("<br>with E,DSorcMID=",DSorc);
    if (IattSW==1) { // ! Apply target attenuation
      DSorc = DSorc*Math.exp(-SltSor/Xmfp[Isorc][IDtar]);
    //  document.write("<br> if IattSW==1,DSorcMID=",DSorc);
    }
    return DSorc;
  case 3: //HIGH-ENERGY NEUTRONS (HEN)
    if (Ebeam<=ThrHEN) { // Below threshold
    DSorc = 0.0;
//    document.write("<br> if E<ThrHEN,DSorcHEN=",DSorc);
  }
    else if (Ebeam>0.15 && Ebeam<1.0) { // Loop over the energy bins below 1 GeV
      for(var k=2;k<=23;k++) {
        if (Ebeam<E_HEN[k]) {
          var DelCS = (CS_HEN[k] - CS_HEN[k-1])*(Ebeam - E_HEN[k-1])/(E_HEN[k] - E_HEN[k-1]);
          DSorc = (CS_HEN[k-1] + DelCS)*DSorc;
          DSorc = 0.267*13.7/Math.pow(Amat[IDtar],0.65)/Math.pow((1.0 - 0.72*CosThe),2); // Sorc on the right is for the HENs
          DSorc = DSorc*Ebeam*1e-11;  // rem/e at 1 cm
  //        document.write("<br>DSorcHEN=",DSorc);
        } //if loop closed
      } //for loop closed
    } //else if loop closed
    else {
        DSorc = 13.7/(Math.pow(Amat[IDtar],0.65)*Math.pow((1.0 - 0.72*CosThe),2));
    //      document.write("<br>DSorcHEN=",DSorc);
        } //else loop closed
    DSorc=DSorc*Ebeam*1e-11; // ! rem/e at 1 cm
          if (IattSW==1) { // Apply target attenuation
            DSorc = DSorc*Math.exp(-SltSor/Xmfp[Isorc][IDtar]);
  //        document.write("<br>IattSW=1,DSorcHEN=",DSorc);
          }
          return DSorc;
case 4: //DIRECT PHOTONS FROM ELECTROMAGNETIC SHOWER (GamD)
  if (TarLenRL<=TarLenG) {  // TarLenG=0.01=minimum target length for photons
    document.write("Stopped in FUNCTION Sorc with TarLenRL<=TarLenG",TarLenRL,TarLenG);
    }
    if (TarRadRelax<TarRadG) { // TarRadG=1.189869D0=minimum target radius for photons
      document.write("Stopped in FUNCTION Sorc with TarRadRelax<TarRadG",TarRadRelax,TarRadG);
    }
    DSorc1 = 1.06e6*Ebeam*Math.exp(-TarLenGCM/Xmfp[Isorc][IDtar])*Math.exp(-0.959*Math.pow(AbsAng,0.5));
    DS1=1.06e6;
//    document.write("<br>1.06e6=",DS1);
    DS2=Math.exp(-TarLenGCM/Xmfp[Isorc][IDtar]);
//    document.write("<br>Math.exp(-TarLenGCM/Xmfp[Isorc][IDtar])=",DS2);
    DS3=Math.exp(-0.959*Math.pow(AbsAng,0.5))
//    document.write("<br>Math.exp(-0.959*Math.pow(AbsAng,0.5))=",DS3);
//    document.write("<br>DSorcGamD1=",DSorc1);
if (AbsAng<=90) {
  DSorc2 = 683.0*Math.exp(-TarRadRelax)*Math.exp(-AbsAng/72.2);
//  document.write("<br>AbsAng<=90,DSorcGamD2=",DSorc2);
}
else {
  DSorc2 = 683.0*Math.exp(-TarRadG)*Math.exp(-AbsAng/72.2);
//  document.write("<br>AbsAng>90,DSorcGamD2=",DSorc2);
}
  DSorc = DSorc1 + DSorc2;
//  document.write("<br>DSorcGamD=",DSorc);
  DSorc = DSorc*Ebeam*1e-11; // ! rem/e at 1 cm
//  document.write("<br>with E,DSorcGamD=",DSorc);
  return DSorc;
case 5: //INDIRECT PHOTONS FROM HADRON SHOWER (GamI)
  DSorc = 0.267*13.7/Math.pow(Amat[IDtar],0.65)/Math.pow((1.0 - 0.72*CosThe),2); // Sorc on the right is for the HENs
//  document.write("<br>DIsorcGamI=",DSorc);
  DSorc = DSorc*Ebeam*1e-11;  // rem/e at 1 cm
//  document.write("<br>with E, DSorcGamI=",DSorc);
  if (IattSW==1) { // Apply target attenuation
    DSorc = DSorc*Math.exp(-SltSor/Xmfp[Isorc][IDtar]);
  document.write("<br>IattSW=1, DSorcGamI=",DSorc);
  }
  return DSorc;
} // Enf of Switch
}//--------------------last line of FUNCTION Sorc-------------------------
