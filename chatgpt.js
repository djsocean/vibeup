const apiKey = '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';

// Define a function to call the ChatGPT API
async function chat(message) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50,
      n: 1,
      stop: '\n'
    })
  });
  
  const data = await response.json();
  
  // Return the generated text
  return data.choices[0].text.trim();
}

// Export the chat function for use in other JavaScript files
export { chat };
