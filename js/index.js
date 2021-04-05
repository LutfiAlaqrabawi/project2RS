var mainColors = localStorage.getItem("data-option");

if (mainColors !== null){
    document.documentElement.style.setProperty('--main-color', mainColors);
    document.querySelectorAll('.background li').forEach(function(element){
        element.classList.remove('active');
        if(element.dataset.color === mainColors){
            element.classList.add('active');
        };
    });
}


var openbut = document.querySelector('.menu ');
var link = document.querySelector('.link');
openbut.onclick = function(e){
    
    e.stopPropagation();

    link.classList.toggle('open');
};
document.addEventListener('click', function(e){
    if(e.target !== openbut && e.target !== link ){
        link.classList.remove('open');
    }
});
link.onclick = function(e){
    e.stopPropagation();
}
/////////

var gear = document.querySelector('.gear');
var settingUl = document.querySelector('.setting-box');

gear.onclick = function(e){
    e.stopPropagation();
    settingUl.classList.toggle('open');
    document.querySelector('.icon-gear').classList.toggle('fa-spin');
}

document.addEventListener('click', function(e){
    if(e.target !== gear && e.target !== settingUl){
        settingUl.classList.remove('open');
    }
});

settingUl.onclick = function(e){
    e.stopPropagation();
}




var colorLi = document.querySelectorAll('.background li');
colorLi.forEach( function (li){
    li.onclick = function (e){ 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("data-option", e.target.dataset.color );
        e.target.parentElement.querySelectorAll('.active').forEach(function (element){
            element.classList.remove('active');
        });
        e.target.classList.add('active');
    }
});


var gear = document.querySelector('.gear');
var settingUl = document.querySelector('.setting-box');

gear.onclick = function(e){
    e.stopPropagation();
    settingUl.classList.toggle('open');
    document.querySelector('.icon-gear').classList.toggle('fa-spin');
}

document.addEventListener('click', function(e){
    if(e.target !== gear && e.target !== settingUl){
        settingUl.classList.remove('open');
    }
});

settingUl.onclick = function(e){
    e.stopPropagation();
}



var landingPage = document.querySelector('.landing-page');
var imgsArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
setInterval(function() {
    var randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.transition = '1s';
    landingPage.style.backgroundImage = 'url("images/homeImg/' + imgsArray[randomNumber] + '")';
},5000);



var search = document.querySelectorAll('#search div');

search.forEach( function(div){
    div.onclick = function(e){
        e.target.parentElement.querySelectorAll('.active').forEach(function (element){
            element.classList.remove('active');
        });
        e.target.classList.add('active');
    }
});

var  ourServiceScroll = document.querySelector('.our-services');
var  featuresScroll = document.querySelector('.features');
window.onscroll = function(){
    // Our Services Offset top
    var serviceOffsetTop = ourServiceScroll.scrollTop;
    
    // Our Services Offset Height
    var serviceOffsetHeight = ourServiceScroll.scrollHeight;

    // Window Height
    var windowHeight = this.innerHeight;

    //Window Scroll Top 
    var windowTop = this.pageYOffset;

    if( windowTop > (serviceOffsetTop + serviceOffsetHeight -windowHeight)){
        var allServices = document.querySelectorAll('.container .services-box div');
        allServices.forEach(service => {
            service.style.transform = 'translate3d(0 , 0, 0)';
        }); 
    };

    var featuresOffsetTop = featuresScroll.scrollTop;
    
    //  features Offset Height
    var featuresOffsetHeight = featuresScroll.scrollHeight;

    // Window Height
    var windowHeight = this.innerHeight;

    //Window Scroll Top 
    var windowTop = this.pageYOffset;

    if( windowTop > (featuresOffsetTop + featuresOffsetHeight -windowHeight)){
        var allfeaturesImg = document.querySelectorAll('.features .img-features img');

        var lineActive = document.querySelectorAll('.features .list-features h2');

        allfeaturesImg.forEach(featuresImg => {
            featuresImg.style.transform = 'translatex(0)';
        }); 


        
    };
};

/* Start Create Number Individuals*/

///*start create button on click to open and close*/

// create button on click to open
var buttonIndividuals = document.getElementById('button-individuals');
buttonIndividuals.onclick = function(){
    var hidden = document.getElementById('hidden');

    hidden.classList.remove('hidden-translatez');
    
    // create button on click to close
    var spanIndividuals = document.getElementById('submit');

    spanIndividuals.onclick = function(){
        this.parentElement.classList.add('hidden-translatez');
    };
};
////* End create button on click to open and close */

////* start create Bullets on  plus and minus */

// create Bullets on click plus
var bulletsPlus = document.getElementById('plus');
// create Bullets on click minus
var bulletsMinus = document.getElementById('minus');
// create Bullets Number
var bulletsNumber = document.getElementById('number');

