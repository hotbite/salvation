fetch("localhost:3000/api/sermons")
  .then(res => res.json())
  .then(data => {
    data.forEach(sermon => {
      const card = `
        <div class="card">
          <div class="content">
            <div class="header">${sermon.title}</div>
            <div class="meta">${sermon.preacher}</div>
            <div class="description">${sermon.date}</div>
          </div>
          <div class="extra content">
            <audio controls src="${sermon.url}"></audio>
          </div>
        </div>
      `
      document.getElementById("sermons").innerHTML += card
    })
  })