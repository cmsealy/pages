function Table(thArr, elemId) {
  this.thArr = thArr;
  this.tbl = null;
  this.makeTable = function(){
    
    // make/append new table element
  	var el = document.createElement("table");
	  el.setAttribute("id","table1");
    el.setAttribute("border","1");
	  var root = 
        document.getElementById(elemId);
	  root.appendChild(el);
    // make table element the new root
    root = el;
    
    // make/append table row for headers
    var el = document.createElement("tr");
	  el.setAttribute("id","headerRow");
	  root.appendChild(el);
    // make table row the new root
    root = el;
    
    // make/append table headers
    for (i=0; i<thArr.length; i++) {
      var thElem = 
          document.createElement("th");
	    var t = document.createTextNode(thArr[i]);
	    thElem.appendChild(t);
      root.appendChild(thElem);
    }

  }
}
thArr = ["name", "street"];
tbl = new Table(thArr, "d3");
tbl.makeTable();
