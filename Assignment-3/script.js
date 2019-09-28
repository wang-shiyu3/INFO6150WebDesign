//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function showDropDown(x){
  if( document.getElementById("dropDownTextArea"+x).style.display=='none' ){
    document.getElementById("dropDownTextArea"+x).style.display = 'table-row';
  }else{
    document.getElementById("dropDownTextArea"+x).style.display = 'none';
  }
}

function enablebtn(x){
  if(x!=-1){
    if( document.getElementById("checkbox"+x).checked==true){
      document.getElementById("tr"+x).style.backgroundColor="orange";
      document.getElementById("delete"+x).style.display="inline-block";
    }else{
      document.getElementById("tr"+x).style.backgroundColor = "white";
      document.getElementById("delete"+x).style.display="none";
    }
  }
  if(checkboxAllUnchecked()==true){
    document.getElementById("button").disabled=true;
    document.getElementById("button").style.backgroundColor="grey";
    document.getElementById("button").style.borderColor="grey";
  }else{
    document.getElementById("button").disabled=false;
    document.getElementById("button").style.backgroundColor="orange";
    document.getElementById("button").style.borderColor="orange";
  }
}

function checkboxAllUnchecked(){
  var boxes = document.getElementsByName('box');
  for(var i=0;i<boxes.length;i++){
    if(boxes[i].checked){
      return false;
    }
  }
  return true;
}

var idIndex = 4;
function addRow(){
  var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
  var newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.id = "tr" + idIndex;

  var dropDownRow = tableRef.insertRow(tableRef.rows.length);
  dropDownRow.id = "dropDownTextArea" + idIndex;
  dropDownRow.style = "display:none";
  var cell = dropDownRow.insertCell(0);
  cell.innerHTML = "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  cell.colSpan = 8;
  // var dropDown = document.createElement("text");
  // dropDown.innerHTML = "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  // dropDownRow.appendChild(dropDown);

  var td1 = newRow.insertCell(0);
  var e1 = document.createElement("text");
  e1.innerHTML="<input id='checkbox" + idIndex +"' name='box' type='checkbox' onclick='enablebtn("+ idIndex +")'/><br /><br /><button onclick='showDropDown("+ idIndex +")'><img src='down.png' width='25px'/></button>";
  td1.appendChild(e1);
  
  var td2 = newRow.insertCell(1);
  td2.innerHTML="Student"+idIndex;

  var td3 = newRow.insertCell(2);
  //var te3e1 = td3.createElement("td");
  td3.innerHTML="Teacher"+idIndex;
  //td3.appendChild(td3e1);

  var td4 = newRow.insertCell(3);
  //var te4e1 = td4.createElement("td");
  td4.innerHTML="Approved";
  //td4.appendChild(td4e1);

  var td5 = newRow.insertCell(4);
  //var te5e1 = td4.createElement("td");
  td5.innerHTML="Fall";
  //td4.appendChild(td4e1);

  var td6 = newRow.insertCell(5);
  //var te6e1 = td4.createElement("td");
  td6.innerHTML="TA";
  //td6.appendChild(td6e1);

  var td7 = newRow.insertCell(6);
  //var te7e1 = td7.createElement("td");
  td7.innerHTML="12345";
  //td7.appendChild(td7e1);

  var td8 = newRow.insertCell(7);
  //var te8e1 = td8.createElement("td");
  td8.innerHTML="85%";
  //td8.appendChild(td8e1);

  var td9 = newRow.insertCell(8);
  var e9 = document.createElement("text");
  e9.innerHTML = "<button id='delete"+ idIndex +"' style='display: none' onclick='deleteRow(\"tr"+ idIndex +"\")'>Delete</button>";
  td9.appendChild(e9);

  idIndex=idIndex+1;
}

function deleteRow(trid){
  var row = document.getElementById(trid);
  row.parentNode.removeChild(row);
  enablebtn(-1);
}