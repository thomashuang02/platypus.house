import React, { useState, useEffect } from 'react';
import '../css/Canvas.css';

const canvasConfig = () => {
    // When true, moving the mouse draws on the canvas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    const canvas = document.getElementById('canvas-tool');
    const context = canvas.getContext('2d');
    context.lineJoin = "round";

    //setting canvas dimensions
    const reconfigureCanvas = () => {
        context.canvas.width = canvas.clientWidth;
        context.canvas.height = canvas.clientWidth * 0.6;
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = document.getElementById('color-change').value;
        context.lineJoin = 'round';
        context.lineWidth = document.getElementById('thickness').value;
    }

    window.onload = () => {
        /* tools */
        //color change
        const changeColor = document.getElementById('color-change');
        const eraser = document.getElementById('eraser');
        changeColor.addEventListener('change', (e) => {
            const newColor = e.target.value;
            //deactivate eraser if erasing
            if(eraser.checked) {
                eraser.click();
            }
            context.strokeStyle = newColor;
        }, false);
        //eraser
        eraser.addEventListener('change', (e) => {
            const erasing = e.target.checked;
            if(erasing) {
                context.strokeStyle = "#FFFFFF";
            }
            else {
                context.strokeStyle = changeColor.value;
            }
        }, false);
        //thickness change
        const thicknessSlider = document.getElementById('thickness');
        thicknessSlider.addEventListener('change', (e) => {
            const newThickness = e.target.value;
            context.lineWidth = newThickness;
        }, false);
        //clear canvas
        const clearCanvas = document.getElementById('clear-canvas');
        clearCanvas.addEventListener('click', e => {
            context.fillRect(0, 0, canvas.width, canvas.height);
        }, false);
        //save canvas
        const saveCanvas = document.getElementById('save-canvas');
        saveCanvas.setAttribute('download', 'masterpiece.png');
        saveCanvas.addEventListener('click', e => {
            saveCanvas.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        }, false);

        // initial canvas sizing and config
        reconfigureCanvas();

        // event listeners for mousedown, mousemove, and mouseup
        canvas.onmousedown = handleMouseDown;
        canvas.onmousemove = handleMouseMove;
        window.onmouseup = handleMouseUp;
    }

    window.onresize = reconfigureCanvas;

    const findPosition = e => {
        const rect = canvas.getBoundingClientRect();
        const newX = e.clientX - rect.left;
        const newY = e.clientY - rect.top;
        return [newX, newY];
    }

    const handleMouseDown = e => {
        canvas.classList.remove('idle');
        canvas.classList.add('drawing');
        isDrawing = true;
        [x, y] = findPosition(e);
        context.moveTo(x, y);
        context.beginPath();
    };

    const handleMouseMove = e => {
    [x, y] = findPosition(e);
    if (isDrawing) {
        //draw line
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
        context.moveTo(x, y);
    }
    else {
        context.moveTo(x, y);
    }
    };

    const handleMouseUp = e => {
        canvas.classList.remove('drawing');
        canvas.classList.add('idle');
        isDrawing = false;
    };
}

const Canvas = props => {
    useEffect(() => {
        canvasConfig();
    }, []);

    const [color, setColor] = useState('#000000');
    const [thickness, setThickness] = useState(4);
    const [erasing, setErasing] = useState(false);
    const toggleErasing = () => {
        setErasing(!erasing);
    }

    return (
        <div className="container" id="canvas">
            <h1 className="xxxlarge text-patapusteal">
                <a className="section-header" href="#canvas"><span className='pulsing-teal'><b>canvas</b></span></a>
            </h1>
            <hr className="round divider"/>
            <p>
                enjoy the custom Jirachi cursor!<br/>
                <span id='canvas-warning'>
                    no touchscreen support yet, sorry :(<br/>
                </span>
            </p>
            <canvas id="canvas-tool" className='idle'></canvas>
            <div id="tools">
                <label htmlFor="color-change">color: </label>
                <input type="color" id="color-change" value={color} onChange={(e)=>setColor(e.target.value)}/>
                <label htmlFor="thickness"> thickness: </label>
                <input className="slider" type="range" id="thickness" value={thickness} onChange={(e)=>setThickness(e.target.value)} min="1" max="40" step="1"/>
                <label className="eraser-checkbox-container">
                    <input id="eraser" type="checkbox" value={erasing} />
                    <span className="eraser-checkmark" onClick={()=>toggleErasing()}></span>
                </label>
                <button id="clear-canvas" className="canvas-button">clear</button>
            </div>
            <a href="/#" id="save-canvas" className="patapusteal">save</a>
        </div>
    );
}

export default Canvas;