bulletsNumber.textContent = 0 ; 

var bulletstext = 0;
bulletsPlus.addEventListener('click', function(){
    if(bulletsNumber.textContent == 10){
        return false;
    }else if(bulletsNumber.textContent == bulletstext  ){
        bulletsNumber.textContent =  ++bulletstext ;
    }
});

bulletsMinus.addEventListener('click', function(){
    if(bulletsNumber.textContent == 0){
        return false;
    }else if(bulletsNumber.textContent == bulletstext  ){
        bulletsNumber.textContent =  --bulletstext ; 
    } 

});





// create Bullets on click plus
var bulletsAddition = document.getElementById('addition');
// create Bullets on click minus
var bulletsSubtract = document.getElementById('subtract');
// create Bullets Number
var bulletsCount = document.getElementById('count');

bulletsCount.textContent = 0 ; 

var bulletstext2 = 0;

bulletsAddition.addEventListener('click', function(){
    if(bulletsCount.textContent == 10){
        return false;
    }else if(bulletsCount.textContent == bulletstext2  ){
        bulletsCount.textContent =  ++bulletstext2 ;
    }
});

bulletsSubtract.addEventListener('click', function(){
    if(bulletsCount.textContent == 0){
        return false;
    }else if(bulletsCount.textContent == bulletstext2  ){
        bulletsCount.textContent =  --bulletstext2; 
    } 

});

////* end create Bullets on click plus and minus */
// Get Element Parant Button
var parantButtons = document.querySelector('.number-individuals'); 
// Get Element Button Economy
var buttonEconomy = document.getElementById('button-economy');
// Start create New Div Economy
var creatDiv = document.createElement('div');
// Add Class to New Div
creatDiv.className = 'hidden-translatez economy';
// append child in Parant 
parantButtons.insertBefore(creatDiv, parantButtons.childNodes[6]);

function economyClass(){
    
    for(var i=1 ; i <= 4 ; i++){
        var craetespan = document.createElement('span');
        craetespan.className = 'span-text';
        var starfull = document.createElement('i');
        starfull.className = 'fas fa-star';
        creatDiv.appendChild(craetespan);
        craetespan.appendChild(starfull);
        var getElementSpan = document.querySelectorAll('.economy span');

        getElementSpan.forEach( function(div){
            div.onclick = function(e){
                e.target.parentElement.querySelectorAll('.economy .color').forEach(function (element){
                    element.classList.remove('color');
                });
                
                buttonEconomy.textContent = e.target.textContent ;
                creatDiv.classList.add('hidden-translatez');
                e.target.classList.add('color');
            }
        });
        buttonEconomy.onclick = function(){
            creatDiv.classList.remove('hidden-translatez');
            
        };

        if( i == 1){
            var createtextspan1 = document.createTextNode('Economy Class');
            creatDiv.firstElementChild.appendChild(createtextspan1); 
        }else if( i == 2){
            var createtextspan2 = document.createTextNode('Premium Economy Class');
            creatDiv.childNodes[1].appendChild(createtextspan2);  
        }else if( i == 3){
            var createtextspan3 = document.createTextNode('Business Degree');   
            creatDiv.childNodes[2].appendChild(createtextspan3);  
        }else if(i == 4){
            var createtextspan4 = document.createTextNode('First Degree');   
            creatDiv.lastElementChild.appendChild(createtextspan4);
        };
    };
    // var spanArray = [creatDiv.children];
    // spanArray.forEach(function(e){
    //     e.target.onclick = function(){
    //         starfull.classList.add = 'color';
    //     };
    //     console.log(e);
    // });

}
economyClass();








/* End Create Number Individuals*/

/* Start Create Overlay Popup  */
var ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {

    img.addEventListener('click', (e)=> {

        var overlay = document.createElement('div');

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        var popupbox = document.createElement('div');

        popupbox.className = 'popup-box';

        overlay.appendChild(popupbox);

        var popupimg = document.createElement('img');

        popupimg.src = img.src ;

        popupbox.appendChild(popupimg);

        var popupH2 = document.createElement('h2');

        popupH2.className = "popup-h2";

        var popupP = document.createElement('p');

        popupP.className = "popup-p";

        var popupH2Text = document.createTextNode(img.alt);

        var popupPText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ullam.');
        
        popupH2.appendChild(popupH2Text);
        
        popupP.appendChild(popupPText);

        popupbox.appendChild(popupH2);

        popupbox.appendChild(popupP);

        var closeButton = document.createElement('span');

        var closeText = document.createTextNode('X');
        
        closeButton.className = 'close-button';

        closeButton.appendChild(closeText);

        popupbox.appendChild(closeButton);


    });

});

/* End Create Overlay Popup  */
document.addEventListener('click', function(e){

    if(e.target.className == 'close-button'){
        document.querySelector('.popup-overlay').remove();
    }

});


