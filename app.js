
            const box = document.getElementById('trans-box');
            const rot = document.getElementById('trans-rot');
            rot.addEventListener('input', () => {
                box.style.transform = `rotateY(${rot.value}deg) rotateX(20deg)`;
            });
            box.style.transform = `rotateY(45deg) rotateX(20deg)`;
        