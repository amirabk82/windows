// modalBigger
function modalBigger(modal){
    modal.removeAttribute("style", "height");
    modal.removeAttribute("style", "width");
    if(modal.classList.contains("modalHalfScreen")){
        modal.classList.replace("modalHalfScreen","modalFullScreen");
        modal.style.top = "-3%";
    }
    else modal.classList.replace("modalFullScreen", "modalHalfScreen");
}

// taskbarClick
function taskbarClick(modal, taskbarApp){
    if(modal.classList.contains("modal-hide")){modal.classList.replace("modal-hide", "modal-show");
    taskbarApp.style.width = "12px";
    }
    else {modal.classList.replace("modal-show", "modal-hide");
    taskbarApp.style.width = "0";
    }
}

// close modal
function modalClose(modal, taskbarApp){
    modal.classList.replace("modal-show", "modal-hide");
    taskbarApp.style.width = "0";
}

// click desktop App
function clickDesktopApp(modal, taskbarApp){
    if(modal.classList.contains("modal-hide")){
        modal.classList.replace("modal-hide", "modal-show");
        taskbarApp.style.width = "12px";
    }
}

// click modal minimize 
function clickModalMinimize(modal){
    if(modal.classList.contains("modal-show")) modal.classList.replace("modal-show", "modal-hide");
}

// drag modal
function dragModal(modal){
            document.addEventListener("mousemove",mousemove);
            function mousemove(e){
                modal.style.left = e.pageX - 500 + "px";
                modal.style.top = e.pageY - 25 + "px";
                body.style.cursor = "move";
                
                if(e.pageY <= 0){
                    modal.classList.replace("modalHalfScreen", "modalFullScreen");
                    document.removeEventListener("mousemove", mousemove);
                    modal.style.left = "0";
                    modal.style.top = "-3%";
                }

                document.addEventListener("mouseup", mouseup);
                function mouseup(){
                    document.removeEventListener("mousemove", mousemove);
                body.style.cursor = "default";

                }
            }

}

telegram.addEventListener("dblclick", function(){
    clickDesktopApp(telegramModal, telegramUnderline)
})

telegramCloseBtn.addEventListener("click", function(){
    modalClose(telegramModal, telegramUnderline)
})

telegramTaskbar.addEventListener("click", function(){
    taskbarClick(telegramModal, telegramUnderline);
})

telegramChangeSizeBtn.addEventListener("click", function(){
    modalBigger(telegramModal);
})

telegramMinimizeBtn.addEventListener("click", function(){
    clickModalMinimize(telegramModal);
})

telegramDrag.addEventListener("mousedown", function(){
    dragModal(telegramModal);
})

// end of telegram

// firefox:
firefox.addEventListener("dblclick", function(){
    clickDesktopApp(firefoxModal, firefoxUnderline);
})
firefoxCloseBtn.addEventListener("click", function(){
    modalClose(firefoxModal, firefoxUnderline)
})

firefoxTaskbar.addEventListener("click", function(){
    taskbarClick(firefoxModal, firefoxUnderline);
})

firefoxChangeSizeBtn.addEventListener("click", function(){
    modalBigger(firefoxModal);
})

firefoxMinimizeBtn.addEventListener("click", function(){
    clickModalMinimize(firefoxModal);
})

firefoxDrag.addEventListener("mousedown", function(){
    dragModal(firefoxModal);
});

// end of firefox


// footer
// date
let clockSpan = document.querySelector(".date-clock");
let daySpan = document.querySelector(".date-day");

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

clockSpan.innerHTML = hour + ":" + minute;
daySpan.innerHTML = day + "/" + month + "/" + year;
// end of date

// search
let searchTaskbar = document.querySelector(".search-taskbar");
let searchTaskbarMenu = document.querySelector(".search-taskbar-menu");

document.addEventListener("click", function(event){
    if(!searchTaskbar.contains(event.target)){ 

        searchTaskbarMenu.style.opacity = "0";
        searchTaskbarMenu.style.visibility = "hidden";  
        searchTaskbarMenu.style.top = "0";  
}
    else{
        searchTaskbarMenu.style.top = "-660px";
        searchTaskbarMenu.style.visibility = "visible";
        searchTaskbarMenu.style.opacity = "1";
    }         
})
// end of search

// windows
let windowsTaskbar = document.querySelector(".windows-taskbar");
let windowsTaskbarMenu = document.querySelector(".windows-taskbar-menu");


document.addEventListener("click", function(event){
    if(!windowsTaskbar.contains(event.target)){
        windowsTaskbarMenu.classList.replace("windows-taskbar-menu-show","windows-taskbar-menu-hide");
    } 
    else{
        if(windowsTaskbarMenu.classList.contains("windows-taskbar-menu-show")){ 
            windowsTaskbarMenu.classList.replace("windows-taskbar-menu-show","windows-taskbar-menu-hide");
        }
        else{ windowsTaskbarMenu.classList.replace("windows-taskbar-menu-hide","windows-taskbar-menu-show");
        }
    } 
})
// end of windows


// function calculate_left_of_modal_from_left(e){
    
// }

// resizerRightTelegram.addEventListener("mousedown", function(){
    
//     document.addEventListener("mousemove", mousemove);
//     function mousemove(e){
//         Lpos = telegramModal.style.left;
//         Lpos = Lpos.replace("px", "");
//         Lpos = parseInt(Lpos);
//         body.style.cursor = "e-resize";
//         telegramModal.style.width = e.pageX - Lpos + "px";
//     }
//     document.addEventListener("mouseup", function(e){
//         document.removeEventListener("mousemove", mousemove);
//         this.body.style.cursor = "default"
//     })

// })

// left resizer telegram

// resizerLeftTelegram.addEventListener("mousedown", function(){
//     document.addEventListener("mousemove", mousemove);
//     function mousemove(e){
//         Lpos = telegramModal.style.left;
//         Lpos = Lpos.replace("px", "");
//         Lpos = parseInt(Lpos);
//         body.style.cursor = "e-resize";
//         telegramModal.style.width = e.pageX - Lpos + "px";
//     }
//     document.addEventListener("mouseup", function(e){
//         document.removeEventListener("mousemove", mousemove);
//         this.body.style.cursor = "default"
//     }) 
// });


$("document").on("mousedown mouseup", function(){alert(1);})