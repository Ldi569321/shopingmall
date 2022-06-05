const btn = document.querySelectorAll("button");
let slider = document.getElementById("slider");
let innerSlider = document.querySelector(".slider-inner");
const box = document.querySelectorAll(".box");
let count = -1;


//오른쪽 버튼 클릭시 한칸 넘어감
function Rclick() {
    if (count <= box.length - 2) {
        count++;
        innerSlider.appendChild(box[count]);
    } else if (count == box.length - 1) {
        innerSlider.appendChild(box[0]);
        count = 0;
    }
}

//왼쪽 버튼 클릭시 한칸 뒤로감
function Lclick() {
    if (count > -1) {
        innerSlider.prepend(box[count]);
        return count = count - 1;
    } else if (count == -1) {
        innerSlider.prepend(box[box.length - 1]);
        return count = box.length - 2;
    }
}

//버튼 클릭을 안해도 4초마다 한칸씩 움직임
setInterval(function () {
    if (count <= box.length - 2) {
        count++;
        innerSlider.appendChild(box[count]);
    } else if (count == box.length - 1) {
        innerSlider.appendChild(box[0]);
        count = 0;
    }
}, 4000)

btn[0].addEventListener("click", Rclick);
btn[1].addEventListener("click", Lclick);