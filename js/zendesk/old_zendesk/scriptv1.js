/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

  $(window).scroll(function(event) {
    $(".side-col-inner").css("margin-left", 0-$(document).scrollLeft());
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 20) {
      $('.side-col-items').css("margin-top", "-75px");
    } else {
      $('.side-col-items').css("margin-top", "0px");
        }
        });
 
    if (!window._laq) { window._laq = []; }
                window._laq.push(function(){liveagent.showWhenOnline('573U000000001bb', document.getElementById('liveagent_button_online_573U000000001bb'));
                liveagent.showWhenOffline('573U000000001bb', document.getElementById('liveagent_button_offline_573U000000001bb'));
  });

  $('.cs-dropdown').click(function() {
    $('.cs-items').toggle('fast');
  });
  
  $('.cg-dropdown').click(function() {
    $('.cg-items').toggle('fast');
    //$('.side-col-left').toggleClass('side-col-large');
  });  
  
  /* Template */
  /*
  //
  var  = {
    name: " ",
    userGuide:"",
    category: "/hc/sections/ ",
    icon: ' " ',
    color: " "
  };
  */
  
/* ============================================  
   PS4 Products
   ============================================ */  
  //Stealth 400
  var stealth400 = {
    name: "Stealth 400",
  	userGuide:"https://turtlebeachhelp.zendesk.com/hc/en-us/articles/219022218",
    category:"/hc/sections/204277868",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth400_HS.png" ',
    color: ""
	};
  //Elite 800
  var elite800 = {
    name: "Elite 800",
  	userGuide:"",
    category:"/hc/sections/204131137",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite800_HS.png" ',
    color: ""
	};
  //Stealth 500P
  var stealth500p = {
    name: "Stealth 500P",
    userGuide:"",
    category:"/hc/sections/204147568",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth500p_HS.png" ',
    color: ""
  };
  //Recon 60P
  var recon60p = {
    name: "Recon 60P",
    userGuide:"",
    category: "/hc/sections/204152008",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon60p_HS.png" ',
    color: ""
  };
  //Recon 50P
  var recon50p = {
    name: "Recon 50P",
    userGuide:"",
    category: "/hc/sections/204152508",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon50p_HS.png" ',
    color: ""
  };
  //P4c
  var p4c = {
    name: "P4c",
    userGuide:"",
    category: "/hc/sections/204152518",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/p4c_HS.png" ',
    color: ""
  };
  //P12
  var p12 = {
    name: "P12",
    userGuide:"",
    category: "/hc/sections/204174928",
    icon: '///p5.zdassets.com/hc/theme_assets/992153/200243747/p12_f_2_HS.png" ',
    color: ""
  };
  //PX4
  var px4 = {
    name: "PX4",
    userGuide:"",
    category: "/hc/sections/204244668",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px4_HS.png" ',
    color: ""
  };
  //PS4 Headset Upgrade Kit
  var ps4upgrade = {
    name: "PS4 Headset Upgrade Kit",
    userGuide:"",
    category: "/hc/sections/205133827",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/ps4_upgradekit_s.png" ',
    color: ""
  };
  //Stealth 520
  var stealth520 = {
    name: "Stealth 520",
    userGuide:"",
    category: "/hc/sections/205731128",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth520.png" ',
    color: ""
  };
  //Stealth 350VR
  var stealth350vr = {
    name: "Stealth 350VR",
    userGuide:"",
    category: "/hc/sections/206054688",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth_350vr_HS.png" ',
    color: ""
  };
  
