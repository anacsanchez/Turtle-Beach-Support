/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  
  /***  PS4  ***/
  var stealth400 = {
    name: "Stealth 400",
    userGuide:"https://turtlebeachhelp.zendesk.com/hc/en-us/articles/219022218",
    category:"https://turtlebeachhelp.zendesk.com/hc/sections/204277868",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth400_HS.png" alt="Stealth 400"'
  };   
  var elite800 = {
    name: "Elite 800",
    userGuide:"",
    category:"https://turtlebeachhelp.zendesk.com/hc/sections/204131137",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite800_HS.png" alt="Elite 800"'
  };  
  var stealth500p = {
    name: "Stealth 500P",
    userGuide:"",
    category:"https://turtlebeachhelp.zendesk.com/hc/sections/204147568",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth500p_HS.png" alt="Stealth 500P"'
  };  
  var px24 = {
    name: "PX24",
    userGuide:"",
    category:"https://turtlebeachhelp.zendesk.com/hc/sections/204131147",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px24_HS.png" alt="PX24"'
  }; 
  var recon60p = {
    name: "Recon 60P",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152008",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon60p_HS.png" alt="Recon 60P"'
  };
  var recon50p = {
    name: "Recon 50P",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152508",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon50p_HS.png" alt="Recon 50P"'
  };
  var p4c = {
    name: "P4c",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152518",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/p4c_HS.png" alt="P4c"'
  };
  var p12 = {
    name: "P12",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204174928",
    icon: '///p5.zdassets.com/hc/theme_assets/992153/200243747/p12_f_2_HS.png" alt="P12"'
  };  
  var px4 = {
    name: "PX4",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204244668",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px4_HS.png" alt="PX4"'
  };
  var sandtrooper = {
    name: "Sandtrooper",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204218617",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/sandtrooper_HS.png" alt="Star Wars Sandtrooper"'
  };
  
  //PS4 Headsets
  var ps4Headsets = [
    elite800, stealth500p, stealth400, px24, recon60p, recon50p,
    p4c, p12, px4, sandtrooper
    ];
  
  /***  Xbox One  ***/
  //Elite 800X
  var elite800x = {
    name: "Elite 800X",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204131107",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/large_e800xstand_s_150.png" alt="Elite 800X"'
  };
  //Stealth 420X
  var stealth420x = {
    name: "Stealth 420X",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204151977",
    icon: ' " alt="Stealth 420X"'
  };
  //XO7 Pro
  var xo7Pro = {
    name: "XO Seven Pro",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204174918",
    icon: ' " alt="XO Seven Pro"'
  };
  //XO4 Stealth
  var xo4Stealth = {
    name: "XO Four Stealth",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152598",
    icon: ' " alt="XO Four Stealth"'
  };
  //XO One
  var xoOne = {
    name: "XO One",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152588",
    icon: ' " alt="XO One"'
  };
  //Recon 50X
  var recon50x = {
    name: "Recon 50X",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152068",
    icon: ' " alt="Recon 50X"'
  };
  //Recon 30X
  var recon30x = {
    name: "Recon 30X",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204131087",
    icon: ' " alt="Recon 30X"'
  };
  //Stealth 500X
  var stealth500x = {
    name: "Stealth 500X",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204219017",
    icon: ' " alt="Stealth 500X"'
  };
  //HAC
  var hac = {
    name: "HAC", 
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204267567",
    icon: ' " alt="Headset Audio Controllers"'
  }; 
  //Titanfall Atlas
  var atlas = {
    name: "Titanfall Atlas",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204248738",
    icon: ' " alt="Titanfall Atlas"'
  };
  
  //Xbox One Headsets
  var x1Headsets = [
    elite800x, stealth420x, xo7Pro, xo4Stealth, xoOne, recon50x,
    recon30x, stealth500x, hac, atlas
    ];
  
  /***  PC  ***/
  //Stealth 450
  var stealth450 = {
    name: "Stealth 450",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204151908",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth450_icon.png" alt="Stealth 450"'  
  };
  //Recon 50
  var recon50 = {
    name: "Recon 50",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152028",
    icon: ' " alt="Recon 50"'  
  };
  //Z22
  var z22 = {
    name: "Z22",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204242307",
    icon: ' " alt="Z22"'  
  };
  //Z60
  var z60 = {
    name: "Z60",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204218637",
    icon: ' " alt="Z60"'  
  };
  //Recon 320
  var recon320 = {
    name: "Recon 320",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204248748",
    icon: ' " alt="Recon 320"'
  };
  //Star Wars (Original)  
  var starWars = {
    name: "Star Wars",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204270427",
    icon: ' " alt="Star Wars"'  
  };
  //ZLa
  var zLa = {
    name: "ZLa",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204249128",
    icon: ' " alt="ZLa"'  
  };  
  //Z300
  var z300 = {
    name: "Z300",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204131617",
    icon: ' " alt="Z300"'  
  };  
  
  //PC Headsets
  var pcHeadsets = [
    stealth450, recon50, z22, z60, recon320, starWars, zLa, z300
    ];
  
  /***  PS3  ***/
  //PX22
  var px22 = {
    name: "PX22",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204131607",
    icon: ' " alt="PX22"'  
  };
  //PX51
  var px51 = {
    name: "PX51",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204232567",
    icon: ' " alt="PX51"'  
  };
  //PX3
  var px3 = {
    name: "PX3",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204244658",
    icon: ' " alt="PX3"'  
  };
  //P11
  var p11 = {
    name: "P11",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204244628",
    icon: ' " alt="P11"'  
  }; 
  //PLa
  var pLa = {
    name: "PLa",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204218947",
    icon: ' " alt="PLa"'  
  }; 
  //PBT
  var pbt = {
    name: "PBT",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204265688",
    icon: ' " alt="PBT"'  
  }; 
  
  //PS3 Headsets
  var ps3Headsets = [
    px22, px51, px3, p11, pLa, pbt
    ];

  /***  Xbox 360  ***/
  //XP510
  var xp510 = {
    name: "XP510",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204254748",
    icon: ' " alt="XP510"'  
  };  
  //XP400
  var xp400 = {
    name: "XP400",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204253808",
    icon: ' " alt="XP400"'  
  };
  //XLa
  var xLa = {
    name: "XLa",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204223617",
    icon: ' " alt="XLa"'  
  };
  //XL1
  var xl1 = {
    name: "XL1",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204248708",
    icon: ' " alt="XL1"'  
  };
  //XC1
  var xc1 = {
    name: "XC1",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204223517",
    icon: ' " alt="XC1"'  
  };
  //X42
  var x42 = {
    name: "X42",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204218927",
    icon: ' " alt="X42"'  
  };
  //X12
  var x12 = {
    name: "X12",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204244328",
    icon: ' " alt="X12"'     
  };
  //X32
  var x32 = {
    name: "X32",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/204152468",
    icon: ' " alt="X32"'  
  };
  
  //Xbox 360 Headsets
  var x360Headsets = [
    xp510, xp400, xLa, xl1, xc1, x42, x12, x32
    ];

  /***  Mobile  ***/
  //i30
  var i30 = {
    name: "i30",
    userGuide:"",
    category: "https://turtlebeachhelp.zendesk.com/hc/sections/202694828",
    icon: ' " alt="i30"'  
  };    
  
  //Mobile Headsets
  var mobileHeadsets = [
    i30
    ];

  var selected = $('.category');
 	//var classSelected = 'active';
  var currentHeadset = $('.headset-icon');
  
  var swap = function(s){
    selected.removeClass('active');
    selected = $(s);
    //classSelected = c;
    selected.addClass('active');
  };
  //load interactive icons
  /*
  var loadProducts = function(headsetArray) {
    $('.headset-list').hide();

    for (var i = 0; i < headsetArray.length; i++)
    {
       $('.headset-list').append('<li><div class="headset-icon"><img class ="found" src="' + headsetArray[i].icon + '><div class="transition"><ul><li><a href="' + headsetArray[i].userGuide + '">User Guide</a></li><li><a href="' + headsetArray[i].category + '">Troubleshooting</a></li></ul></div></div></li>');
    }    
    $('.headset-list').fadeIn("fast");        
  };
*/
  //load icons only
  var loadProducts = function(headsetArray) {
    $('.headset-list').hide();

    for (var i = 0; i < headsetArray.length; i++)
    {
       $('.headset-list').append('<li><a href="' + headsetArray[i].category + '"><div class="headset-icon"><ul><li>' + headsetArray[i].name + '</li><li><img class ="found" src="' + headsetArray[i].icon + '></li></ul></div></a></li>');
    }    
    $('.headset-list').fadeIn("fast");        
  };
  
  
  $('.category-list li').click(function() {
    $('.promoted-articles').css({"background-color": "white"});
    $('.promoted-articles-list').hide(); 
	  $('.headset-list').html('<h1 class="select-product">Select Your Product</h1><hr>'); 

 		/*
    var categoryName = $(this).attr('class');
    var categoryOver = "'." + categoryName + "-over'";
    var categoryActive = "'." + categoryName + "-active'";
    
    $('.promoted-articles-list').append(categoryActive); 
		swap(categoryOver, categoryActive);
		loadProducts(ps4Category, ps4Icon);
    */
  });

  //Display PS4 Headsets 
  $('.ps4').click(function() {
    swap('.ps4');
    loadProducts(ps4Headsets);
    
    //(.headset-icon) = $('.headset-icon').find('.found');    
    $('.headset-icon').click(function () {
      currentHeadset.find('.transition').hide();      
      $(this).find('.transition').show();
      // $(this).addClass('highlight');
      // $(this).addClass('center'); 
      // $(this).parent('li').siblings().hide();
      // $('.promoted-articles').css({"background-color": "gray"});
      //$(this).css({"text-align" : "center"});
      currentHeadset = $(this);
    });
    
    
    $('.headset-icon').hover(function () {
      $(this).addClass('highlight');
    }, function () {
      $(this).removeClass('highlight');
    });
   
    /*
    $('.headset-icon').hover(function () {
      $(this).find('.transition').show();
    }, function () {
      $(this).find('.transition').hide();
    });
    */
  });

  /*
      //Display PS4 Headsets
  $('.ps4-list').click(function() {
    swap('.ps4-over','ps4-active');
    loadProducts(ps4Category, ps4Icon);
      $('.headset-icon img').hover( function() {
    $(this).animate({ 'zoom': 1.2}, 400);
     },
    function() {
      $(this).animate({'zoom': 1}, 400);
    });
  });
  */
  //Display Xbox One Headsets
  $('.x1').click(function() {
    //swap('.x1-over','x1-active');
    swap('.x1');
    loadProducts(x1Headsets);
    $('.headset-icon li').css({"color":"green"});
  });
  
  //Display PC Headsets
  $('.pc').click(function() {
    swap('.pc');
    loadProducts(pcHeadsets);
    $('.headset-icon li').css({"color":"#e11a1a"});    
  });

  //Display PS3 Headsets
  $('.ps3').click(function() {
    swap('.ps3');
    loadProducts(ps3Headsets);
  });
  
  //Display Xbox 360 Headsets
  $('.x360').click(function() {
    swap('.x360');
    loadProducts(x360Headsets);
  });  
  
    //Display Mobile Headsets
  $('.mobile').click(function() {
    swap('.mobile');
    loadProducts(mobileHeadsets);
  }); 
/* 
  $('.headset-icon').on('mouseenter', function() {
    $(this).animate({ margin: -10, width: "+=20", height: "+=20"}, 'fast');
     })
    .on('mouseleave', function() {
      $(this).animate({margin: 0, width: "-= 20", height: "-=20"}, 'fast');
   })
*/
     
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
