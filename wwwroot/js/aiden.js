document.addEventListener("DOMContentLoaded", function () {
    const followingImage = document.getElementById("following-image");
    console.log("what");
    time = 0;

    document.addEventListener("mousemove", function (e) {
        if (aidenState == "following") {
            targetX = e.clientX;
            targetY = e.clientY;
        }
    });

    function updateImagePosition() {

        time += 1;

        const imageCenterX = followingImage.offsetLeft + followingImage.width / 2;
        const imageCenterY = followingImage.offsetTop + followingImage.height / 2;

        const diffX = targetX - imageCenterX;
        const diffY = targetY - imageCenterY;

        const ease = 0.05;

        followingImage.style.left =
            imageCenterX + diffX * ease - followingImage.width / 2 + "px";
        followingImage.style.top =
            imageCenterY + diffY * ease - followingImage.height / 2 + "px";

        if (aidenState == "hover") {
            targetY += 3 * Math.sin(time/12);
        }

        requestAnimationFrame(updateImagePosition);
    }

    function setTargetPosition(X, Y) {
        targetX = X;
        targetY = Y;
    }

    let targetX = followingImage.offsetLeft + followingImage.width / 2;
    let targetY = followingImage.offsetTop + followingImage.height / 2;
    let aidenState = followingImage.getAttribute("state");
    console.log(aidenState);

    if (aidenState == "hover") {
        setTargetPosition(70, 100);
    }


    followingImage.onclick = function () {
        if (aidenState == "following") {
            aidenState = "logo";
            setTargetPosition(70, 100);
            return;
        }

        if (aidenState == "logo") {
            aidenState = "following";

            return;
        }
        if (aidenState == "position") {
            return;
        }
    };
    updateImagePosition();
});
