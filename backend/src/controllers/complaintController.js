import Complaint from "../models/Complaint.js";

export const createComplaint = async (req, res) => {
  const { title, description } = req.body;

  const complaint = await Complaint.create({
    title,
    description,
    user: req.user._id,
    category: "Unkonwn",
    priority: "Medium",
  });
  res.status(201).json(complaint);
};

export const getMyComplaints = async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(complaints);
};

export const getAllComplaints = async (req, res) => {
  const complaints = await Complaint.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(complaints);
};

export const updateStatus = async (req, res) => {
  const { status } = req.body;

  const complaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(complaint);
};
