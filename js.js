var section;
var year;


const addSection = document.getElementById("parent");

const createSection = document.createElement("div");
createSection.classList.add("section-number");
AOS.init();
$(".sections .section").click((e) => {
  section = $(e.target).attr("data-sec");

  $(".sections").css("opacity", 0);
if(section=="ai")
{
  $(".ai").css({ opacity: 1, "z-index": 3 });
}
else {
  setTimeout(() => {
    $(".normal").css({ opacity: 1, "z-index": 3 });
  }, 500);
}

});

$(".back").click(() => {
  $(".groups").css({ opacity: 0, "z-index": 0 });
  section = "";
  setTimeout(() => {
    $(".sections").css("opacity", 1);
  }, 500);
});
$("#first-ai").click(() => {
  
  $("#back1").css('z-index',8)
  $('#section-container').css({"opacity": 1,"z-index":8});
  
  
   if (section === "ai") {
      for (i = 1; i <= 5; i++) {
        addSection.innerHTML += `<a href="tables/AI1/${i}.html" class="section-number ">${i}</a>`;
      }
    
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
 
  

  $(".groups").css({ 'opacity': 0, "z-index": 0 });
});
$("#first").click(() => {
  
  $("#back1").css('z-index',8)
  $('#section-container').css({"opacity": 1,"z-index":8});
  
  if (section === "general") {
    for (i = 1; i <= 12; i++) {
      addSection.innerHTML += `<a href="tables/genral1/Sec${i}.html" class="section-number ">${i}</a>`;
    }
  }
 else if (section === "soft") {
    addSection.innerHTML += `<a href="tables/1soft.html" class="section-number ">1</a>`;
  }
  else if (section === "bio") {
   
      addSection.innerHTML += `<a href="tables/BIO1/1.html" class="section-number ">1</a>`;
    
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
    else if (section === "ai") {
      for (i = 1; i <= 5; i++) {
        addSection.innerHTML += `<a href="tables/AI1/${i}.html" class="section-number ">${i}</a>`;
      }
    
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
 
  

  $(".groups").css({ 'opacity': 0, "z-index": 0 });
});
$("#second").click(()=>{
  $("#back1").css('z-index',8)
  $('#section-container').css({"opacity": 1,"z-index":8});
  
  if (section === "general") {
    for (i = 1; i <= 18; i++) {
      addSection.innerHTML += `<a href="tables/genreal2/${i}.html" class="section-number ">${i}</a>`;
    }
  
    
  }
  else if (section === "bio") {
    for (i = 1; i <= 2; i++) {
      addSection.innerHTML += `<a href="tables/BIO2/${i}.html" class="section-number ">${i}</a>`;
    }
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
    else if (section === "ai") {
      $("#parent").addClass("justify-content-lg-center")
        addSection.innerHTML += `<h1 class="ai-text" >sorry there is no 2nd year <br> go back please</h1>`;
     
    
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
  else if (section === "soft") {
    addSection.innerHTML += `<a href="tables/2soft.html" class="section-number ">1</a>`;
  }
  $(".groups").css({ 'opacity': 0, "z-index": 0 });
})
$("#third").click(()=>{
 
  if (section === "general") {
    $(".department-container").css({"opacity": 1,"z-index":8})
    year=3;
    $(".groups").css({ 'opacity': 0, "z-index": 0 });
  }
  else if (section === "bio") {
    for (i = 1; i <= 4; i++) {
      addSection.innerHTML += `<a href="tables/BIO3/${i}.html" class="section-number ">${i}</a>`;
    }
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
  else  if (section === "soft") {
    $(".groups").css({ 'opacity': 0, "z-index": 0 });
    $('#section-container').css({"opacity": 1,"z-index":8});
      addSection.innerHTML += `<a href="tables/soft3.html" class="section-number ">1</a>`;
    }
    else if (section === "ai") {
      $("#parent").addClass("justify-content-lg-center")
        addSection.innerHTML += `<h1 class="ai-text" >sorry there is no 3rd year <br> go back please</h1>`;
     
    
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
   

})
$("#fourth").click(()=>{
 
  if (section === "general") {
    $(".department-container").css({"opacity": 1,"z-index":8})
    year=4;
    $(".groups").css({ 'opacity': 0, "z-index": 0 });
  }
  else if (section === "bio") {
    for (i = 1; i <= 2; i++) {
      addSection.innerHTML += `<a href="tables/BIO4/${i}.html" class="section-number ">${i}</a>`;
    }
    $('#section-container').css({"opacity": 1,"z-index":8});
    $(".groups").css({ 'opacity': 0, "z-index": 0 });}
  else  if (section === "soft") {
    $(".groups").css({ 'opacity': 0, "z-index": 0 });
    $('#section-container').css({"opacity": 1,"z-index":8});
    addSection.innerHTML += `<a href="tables/soft4.html" class="section-number ">1</a>`;
  }
  else if (section === "ai") {
    $("#parent").addClass("justify-content-lg-center")
      addSection.innerHTML += `<h1 class="ai-text" >sorry there is no 4th year <br> go back please</h1>`;
   
  
  $('#section-container').css({"opacity": 1,"z-index":8});
  $(".groups").css({ 'opacity': 0, "z-index": 0 });}
 
})
$("#CS").click(()=>{
  $(".department-container").css({"opacity": 0,"z-index":0})
  if(year===3)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 5; i++) {
      addSection.innerHTML += `<a href="tables/CS3/${i}.html" class="section-number ml-5 ">${i}</a>`;
    }
  }
 else if(year===4)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 4; i++) {
      addSection.innerHTML += `<a href="tables/CS4/${i}.html" class="section-number ml-5 ">${i}</a>`;
    }
  }
})
$("#IT").click(()=>{
  $(".department-container").css({"opacity": 0,"z-index":0})
  if(year===3)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 4; i++) {
      addSection.innerHTML += `<a href="tables/IT3/${i}.html" class="section-number ml-5 ">${i}</a>`;
    }
  }
 else if(year===4)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 3; i++) {
      addSection.innerHTML += `<a href="tables/IT4/${i}.html" class="section-number ml-5 ">${i}</a>`;
    }
  }
})
$("#IS").click(()=>{
  $(".department-container").css({"opacity": 0,"z-index":0})
  if(year===3)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 2; i++) {
      addSection.innerHTML += `<a href="tables/IS3/${i}.html"class="section-number ml-5 ">${i}</a>`;
    }
  }
  else if(year===4)
  {
    $('#section-container').css({"opacity": 1,"z-index":8});
    for (i = 1; i <= 2; i++) {
      addSection.innerHTML += `<a href="tables/IS4/${i}.html" class="section-number ml-5 ">${i}</a>`;
    }
  }
})

$("#back1").click((e) => {
  $("#parent").removeClass("justify-content-lg-center")
  $('#section-container').css({"opacity": 0,"z-index":0});
  addSection.innerHTML = "";
});

$("#back2").click((e) => {
  $('.department-container').css({"opacity": 0,"z-index":0});
 
});
$(".contact-us").click(()=>{
  $(".side-nav").toggleClass("contact-us-active")
})