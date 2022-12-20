// ==================== AUTO TEXT =====================

const autoArray =["erp & crm system", "cloud computing", "solution ecommerce"];
const text = document.querySelector(".auto-text");

let i = 0;
text.innerHTML = autoArray[i];
function repeat(){
    i++;
    if (i > (autoArray.length - 1)){
        i = 0;
    }
    text.innerHTML = autoArray[i];
}
setInterval(repeat,1300)

// =================== MOBILE MENU CONTAINER ================

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu-container");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active')
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
});


// ================== SOLUTION CONTAINER ==================

const solutionArray = ["url('images/back/1.jpg')", "url('images/back/2.jpg')", "url('images/back/3.jpg')", "url('images/back/4.jpg')", "url('images/back/5.jpg')", "url('images/back/6.jpg')"]
const solutionBox = document.querySelector(".allBox");
const box = document.querySelectorAll(".box");

let b = 0;

solutionBox.style.backgroundImage = solutionArray[b];
function changeBackground(){
    b++;
    if (b > (solutionArray.length - 1)){
        b = 0;
    }
    solutionBox.style.backgroundImage = solutionArray[b];
    return false;
}

setInterval(changeBackground,1500);

// =================== REVIEW SECTION ==================

const reviewArray = [
    {
        img: "images/phuong.webp", 
        name: "PHUONG T. UYEN",
        work: "MARKETING MANAGER @ EMERS VIETNAM CO., LTD",
        para: "Magenest completed our website according to the original timeline. Their team was always available to discuss and answer any of our questions. During the project, I was most impressed with the quality of support. customers we get."
    },
    {
        img: "images/tran.webp",
        name: "TRAN KIEN BINH",
        work: "CEO @ VR TELECOM",
        para: "I have spent many months on this project and I greatly appreciate the enthusiasm and professionalism that the Magenest team has put into the project. Despite the extremely short implementation time, they still accomplished everything extremely well. perfect."  
    },
    {
        img: "images/joshua.webp",
        name: "JOSHUA ROWLEY",
        work: "ONLINE DIRECTOR @ E3D-ONLINE",
        para: "Magenest's team worked closely and professionally throughout the project with us. I am completely confident when recommending Magenest to Businesses looking to build or upgrade Magento websites." 
    }
    
]

const imageEl = document.querySelector(".reviewImg");
const nameEl = document.querySelector(".reviewName");
const workEl = document.querySelector(".reviewWork");
const paraEl = document.querySelector(".reviewPara");
const nextBtn = document.querySelector(".rightarrow");
const backBtn = document.querySelector(".leftarrow");

let a = 0;

function all_in_one(){
    imageEl.src = reviewArray[a].img;
    nameEl.innerHTML = reviewArray[a].name;
    workEl.innerHTML = reviewArray[a].work;
    paraEl.innerHTML = reviewArray[a].para;
}
all_in_one();

function nextReview(){
    a++;
    if( a > (reviewArray.length -1)){
        a=0;
    }
    all_in_one();
}

function backReview(){
    a--;
    if( a < 0){
        a= (reviewArray.length - 1);
    }
    all_in_one();
}

nextBtn.addEventListener("click", nextReview);
backBtn.addEventListener("click", backReview);


