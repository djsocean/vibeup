// Set up the API endpoint URL and authentication token
const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiToken = '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';

// Get a reference to the Webflow button element
const button = document.querySelector('#my-button');

// Attach a click event listener to the button
button.addEventListener('click', async () => {
  try {
    // Get the input text from a Webflow input field
    const input = document.querySelector('#my-input').value;

    // Call the ChatGPT API with the input text
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      },
      body: JSON.stringify({
        'prompt': input,
        'max_tokens': 64,
        'temperature': 0.7
      })
    });

    // Parse the API response and get the completed text
    const data = await response.json();
    const result = data.choices[0].text.trim();

    // Display the completed text on the screen
    const output = document.querySelector('#my-output');
    output.textContent = result;
  } catch (error) {
    console.error(error);
  }
});
