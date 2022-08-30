console.log("working..")

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;
   

   let element = document.getElementById("timeh");
   element.innerText = hh ;
   let element1 = document.getElementById("timem");
   element1.innerText = mm ;
   let element2 = document.getElementById("times");
   element2.innerText = ss ;
   let element3 = document.getElementById("ampm");
   element3.innerText = session ;
   
let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime(); 
 

function ravi() {
    let date = new Date(); 
let hrr = date.getHours();
let waketime = document.getElementById("wakeup").value;
   if(waketime === hrr){
      document.getElementById("changeImage").src = './Component 30 – 1.svg';
      document.getElementById("changeT").innerText = "GOOD MORNING!! WAKE UP!!";
      document.getElementById("changeText").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";

   }
   let lunchTime = document.getElementById("lunchh").value;
   if( lunchTime=== hrr){
      document.getElementById("changeImage").src = './Component 31 – 1.svg';
      document.getElementById("changeT").innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP!!";
      document.getElementById("changeText").innerText = "LETS HAVE SOME LUNCH!!!";
   }
   let napTime = document.getElementById("napp").value;
   if( napTime=== hrr){
      document.getElementById("changeImage").src = './lunch_image.png';
      document.getElementById("changeT").innerText = "GOOD EVENING!!";
      document.getElementById("changeText").innerText = "STOP YAWNING ,GET SOME TEA..ITS JUST EVENING!!!";

      }

      let sleepTime = document.getElementById("nightt").value;
   if( sleepTime=== hrr){
      document.getElementById("changeImage").src = './Component 32 – 1.svg';
      document.getElementById("changeT").innerText = "GOOD NIGHT!!";
      document.getElementById("changeText").innerText = "CLOSE YOUR EYES AND GO TO SLEEP!!!";
      }
   
   
}
ravi();