/* ============================================  
   Xbox One Products
   ============================================ */ 
  //Elite 800X
  var elite800x = {
    name: "Elite 800X",
    userGuide:"",
    category: "/hc/sections/204131107",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/large_e800xstand_s_150.png" ',
    color: "green"
  };
  //Stealth 420X
  var stealth420x = {
    name: "Stealth 420X",
    userGuide:"",
    category: "/hc/sections/204151977",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth420x_HS.png" ',
    color: "green"
  };
  //XO7 Pro
  var xo7Pro = {
    name: "XO Seven Pro",
    userGuide:"",
    category: "/hc/sections/204174918",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xosevenpro_HS.png" ',
    color: "green"
  };
  //XO4 Stealth
  var xo4Stealth = {
    name: "XO Four Stealth",
    userGuide:"",
    category: "/hc/sections/204152598",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xofourstealth_HS.png" ',
    color: "green"
  };
  //XO One
  var xoOne = {
    name: "XO One",
    userGuide:"",
    category: "/hc/sections/204152588",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xoone_HS.png" ',
    color: "green"
  };
  //Recon 50X
  var recon50x = {
    name: "Recon 50X",
    userGuide:"",
    category: "/hc/sections/204152068",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon50x_HS.png" ',
    color: "green"
  };
  //Recon 30X
  var recon30x = {
    name: "Recon 30X",
    userGuide:"",
    category: "/hc/sections/204131087",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon30X_HS.png" ',
    color: "green"
  };
  //Stealth 500X
  var stealth500x = {
    name: "Stealth 500X",
    userGuide:"",
    category: "/hc/sections/204219017",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/Stealth500X_HS.png" ',
    color: "green"
  };
  //HAC
  var hac = {
    name: "Headset Audio Controller", 
    userGuide:"",
    category: "/hc/sections/204267567",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/hac1.png" ',
    color: "green"
  }; 
  //HAC Plus
    var hacPlus = {
    name: "Headset Audio Controller Plus",
    userGuide:"",
    category: "/hc/sections/205103707",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/hacplus.png" ',
    color: "green"
  };
  //Titanfall Atlas
  var atlas = {
    name: "Titanfall Atlas",
    userGuide:"",
    category: "/hc/sections/204248738",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/titanfall_atlas_s.png" ',
    color: "green"
  };
  //TAA
  var taa = {
    name: "Tactical Audio Adapter",
    userGuide:"",
    category: "/hc/sections/205181107",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite_pro_adapter.png" ',
    color: "green"
  };
  //Stealth 420X+
  var stealth420xPlus = {
    name: "Stealth 420X+",
    userGuide:"",
    category: "/hc/sections/205735047",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth420x_plus.png" ',
    color: "green"
  };  
/* ============================================  
   PC Products
   ============================================ */ 
  //Stealth 450
  var stealth450 = {
    name: "Stealth 450",
    userGuide:"",
    category: "/hc/sections/204151908",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/stealth450_HS.png" ',
    color: "#e11a1a"
  };
  //Recon 50
  var recon50 = {
    name: "Recon 50",
    userGuide:"",
    category: "/hc/sections/204152028",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon50_HS.png" ',
    color: "#e11a1a"
  };
  //Z22
  var z22 = {
    name: "Z22",
    userGuide:"",
    category: "/hc/sections/204242307",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/z22_HS.png" ',
    color: "#e11a1a"
  };
  //Z60
  var z60 = {
    name: "Z60",
    userGuide:"",
    category: "/hc/sections/204218637",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/z60_HS.png" ',
    color: "#e11a1a"
  };
  //Recon 320
  var recon320 = {
    name: "Recon 320",
    userGuide:"",
    category: "/hc/sections/204248748",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/recon320_HS.png" ',
    color: "#e11a1a"
  };
  //Star Wars (Original)  
  var starWars = {
    name: "Star Wars",
    userGuide:"",
    category: "/hc/sections/204270427",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/star_wars_HS.png" ',
    color: "#e11a1a"
  };
  //Heroes of the Storm 
  var heroes = {
    name: "Heroes of the Storm",
    userGuide:"",
    category: "/hc/sections/204645288",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/heroes_of_the_storm.png" ',
    color: "#e11a1a"
  };  
  //ZLa
  var zLa = {
    name: "ZLa",
    userGuide:"",
    category: "/hc/sections/204249128",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/zla_HS.png" ',
    color: "#e11a1a"
  };  
  //Z11
  var z11 = {
    name: "Z11",
    userGuide:"",
    category: "/hc/sections/204645248",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/z11_150.png" ',
    color: "#e11a1a"
  };  
  //Z300
  var z300 = {
    name: "Z300",
    userGuide:"",
    category: "/hc/sections/204131617",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/z300_HS.png" ',  
    color: "#e11a1a"
  };  
  //i60
  var i60 = {
    name: "i60",
    userGuide:"",
    category: "/hc/sections/204645308",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/i60.png" ',  
    color: "#e11a1a"
  };  
    //i30
  var i30 = {
    name: "i30",
    userGuide:"",
    category: "/hc/sections/204623807",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/i30_HS.png" ',
    color: "#e11a1a"
  };    
  //Grip 500
  var grip500 = {
    name: "Grip 500",
    userGuide:"",
    category: "/hc/sections/204638088",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/grip_500_s.png" ',  
    color: "#e11a1a"
  };  
  //Grip Arena
  var gripArena = {
    name: "Grip Arena",
    userGuide:"",
    category: "/hc/sections/204638108",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/grip_arena_mouse_s.png" ',  
    color: "#e11a1a"
  };
  //Amigo II
  var amigo2 = {
    name: "Amigo II",
    userGuide:"",
    category: "/hc/sections/205173328",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/amigo2.png" ',
    color: "#e11a1a"
  };
  //Micro II
  var micro2 = {
    name: "Micro II",
    userGuide:"",
    category: "/hc/sections/205107547",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/micro2.png" ',
    color: "#e11a1a"
  };
  
