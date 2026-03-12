fetch("https://soundsalvation.onrender.com/api/sermons")
  .then(res => res.json())
  .then(data => {
    data.forEach(sermon => {
    
    

// 1. Get the container
const container = document.getElementById("sermon-list");

// 2. Create card div
const card = document.createElement("div");
card.className = "card";

// 3. Create content div
const content = document.createElement("div");
content.className = "content";

// Header
const header = document.createElement("div");
header.className = "header";
header.textContent = "sermon.title";

// Meta
const meta = document.createElement("div");
meta.className = "meta";
meta.textContent = "sermon.preacher";

// Description
const description = document.createElement("div");
description.className = "description";
description.textContent = "sermon.date";

// Append header, meta, description to content
content.appendChild(header);
content.appendChild(meta);
content.appendChild(description);

// Extra content div (audio)
const extra = document.createElement("div");
extra.className = "extra content";

// Create audio element
const audio = document.createElement("audio");
audio.controls = true;

// Create source element
const source = document.createElement("source");
source.src = sermon.url;
source.type = "audio/mpeg";

// Append source to audio
audio.appendChild(source);

// Append audio to extra
extra.appendChild(audio);

// Append content and extra to card
card.appendChild(content);
card.appendChild(extra);

// Append card to container
container.appendChild(card);
})
  })
