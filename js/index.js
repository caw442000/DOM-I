const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Update the nav links

const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent.nav['nav-item-1']
navLinks[1].textContent = siteContent.nav['nav-item-2']
navLinks[2].textContent = siteContent.nav['nav-item-3']
navLinks[3].textContent = siteContent.nav['nav-item-4']
navLinks[4].textContent = siteContent.nav['nav-item-5']
navLinks[5].textContent = siteContent.nav['nav-item-6']
console.log(navLinks)

//Update the img src for Call To Action
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src',siteContent["cta"]["img-src"])

//Update the CTA Text
const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta['h1']

//ctaText.setAttribute('textContent', siteContent["cta"]["h1"])

console.log(ctaText)
//Update the CTA Button

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta['button']

//Update Main Content - Feature
const allH4 = document.querySelectorAll("h4");
allH4[0].textContent = siteContent['main-content']['features-h4']
allH4[1].textContent = siteContent['main-content']['about-h4']
allH4[2].textContent = siteContent['main-content']['services-h4']
allH4[3].textContent = siteContent['main-content']['product-h4']
allH4[4].textContent = siteContent['main-content']['vision-h4']
allH4[5].textContent = siteContent['contact']['contact-h4']


const allP  = document.querySelectorAll('p');

allP[0].textContent = siteContent['main-content']['features-content']
allP[1].textContent = siteContent['main-content']['about-content']
allP[2].textContent = siteContent['main-content']['services-content']
allP[3].textContent = siteContent['main-content']['product-content']
allP[4].textContent = siteContent['main-content']['vision-content']

allP[5].textContent = siteContent['contact']['address']
allP[6].textContent = siteContent['contact']['phone']
allP[7].textContent = siteContent['contact']['email']

allP[8].textContent = siteContent['footer']['copyright']








//Update Main Content - About


//Update Main Content - Middle Image
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"])


//Update Main Content - Services


//Update Main Content - Product


//Update Main Content - Vision



//Add Nav Items
const firstNewLink = document.createElement("a");
firstNewLink.textContent = "Home";

const lastNewLink = document.createElement("a");

lastNewLink.textContent = "Gallery";


const parentElement = document.querySelector('nav');


parentElement.prepend(firstNewLink)
parentElement.append(lastNewLink)
