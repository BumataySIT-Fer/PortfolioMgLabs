const feedbackSchema = new mongoose.Schema({
    teacherName: String,
    subject: String,
    rating: Number,
    comments: String,
    date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", feedbackSchema, "Feedback");

app.get("/feedback", async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ date: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch feedback" });
    }
});

app.get("/feedback/:id", async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch feedback" });
    }
});

app.post("/feedback", async (req, res) => {
    try {
        const newFeedback = await Feedback.create(req.body);
        res.status(200).json(newFeedback);
    } catch (err) {
        res.status(500).json({ error: "Failed to create feedback" });
    }
});

app.put("/feedback/:id", async (req, res) => {
    try {
        const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Failed to update feedback" });
    }
});

app.delete("/feedback/:id", async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete feedback" });
    }
});