/* ============================================  
   PS3 Products
   ============================================ */ 
  //PX22
  var px22 = {
    name: "PX22",
    userGuide:"",
    category: "/hc/sections/204131607",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px22_HS.png" ',
    color: ""
  };
  //PX51
  var px51 = {
    name: "PX51",
    userGuide:"",
    category: "/hc/sections/204232567",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px51_HS.png" ',
    color: ""
  };
  //PX3
  var px3 = {
    name: "PX3",
    userGuide:"",
    category: "/hc/sections/204244658",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px3_HS.png" ',  
    color: ""
  };
  //P11
  var p11 = {
    name: "P11",
    userGuide:"",
    category: "/hc/sections/204244628",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/p11_HS.png" ',
    color: ""
  }; 
  //PLa
  var pLa = {
    name: "PLa",
    userGuide:"",
    category: "/hc/sections/204218947",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/PLa_HS.png" ',  
    color: ""
  }; 
  //PBT
  var pbt = {
    name: "PBT",
    userGuide:"",
    category: "/hc/sections/204265688",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/pbt_HS.png" ',
    color: ""
  }; 
/* ============================================  
   Xbox 360 Products
   ============================================ */ 
  //XP510
  var xp510 = {
    name: "XP510",
    userGuide:"",
    category: "/hc/sections/204254748",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xp510_HS.png" ',
    color: "green"
  };  
  //XP400
  var xp400 = {
    name: "XP400",
    userGuide:"",
    category: "/hc/sections/204253808",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xp400_HS.png" ',
    color: "green"
  };
  //XLa
  var xLa = {
    name: "XLa",
    userGuide:"",
    category: "/hc/sections/204223617",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xla_HS.png" ',
    color: "green"
  };
  //XL1
  var xl1 = {
    name: "XL1",
    userGuide:"",
    category: "/hc/sections/204248708",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xl1_HS.png" ',
    color: "green"
  };
  //XC1
  var xc1 = {
    name: "XC1",
    userGuide:"",
    category: "/hc/sections/204223517",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xc1_HS.png" ',
    color: "green"
  };
  //X42
  var x42 = {
    name: "X42",
    userGuide:"",
    category: "/hc/sections/204218927",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/x42_HS.png" ',
    color: "green"
  };
  //X12
  var x12 = {
    name: "X12",
    userGuide:"",
    category: "/hc/sections/204244328",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/x12_HS.png" ',
    color: "green"
  };
  //X32
  var x32 = {
    name: "X32",
    userGuide:"",
    category: "/hc/sections/204152468",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/x32_HS.png" ',
    color: "green"
  };
  
