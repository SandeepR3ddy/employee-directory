
const departmentsList = ['IT(21)',"HR(2)", "MD(1)", "Sales(4)"];

const officeList = ['Seattle(1)', 'India(1)'];

const jobtitleList = ['SharePoint Practice Head(1)', '.Net Development Head(2)', 'Recruiting Expert(1)', 'BI Developer(1)', 'Business Analyst(1)'];

var deplist = departmentsList.map(function(department)
{
    return '<div class = "departments-name">' + department + '</div>';
}).join(' ');

document.querySelector(".department-list").innerHTML = deplist;

var officelist = officeList.map(function(office)
{
    return '<div>' + office + '</div>';
}).join(' ');

document.querySelector(".offices-list").innerHTML = officelist;

var jobtitlelist = jobtitleList.map(function(job)
{
    return '<div class = "job-titles-list-inner">' + job + '</div>';
}).join(' ');

document.querySelector(".job-titles-list").innerHTML = jobtitlelist;

let matchcards = [
     {
         "FirstName" : "Antony ",
         "LastName" : "Morris",
         "Designation" : "SharePoint Practice Head",
         "PreferredName":"Antony",
         "Department" : "IT Department",
         "src" : "../assets/3.jpg"
     },
     {
        "FirstName" : "Helen ",
        "LastName" : "Zipperman",
        "Designation" : "Operations Manager",
        "PreferredName":"Helen",
        "Department" : "IT Department",
        "src" : "../assets/4.jpg"
    },
    {
        "FirstName" : "Jonathan ",
        "LastName" : "Smith",
        "Designation" : "Product Manager",
        "PreferredName":"Jonathan",
        "Department" : "IT Department",
        "src" : "../assets/5.jpg"
    },
    {
        "FirstName" : "Angela ",
        "LastName" : "Bailey",
        "Designation" : "Talent Magnet Jr.",
        "PreferredName":"Angela",
        "Department" : "HR Department",
        "src" : "../assets/2.jpg"
    },
    {
        "FirstName" : "Tami ",
        "LastName" : "Hopkins",
        "Designation" : "Lead Engineer Dot Net",
        "PreferredName": "Tami",
        "Department" : "IT Department",
        "src" : "../assets/6.jpg"
    },
    {
        "FirstName" : "Franklin ",
        "LastName" : "Humark",
        "Designation" : "Network Engineer",
        "PreferredName":"Franklin",
        "Department" : "IT Department",
        "src" : "../assets/7.jpg"
    },
    {
        "FirstName" : "Olivia ",
        "LastName" : "Watson",
        "Designation" : "UI Designer",
        "PreferredName":"Olivia",
        "Department" : "UX Department",
        "src" : "../assets/8.jpg"
    },
    {
        "FirstName" : "Robert ",
        "LastName" : "Mitchell",
        "Designation" : "Software Engineer",
        "PreferredName":"Robert",
        "Department" : "IT Department",
        "src" : "../assets/1.jpg"
    }
];

if(localStorage.getItem("matchcards") == null){
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
  

document.querySelector(".employee-cards-outer").innerHTML = employeeCardsArray;

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

var jobtitles = document.querySelectorAll(".job-titles-list-inner");


jobtitles.forEach(function(jobtitle) {

    jobtitle.addEventListener("click", () => {  

        val = (jobtitle.textContent).toLowerCase().split("(")[0];
        
        console.log(val);

        filteredcards = matchcardsfromlocalstorage.filter(function(card){    
         
            return card.Designation.toLowerCase().startsWith(val);
            
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

var form = document.querySelector(".modal-container");

var fname = document.querySelector(".fname");
var lname = document.querySelector(".lname");
var pname = document.querySelector(".pname");
var desig = document.querySelector(".designation");
var dept = document.querySelector(".department");


submitButton.addEventListener("click", function(e) {   
     
    if(fname.value == "" || lname.value == "" || pname.value == "" || desig.value == "" || dept.value == "")
    {
        alert("Please Fill all the fields");
    }
    else
    {
        matchcards.push(
            {
                "FirstName" : fname.value,
                "LastName" : lname.value,
                "Designation" : desig.value,
                "PreferredName": pname.value,
                "Department" : dept.value,
                "src" : "../assets/1.jpg"
            });
 
            
             
            localStorage.setItem("matchcards", JSON.stringify(matchcards));
            

        fname.value = "";
        lname.value = ""; 
        pname.value = "";  
        desig.value = ""; 
        dept.value = "";
        
       submitButton.addEventListener("click", closeModal);
      
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

humburger.addEventListener("click", function(e) {   
 
        if(filters.classList == "humburger-filters")
        {
            filters.classList = "filters";   
        }
        else
        {
        filters.classList = "humburger-filters";   
        }

});

