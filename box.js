
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
    // 将列添加到行内
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    // 将行添加到表格中
    tab.appendChild(tr);
    // 添加表格内容
    for(var i=1;i<2;i++){
        var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML=i;
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML='民雄(X:23.2145,Y:121.3432)';
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML='2019-10-21 21:13';
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML='溫度、二氧化碳';

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
    }
    //
    var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML='2';
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML='嘉義(X:23.3124,Y:121.4347)';
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML='2019-10-20 03:17';
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML='溫度、影像';

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
        //
    var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML='3';
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML='嘉義(X:23.5876,Y:121.3814)';
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML='2019-10-20 08:54';
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML='二氧化碳、影像';

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
        //
    var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML='4';
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML='民雄(X:23.2145,Y:121.3432)';
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML='2019-10-23 11:43';
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML='溫度、二氧化碳';

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
        //
    var tb_tr1=document.createElement('tr');
        var tr1_td1=document.createElement('td');
        tr1_td1.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td1.innerHTML='5';
        var tr1_td2=document.createElement('td');
        tr1_td2.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td2.innerHTML='民雄(X:23.4632,Y:121.7464)';
        var tr1_td3=document.createElement('td');
        tr1_td3.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td3.innerHTML='2019-10-01 16:36';
        var tr1_td4=document.createElement('td');
        tr1_td4.style.cssText="padding-right:50px;padding-left:50px;";
        tr1_td4.innerHTML='溫度';

        //将列添加到行内
        tb_tr1.appendChild(tr1_td1);
        tb_tr1.appendChild(tr1_td2);
        tb_tr1.appendChild(tr1_td3);
        tb_tr1.appendChild(tr1_td4);
        //将行添加到表格中
        tab.appendChild(tb_tr1);
        //
    // 将表格添加到页面中
    document.table.appendChild(tab);
