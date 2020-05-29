<!DOCTYPE html>
<!--indicated that the program is in HTML5 version-->
<html lang="en-US">
<!--The language is declared with the lang attribute-->
<html>
<!--This element defines the whole document, has start and end tag-->
<meta charset="UTF-8">
<!--Metadata typically define the document title, character set, styles,
scripts, and other meta information.-->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link href="vipshield.css" rel="stylesheet" type="text/css">
</head>
<!-- Title of our page is "First Page"-->
<body style="background-color:powderblue;">
  <!--This element defines the document body, has start and end tag,
background color to powderblue-->
<h1 align="center" style="color:SlateBlue; font-family:Courier;
font-size:300%;"
   title="Created by "> D-Shield <br/> </h1>
   <hr/>
<h4 align="center" style="color:tomato; font-family:Courier;font-size:150%;">
  A quick & reliable solution for Radiation Professionals </h4>
<b> <i> <p align="left" style="color:Violet; font-family:Courier;font-size:150%;">
D-Shield is a simple, easy but an accurate radiation shielding calculation
  web module.It caters the need of a health physicist/radiation professional in
  designing the radiation shielding encountered at following facilities. </p> </i> </b>
<!--<ul>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="LINAC.html" target="_parent">Linear Accelerator</a> </li>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="SYNCHROTRON.html" target="_parent" >Synchrotron</a> </li>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="GRS.html" target="_parent" >Gamma Radioactive Sources</a> </li>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="NRS.html" target="_parent" >Neutron Radioactive Sources</a> </li>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="HXU.html" target="_parent" >Hospital X-ray Units</a> </li>
<li align="left" style="color:DodgerBlue; font-family:Courier;font-size:150%;">
<a href="PBTU.html" target="_parent" >Proton Beam Therapy Units</a> </li>
</ul>-->
<p> </p>
  <hr/>
<footer>
<b>  <p align="left" style="color:tomato; font-family:Courier;
  font-size:100%;">Web module developed by:  </p> </b>
  <p align="left" style="color:SlateBlue; font-family:Courier;
  font-size:70%;">Contact information: <a href="mailto:someone@example.com">
  </a>.</p>
    <h1>D-Shield</h1>
    <div id="input">
      IOsw [0=none, 1=input data, 2=media and input data]: <input id="IOsw" > <br>
      Incident electron beam energy (GeV) :<input id="Ebeam" > <br>
      Target material [choices: 'CONC','ALNH','FE','PB','PBNH','EARTH']:<input id="NamTar"\n> <br>
      Target length [inches]:<input id="TarLen"\n> <br>
      Target radius [inches]:<input id="TarRad"\n> <br>
      Switch for including neutron attenuation by target itself,(0=none,1=yes)]:<input id="IattSW"> <br>
      Primary (outer) shield material [choices: 'CONC','ALNH','FE','PB','PBNH','EARTH']:<input id="NamShl"> <br>
      Angle of primary shield relative to beam direction [degree]:<input id="AngShl"> <br>
      Primary shield distance from target [inch]:<input id="DisShl"> <br>
      Primary shield thickness [inch]:<input id="ThkShl"> <br>
      Number of detectors [each located at point P]:<input id="NTheta"> <br>
      Angular increment between detectors [degree]:<input id="DTheta"> <br>
      Angle of first detector [degree]:<input id="Theta0"> <br>
      Additional (inner) concrete shielding thickness [inch]:<input id="AddCONC"> <br>
      Additional (inner) aluminiumn (not followed by CONC) shielding thickness [inch]:<input id="AddALNH"> <br>
      Additional (inner) iron shielding thickness [inch]:<input id="AddFE"> <br>
      Additional (inner) lead shielding thickness [inch]:<input id="AddPB"> <br>
      Additional (inner) lead(not followed by CONC) shielding thickness [inch]:<input id="AddPBNH"> <br>
      Additional (inner) earth shielding thickness [inch]:<input id="AddEARTH"> <br>
    </div>
    <button id="submit">RESULT</button>
    <div id="RESULT">
      <p id="PA"></p>
      <p id="GNRatio"></p>
      <p id="eGRN"></p>
      <p id="pGRN"></p>
      <p id="eMID"></p>
      <p id="pMID"></p>
      <p id="eHEN"></p>
      <p id="pHEN"></p>
      <p id="eTotalNeutron"></p>
      <p id="pTotalNeutron"></p>
      <p id="eGamD"></p>
      <p id="pGamD"></p>
      <p id="eGamI"></p>
      <p id="pGamI"></p>
      <p id="eTotalGamma"></p>
      <p id="pTotalGamma"></p>
      <p id="eTotal"></p>
      <p id="pTotal"></p>
    </div>
   <script src="vipshield.js"></script>
</footer>
</body>
</html>
