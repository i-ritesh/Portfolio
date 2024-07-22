// document.addEventListener('DOMContentLoaded', () => {
//     const lines = [];
//     let lastX = 0;
//     let lastY = 0;
//     let isFirstMove = true;
//     let isDrawing = false;

//     document.addEventListener('mousemove', (e) => {
//         const scrollX = window.scrollX;
//         const scrollY = window.scrollY;

//         const currentX = e.clientX + scrollX;
//         const currentY = e.clientY + scrollY;

//         if (isFirstMove) {
//             lastX = currentX;
//             lastY = currentY;
//             isFirstMove = false;
//             return;
//         }

//         if (!isDrawing) {
//             isDrawing = true;
//             requestAnimationFrame(() => drawLine(currentX, currentY));
//         }
//     });

//     function drawLine(currentX, currentY) {
//         const line = document.createElement('div');
//         line.classList.add('cursor-line');

//         const angle = Math.atan2(currentY - lastY, currentX - lastX) * 180 / Math.PI;
//         const length = Math.sqrt((currentX - lastX) ** 2 + (currentY - lastY) ** 2);

//         line.style.width = `${length}px`;
//         line.style.transform = `rotate(${angle}deg)`;
//         line.style.transformOrigin = '0 0';
//         line.style.top = `${lastY}px`;
//         line.style.left = `${lastX}px`;

//         document.body.appendChild(line);
//         lines.push(line);

//         setTimeout(() => {
//             line.style.opacity = '0';
//             setTimeout(() => {
//                 line.remove();
//                 lines.shift();
//             }, 1000);
//         }, 1000);

//         // Update last coordinates with some smoothing
//         const smoothingFactor = 0.9;
//         lastX += (currentX - lastX) * smoothingFactor;
//         lastY += (currentY - lastY) * smoothingFactor;

//         isDrawing = false;
//     }
// });
