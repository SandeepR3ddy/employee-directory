
// localStorage.clear();

const departmentsList = [
    {
        "name": "IT",
        "count": 6
    },
    {
        "name": "HR",
        "count": 1
    },
    {
        "name": "UX",
        "count": 1
    },
    {
        "name": "Sales",
        "count": 1
    }
];
   
  if(localStorage.getItem("departmentsListsInLocalStorage") == null)
  {
     localStorage.setItem("departmentsListsInLocalStorage", JSON.stringify(departmentsList));
  }
  
  let departmentsListsInLocalStorage = JSON.parse(localStorage.getItem("departmentsListsInLocalStorage"));
  
var deplist = departmentsListsInLocalStorage.map(function(department)
{
    return '<div class = "departments-name">' + department.name + "(" + department.count + ")" + '</div>';
}).join(' ');

document.querySelector(".department-list").innerHTML = deplist;

const officeList = [
    {
        "name": "India",
        "count": 6
    },
    {
        "name": "Seattle",
        "count": 2
    },
   
];
if(localStorage.getItem("officeListsInLocalStorage") == null)
  {
     localStorage.setItem("officeListsInLocalStorage", JSON.stringify(officeList));
  }
  
  let officeListsInLocalStorage = JSON.parse(localStorage.getItem("officeListsInLocalStorage"));
  
  var officelist = officeListsInLocalStorage.map(function(office)
  {
      return '<div class = "office-list-inner">' + office.name + "(" + office.count + ")" + '</div>';
  }).join(' ');
  
  document.querySelector(".offices-list").innerHTML = officelist;
  

const jobtitleList = [
    {
        "name": "SharePoint Practice Head",
        "count": 1
    },
    {
        "name": "Operations Manager",
        "count": 1
    },
    {
        "name": "Product Manager",
        "count": 1
    },
    {
        "name": "Talent Magnet Jr.",
        "count": 1
    },
    {
        "name": "Lead Engineer Dot Net",
        "count": 1
    },
    {
        "name": "Network Engineer",
        "count": 1
    },
    {
        "name": "UI Designer",
        "count": 1
    },
    {
        "name": "Software Engineer",
        "count": 1
    }
];

if(localStorage.getItem("jobTitlesListsInLocalStorage") == null)
  {
    // localStorage.clear();
     localStorage.setItem("jobTitlesListsInLocalStorage", JSON.stringify(jobtitleList));
  }
  
  let jobTitlesListsInLocalStorage = JSON.parse(localStorage.getItem("jobTitlesListsInLocalStorage"));
  


var jobtitlelist = jobTitlesListsInLocalStorage.map(function(job)
{
    return '<div class = "job-titles-list-inner">' + job.name + "(" + job.count + ")" + '</div>';
});

  var firstHalfOfJobTitleList = jobtitlelist.slice(0,4);

  var seemore = `<div class = "view-more">view more</div>`;

  var seeless = `<div class = "view-less">view less</div>`;

  var secondHalfOfJobTitleList = jobtitlelist.slice(4);

  jobtitlelist = firstHalfOfJobTitleList.join(' ') + seemore + ' ' + '<div class = "second-half-of-jobtitles">' + secondHalfOfJobTitleList.join(' ')  + '</div>' + seeless;


document.querySelector(".job-titles-list").innerHTML = jobtitlelist;

const viewmore = document.querySelector(".view-more");

const viewless = document.querySelector(".view-less");

const secondhalfofjobtitles = document.querySelector(".second-half-of-jobtitles");

viewmore.addEventListener("click", () =>
{
    viewmore.style.visibility  = "hidden";
    viewmore.style.position =   "absolute";
    secondhalfofjobtitles.style.visibility = "visible";
    viewless.style.visibility = "visible";    

})

viewless.addEventListener("click", () =>
{
    viewmore.style.visibility  = "visible";
    viewmore.style.position =   "static";
    secondhalfofjobtitles.style.visibility = "hidden";
    viewless.style.visibility = "hidden";    

})


