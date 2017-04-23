/* custom js file for the application 
 * Created by Mazahar Shaikh
 * Date: 22 Apr 2017
*/

// application namespace
var app = {
	rowData : [],
	pupilCount : 0,
	init: function(){
	  // initialize 
	  this.pupilCount = 40;
	  this.dataContainer = $("div#infoDetails");

	  // get, process and hold row data 
	  this.processRowData();

	  // add event handlers
	  this.attachEventHandlers();
	},
	getRowData : function(){
		var dummyJSON = [
			{
				"objective"  : "123. Doortellen en terugtellen, met sprongen van 3 of meer dan 10 en zelfs meer dan 100",
				"bluePupil"  : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
				"yellowPupil": []
			},
			{
				"objective"  : "201. Splitsend vermenigvuldigen (6 x 32 = 6837) En noog meer rekenen dan je zou willen",
				"bluePupil"  : [0, 1, 2],
				"yellowPupil": [37, 38, 39]
			},
			{
				"objective"  : "123. Doortellen en terugtellen, met sprongen van 1, 2, 4 en 6",
				"bluePupil"  : [0, 1, 2],
				"yellowPupil": [37, 38, 39]
			}
		];
		return dummyJSON;
	},
	processRowData : function(){
	  // get dynamic data 
	  var data = this.getRowData();
	  var i = 0;
	  for(i; i<data.length;i++){
	  	this.generateRow(i, data[i]);
	  }
	},
	generateRow : function(indx, data){
		// to generate pupil circle html
		var k = 0;
		var pupilCount = this.pupilCount;
		var pupilHTML = "";

		// to generate row html
		var rowHTML = '<div class="mrow">';
		rowHTML    += '  <div class="mcol-5 col-info">';
		rowHTML    += '    <p>';
		rowHTML    += data.objective;
		rowHTML    += '    </p>';
		rowHTML    += '  </div>';
		rowHTML    += '  <div class="mcol-7">';
		rowHTML    += '    <div class="mcol-8 col-pcircle" id="pcircle-'+indx+'">';
		
		// generate pupil circles
		for(k = 0; k < pupilCount; k++) {
            if(data.bluePupil.indexOf(k) > -1) {
                pupilHTML += '<div class="circle blue"></div>';
            }
            else if(data.yellowPupil.indexOf(k) > -1) {
            	pupilHTML += '<div class="circle yellow"></div>';                
            }
            else {
            	pupilHTML += '<div class="circle"></div>';                
            }
        }

        // add pupil circle HTML
        rowHTML    += pupilHTML;

        // continue with rest of row html
		rowHTML    += '    </div>';
		rowHTML    += '    <div class="mcol-1"></div>';
		rowHTML    += '    <div class="mcol-3">';
		rowHTML    += '      <button class="app-btn head-btn show-btn" id="showBtn-'+indx+'"><span>Show details</span></button>';
		rowHTML    += '    </div>';
		rowHTML    += '  </div>';		

		// add generated html row in container
		this.dataContainer.append(rowHTML);
	},
	attachEventHandlers : function(){
		// local caching of elements
		var btnSelectGrade = $('#btnSelectGrade');
		var gradeDropdown  = $('#gradeDropdown');
		var toggleBtn      = $('.toggle-btn');

		//dropdwon btn action 
		btnSelectGrade.click(function() {  
            //toggle the dropdown 
            gradeDropdown.toggle();
        });

		//dropdown item selection
        gradeDropdown.find('div.option').click(function() {
            //update the selected value
            var value = $(this).text();
            btnSelectGrade.find('span.btn-txt').html(value);
            // close the dropdown
            gradeDropdown.hide();
        });

        //toggling button
        toggleBtn.click(function(){
            //removing the old active class
            toggleBtn.removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        })
	}
};

// start the application
app.init();