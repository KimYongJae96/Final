(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("attendManage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_class", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"classPart\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"classSeq\" type=\"INT\" size=\"256\"/><Column id=\"classPoint\" type=\"STRING\" size=\"256\"/><Column id=\"proCode\" type=\"STRING\" size=\"256\"/><Column id=\"proName\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"classTime\" type=\"STRING\" size=\"256\"/><Column id=\"classRoom\" type=\"STRING\" size=\"256\"/><Column id=\"limit\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/><Column id=\"classGoal\" type=\"STRING\" size=\"256\"/><Column id=\"classMethod\" type=\"STRING\" size=\"256\"/><Column id=\"classEvaluation\" type=\"STRING\" size=\"256\"/><Column id=\"classReferences\" type=\"STRING\" size=\"256\"/><Column id=\"reqState\" type=\"STRING\" size=\"256\"/><Column id=\"rejectMsg\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"INT\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"INT\" size=\"256\"/><Column id=\"basket\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attend", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"attendDay\" type=\"STRING\" size=\"256\"/><Column id=\"attendState\" type=\"STRING\" size=\"256\"/><Column id=\"absenceReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendState", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">출석</Col><Col id=\"id\">01</Col></Row><Row><Col id=\"name\">지각</Col><Col id=\"id\">02</Col></Row><Row><Col id=\"name\">결석</Col><Col id=\"id\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"bordercolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"textcolorcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendDayList", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"attendDay\" type=\"STRING\" size=\"256\"/><Column id=\"attendState\" type=\"STRING\" size=\"256\"/><Column id=\"absenceReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","75","67","930","143",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_class");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"108\"/><Column size=\"254\"/><Column size=\"67\"/><Column size=\"119\"/><Column size=\"207\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"학과코드\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"학과\"/><Cell col=\"5\" text=\"강의시간\"/><Cell col=\"6\" text=\"인원 수\"/></Band><Band id=\"body\"><Cell text=\"bind:classPart\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:classSeq\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"########\"/><Cell col=\"2\" text=\"bind:className\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:classPoint\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:dept\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:classTime\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:limit\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","80","20","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("나의 강좌");
            this.addChild(obj.name, obj);

            obj = new Static("sta_label","455","220","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학생 리스트");
            this.addChild(obj.name, obj);

            obj = new Combo("co_year","650","27","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_year_innerdataset = new nexacro.NormalDataset("co_year_innerdataset", obj);
            co_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row></Rows>");
            obj.set_innerdataset(co_year_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("co_semester","780","27","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var co_semester_innerdataset = new nexacro.NormalDataset("co_semester_innerdataset", obj);
            co_semester_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1학기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2학기</Col></Row></Rows>");
            obj.set_innerdataset(co_semester_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","910","24","90","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","455","260","535","260",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_attend");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"90\"/><Column size=\"155\"/><Column size=\"110\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"출석일자\"/><Cell col=\"3\" text=\"출석체크\"/><Cell col=\"4\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" edittype=\"none\" maskeditformat=\"#########\" textAlign=\"center\" displaytype=\"mask\"/><Cell col=\"1\" text=\"bind:sName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:attendDay\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:attendState\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_attendState\" combocodecol=\"id\" combodatacol=\"name\" textAlign=\"center\" calendarbuttonsize=\"30 30\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"사유\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal","70","260","300","260",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            obj.set_innerdataset("ds_cal");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","890","525","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","910","310","200","120",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","0","200","120",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btnDel","780","525","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("attendManage.xfdl", function() {

        this.attendManage_onload = function(obj,e)
        {

        	var objDate= new Date();
        	if(objDate.getMonth()+1 && objDate.getMonth()+1 < 8){
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("1학기");
        		var startTime = objDate.getFullYear()+"0101";
        		var endTime = objDate.getFullYear()+"0731";
        	}else{
        		this.co_year.set_text(objDate.getFullYear()+"년");
        		this.co_semester.set_text("2학기");
        		var startTime = objDate.getFullYear()+"0801";
        		var endTime = objDate.getFullYear()+"1231";
        	}
        	var proCode ="91515073" // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };
        this.Grid00_oncellclick = function(obj,e)
        {
        	var classCode = this.ds_class.getColumn(e.row,"classSeq");
        	var className = this.ds_class.getColumn(e.row,"className");
        	this.sta_label.set_text("학생리스트(" +className+")");
        	this.transaction(
        		"stdListSeq"
        		,"/stdListSeq.nex"
        		,""
        		,"ds_stdClass=out_ds"
        		,"classCode="+classCode
        		,"fn_callback_stdList"
        	);
        	this.transaction(
        		"attendDayList"
        		,"/attendDayList.nex"
        		,""
        		,"ds_attendDayList=out_ds"
        		,"classCode="+classCode
        		,"fn_callback_attend"
        	);

        };
        this.fn_callback_stdList=function(sId){
        	if(sId == "stdListSeq"){
        		var nRow = this.ds_class.rowposition
        		var classTime = this.ds_class.getColumn(nRow,"classTime");
        		var time = classTime.split(")");
        		var day = "";
        		var cal = "";
        		for(var i=0; i<time.length-1; i++){
        			var weeks = time[i].split("("); //요일
        			if(weeks[0] == "일"){day = 0}
        			else if(weeks[0] == "월"){day = 1}
        			else if(weeks[0] == "화"){day = 2}
        			else if(weeks[0] == "수"){day = 3}
        			else if(weeks[0] == "목"){day = 4}
        			else if(weeks[0] == "금"){day = 5}
        			else if(weeks[0] == "토"){day = 6}
        			for(var j=0; j<7; j++){
        				var objDate= new Date();
        				objDate.setDate(objDate.getDate()-j);
        				if(objDate.getDay()==day){
        					var year = objDate.getFullYear().toString();
        					var month = ((objDate.getMonth() + 1) + "").padLeft(2, "0").toString();
        					var date = (objDate.getDate() + "").padLeft(2, "0").toString();
        					cal += year + month + date  +","
        				}
        			}
        		}
        		cal = cal.substring(0,cal.length-1).split(",");
        		var max = cal[0]
        		for(i=0; i<cal.length; i++){
        			if(max < cal[i]){
        				max = cal[i]
        			}
        		}
        		this.cal.set_value(max);
        	}
        	this.ds_attend.clearData();
        	if(this.ds_stdClass.getRowCount() > 0){
        		//stdClass에서 classCode로 Attend 테이블에서 목록을 가져옴
        		//Attend Table에서 인원이 0 인경우 insert
        		//Attend Table에서 이미 값이 있을 경우 update
        		//insert하는경우
        		for(var i=0; i<this.ds_stdClass.getRowCount(); i++){
        			var sCode = this.ds_stdClass.getColumn(i,"sCode");
        			var sName = this.ds_stdClass.getColumn(i,"sName");
        			var classCode = this.ds_stdClass.getColumn(i,"classCode");
        			var addRow = this.ds_attend.addRow();
        			this.ds_attend.setColumn(addRow,"classCode",classCode)
        			this.ds_attend.setColumn(addRow,"sCode",sCode);
        			this.ds_attend.setColumn(addRow,"sName",sName);
        			this.ds_attend.setColumn(addRow,"attendDay",this.cal.value);
        		}
        		this.transaction(
        			"attendList"
        			,"/attendList.nex"
        			,"in_ds=ds_attend:U"
        			,"ds_attend=out_ds"
        			,""
        			,"fn_callback_attend"
        		);
        		var arr = this.ds_cal.extractRows("datecolumn=="+this.cal.value);
        		if(arr.length == 0){
        			var calRow = this.ds_cal.addRow();
        			this.ds_cal.setColumn(calRow,"backgroundcolumn","wheat");
        			this.ds_cal.setColumn(calRow,"textcolorcolumn","black");
        			this.ds_cal.setColumn(calRow,"datecolumn",this.cal.value);
        			this.ds_cal.setColumn(calRow,"classCode",classCode);
        		}
        	}
        }

        this.fn_callback_attend=function(sId){
        	if(sId == "attendDayList"){
        		this.ds_cal.clearData();
        		if(this.ds_attendDayList.getRowCount() > 0 ){
        			for(var i=0; i<this.ds_attendDayList.getRowCount(); i++){
        				var attendDay = this.ds_attendDayList.getColumn(i,"attendDay");
        				var classCode = this.ds_attendDayList.getColumn(i,"classCode");
        				var calRow = this.ds_cal.addRow();
        				this.ds_cal.setColumn(calRow,"backgroundcolumn","wheat");
        				this.ds_cal.setColumn(calRow,"textcolorcolumn","black");
        				this.ds_cal.setColumn(calRow,"datecolumn",attendDay);
        				this.ds_cal.setColumn(calRow,"classCode",classCode);
        			}
        		}
        	}else if(sId == "attendList"){
        		this.ds_attend.set_keystring("S:+sName");
        	}
        }

        this.btnSave_onclick = function(obj,e)
        {
        	this.transaction(
        		"attendUpd"
        		,"/attendUpd.nex"
        		,"in_ds=ds_attend:U"
        		,"ds_attend=out_ds"
        		,""
        		,"fn_callback"
        	);
        };

        this.Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 4){
        		var attendState = this.ds_attend.getColumn(e.row,"attendState");
        		if(attendState == 03){
        			var reason = this.ds_attend.getColumn(e.row,"absenceReason");
        			this.PopupDiv00.form.TextArea00.set_value(reason);
        			this.col = e.cell;
        			this.row = e.row;
        			var nX = system.screenToClientX(this, e.screenx);
        			var nY = system.screenToClientY(this, e.screeny);
        			this.PopupDiv00.trackPopupByComponent(this, nX, nY, null, null, "call_back");  //grid 클릭한 col, cell 에 popup창 띄우기
        		}else{
        			alert("출석 상태를 확인해주세요");
        		}
        	}
        };


        this.PopupDiv00_oncloseup = function(obj,e)
        {
        	var nRow = this.ds_attend.rowposition;
        	var reason = this.PopupDiv00.form.TextArea00.text;
        	this.ds_attend.setColumn(nRow,"absenceReason",reason);
        	this.PopupDiv00.form.TextArea00.set_value("");
        };

        this.cal_onchanged = function(obj,e)
        {
        	var cal = this.cal.text;
        	var week = cal.substring(cal.length-1,cal.length);
        	var val = this.cal.value;
        	var start = val - this.cal.getDayOfWeek();
        	var end = start + 6;
        	var vArr = this.ds_cal.extractRows("datecolumn>='"+start+"'&&datecolumn<='"+end+"'");
        	var nRow = this.ds_class.rowposition;
        	var classCode = this.ds_class.getColumn(nRow,"classSeq");
        	var time = this.ds_class.getColumn(nRow,"classTime").split(")");
        	var weekTime ="";
        	for(var i=0; i<time.length-1; i++){
        		var weeks = time[i].split("(");
        		weekTime += weeks[0];
        	}
        	var arr = this.ds_cal.extractRows("datecolumn=="+this.cal.value);
        	if(weekTime.length <= vArr.length && arr.length == 0){ //이미 등록한 요일 제외하고 요일 개수만큼만 한 주에 등록 가능
        		alert("이번주차 수업을 더이상 등록할 수 없습니다");
        	}else{
        		if(weekTime.indexOf(week) < 0){ // 수업하는 요일 체크
        			if(arr.length == 0){
        				if(this.confirm("수업이 없습니다.\n수업을 추가하시겠습니까?")){
        					this.transaction(
        						"stdList"
        						,"/stdListSeq.nex"
        						,""
        						,"ds_stdClass=out_ds"
        						,"classCode="+classCode
        						,"fn_callback_stdList"
        					);
        				}else{
        					this.ds_attend.deleteAll();
        				}
        			}else{
        				this.transaction(
        					"stdList"
        					,"/stdListSeq.nex"
        					,""
        					,"ds_stdClass=out_ds"
        					,"classCode="+classCode
        					,"fn_callback_stdList"
        				);
        			}
        		}else{
        			this.transaction(
        				"stdList"
        				,"/stdListSeq.nex"
        				,""
        				,"ds_stdClass=out_ds"
        				,"classCode="+classCode
        				,"fn_callback_stdList"
        			);
        		}
        	}
        };


        this.btnDel_onclick = function(obj,e)
        {
        	if(this.confirm("해당 요일을 삭제하시겠습니까?")){
        		if(this.ds_attend.getRowCount() > 0){
        			this.transaction(
        				"attendDel"
        				,"/attendDel.nex"
        				,"in_ds=ds_attend:A"
        				,""
        				,""
        				,"fn_callback_del"
        			);
        		}else{
        			alert("수업이 없습니다");
        		}
        		this.ds_attend.deleteAll();
        	}
        };
        this.fn_callback_del=function(){
        	var nRow= this.ds_cal.findRow("datecolumn",this.cal.value);
        	this.ds_cal.deleteRow(nRow);
        }
        this.btnSearch_onclick = function(obj,e)
        {
        	var year = this.co_year.text;
        	year = year.substring(0,year.length-1)
        	if(this.co_semester.text == "1학기"){
        		var startTime = year+"0101";
        		var endTime = year+"0731";
        	}else{
        		var startTime = year+"0801";
        		var endTime = year+"1231";
        	}
        	var proCode ="91515073" // 교수코드(로그인)
        	this.transaction(
        		"proClassList"
        		,"/proClassList.nex"
        		,""
        		,"ds_class=out_ds"
        		,"proCode="+proCode +" startTime="+startTime + " endTime="+endTime
        		,"fn_callback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.attendManage_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.co_year.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Grid02.addEventHandler("oncellclick",this.Grid02_oncellclick,this);
            this.cal.addEventHandler("onchanged",this.cal_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.ds_attend.addEventHandler("oncolumnchanged",this.ds_attend_oncolumnchanged,this);
            this.ds_attendDayList.addEventHandler("oncolumnchanged",this.ds_attend_oncolumnchanged,this);
        };

        this.loadIncludeScript("attendManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
