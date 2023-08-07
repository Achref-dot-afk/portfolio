function updateNavbarColorOnScroll() {
    const navbar = document.getElementById('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
      navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.boxShadow = 'none';
    }
  }
  
window.addEventListener('scroll', updateNavbarColorOnScroll);

const skills = document.querySelectorAll('.skill');
const btn = document.querySelector('.switch');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    skills.forEach(skill => {
        if(skill.classList.contains('hide')) {
            skill.classList.remove('hide');
            document.querySelector('.Ops-skills').style.display = 'none';
            document.querySelector('.Dev-skills').style.display = 'block';
            document.querySelectorAll('.skill-ops').forEach(skill => {
                skill.style.display = 'none';
            });
            document.getElementById('slider').style.backgroundColor = '#ff6e07';
        }

        else {
            skill.classList.add('hide');
            document.querySelector('.Ops-skills').style.display = 'block';
            document.querySelector('.Dev-skills').style.display = 'none';
            document.querySelectorAll('.skill-ops').forEach(skill => {
                skill.style.display = 'block';
            });
            document.getElementById('slider').style.backgroundColor = 'rgb(163, 81, 163)';
           
        }
    });
    
});
document.querySelector('.about-me').addEventListener('click', () => {
   window.location.href = '#about';
});
function send_mail() {
    Email.send({
        SecureToken : "3c1a7fed-956a-417a-9762-c26eaef740f9",
        To : 'achref.habli@etudiant-enit.utm.tn',
        From : 'achrefh1bli22@gmail.com',
        Subject : "This is the subject",
        Body : "Got message from : " + document.querySelector(".name-required").value
        + "<br>" + "<br>" + "Email : "+ document.querySelector(".email").value
        + "<br>"  + "<br>" +"Subject : "+ document.querySelector(".subject").value
        + "<br>"  + "<br>" +"Message content : "+ document.querySelector("#message").value 
    }).then(
        document.querySelector(".name-required").value = "",
        document.querySelector(".email").value = "",
        document.querySelector(".subject").value = "",
        document.querySelector("#message").value = "",
    );
}
document.querySelector(".cv").addEventListener("click", () => {
    window.open("https://drive.google.com/uc?export=download&id=1lRCNSHO3M2c3wK4XtjxNj9hKQSkyka-A")
});
document.querySelector(".contact-me").addEventListener("click", () => {
    window.location.href = "#contact";
});

function scrolling(){
    const scroller = document.querySelector('.scroller');
    const val = window.scrollY;
    if(val > 118) {
        scroller.classList.add('active');
        
    }
    else {
        scroller.classList.remove('active');
    }
}
window.addEventListener('scroll', scrolling);
function scrolled() {
    window.location.href = '#home';
}
document.querySelector('.scroller').onclick = scrolled;