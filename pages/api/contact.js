const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const contactHandler = (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, name, message } = req.body;

      if (!isValidEmail(email)) {
        return res.status(422).json({ message: "Invalid email" });
      }

      if (!name || name.trim() === "" || !message || message.trim() === "") {
        return res.status(422).json({ message: "Invalid input" });
      }

      const newMessage = { email, name, message };
      return res.status(201).json({
        message: "Messaged saved successfully!",
        newMessage,
      });
    } catch (error) {
      return res.status(400).json({ message: "Error processing request" });
    }
  }
};

export default contactHandler;
