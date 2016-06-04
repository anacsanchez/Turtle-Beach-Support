/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  //PS4 Categories
  var ps4Category = [
    //Stealth 400
    "https://turtlebeachhelp.zendesk.com/hc/sections/204277868",
    //Elite 800
    "https://turtlebeachhelp.zendesk.com/hc/sections/204131137",
    //Stealth 500P
    "https://turtlebeachhelp.zendesk.com/hc/sections/204147568",
    //PX24
    "https://turtlebeachhelp.zendesk.com/hc/sections/204131147",    
    //Recon 60P
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152008",
    //Recon 50P
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152508",
    //P4c
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152518",    
    //P12
    "https://turtlebeachhelp.zendesk.com/hc/sections/204174928",    
    //PX4
    "https://turtlebeachhelp.zendesk.com/hc/sections/204244668",
    //Star Wars Battlefront Sandtrooper
    "https://turtlebeachhelp.zendesk.com/hc/sections/204218617"    
    ];
  var ps4Icon = [
    //Stealth 400
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth400_icon.png" alt="Stealth 400"',
    //Elite 800
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite800_icon2.png" alt="Elite 800"',
    //Stealth 500P
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth500P_icon.png" alt="Stealth 500P"',
    //PX24
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/PX24_icon.png" alt="PX24"',
    //Recon 60P
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon60p_icon2.png" alt="Recon 60P"',
    //Recon 50P
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon50p_icon.png" alt="Recon 50P"',
    //P4c
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/p4c_icon.png" alt="P4c"',
    //P12
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/p12_icon.png" alt="P12"',
    //PX4
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/px4_icon.png" alt="PX4"',  
    //Star Wars Battlefront Sandtrooper
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/sandtrooper_icon2.png" alt="Star Wars Sandtrooper"'    
    ];
  //Xbox One Categories
  var x1Category = [
    //Elite 800X
    "https://turtlebeachhelp.zendesk.com/hc/sections/204131107",
    //Stealth 420X
    "https://turtlebeachhelp.zendesk.com/hc/sections/204151977",
    //XO Seven Pro
    "https://turtlebeachhelp.zendesk.com/hc/sections/204174918",
    //XO Four Stealth
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152598",
    //XO One
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152588",
    //Recon 50X
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152068",
    //Recon 30X
    "https://turtlebeachhelp.zendesk.com/hc/sections/204131087",
    //Stealth 500X
    "https://turtlebeachhelp.zendesk.com/hc/sections/204219017",
    //HAC
    "https://turtlebeachhelp.zendesk.com/hc/sections/204267567",
    //Titanfall Atlas
    "https://turtlebeachhelp.zendesk.com/hc/sections/204248738"    
    ];
  var x1Icon = [
    //Elite 800X
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite800X_icon.png" alt="Elite 800X"',
    //Stealth 420X
    ' " alt="Stealth 420X"',
    //XO Seven Pro
    ' " alt="XO Seven Pro"',
    //XO Four Stealth
    ' " alt="XO Four Stealth"',
    //XO One
    ' " alt="XO One"',
    //Recon 50X
    ' " alt="Recon 50X"', 
    //Recon 30X
    ' " alt="Recon 30X"',
    //Stealth 500X
    ' " alt="Stealth 500X"',
    //HAC
    ' " alt="Headset Audio Controllers"', 
    //Titanfall Atlas
    ' " alt="Titanfall Atlas"'    
    ];
  	//
  //PC Categories
  var pcCategory = [
    //Stealth 450
    "https://turtlebeachhelp.zendesk.com/hc/sections/204151908",
    //Recon 50
    "https://turtlebeachhelp.zendesk.com/hc/sections/204152028",
    //Z22
    "https://turtlebeachhelp.zendesk.com/hc/sections/204242307",      
    //Z60
    "https://turtlebeachhelp.zendesk.com/hc/sections/204218637",   
    //Recon 320
    "https://turtlebeachhelp.zendesk.com/hc/sections/204248748",
    //Star Wars
    "https://turtlebeachhelp.zendesk.com/hc/sections/204270427",
    //ZLa
    "https://turtlebeachhelp.zendesk.com/hc/sections/204249128",
    //Z300
    "https://turtlebeachhelp.zendesk.com/hc/sections/204131617"      
    ];
  var pcIcon = [
    //Stealth 450
    '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth450_icon.png" alt="Stealth 450"',
    //Recon 50
    ' " alt="Recon 50"',
    //Z22
    ' " alt="Z22"',
    //Z60
    ' " alt="Z60"',
    //Recon 320
    ' " alt="Recon 320"',
    //Star Wars
    ' " alt="Star Wars"',
    //ZLa
    ' " alt="ZLa"',
    //Z300
    ' " alt="Z300"'    
    ];
  var selected = $('.ps4-over');
 	var classSelected = 'ps4-active';
  
  var swap = function(s, c){
    selected.removeClass(classSelected);
    selected = $(s);
    classSelected = c;
    selected.addClass(classSelected);
  };
  
  var loadProducts = function(headsetArray, headsetIcon) {
    for (var i = 0; i < headsetArray.length; i++)
    {
       $('.headset-list').append('<li><div class="headset-icon"><a href="' + headsetArray[i] + '"><img src="' + headsetIcon[i] + '></a></div></li>');  
    }
   };
  
  var removePromoted = function() {
    $('.promoted-articles-list').remove();
    $('.promoted-articles').html('<div class="headset-list"></div>');
    $('.headset-list').append('<h1 class="select-product">Select Your Product</h1><hr>');
  };
  
  //Display PS4 Headsets
  $('.ps4-list').click(function() {
    swap('.ps4-over','ps4-active');
		removePromoted();
    loadProducts(ps4Category, ps4Icon);
  });
  
  //Display Xbox One Headsets
  $('.x1-list').click(function() {
    swap('.x1-over','x1-active');
    removePromoted();
    loadProducts(x1Category, x1Icon);
  });
  
  //Display PC Headsets
  $('.pc-list').click(function() {
    swap('.pc-over','pc-active');
    removePromoted();
    loadProducts(pcCategory, pcIcon);
  });
  

  
  //Submit a Request
  $('.submit-a-request').html('Contact Support');
  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
      $commentContainerFormControls = $(".comment-form-controls");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

});
