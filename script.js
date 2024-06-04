document.addEventListener("DOMContentLoaded", () => {
    let bialyCzyCzarny = "bialy";
    let x = 0, y = 0, dx = 10, dy = 10; // Initial position and speed

    function idiota() {
        for (let i = 1; i <=3; i++) {
            let usmieszek = document.getElementById("id" + i);
            if (bialyCzyCzarny == 'bialy') {
                usmieszek.innerHTML = '☺︎';
            }  else {
                usmieszek.innerHTML = '☻';
            }
        }
        let div = document.getElementById("idiotDiv");

        if (bialyCzyCzarny == 'bialy') {
            div.classList.remove("idiotWhite")
            div.classList.add("idiotBlack")
        }  else {
            div.classList.remove("idiotBlack")
            div.classList.add("idiotWhite")
        }

        setTimeout(() => {
            if (bialyCzyCzarny == 'bialy') {
                bialyCzyCzarny = 'czarny'
            }  else {
                bialyCzyCzarny = 'bialy'
            }
            requestAnimationFrame(idiota)
        }, 200);
    }

    let youareanidiot = null;

    function spawnokienko() {
        if (youareanidiot && !youareanidiot.closed) {
            return;
        }
    
        youareanidiot = window.open("", "", "width=400,height=350");
        youareanidiot.document.write("<body style='margin: 0;'><img src='youareanidiot.gif' style='width: 100%; height: 100%;'></body>")
    
        function okienko() {
            // Move the window
            x += dx;
            y += dy;
            youareanidiot.moveTo(x, y);
    
            // If the window hits the edge of the screen, reverse direction
            if (x + 400 > window.screen.width || x < 0) dx = -dx;
            if (y + 350 > window.screen.availHeight || y < 0) dy = -dy;
            setTimeout(() => {
                if (bialyCzyCzarny == 'bialy') {
                    bialyCzyCzarny = 'czarny'
                } else {
                    bialyCzyCzarny = 'bialy'
                }
                requestAnimationFrame(okienko)
            }, 10);
        }
    
        okienko();
    }

    let clicked = false;
    
    document.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            let legit = document.getElementById("legit")
            let idiotDiv = document.getElementById("idiotDiv")
            legit.classList.remove('d-block')
            legit.classList.add('d-none')
            idiotDiv.classList.remove('d-none')
            idiotDiv.classList.add('d-flex')
            idiota()
            var audio = new Audio('youareanidiotsong.mp3');
            audio.play();

            audio.addEventListener("ended", function() 
            {
                audio.play();
            });
        }
    }) 
    document.addEventListener("click", () => {
        spawnokienko();
    })
});