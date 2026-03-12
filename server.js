
/////////////////
///////////
const express = require("express")
const cloudinary = require("cloudinary").v2
const cors = require("cors")
const path = require("path");

const app = express()
app.use(cors())

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: "dlwsprvsd",
  api_key: "166933579996399",
  api_secret: "sa_hqIR3duARl25QjYJxtucIHbI"
})
app.use(express.static(path.join(__dirname, "public")))
// Endpoint to fetch all sermons
app.get("/api/sermons", async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression("resource_type:video AND folder:sermons")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute()

    // Map to useful fields
    const sermons = result.resources.map(file => {
      const name = file.public_id.split("/")[1] // filename
      const parts = name.split("_") // e.g., "2026-03-10_PastorJohn_WalkingByFaith"

      return {
        date: parts[0],
        preacher: parts[1],
        title: parts[2],
        url: file.secure_url
      }
    })

    res.json(sermons)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch sermons" })
  }
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
