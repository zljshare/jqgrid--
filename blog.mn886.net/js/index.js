//$(function(){
//	//页面加载完成之后执行
//	pageInit();
//});
//function pageInit(){
//	//创建jqGrid组件
//	var data='{"page":"1",			"total":2,			"records":"13",			"rows":					[						{							"id":"13",							"cell":									["13","2007-10-06","Client 3","1000.00","0.00","1000.00",null]						},						{							"id":"12",							"cell":									["12","2007-10-06","Client 2","700.00","140.00","840.00",null]						},						{							"id":"11",							"cell":									["11","2007-10-06","Client 1","600.00","120.00","720.00",null]						},						{							"id":"10",							"cell":									["10","2007-10-06","Client 2","100.00","20.00","120.00",null]						},						{							"id":"9",							"cell":									["9","2007-10-06","Client 1","200.00","40.00","240.00",null]						},						{							"id":"8",							"cell":									["8","2007-10-06","Client 3","200.00","0.00","200.00",null]						},						{							"id":"7",							"cell":									["7","2007-10-05","Client 2","120.00","12.00","134.00",null]						},						{							"id":"6",							"cell":									["6","2007-10-05","Client 1","50.00","10.00","60.00",""]						},						{							"id":"5",							"cell":									["5","2007-10-05","Client 3","100.00","0.00","100.00","no tax at all"]						},						{							"id":"4",							"cell":									["4","2007-10-04","Client 3","150.00","0.00","150.00","no tax"]						}					],			"userdata":{"amount":3220,"tax":342,"total":3564,"name":"Totals:"}		}';
//	var tdata=JSON.parse(data) ;
//	jQuery("#list2").jqGrid(
//			{
//				url : '/data.aspx',//组件创建完成之后请求数据的url
//			   datatype: 'json',    
//				  ///data: tdata,
//				colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ],//jqGrid的列显示名字
//				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
//				             { name: 'id', index: 'id', width: 55, frozen: true },
//				             { name: 'invdate', index: 'invdate', width: 90, frozen: true },
//				             {name : 'name',index : 'name asc, invdate',width : 100}, 
//				             {name : 'amount',index : 'amount',width : 80,align : "right"}, 
//				             {name : 'tax',index : 'tax',width : 80,align : "right"}, 
//				             {name : 'total',index : 'total',width : 80,align : "right"}, 
//				             {name : 'note',index : 'note',width : 150,sortable : false} 
//				           ],
//				rowNum : 10,//一页显示多少条
//				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
//				pager : '#pager2',//表格页脚的占位符(一般是div)的id
//				sortname : 'id',//初始化的时候排序的字段
//				sortorder : "desc",//排序方式,可选desc,asc
//				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
//				viewrecords : true,
//				caption : "JSON Example"//表格的标题名字
//			}).jqGrid('setFrozenColumns');;
//	/*创建jqGrid的操作按钮容器*/
//	/*可以控制界面上增删改查的按钮是否显示*/
//	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});

//}

$(function () {
    pageInit();
});
function pageInit() {
    var data = '{"page":"1",			"total":2,			"records":"13",			"rows":					[						{							"id":"13",							"cell":									["13","2007-10-06","Client 3","1000.00","0.00","1000.00",null]						},						{							"id":"12",							"cell":									["12","2007-10-06","Client 2","700.00","140.00","840.00",null]						},						{							"id":"11",							"cell":									["11","2007-10-06","Client 1","600.00","120.00","720.00",null]						},						{							"id":"10",							"cell":									["10","2007-10-06","Client 2","100.00","20.00","120.00",null]						},						{							"id":"9",							"cell":									["9","2007-10-06","Client 1","200.00","40.00","240.00",null]						},						{							"id":"8",							"cell":									["8","2007-10-06","Client 3","200.00","0.00","200.00",null]						},						{							"id":"7",							"cell":									["7","2007-10-05","Client 2","120.00","12.00","134.00",null]						},						{							"id":"6",							"cell":									["6","2007-10-05","Client 1","50.00","10.00","60.00",""]						},						{							"id":"5",							"cell":									["5","2007-10-05","Client 3","100.00","0.00","100.00","no tax at all"]						},						{							"id":"4",							"cell":									["4","2007-10-04","Client 3","150.00","0.00","150.00","no tax"]						}					],			"userdata":{"amount":3220,"tax":342,"total":3564,"name":"Totals:"}		}';

    jQuery("#gfrc1").jqGrid({
        url: '/data.aspx',
        datatype: "json",
        //data:JSON.parse(data),
       // colNames: ['InvNo', 'Client', 'Amount', 'Tax', 'Total', 'Closed', 'Shipped via', 'Notes'],
        colModel: [
              { name: 'id', align: 'center', fixed: true, frozen: true, hidden: true },
              {  name: 'name', fixed: true, frozen: true },
              { name: 'amount', index: 'amount', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
              { name: 'tax', index: 'tax', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
              { name: 'total', index: 'total', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
              {
                  name: 'closed', index: 'closed', width: 75, align: 'center', formatter: 'checkbox',
                  edittype: 'checkbox', editoptions: { value: 'Yes:No', defaultValue: 'Yes' }
              },
              {
                  name: 'ship_via', index: 'ship_via', width: 120, align: 'center', formatter: 'select',
                  edittype: 'select', editoptions: { value: 'FE:FedEx;TN:TNT;IN:Intim', defaultValue: 'Intime' }
              },
              { name: 'note', index: 'note', width: 120 }
        ],
        rowNum: 10,
        width: 700,
        rowList: [10, 20, 30],
        pager: '#pgfrc1',
        sortname: 'invdate',
        viewrecords: true,
        sortorder: "desc",
        jsonReader: {
            repeatitems: false
        },
        shrinkToFit: false,
        caption: "",
        height: 'auto'
    });
    jQuery("#gfrc1").jqGrid('setFrozenColumns');

}