/* ============================================  
   Universal Products
   ============================================ */ 
  //X-Wing Pilot
  var xWing = {
    name: "X-Wing Pilot",
    userGuide:"",
    category: "/hc/sections/204645368",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/xwingpilot.png" ',
    color: "#9F8552"
  };    
  //Battlefront Sandtrooper
  var sandtrooper = {
    name: "Sandtrooper",
    userGuide:"",
    category: "/hc/sections/204218617",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/sandtrooper_HS.png" ',
    color: "#9F8552"
  };
  //PX24
  var px24 = {
    name: "PX24",
    userGuide:"",
    category:"/hc/sections/204131147",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/px24_HS.png" ',
    color: "#9F8552"
  };
  //PX24
  var elitePro = {
    name: "Elite Pro",
    userGuide:"",
    category:"/hc/sections/204629247",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/elite_pro.png" ',
    color: "#9F8552"
  };
  //TAC
  var tac = {    
    name: "Tactical Audio Controller",
    userGuide:"",
    category:"/hc/sections/205046027",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/tac_icon_s.png" ',
    color: "#9F8552"
  };
  //Stream Mic
  var streamMic = {
    name: "Stream Mic",
    userGuide:"",
    category: "/hc/sections/206070687",
    icon: '//p5.zdassets.com/hc/theme_assets/992153/200243747/streammic.png" ',
    color: "#e11a1a"
  };
  
  //PS4 Headsets
  var ps4Headsets = [
    elite800, stealth520, stealth400, recon50p, recon60p, elitePro, tac, px24, stealth350vr, streamMic, stealth500p, p4c, p12, px4, xWing, ps4upgrade
    ];
  
  var otherPs4 = [
    recon50x, recon50
    ];
  
    //Xbox One Headsets
  var x1Headsets = [
    elite800x, stealth420xPlus, xo7Pro, xo4Stealth, recon50x, elitePro, tac, stealth420x, px24, xoOne, recon30x, streamMic, xWing, taa, hac, hacPlus
    ];
  
  var otherX1 = [
    recon50, recon50p
    ];
  
  //PC Headsets
  var pcHeadsets = [
    stealth450, recon50, z22, z60, recon320, tac, starWars, heroes, zLa, z11, z300, streamMic, px24, x12, grip500, gripArena, amigo2, micro2
    ];
  
  var otherPc = [
    recon50p, recon50x, p11, pLa, px22, sandtrooper
    ];
  
  //PS3 Headsets
  var ps3Headsets = [
    px22, px3, p11, pLa, pbt, elite800, stealth500p, stealth400, recon60p, px4
    ];
  
  var otherPs3 = [
    xp400
    ];

  //Xbox 360 Headsets
  var x360Headsets = [
    x12, x32, x42, xl1, xLa, xc1, xp400, px22, px3
    ];  
  
  var otherX360 = [
    px4
    ];
  /*
  //Mobile Headsets
  var mobileHeadsets = [
    i30
    ];
	*/
  var selected = $('.category');
 	//var classSelected = 'active';
  var currentHeadset = $('.headset-icon');
  

  var swap = function(s){
    selected.removeClass('active');
    selected = $(s);
    //classSelected = c;
    selected.addClass('active');
  };
	  var iconHover = function(s) {
    $(s).hover (function() {
      $(this).addClass('highlight');
    }, function() {
      $(this).removeClass('highlight');
    });
  };
    
  //load icons only
  var loadProducts = function(headsetArray) {
    $('.select-title').hide();
    $('.headset-list').hide();
    $('.headset-list').empty();
    for (var i = 0; i < headsetArray.length; i++)
    {
       $('.headset-list').append('<li><a style ="color: ' + headsetArray[i].color + '" href="' + headsetArray[i].category + '"><div class="headset-icon"><ul><li>' + headsetArray[i].name + '</li><li><img class ="found" src="' + headsetArray[i].icon + '></li></ul></div></a></li>');
    }    
    $('.select-title').fadeIn("fast");
    $('.headset-list').fadeIn("fast");
    iconHover('.headset-icon');
  };
  
  /*
  var loadOther = function(headsetArray) {
    $('.other-products').hide()    
    for (var i = 0; i < headsetArray.length; i++)
    {
       $('.other-products').append('<li><a style ="color: ' + headsetArray[i].color + '" href="' + headsetArray[i].category + '"><div class="headset-icon"><ul><li>' + headsetArray[i].name + '</li><li><img class ="found" src="' + headsetArray[i].icon + '></li></ul></div></a></li>');
    }  
    $('.other-products').fadeIn("fast"); 
    iconHover('.headset-icon');
  };
  */  
  $('.category-list li div').hover(function () {
      $(this).addClass('over');
    }, function () {
      $(this).removeClass('over');
    });
  
  $('.category-list li').click(function() {
    //$('.promoted-articles').css({"background-color": "white"});
    $('.promoted-articles-list').hide(); 
	  //$('.headset-list').html('<h1 class="select-product">Select Your Product</h1><hr>'); 
  });
	  
  //Display PS4 Headsets 
  $('.ps4').click(function() {
    swap('.ps4');
    loadProducts(ps4Headsets);
    /*
    $('.headset-list').append('<div class="select-other"><hr><h1>Other Compatible Products</h1></div>');
    var select = $('.promoted-articles').find('.select-other');
    select.click(function() {
      loadOther(otherPs4); 
    }); 
    */
  });
  
  //Display Xbox One Headsets
  $('.x1').click(function() {
    swap('.x1');
    loadProducts(x1Headsets);
    //iconHover('.headset-icon');
  });
  
  //Display PC Headsets
  $('.pc').click(function() {
    swap('.pc');
    loadProducts(pcHeadsets);
    //iconHover('.headset-icon');
  });

  //Display PS3 Headsets
  $('.ps3').click(function() {
    swap('.ps3');
    loadProducts(ps3Headsets);
    //iconHover('.headset-icon');
  });
  
  //Display Xbox 360 Headsets
  $('.x360').click(function() {
    swap('.x360');
    loadProducts(x360Headsets);
    //iconHover('.headset-icon');
  });  
  
    //Display Mobile Headsets
  $('.mobile').click(function() {
    swap('.mobile');
    loadProducts(mobileHeadsets);
    //iconHover('.headset-icon');
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
  /*
  $(".search-before").click(function() {
    search();
  });
  */
  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }
  
/*  $("#query").attr("placeholder","Search Knowledgebase").val("").focus().blur(); */
  
  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });
  var $iframes = $( "iframe" );

// Find &#x26; save the aspect ratio for all iframes
$iframes.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width &#x26; height attributes
    .removeAttr( "width" )
    .removeAttr( "height" );
});

// Resize the iframes when the window is resized
$( window ).resize( function () {
  $iframes.each( function() {
    // Get the parent container&#x27;s width
    var width = $( this ).parent().width();
    $( this ).width( width )
      .height( width * $( this ).data( "ratio" ) );
  });
// Resize to fix all iframes on page load.
}).resize();

});
