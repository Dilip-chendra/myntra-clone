// Function to Simulate AI Response
function askAI() {
  let userInput = document.getElementById("userQuery").value;
  let responseDiv = document.getElementById("aiResponse");

  if (userInput.trim() === "") {
      responseDiv.innerHTML = "Please enter a question.";
      return;
  }

  responseDiv.innerHTML = "Thinking...";

  setTimeout(() => {
      responseDiv.innerHTML = `AI Response: ${userInput} (simulated AI response)`;
  }, 1000);
}

// Smart Home - Toggle Lights
let lightOn = false;
function toggleLight() {
  lightOn = !lightOn;
  document.getElementById("lightStatus").innerText = lightOn ? "Lights are ON" : "Lights are OFF";
}

// Remote Device Control
function remoteAccess() {
  alert("Redirecting to Remote Access...");
}

// AI-Based Learning - Show Courses
function showCourses() {
  let courses = ["Python for Beginners", "Web Development", "AI & Machine Learning", "Cybersecurity Basics"];
  let courseList = document.getElementById("courseList");

  courseList.innerHTML = "";
  courses.forEach(course => {
      let li = document.createElement("li");
      li.textContent = course;
      courseList.appendChild(li);
  });
}

// Find Internships
function findInternships() {
  let resultsDiv = document.getElementById("internshipResults");
  resultsDiv.innerHTML = "Finding internships...";
  
  setTimeout(() => {
      resultsDiv.innerHTML = "<ul><li>Google AI Internship</li><li>Microsoft Data Science Internship</li></ul>";
  }, 1500);
}

// Fetch News & Trends
function fetchNews() {
  let newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "Fetching latest news...";

  setTimeout(() => {
      newsContainer.innerHTML = `
          <ul>
              <li>AI Revolution: The Future of Machine Learning</li>
              <li>Cybersecurity Threats in 2025: What You Need to Know</li>
          </ul>
      `;
  }, 1500);
}
