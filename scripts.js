document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const colorPicker = document.getElementById('color-picker');
    const brushSize = document.getElementById('brush-size');
    const clearBtn = document.getElementById('clear-btn');
    const saveBtn = document.getElementById('save-btn');
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  

    function startDrawing(e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  

    function draw(e) {
      if (!isDrawing) return;
      context.strokeStyle = colorPicker.value;
      context.lineWidth = brushSize.value;
      context.lineCap = 'round';
  
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
  
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
  
  
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  

    clearBtn.addEventListener('click', clearCanvas);
  
   
    function saveCanvas() {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'drawing.png';
      link.click();
    }
  
 
    saveBtn.addEventListener('click', saveCanvas);
  });
  