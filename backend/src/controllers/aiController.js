import { enhanceDescriptionWithAI } from "../services/aiService.js";

export const enhanceDescription = async (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Description is required" });
  }

  try {
    const enhancedText = await enhanceDescriptionWithAI(description);
    res.json({ enhancedDescription: enhancedText });
  } catch (error) {
    console.error("AI ERROR 👉", error);
    res.status(500).json({ message: "AI processing failed" });
  }
};
