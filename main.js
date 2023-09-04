var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/202309041402js_list_test2/data.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    //console.log(data)

    $('#example').DataTable( {
        //"ajax": "post/data.json",
        "data":data.data,
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );

  }
}
//this is  jsonData.json
//{
//   "data": [
//     {
//       "id": "1",
//       "name": "Tiger Nixon",
//       "position": "System Architect",
//       "salary": "$320,800",
//       "start_date": "2011/04/25",
//       "office": "Edinburgh",
//       "extn": "5421"
//     }
//   ]
// }