let matchcards = [
     {
         "FirstName" : "Antony ",
         "LastName" : "Morris",
         "Designation" : "SharePoint Practice Head",
         "PreferredName":"Antony",
         "Department" : "IT Department",
         "PhoneNumber" : 9949493949,
         "email" : "abc@gmail.com",
         "office" : "India",
         "src" : "../assets/3.jpg"
     },
     {
        "FirstName" : "Helen ",
        "LastName" : "Zipperman",
        "Designation" : "Operations Manager",
        "PreferredName":"Helen",
        "Department" : "IT Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "India",
        "src" : "../assets/4.jpg"
    },
    {
        "FirstName" : "Jonathan ",
        "LastName" : "Smith",
        "Designation" : "Product Manager",
        "PreferredName":"Jonathan",
        "Department" : "IT Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "India",
        "src" : "../assets/5.jpg"
    },
    {
        "FirstName" : "Angela ",
        "LastName" : "Bailey",
        "Designation" : "Talent Magnet Jr.",
        "PreferredName":"Angela",
        "Department" : "HR Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "India",
        "src" : "../assets/2.jpg"
    },
    {
        "FirstName" : "Tami ",
        "LastName" : "Hopkins",
        "Designation" : "Lead Engineer Dot Net",
        "PreferredName": "Tami",
        "Department" : "IT Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "India",
        "src" : "../assets/6.jpg"
    },
    {
        "FirstName" : "Franklin ",
        "LastName" : "Humark",
        "Designation" : "Network Engineer",
        "PreferredName":"Franklin",
        "Department" : "IT Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "India",
        "src" : "../assets/7.jpg"
    },
    {
        "FirstName" : "Olivia ",
        "LastName" : "Watson",
        "Designation" : "UI Designer",
        "PreferredName":"Olivia",
        "Department" : "UX Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "Seattle",
        "src" : "../assets/8.jpg"
    },
    {
        "FirstName" : "Robert ",
        "LastName" : "Mitchell",
        "Designation" : "Software Engineer",
        "PreferredName":"Robert",
        "Department" : "IT Department",
        "PhoneNumber" : 9949493949,
        "email" : "abc@gmail.com",
        "office" : "Seattle",
        "src" : "../assets/1.jpg"
    }
];

if(localStorage.getItem("matchcards") == null){

    // localStorage.clear();
localStorage.setItem("matchcards",JSON.stringify(matchcards));
}

let employeeCards = document.querySelector(".employee-cards-outer");

let matchcardsfromlocalstorage = JSON.parse(localStorage.getItem("matchcards"));

let employeeCardsArray = matchcardsfromlocalstorage.map((card) => {
   
    return (
    
   `<div class="employee-card">
          
    <img class="employee-image" src= ${card.src}>
    <div class="employee-details">
       <div class="employee-name">${card.FirstName}${card.LastName}</div>
       <div class="designation">${card.Designation}</div>
       <div class="department-name">${card.Department}</div>
       <div class="icons">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-regular fa-envelope"></i>
          <i class="fa-solid fa-comment"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-heart"></i>
       </div>
    </div>
 </div>`);

}).join(' ');

window.addEventListener("load", function(e){   

employeeCards.innerHTML = employeeCardsArray;

});

const input = document.querySelector(".search-box");

input.addEventListener("keyup", function(e){
       
    var val = (e.target.value).toLowerCase();

   var filteredcards = matchcardsfromlocalstorage.filter(function(card){    
     
    return card.FirstName.toLowerCase().startsWith(val) || card.LastName.toLowerCase().startsWith(val) ;
    
    });

    var filteredemployeeCardsArray = filteredcards.map((card) => {
        
        return (
        
       `<div class="employee-card">
              
        <img class="employee-image" src= ${card.src}>
        <div class="employee-details">
           <div class="employee-name">${card.FirstName}${card.LastName}</div>
           <div class="designation">${card.Designation}</div>
           <div class="department-name">${card.Department}</div>
           <div class="icons">
              <i class="fa-solid fa-phone"></i>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-solid fa-comment"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-heart"></i>
           </div>
        </div>
     </div>`);
    
    }).join(' ');     
    
    document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;

})

const alphabet = document.querySelectorAll(".alphabet-box");

