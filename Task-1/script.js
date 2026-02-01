function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim().toLowerCase();

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // User message
    chatBox.innerHTML += `<div class="user">You: ${input.value}</div>`;

    let reply = "";

    if (message.includes("hi") || message.includes("hello")) {
        reply = "Hello 👋 Welcome to Iron Lady. How can I help you today?";
    }
    else if (message.includes("student")) {
        reply = "Great! Iron Lady offers beginner-friendly career guidance and skill development programs for students.";
    }
    else if (message.includes("job") || message.includes("career")) {
        reply = "Based on your interest, we recommend Iron Lady’s career mentorship and placement guidance program.";
    }
    else if (message.includes("course") || message.includes("program")) {
        reply = "Iron Lady provides career guidance, technical training, mentorship, and job-readiness programs.";
    }
    else if (message.includes("fee")) {
        reply = "Program fees depend on the selected course. Our support team will guide you with full details.";
    }
    else if (message.includes("duration")) {
        reply = "Most Iron Lady programs range from 3 to 6 months depending on learning path.";
    }
    else if (message.includes("thank")) {
        reply = "You're welcome 😊 Wishing you success with Iron Lady!";
    }
    else {
        reply = "I’m here to help you with Iron Lady programs, career guidance, and learning journey.";
    }

    // Bot reply
    chatBox.innerHTML += `<div class="bot">AI: ${reply}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
