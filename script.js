// Function to check if a string includes any of the specified keywords
function includesAny(str, keywords) {
  for (let keyword of keywords) {
    if (str.toLowerCase().includes(keyword.toLowerCase())) {
      return true;
    }
  }
  return false;
}

// Chatbot function
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  
  // Here We Will Train Our Chatbot
  const keywords = [
    { keyword: "hello", response: "Hello, How Can I Help You!" },
    { keyword: "hi", response: "HI, How Can I Help You!" },
    { keyword: "how are you", response: "I'm doing fine, thank you for asking." },
    { keyword: "your name", response: "My name is Se3Do)-, I'm a chatbot." },
    { keyword: "what can you do", response: "I can chat with you" },
  ];

  // Check if the input includes any keyword and set the output accordingly
  for (const item of keywords) {
    if (input.includes(item.keyword)) {
      output = item.response;
      break;
    }
  }

  // If no keyword is matched, set a default response
  if (!output) {
    output = "Sorry, I don't understand that. Please try something else.";
  }

  return output;
}

// Function to display user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Function to display bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Function to send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});

// Toggle chat window visibility
document.addEventListener('DOMContentLoaded', function() {
  const launcherButton = document.querySelector('.blzvQB.launcher-button');
  const textContent = document.querySelector('.text-content');

  launcherButton.addEventListener('click', function() {
    textContent.classList.toggle('visible');
  });
});