var alphabets =  alphabet.forEach(function(alphabet)
{
alphabet.addEventListener("click", () => {  

    val = (alphabet.textContent).toLowerCase();

    filteredcards = matchcardsfromlocalstorage.filter(function(card){    
     
        return card.FirstName.toLowerCase().startsWith(val) || card.LastName.toLowerCase().startsWith(val) ;
        
        });
    
        var filteredemployeeCardsArray = filteredcards.map((card) => {
            
            return (
            
           `<div class="employee-card">
                  
            <img class="employee-image" src= ${card.src}>
            <div class="employee-details">
               <div class="employee-name">${card.FirstName}${card.LastName}</div>
               <div class="designation">${card.Designation}</div>
               <div class="department-name">${card.Department}</div>
               <div class="icons">
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-solid fa-comment"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-heart"></i>
               </div>
            </div>
         </div>`);
        
        }).join(' ');
          
        
        document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
    
    });
});

var clear = document.querySelector(".clear-button");

clear.addEventListener("click", () => {
    input.value = "";
    document.querySelector(".employee-cards-outer").innerHTML = employeeCardsArray;
});

 
var departments = document.querySelectorAll(".departments-name");

departments.forEach(function(department) {

    department.addEventListener("click", () => {  

        val = (department.textContent).toLowerCase().split("(")[0];

        console.log(matchcardsfromlocalstorage);

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Department.toLowerCase().startsWith(val);
            
            });

            console.log(filteredcards);

            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

var offices = document.querySelectorAll(".office-list-inner");

offices.forEach(function(office) {

    office.addEventListener("click", () => {  

        val = (office.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.office.toLowerCase() === val;
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

var jobtitles = document.querySelectorAll(".job-titles-list-inner");


jobtitles.forEach(function(jobtitle) {

    jobtitle.addEventListener("click", () => {  

        val = (jobtitle.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Designation.toLowerCase() === val;
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

var filteronoptions = document.querySelector("#filters");

filteronoptions.addEventListener("change", function(e) {

    val = e.target.value;
     
    if(val == "Preferred Name")
    {
        matchcardsfromlocalstorage.sort((a,b)=> (a.PreferredName < b.PreferredName) ? -1 : 1);
        var filteredemployeeCardsArray = matchcardsfromlocalstorage.map((card) => {
            
            return (
            
           `<div class="employee-card">
                  
            <img class="employee-image" src= ${card.src}>
            <div class="employee-details">
               <div class="employee-name">${card.FirstName}${card.LastName}</div>
               <div class="designation">${card.Designation}</div>
               <div class="department-name">${card.Department}</div>
               <div class="icons">
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-solid fa-comment"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-heart"></i>
               </div>
            </div>
         </div>`);
        
        }).join(' ');
          
        
        document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
    
    }
    else if(val == "First Name")
    {
        matchcardsfromlocalstorage.sort((a,b)=> (a.FirstName < b.FirstName) ? -1 : 1);
        var filteredemployeeCardsArray = matchcardsfromlocalstorage.map((card) => {
            
            return (
            
           `<div class="employee-card">
                  
            <img class="employee-image" src= ${card.src}>
            <div class="employee-details">
               <div class="employee-name">${card.FirstName}${card.LastName}</div>
               <div class="designation">${card.Designation}</div>
               <div class="department-name">${card.Department}</div>
               <div class="icons">
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-solid fa-comment"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-heart"></i>
               </div>
            </div>
         </div>`);
        
        }).join(' ');
          
        
        document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
    
    }
    else if(val == "Last Name")
    {
        matchcardsfromlocalstorage.sort((a,b)=> (a.LastName < b.LastName) ? -1 : 1);
        var filteredemployeeCardsArray = matchcardsfromlocalstorage.map((card) => {
            
            return (
            
           `<div class="employee-card">
                  
            <img class="employee-image" src= ${card.src}>
            <div class="employee-details">
               <div class="employee-name">${card.FirstName}${card.LastName}</div>
               <div class="designation">${card.Designation}</div>
               <div class="department-name">${card.Department}</div>
               <div class="icons">
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-regular fa-envelope"></i>
                  <i class="fa-solid fa-comment"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-heart"></i>
               </div>
            </div>
         </div>`);
        
        }).join(' ');
          
        
        document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
    
    }


});

const modal = document.querySelector(".modal");
const trigger = document.querySelector("#add-employee");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".form-submit");

function addModal() {
    modal.classList.add("show-modal");
}

function closeModal() {
    modal.classList.remove("show-modal");
}

trigger.addEventListener("click", addModal);
closeButton.addEventListener("click", closeModal);


submitButton.addEventListener("click", closeModal);

var form = document.querySelector(".modal-container");

var fname = document.querySelector(".fname");
var lname = document.querySelector(".lname");
var pname = document.querySelector(".pname");
var desig = document.querySelector(".designation");
var dept = document.querySelector(".department");
var prof = document.querySelector(".profile");
var phone = document.querySelector(".phone");
var email = document.querySelector(".email");
var office = document.querySelector(".office");

var deptvalue = "";

var pnamevalue = "";

var officevalue = "";

dept.addEventListener("change", function(e){ 

    deptvalue = e.target.value;

});

pname.addEventListener("change", function(e){ 

    pnamevalue = e.target.value;

});

office.addEventListener("change", function(e){  
    officevalue = e.target.value;
});


let url = "";

prof.addEventListener("change", function(e) {   

    const reader = new FileReader();


    reader.addEventListener("load", () => {

        url = reader.result;

    });

    reader.readAsDataURL(this.files[0]);
     
     
});

submitButton.addEventListener("click", function(e) {   
    
    if(deptvalue == "") {
     
        deptvalue = "IT";
    }
    if(pnamevalue == "") {
        pnamevalue = "First Name";
    }
    if(officevalue ==   "") {       
        officevalue = "India";
    }


    if(!fname.value || !lname.value|| !pnamevalue|| !desig.value|| !deptvalue|| !prof.value || !phone.value || !email.value || !office.value)
    {
        alert("Please Fill all the fields");
    }
    else
    {
      
       departmentsListsInLocalStorage = JSON.parse(localStorage.getItem("departmentsListsInLocalStorage"));

       var obj = departmentsListsInLocalStorage.find(o =>
       o.name === deptvalue);

       obj.count++;

       localStorage.removeItem("departmentsListsInLocalStorage");

       localStorage.setItem("departmentsListsInLocalStorage", JSON.stringify(departmentsListsInLocalStorage));
        
       var deplist = departmentsListsInLocalStorage.map(function(department)
       {
           return '<div class = "departments-name">' + department.name + "(" + department.count + ")" + '</div>';
       }).join(' ');
       
       document.querySelector(".department-list").innerHTML = deplist;

       var departments = document.querySelectorAll(".departments-name");

departments.forEach(function(department) {

    department.addEventListener("click", () => {  

        val = (department.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Department.toLowerCase().startsWith(val);
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

      officeListsInLocalStorage = JSON.parse(localStorage.getItem("officeListsInLocalStorage"));
      
      var obj = officeListsInLocalStorage.find(o =>
                o.name === officevalue);
 
        obj.count++;
       
        localStorage.removeItem("officeListsInLocalStorage");
        localStorage.setItem("officeListsInLocalStorage",   JSON.stringify(officeListsInLocalStorage));
 
        var officelist = officeListsInLocalStorage.map(function(office)
        {
            return '<div>' + office.name + "(" + office.count + ")" + '</div>';
        }).join(' ');
        
        document.querySelector(".offices-list").innerHTML = officelist;

 
       
      jobTitlesListsInLocalStorage = JSON.parse(localStorage.getItem("jobTitlesListsInLocalStorage"));  

        var obj = jobTitlesListsInLocalStorage.find(o=>
            o.name === desig.value);

            if(obj === undefined)
            {
                jobTitlesListsInLocalStorage.push(
                    {
                        "name": desig.value,
                        "count": 1
                    }
                )
            }
            else
            {
                obj.count++;
            }

            jobtitlelist = jobTitlesListsInLocalStorage.map(function(job)
            {
                return '<div class = "job-titles-list-inner">' + job.name + "(" + job.count + ")" + '</div>';
            });

            var firstHalfOfJobTitleList = jobtitlelist.slice(0,4);

            var secondHalfOfJobTitleList = jobtitlelist.slice(4);

            jobtitlelist = firstHalfOfJobTitleList.join(' ') + seemore + ' ' + '<div class = "second-half-of-jobtitles">' + secondHalfOfJobTitleList.join(' ')  + '</div>' + seeless;


            document.querySelector(".job-titles-list").innerHTML = jobtitlelist;

            localStorage.removeItem("jobTitlesListsInLocalStorage");
            
            localStorage.setItem("jobTitlesListsInLocalStorage", JSON.stringify(jobTitlesListsInLocalStorage));

            const viewmore = document.querySelector(".view-more");

            const viewless = document.querySelector(".view-less");
            
            const secondhalfofjobtitles = document.querySelector(".second-half-of-jobtitles");
            
            viewmore.addEventListener("click", () =>
            {
                viewmore.style.visibility  = "hidden";
                viewmore.style.position =   "absolute";
                secondhalfofjobtitles.style.visibility = "visible";
                viewless.style.visibility = "visible";    
            
            })
            
            viewless.addEventListener("click", () =>
            {
                viewmore.style.visibility  = "visible";
                viewmore.style.position =   "static";
                secondhalfofjobtitles.style.visibility = "hidden";
                viewless.style.visibility = "hidden";    
            
            })

            matchcards = JSON.parse(localStorage.getItem("matchcards"));

            matchcards.push(
                {
                    "FirstName" : fname.value + " ",
                    "LastName" : lname.value,
                    "Designation" : desig.value,
                    "PreferredName": pnamevalue == "First Name" ? fname.value : lname.value,
                    "Department" : deptvalue + " Department",
                    "src" : url
                });
     
                localStorage.removeItem("matchcards");
                 
                localStorage.setItem("matchcards", JSON.stringify(matchcards));
                
    matchcardsfromlocalstorage = JSON.parse(localStorage.getItem("matchcards"));

    
var departments = document.querySelectorAll(".departments-name");

departments.forEach(function(department) {

    department.addEventListener("click", () => {  

        val = (department.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Department.toLowerCase().startsWith(val);
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

var offices = document.querySelectorAll(".office-list-inner");

offices.forEach(function(office) {

    office.addEventListener("click", () => {  

        val = (office.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.office.toLowerCase() === val;
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})

            
var jobtitles = document.querySelectorAll(".job-titles-list-inner");


jobtitles.forEach(function(jobtitle) {

    jobtitle.addEventListener("click", () => {  

        val = (jobtitle.textContent).toLowerCase().split("(")[0];

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Designation.toLowerCase() === val;
            
            });
            var filteredemployeeCardsArray = filteredcards.map((card) => {
            
                return (
                
               `<div class="employee-card">
                      
                <img class="employee-image" src= ${card.src}>
                <div class="employee-details">
                   <div class="employee-name">${card.FirstName}${card.LastName}</div>
                   <div class="designation">${card.Designation}</div>
                   <div class="department-name">${card.Department}</div>
                   <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                      <i class="fa-regular fa-envelope"></i>
                      <i class="fa-solid fa-comment"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-heart"></i>
                   </div>
                </div>
             </div>`);
            
            }).join(' ');
              
            
            document.querySelector(".employee-cards-outer").innerHTML = filteredemployeeCardsArray;
        
    });
})


            
      
        fname.value = "";
        lname.value = ""; 
        pname.value = "First Name";  
        desig.value = ""; 
        dept.value = "IT";
        prof.value = "";
      
       employeeCardsArray = JSON.parse(localStorage.getItem("matchcards")).map((card) => {
   
        return (
        
       `<div class="employee-card">
              
        <img class="employee-image" src= ${card.src}>
        <div class="employee-details">
           <div class="employee-name">${card.FirstName}${card.LastName}</div>
           <div class="designation">${card.Designation}</div>
           <div class="department-name">${card.Department}</div>
           <div class="icons">
              <i class="fa-solid fa-phone"></i>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-solid fa-comment"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-heart"></i>
           </div>
        </div>
     </div>`);
    
    }).join(' ');
      
    document.querySelector(".employee-cards-outer").innerHTML = employeeCardsArray;
    }
});


var humburger = document.querySelector(".humburger");

var filters = document.querySelector(".filters");

var search  = document.querySelector(".search");

var searchicon = document.querySelector(".search-icon");

humburger.addEventListener("click", function(e) {   
 
        if(filters.classList == "humburger-filters")
        {
            filters.classList = "filters";   
        }
        else
        {
        filters.classList = "humburger-filters";   
        }

        if(search.classList == "search")
        {
            search.classList = "search-modified";
            searchicon.classList.add("search-icon-block");
        }
        else{
            search.classList = "search";
            searchicon.classList.remove("search-icon-block");    
        }
});

