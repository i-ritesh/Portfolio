function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

openLink = document.getElementById('openLink').addEventListener('click',()=>{
    window.open('https://github.com/i-ritesh/','_blank')
})

connectLink = document.getElementById('connectLink').addEventListener('click',()=>{
    window.open('https://www.linkedin.com/in/ritesh-gandalwad/','_blank')
})

// https://drive.google.com/file/d/1j94nCzfHq7h2-30uFpNghsiFREUAM-y8/view?usp=sharing

let resumeLink1 = document.getElementById('resumeLink1').addEventListener('click',()=>{
    console.log("clik");
    window.open('https://drive.google.com/file/d/1j94nCzfHq7h2-30uFpNghsiFREUAM-y8/view?usp=sharing','_blank')
})

let resumeLink2 = document.getElementById('resumeLink2').addEventListener('click',()=>{
    console.log("clik");
    window.open('https://drive.google.com/file/d/1j94nCzfHq7h2-30uFpNghsiFREUAM-y8/view?usp=sharing','_blank')
})