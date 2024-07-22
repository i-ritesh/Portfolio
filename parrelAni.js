const observer = new IntersectionObserver((element) => {
    element.forEach((ele) => {
        console.log(ele)
        if(ele.isIntersecting){
            ele.target.classList.add('show')
        }else{
            ele.target.classList.remove('show')
        }
    })
})

const parrelAni = document.querySelectorAll('.hidden')
parrelAni.forEach(ele => observer.observe(ele))