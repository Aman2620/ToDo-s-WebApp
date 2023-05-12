function getAndUpdate() {
  console.log('updating list')
  var tit = document.getElementById('title').value;
  var desc = document.getElementById('description').value;
  if (localStorage.getItem('itemJson')==null){
    itemJsonArray = [];
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
  }
  

  update()
  document.getElementById('title').value="";
  document.getElementById('description').value="";
                          

}

function update() {
  if (localStorage.getItem('itemJson')==null){
    itemJsonArray = [];
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
    let tablebody = document.getElementById('table-container')
    let str = ''
    itemJsonArray.forEach((element,index) => {
      if (localStorage!==null){
      str+= `
      <tr>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" name="button" onclick="deleted(${index})" >Delete</button></td>
      </tr>`;
    }
    });
    tablebody.innerHTML = str;
  };
  var add = document.getElementById('add');
  add.addEventListener("click",getAndUpdate);
  update();

function deleted(itemIndex) {
  console.log("Delete", itemIndex);
  itemJsonArray = localStorage.getItem('itemJson');
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex,1);
  localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
  update();
}
