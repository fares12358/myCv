
// let listBtn = document.querySelectorAll(".navbar .navbar-nav .nav-link ");

// listBtn.forEach((ele)=>{
//     ele.onclick=function(){
//         listBtn.forEach((ele)=>{
//             ele.classList.remove("active");
//         })
//         ele.classList.add("active");
//     }
// })


function scrollToPage(i) {
    window.scrollTo({
        top: i,
        behavior: 'smooth'
    });
}


let downloadBtn = document.querySelectorAll('#download-btn');


downloadBtn.forEach((ele) => {

    ele.addEventListener('click', () => {

        let fileUrl = 'cv.pdf';

        // Create a temporary anchor element
        let link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cv.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    });

})