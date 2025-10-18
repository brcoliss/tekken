        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                const imgSrc = card.dataset.img;
                const name = card.dataset.name;
                modal.style.display = "block";
                modalImg.src = imgSrc;
                captionText.innerText = name;
            });
        });

        closeBtn.addEventListener("", () => {
            modal.style.display = "none";
        });
        
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        