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
    { keyword: "hello", response: "Hello, How Can I Help You! <br> Kindly Type Your ingredients" },
    { keyword: "hi", response: "HI, How Can I Help You!  <br> Kindly Type Your ingredients" },
    { keyword: "how are you", response: "I'm doing fine, thank you for asking." },
    { keyword: "your name", response: "My name is Se3Do)-, I'm a chatbot." },
{ keyword: "what can you do", response: "I can chat with you and give you an example of healthy food." },
    { keyword: "eggs", response: "Vegetable Omelette: A fluffy omelette filled with sautéed vegetables like spinach, bell peppers, onions, and mushrooms. Serve with a side of whole grain toast or a mixed green salad. Egg and Avocado" },
    { keyword: "chicken", response: "Grilled Chicken Salad: Grilled chicken breast sliced over a bed of mixed greens, cherry tomatoes, cucumbers, avocado slices, and a sprinkle of feta cheese, dressed with a light vinaigrette.Turkey and Veggie Skewers: Skewers alternating pieces of lean turkey breast, bell peppers, onions, and cherry tomatoes, grilled and served with a side of quinoa or brown rice. Lean Beef Stir-Fry: Thinly sliced lean beef stir-fried with broccoli, snap peas, carrots, and bell peppers in a light ginger and garlic sauce, served over brown rice or whole wheat noodles." },
    { keyword: "supplement", response: "Multivitamin: A multivitamin can help fill gaps in your diet by providing essential vitamins and minerals. Look for one that covers a broad spectrum of nutrients, but be mindful not to exceed recommended daily values.Omega-3 Fatty Acids: Omega-3s, found in fish oil supplements or vegan sources like algae oil, are beneficial for heart health, brain function, and reducing inflammation.Vitamin D: Many people have low levels of vitamin D, especially if they live in areas with limited sunlight." }
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
