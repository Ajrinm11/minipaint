canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
var mouseEvent="empty";
var lastX, lastY;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=5;

        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
