// adding new section to HTML file to reach 4 sections

const getElementMain = document.querySelector('main'); //select element "main"
	
const newSection = document.createElement('section');  //create a new section 
const newDiv = document.createElement('div');          //create a new div 
const newH2 = document.createElement('h2');            //create a new header 
const getNav = document.querySelector("nav");                 //select the navigation bar

const getPgHead = document.querySelector(".page__header");    // select the body header

const getListul = document.querySelector("ul");               // select the list "ul"

newDiv.appendChild(newH2);                             // adding new the header to the newDiv
newH2.textContent = "Section 4";                       //adding text content to the header

for (let i = 1; i <= 2; i++) {
        let newPara = document.createElement("p");     //create two new paragraphs
        newDiv.appendChild(newPara);                   // add the new paragraphs to the newDiv 
    }

newSection.setAttribute('id', 'section4');             //adding attribute to the newSection
newSection.setAttribute('data-nav', 'section 4');

newDiv.setAttribute('class', 'landing__container ');   //adding attribute to the newDiv

newSection.appendChild(newDiv);                        // adding the new div to the new section 

getElementMain.appendChild(newSection);               // adding the new section to the existing main

const txtP1 = document.getElementsByTagName("p")[6];   //adding text to the first added paragraph
txtP1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

const txtP2 = document.getElementsByTagName("p")[7];  //adding text to the second added paragraph
txtP2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";



//adding navigation bar and style it 


getNav.style.cssText = "margin: 0.05em; font-size: 0.75em; cursor: pointer;";   //restyle navigation bar

getPgHead.style.cssText = " background-color: rgb(143, 162, 165); display: inline-flex "
                                                              //restyle the body header

getListul.style.textAlign = "left";                           //restyle list ul

// create a link for each sections and add all links to the navigation bar

const getSections = document.querySelectorAll("section");   //select all sections 

getSections.forEach( (section,order)=>{
let newLi = document.createElement('li');         // create four li 

newLi.style.display = "inline-flex";              // change li's display  to inline to appear as a row

newLi.setAttribute("class","menu__link") ;        // adding class to li to catch the attributes in this class from CSS file

newLi.setAttribute('id', `a${order + 1}`);        // adding Id to each li

const newAncor = document.createElement('a');     // create anchor element
newAncor.textContent = ` Section ${order + 1}`;   // adding the ancor text content  
newAncor.style.color = "rgb(251, 252, 242)";      // restyle li
  
newLi.appendChild(newAncor)                       // adding the new anchor to its li 


//adding an event to make anchor elements move to the relative section with smooth motion attribute (step 1 - link)

newAncor.addEventListener("click", ()=>{          // create eventListenrr

    for(let i = 1; i<=4; i++){                    //erase active class from all sections
      const nonActiveSec = document.querySelector(`#section${i}`);
      nonActiveSec.classList.remove("your-active-class");
       i === i + 1
     }
     
    section.scrollIntoView({behavior: "smooth"}); // smooth motion attribute 

    section.classList.add("your-active-class");   //adding active class to active section

});

getListul.appendChild(newLi)                     // adding the new li to list ul in the DOM

});


// adding an event to make the section is active when scroll 

window.addEventListener('scroll', () => {        // create eventListenrr
    
  getSections.forEach(unit => {
      const actNav = unit.getAttribute('data-nav'); // select the section by its attribute "data-nav" 
        
      let secNum = actNav.split(' ');            // determine the active section
      secNum = secNum[1];
        
      const view = unit.getBoundingClientRect().top;          // determine the section hight
      const allAnchors = document.querySelectorAll('a');      //get all anchor elements
  
      if (view >= 0 && view <= 150) {                         // determine height needed for the section
       
        unit.classList.add('your-active-class');              //adding active class to active section

        const element = document.getElementById(`a${secNum}`);  // select the active anchor
       
        element.classList.add('your-active-class');           //adding active class to active section
       
        for (i = 1; i <= 4; i++) {                            // erase active class from all sections
          if (i != secNum) {
            const anch = document.getElementById(`a${i}`);  
            anch.classList.remove('your-active-class');
          }
        }
   } else {
        unit.classList.remove('your-active-class');           // erase active class from all sections
      }
    });
  });

