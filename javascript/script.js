const myname = 'YUJI TSUTA';
const mygreet = 'Hi!';
const mygreet2 = "I'm";
const intromsg = "Hi! \n I'm "+myname.trim().split(" ")[0]+" \n Software Engineer";
const myemail = 'yujitsuta20@gmail.com';
const mycontact = '(962) 251 7473';
const myaddress = 'Mississippi St., Purok 3, Brgy. Malanday, Marikina City';
const careersum = 'A Software Developer and Computer-Aided Designer, Experienced with JavaScript, Python, and 3D modeling softwares such as SketchUP, and Kujiale or Coohom for interactive 360 walktrough. Studied Computer Engineering and have a background in Interior Design that provides a strong sense of detail and visual. Continuously learning and committed programming and design.';
const myfbpageURL = 'https://www.facebook.com/atust20/';
const mylinkedinURL = 'https://www.linkedin.com/in/yujitsuta'



// Set the text content
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mygreet-text").textContent = mygreet;
    document.getElementById("mygreet2-text").textContent = mygreet2;
    document.getElementById("myname-text").textContent = myname;
    document.getElementById("careersum-text").textContent = careersum;
  });

function openemailURL() {
    const autoemail = 'mailto:'+myemail;
    window.open(autoemail, '_blank');
}

function openfbURL() {
    window.open(myfbpageURL, '_blank');
}

function openlinkedinURL() {
    window.open(mylinkedinURL, '_blank');
}