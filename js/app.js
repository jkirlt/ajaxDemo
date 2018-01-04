$(function() {

    var addBtnClicked = false;

    // 加载内容的url
    var url = "data.php?action=init_data_list"
    // ajax查询加载显示内容
    $.get(url,function(data){
        // 查到的所有数据
        d = eval('(' + data + ')');
        // 循环显示行内容
        for(m in d ){
            // 查找一行内容
            var rowObj = createRow(d[m]);
            // 添加一行
            $("table.data").append(rowObj)
        }
    });

    // 加载显示一行内容操作
    function createRow(rowObj){
        rowObj = rowObj;
        var rowId;
        rowDom = $("<tr></tr>");
        // 循环显示一列
        for(m in rowObj){
            if(m=="id"){
                // id
                rowId = rowObj[m];
            }else{
                // 添加一格
                rowDom.append($("<td>" + rowObj[m] +"</td>"));
            }
        }   

        // 编辑按钮
        editButton = $("<a href='javascript:;' class='optLink'></a>");
        editButton.html("编辑&nbsp;");
        // 点击触发编辑操作
        editButton.data("currentId",rowId);
        editButton.click(editRowHandler)
    
        // 删除按钮
        delButton = $("<a href='javascript:;' class='optLink'></a>");
        delButton.html("删除");
        // 点击触发删除操作
        delButton.data("currentId",rowId);
        delButton.click(delRowHandler);
    
        optCol = $("<td></td>");
        optCol.append(editButton);
        optCol.append(delButton);
    
        rowDom.append(optCol);
        return rowDom;
    }

    // 点击添加按钮触发添加操作
    $("#addBtn").click(addBlankRow);

    // 添加操作
    function addBlankRow(){
        if(false == addBtnClicked){
            addBtnClicked = true;
            newrow = $("<tr></tr>");
            // 循环显示8个单元格
            for(var i=0; i < 8 ; i++){
                newrow.append($("<td><input class='txtField' type='text' value='' " + "/></td>"));
            }
    
            // 保存按钮
            saveButton = $("<a class='optLink' href='javascript:;'></a>");
            saveButton.html("保存&nbsp;");

            // 取消按钮
            cancelButton = $("<a class='optLink' href='javascript:;'></a>");
            cancelButton.html("取消");
    
            // 点击取消按钮
            cancelButton.click(function(){
                addBtnClicked = false;  
                newrow.remove();
            });
    
            // 点击保存按钮
            saveButton.click(function(){
                values = $(newrow).find("input[type=text]");
                postData = {};
                // 将查到的8个字符串拼接成一个，用"c_"隔开
                $(values).each(function(i,obj){
                    f = "c_" + i;
                    postData[f] = $(obj).val();
                });
                // 提交到后台保存
                $.post("data.php?action=add_row",postData,function(res){
                    if(0 < res) {
                        addrowObj = postData;   
                        postData["id"] = res;
                        newrow.remove();
                        $("table.data").append(createRow(addrowObj));
                        addBtnClicked = false;
                    } else {
                        alert("保存失败."); 
                    }
                });
            });
    
            var optCol = $("<td></td>")
            
            optCol.append(saveButton);
            optCol.append(cancelButton);
            newrow.append(optCol);
    
            $("table.data").append(newrow);
        }
    }

    // 删除操作
    function delRowHandler(e){
        delButton = e.target;
        rowId = $(delButton).data("currentId");
        if(window.confirm("真的要删除吗?")){
            $.post("data.php?action=del_row",{delId:rowId},function(res){
                if(res == "OK") {
                    $(delButton).parent().parent().remove();
                } else {
                    alert("删除失败.");
                }
            });
        }
    }

    // 编辑操作
    function editRowHandler(e){
        var editButton = e.target;
        var rowId = $(editButton).data("currentId");
        var editRow = $(editButton).parent().parent();
        var tdValues = $(editRow).find("td");
        var editRowHtml = $(editRow).html();
        $(tdValues).each(function(i,obj){
            if(i == 8){
    
                $(obj).html("");
    
                var saveButton = $("<a class='optLink' href='javascript:;'></a>");
                saveButton.html("保存&nbsp;");
    
                var cancelButton = $("<a class='optLink' href='javascript:;'></a>");
                cancelButton.html("取消");
    
                cancelButton.click(function(){
                    $(editRow).html(editRowHtml);
                    $(editRow).find("a").eq(0).click(delRowHandler);
                    $(editRow).find("a").eq(1).click(editRowHandler);
                    $(editRow).find("a").data("currentId",rowId);
                });
    
                saveButton.click(function(){
                    values = $(editRow).find("input[type=text]");
                    postdata = {};
                    $(values).each(function(i,obj){
                        f = "c_" + i;
                        postdata[f] = $(obj).val();
                    });
                    postdata["id"] = rowId;
                    $.post("data.php?action=edit_row",postdata,function(res){
                        if("OK" == res) {
                            var updaterow = createRow(postdata);
                            editRow.replaceWith(updaterow);
                        } else {
                            alert("保存失败."); 
                        }
                    });
                });
    
                $(obj).append(saveButton);
                $(obj).append(cancelButton);
    
            } else {
                $(obj).html("<input class='txtField' type='text' value='"+$(obj).html()+"'/>");
            }
        });
    }

});