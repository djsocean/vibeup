const apiKey = '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';

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
      n: 4, // Return 4 responses instead of 1
      stop: '\n'
    })
  });
  
  const data = await response.json();
  
  // Map the response array to extract the generated text from each choice
  return data.choices.map(choice => choice.text.trim());
}

export { chat };
