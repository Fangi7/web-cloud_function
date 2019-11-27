
	//1.创建表格节点对象
	var tab=document.getElementById("box_table"); 
   // 2.创建标题 并添加到表格中
    //var cap=document.createElement('caption');
   // cap.innerHTML='BOX列表';
    //tab.appendChild(cap);
    // 3.添加表头
    var tr=document.createElement('tr');
        tr.style.cssText="background-color:#336699";
    var th1=document.createElement('th');
    
    th1.innerHTML='BOX編號';
    var th2=document.createElement('th');
    th2.innerHTML='位置';
    var th3=document.createElement('th')
    th3.innerHTML='最後上傳時間';
    var th4=document.createElement('th');
    th4.innerHTML='目前安裝感測器種類';
	var th5=document.createElement('th');
    th5.innerHTML='查看詳情';
    // 将列添加到行内
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
	tr.appendChild(th5);
    // 将行添加到表格中
    tab.appendChild(tr);
    // 添加表格内容
	  var boxpath = '/box/box1';
      console.log(boxpath);
      //read data from firebase
      
      db.ref(boxpath).once('value',e => {
      console.log(e.val());
      var boxvalue = e.val();
	    
   // for(var i=1;i<2;i++){
        var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML=1;
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML = boxvalue["locate"];
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML = boxvalue["time"];
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML = boxvalue["sensor"];
		var tr1_td5=document.createElement('td');
		tr1_td5.style.cssText="cursor:pointer; ";
        tr1_td5.innerHTML = "<img id='box1' src='images/cloud-computing.png' style=\"height:40px;padding-left:15px;\"/>";

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
		tb_tr1.appendChild(tr1_td5);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
   // }
		console.log(tab);
		 var box1 = document.querySelector("#box1");
		box1.addEventListener('click',showbox1);
    // 将表格添加到页面中
    //document.table.appendChild(tab);
		
    });
 
function showbox1(){
	 tab.classList.add('inactive'); 

	 //1.创建表格节点对象
	var tab1=document.getElementById("box1_table"); 
   // 2.创建标题 并添加到表格中
    var cap=document.createElement('caption');
	cap.innerHTML='BOX1即時資訊';
    tab1.appendChild(cap);
    var tr=document.createElement('tr');
        tr.style.cssText="background-color:#336699";
   
    var th2=document.createElement('th');
    th2.innerHTML='溫度';
    var th3=document.createElement('th')
    th3.innerHTML='二氧化碳';
    var th4=document.createElement('th');
    th4.innerHTML='圖片';
	

   // tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    // 将行添加到表格中
    tab1.appendChild(tr);
    // 添加表格内容
	  var boxpath = '/box/box1';
      console.log(boxpath);
      //read data from firebase
      
      db.ref(boxpath).once('value',e => {
      console.log(e.val());
      var boxvalue = e.val();
      var imgUrl;
      try{
        var pathReference = storageRef.child('民雄/'+boxvalue['image']); //change to instant
      }
      catch(e){
        var pathReference = storageRef.child('message.svg'); //change to instant
      }
     
            pathReference.getDownloadURL().then(function(url) {
            imgUrl = url;
			console.log(imgUrl);  
   // for(var i=1;i<2;i++){
	   
        var tb_tr1=document.createElement('tr');
    
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML = boxvalue["temperature"];
		//tr1_td2.innerHTML = "27"
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML = boxvalue["co2"];
		//tr1_td3.innerHTML = "500ppm";
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML ="<img src=\""+imgUrl+"\" style=\"height:300px;padding-left:15px;\"/>";
		console.log(imgUrl);
        //将列添加到行内
       // tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab1.appendChild(tb_tr1);
   // }
		console.log(tab1);
		 })  
		    });
}