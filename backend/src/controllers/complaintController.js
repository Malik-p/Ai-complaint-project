import Complaint from "../models/Complaint.js";

/* ================= CREATE COMPLAINT (USER) ================= */
export const createComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    console.log("🔥 CREATE COMPLAINT CONTROLLER HIT");

    const complaint = await Complaint.create({
      title,
      description,
      user: req.user.userId, // ✅ FINAL FIX
      category: "Uncategorized",
      priority: "Medium",
    });

    console.log("🔥 COMPLAINT SAVED:", complaint._id);

    res.status(201).json(complaint);
  } catch (error) {
    console.error("Create complaint error:", error);
    res.status(500).json({ message: "Failed to create complaint" });
  }
};

/* ================= GET USER COMPLAINTS ================= */
export const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.userId }).sort({
      createdAt: -1,
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};

/* ================= GET ALL COMPLAINTS (ADMIN) ================= */
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};

/* ================= UPDATE STATUS (ADMIN) ================= */
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
};
