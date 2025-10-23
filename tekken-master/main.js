// ===== Modal =====
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector(".char-img").src; 
        const name = card.querySelector(".name").textContent;
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerText = name;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


const retroBtn = document.getElementById("retroBtn");
let retroMode = false;


const characters = {
    "KAZUYA": {
        normal: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/pV8nXDdUSoWz68S6bemw",
        retro: "https://static.wikia.nocookie.net/tekken/images/e/e7/Kazuya_Mishima_Tekken2_closeup.png/revision/latest?cb=20210611211040&path-prefix=en"
    },
    "JIN": {
        normal: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/kt0c29OnS1iid1N0bisb",
        retro: "https://exemplo.com/jin-retro.png"
    },
    "KING": {
        normal: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/iVK63XMTjK3K5T3e52lY",
        retro: "https://exemplo.com/king-retro.png"
    },

};

function toggleRetro() {
    retroMode = !retroMode;
    document.querySelectorAll(".card").forEach(card => {
        const name = card.querySelector(".name").textContent;
        const img = card.querySelector(".char-img");
        if (characters[name]) {
            img.src = retroMode ? characters[name].retro : characters[name].normal;
        }
    });
}

retroBtn.addEventListener("click", toggleRetro);
