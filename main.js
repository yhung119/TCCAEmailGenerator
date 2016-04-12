//getting the date set up
var d = new Date()
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var randint = function(){
	var num = Math.floor(Math.random()*(66-10))+10;
	//console.log(num);
	return num;
}
var n = month[d.getMonth()];
var names = ["veggie","meadow","comehome()","senior()","boyandgirl()"];
var vm = new Vue({
  el: '#app',
  data() {
    return {
      date: d.getDate(),
      month: n,
      randpic: randint()
    }
  },
  methods: {
  	edit: function(){
  		$("#editon").toggle();
  	},
    meadow: function() {
      	$("#meadow").toggle();
    },
    veggie: function(){
    	$("#veggie").toggle();
    },
    comehome: function(){
    	$("#comehome").toggle();
    },
    senior: function(){
    	$("#senior").toggle();
    },
    boyandgirl: function(){
    	$("#boyandgirl").toggle();
    }


  }
})

function divClicked() {
    var divHtml = $(this).prev('div.content').html();
    var editableText = $("<textarea />");
    editableText.val(divHtml);
    $(this).prev('div.content').replaceWith(editableText);
    editableText.focus();
    // setup the blur event for this new textarea
    editableText.blur(editableTextBlurred);
}

function editableTextBlurred() {
    var html = $(this).val();
    var viewableText = $("<div class='content'>");
    viewableText.html(html);
    $(this).replaceWith(viewableText);
    // setup the click event for this new div
    viewableText.click(divClicked);
}

$(document).ready(function () {
	$("#meadow").toggle();
	$("#boyandgirl").toggle();
	$("#comehome").toggle();
	$("#senior").toggle();
	$("#veggie").toggle();
    $(".edit").click(divClicked);
});