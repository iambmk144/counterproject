let counternumber = document.getElementById('counterstartednumber');
function increase() {
    let increaseupdate = counternumber.textContent ;
    let updatednumber = parseInt(increaseupdate) + 1 ;
    if (updatednumber > 0) {
        counternumber.style.color = "green"

    }
    else if (updatednumber <0) {
        counternumber.style.color = "red"

    }
    else{
counternumber.style.color="black"
    }
    counternumber.textContent = updatednumber

}
function reset() {
    let increaseupdate = counternumber.textContent ;
    let updatednumber = parseInt(increaseupdate)  ;
        updatednumber = 0 
        if (updatednumber > 0) {
            counternumber.style.color = "green"
    
        }
        else if (updatednumber <0) {
            counternumber.style.color = "red"
    
        }
        else{
    counternumber.style.color="black"
        }
        counternumber.textContent = updatednumber
}
function decrease () {
    let increaseupdate = counternumber.textContent ;
    let updatednumber = parseInt(increaseupdate) - 1 ;
    if (updatednumber > 0) {
        counternumber.style.color = "green"

    }
    else if (updatednumber <0) {
        counternumber.style.color = "red"

    }
    else{
counternumber.style.color="black"
    }
    counternumber.textContent = updatednumber
}