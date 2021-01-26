/* Make Random Background Images */
let landingPage = document.querySelector('.landing-page');
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];

function randomImage(){
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber] + '")';
        landingPage.style.transition = 'all .5s ease-in-out';
    },3000);
};
randomImage();
/* change the content of section about us */
var notes1 = document.getElementById('notes1');
var notes2 = document.getElementById('notes2');
var notes3 = document.getElementById('notes3');
var mission = document.getElementById('mission');
var vision = document.getElementById('vision');
var us = document.getElementById('us');
var ourMission = document.getElementsByClassName('our-mission')

for(i = 0; i <= ourMission.length; i++){
    notes1.onclick = function(){
        mission.style.display = 'block';
        vision.style.display = 'none';
        us.style.display = 'none';
        mission.style.display = 'flex';
    };
    };
for(i = 0; i <= ourMission.length; i++){
notes2.onclick = function(){
    mission.style.display = 'none';
    us.style.display = 'none';
    vision.style.display = 'block';
    vision.style.display = 'flex';
};
};
for(i = 0; i <= ourMission.length; i++){
    notes3.onclick = function(){
        mission.style.display = 'none';
        vision.style.display = 'none';
        us.style.display = 'block';
        us.style.display = 'flex';
    };
  };
/* change the content of section department */
var departmentContains = document.getElementsByClassName('department-contains');
var neu = document.getElementById('neu');
var sur = document.getElementById('sur');
var den = document.getElementById('den');
var oph = document.getElementById('oph');
var car = document.getElementById('car');

var depart1 = document.getElementById('depart1');
var depart2 = document.getElementById('depart2');
var depart3 = document.getElementById('depart3');
var depart4 = document.getElementById('depart4');
var depart5 = document.getElementById('depart5');

for(i = 0; i<= departmentContains.length; i++){
    depart1.onclick = function(){
        neu.style.display = 'block';
        neu.style.display = 'flex';
        sur.style.display = 'none';
        den.style.display = 'none';
        oph.style.display = 'none';
        car.style.display = 'none';
    };
};
for(i = 0; i<= departmentContains.length; i++){
    depart2.onclick = function(){
        sur.style.display = 'block';
        sur.style.display = 'flex';
        neu.style.display = 'none';
        den.style.display = 'none';
        oph.style.display = 'none';
        car.style.display = 'none';
    };
};
for(i = 0; i<= departmentContains.length; i++){
    depart3.onclick = function(){
        den.style.display = 'block';
        den.style.display = 'flex';
        neu.style.display = 'none';
        sur.style.display = 'none';
        oph.style.display = 'none';
        car.style.display = 'none';
    };
};
for(i = 0; i<= departmentContains.length; i++){
    depart4.onclick = function(){
        oph.style.display = 'block';
        oph.style.display = 'flex';
        neu.style.display = 'none';
        sur.style.display = 'none';
        den.style.display = 'none';
        car.style.display = 'none';
    };
};
for(i = 0; i<= departmentContains.length; i++){
    depart5.onclick = function(){
        car.style.display = 'block';
        car.style.display = 'flex';
        neu.style.display = 'none';
        sur.style.display = 'none';
        den.style.display = 'none';
        oph.style.display = 'none';
    };
};