document.addEventListener("DOMContentLoaded", () => {
    let bialyCzyCzarny = "bialy";
    let x = 0, y = 0, dx = 10, dy = 10;
    let idiotSong = new Audio('youareanidiotsong.mp3');
    let youareanidiotarr = [
        "you are an idiot",
        "ou are an idiot",
        "u are an idiot",
        " are an idiot",
        "are an idiot",
        "re an idiot",
        "e an idiot",
        " an idiot",
        "an idiot",
        "n idiot",
        " idiot",
        "idiot",
        "diot",
        "iot",
        "ot",
        "t",
    ]
    let a = 0;
    let b = 1;

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
            idiota()
        }, 120);
    }

    function title() {
        if (bialyCzyCzarny == 'bialy') {
            document.getElementById("favicon").href = 'idiot1.png'
        }  else {
            document.getElementById("favicon").href = 'idiot2.png'
        }
        if (a >= 0) {
            document.title = youareanidiotarr[a]
        }
        if (a >= youareanidiotarr.length - 1) {
            b = -b;
        } else if (a < 0) {
            b = -b;
        }
        a += b

        setTimeout(() => {
            title()
        }, 100);
    }

    let youareanidiot = null;

    function spawnokienko() {
        if (youareanidiot && !youareanidiot.closed) {
            return;
        }
    
        youareanidiot = window.open("", "", "width=400,height=350");
        youareanidiot.document.write("<body style='margin: 0;'><img src='youareanidiot.gif' style='width: 100%; height: 100%;'></body>")
    
        function okienko() {
            x += dx;
            y += dy;
            youareanidiot.moveTo(x, y);
    
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
        okienko()
    }

    let clicked = false;
    
    document.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            let legit = document.getElementById("legit");
            let idiotDiv = document.getElementById("idiotDiv");
            legit.classList.remove('d-block');
            legit.classList.add('d-none');
            idiotDiv.classList.remove('d-none');
            idiotDiv.classList.add('d-flex');
            idiota();
            title();
            idiotSong.play();

            idiotSong.addEventListener("ended", () => {
                idiotSong.play();
            });
        }
    }) 
    document.addEventListener("click", () => {
        spawnokienko();
    })
    window.addEventListener('beforeunload', function (e) {
        if (youareanidiot && !youareanidiot.closed) {
            youareanidiot.close();
        }
    });
});
