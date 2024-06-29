const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    try {
        let response = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1");
        let data = await response.json();

        for (let i = 0; i < 1500; i++) {
            emoji.push({
                emojiName: data[i].character,
                emojiCode: data[i].unicodeName.split('_').join(' ').toLowerCase(),  // Better formatting
            });
        }
    } catch (error) {
        console.error("Failed to fetch emoji data", error);
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode.replace(/\b\w/g, char => char.toUpperCase());  // Capitalize each word
});
