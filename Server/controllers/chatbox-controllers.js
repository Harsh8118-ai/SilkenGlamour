const { formatPrompt } = require('../utils/promptBuilder');

const chatbox = async (req, res) => {
  try {
    const { chatHistory = [] } = req.body;

    const response = await fetch('http://localhost:1234/v1/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'phi-2-GGUF', // 
        prompt: formatPrompt(chatHistory),
        max_tokens: 512,
        temperature: 0.7,
        stop: ['User:', 'Assistant:']   
      }),
    });

    const data = await response.json();
    const aiText = (data.choices?.[0]?.text || '').trim();

    if (!aiText || isFallback(aiText)) {
      return res.json({
        answer: `I'm not sure about that, but I can still help with services or booking. Let me know! ✨`
      });
    }

    return res.json({ answer: aiText });

  } catch (err) {
    console.error('Chat error:', err);
    return res.json({
      answer: `Oops! I'm facing a technical glitch. Please try again later or contact our support. 🤖`
    });
  }
};

const isFallback = (text) => {
  const fallbacks = ["i don't know", "not sure", "can't answer"];
  return fallbacks.some(k => text.toLowerCase().includes(k));
};

module.exports = { chatbox };
