
let stones = document.getElementsByClassName("stone");

function makeDragAndDrop(){

    for (let x = 0; x < stones.length; x++) {
        let stone = stones[x];
        stone.onclick = () => {
            if (stone.className.split(' ')[1] === "on") {
                stone.className = "stone off";
            }
            else {
                stone.className = "stone on";
            }
        }
        let isDown = false;
        stone.addEventListener('mousedown', function(track) {
            isDown = true;
            offset = [
                stone.offsetLeft - track.clientX,
                stone.offsetTop - track.clientY
            ];
        }, true);
        document.addEventListener('mouseup', function() {
            isDown = false;
        }, true);
        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                if (stone.className.split(' ')[1] === 'on') {
                    stone.style.position = "absolute";
                    stone.style.left = (mousePosition.x + offset[0]) + 'px';
                    stone.style.top  = (mousePosition.y + offset[1]) + 'px';
                }
            }
        }, true);
    }
}

makeDragAndDrop();