 var files = [
  { name: "Diploma in ICT", url: "https://drive.google.com/open?id=1-FSjHYvsM2DsBGqaEDPSLIWWVw_1BsWM&usp=drive_fs " },
  { name: "Diploma in fashion and design", url: "  null" }, 
  { name: "Diploma in ENGINEERING", url: "NOT UPLOADED KINDLY BARE WITH US  " },         
  { name: "Introduction to ICT", url: "https://drive.google.com/open?id=1-DznVuUvQqDzrRVWQyR1f6muKxz8kPwq&usp=drive_fs " },
  { name: "computational maths", url: "https://drive.google.com/open?id=1wOPvtr9Uj6Xp_EWhPH91Lz7kaICrB6Rb&usp=drive_fs " },
  { name: "Operating system", url: "https://drive.google.com/open?id=1LfQwqapgZc8aV7d0R_vsR9n12ncM3Ctn&usp=drive_fs " },
  { name: "structured programming", url: "https://drive.google.com/open?id=1-QJU8-Gx8qZpy1S1S7LAoDw9ECCrna-G&usp=drive_fs " },
  { name: "practicles", url: "https://drive.google.com/open?id=1-RS05kHjv54379AWTUuJPuz3UExik0t6&usp=drive_fs " },
  { name: "communication skills", url: "https://drive.google.com/open?id=1-6lnISWSQjonSAeEgdBhZKbHX34n3lCj&usp=drive_fs " },
  { name: "computer application 1", url: "https://drive.google.com/open?id=1-3PBpEnlFtj2cxwfu5fIy-ebsComRxWU&usp=drive_fs " }, 
  { name: "MODULE 1 ICT", url: "https://drive.google.com/open?id=1-CYAxfg5HV09_ywF2tzbRkbnTeY9eF_M&usp=drive_fs " },
  { name: "MODULE 2 ICT", url: "https://drive.google.com/open?id=1-KdBtGeCa8kzKWApPWuaR0YajIVKcEid&usp=drive_fs " },
  { name: "MODULE 3 ICT", url: "https://drive.google.com/open?id=1-Jbuw-5Ml9FMlC2VXdHmViNmxjP1SlZS&usp=drive_fs " },
  { name: "MODULE 1 FASHION AND DESIGN", url: " NULL" },
  { name: "MODULE 2 FASHION AND DESIGN", url: " NULL" },
  { name: "MODULE 3 FASHION AND DESIGN", url: "NULL "},
  { name: "CERTIFICATE IN ICT", url: "NULL " },
  { name: "COMPUTER APPLICATION 2 NOTES PDF", url: "https://drive.google.com/open?id=17csC83-526NxEiHW18bB0TbK-GMwte3b&usp=drive_fs" },
  { name: "OOP NOTES", url: " https://drive.google.com/open?id=17HlmoQddhESDNTgJH55SyFeSJZzSs-IW&usp=drive_fs" },
  { name: "VISUAL PROGRAMMING NOTES ", url: "https://drive.google.com/open?id=17cAch9iYOSGcSs_zZH_DsEffe6RW1Wpn&usp=drive_fs " },

  { name: "OPERATING SYSTEM 2017JULY ", url: "NULL " },
  { name: "OPERATING SYSTEM 2017NOV ", url: "NULL " },
  { name: "OPERATING SYSTEM 2018J ", url: "NULL " },
  { name: "OPERATING SYSTEM 2018N ", url: "NULL " },
  { name: "OPERATING SYSTEM 2019J ", url: "NULL " },
  { name: "OPERATING SYSTEM 2019N ", url: "NULL " },
  { name: "OPERATING SYSTEM  2020J", url: "NULL " },
  { name: "OPERATING SYSTEM 2020N ", url: "NULL " },
  { name: "OPERATING SYSTEM 2021J ", url: "NULL " },
  { name: "OPERATING SYSTEM 2021N ", url: "NULL " }, 
  { name: "OPERATING SYSTEM 2022J ", url: "NULL " },
  { name: "OPERATING SYSTEM 2022N ", url: "NULL " },
  { name: "OPERATING SYSTEM  2023J", url: "NULL " },
  { name: "OPERATING SYSTEM 2023N ", url: "NULL " },
  { name: "OPERATING SYSTEM 2024J ", url: "NULL " },
  { name: "OPERATING SYSTEM 2024N ", url: "NULL " },

 
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },
  { name: "STRUCTURED PROGRAMMING ", url: "NULL " },


  { name: "COMPUTER APPLICATION 1 ", url: "NULL " },















    














  // Add more files as needed
];

var currentResults = [];
var currentPage = 1;
var resultsPerPage = 5;


function search() {
  var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  
  if (searchTerm === "") {
    alert("Please type a search term.");
    return;
  }
  
  // Display search progress feedback
  document.getElementById("searchResults").innerHTML = "Searching...";
  
  // Simulate delay for demonstration purposes (remove in production)
  setTimeout(function() {
    currentResults = files.filter(file => file.name.toLowerCase().includes(searchTerm));
    currentPage = 1; // Reset to first page
    displayResults(currentResults);
  }, 1000);
  
  // Clear search input
  document.getElementById("searchInput").value = "";
}

function clearResults() {
  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("pagination").innerHTML = "";
  currentResults = [];
}

function refresh() {
  displayResults(currentResults);
}

function displayResults(results) {
  var searchResultsDiv = document.getElementById("searchResults");
  searchResultsDiv.innerHTML = "";

  if (results.length === 0) {
    searchResultsDiv.innerHTML = "No results found.";
    document.getElementById("pagination").innerHTML = "";
  } else {
    var startIndex = (currentPage - 1) * resultsPerPage;
    var endIndex = startIndex + resultsPerPage;
    var paginatedResults = results.slice(startIndex, endIndex);

    paginatedResults.forEach(result => {
      var resultDiv = document.createElement("div");
      var link = document.createElement("a");
      link.href = result.url;
      link.textContent = result.name;
      resultDiv.classList.add("resultItem");
      resultDiv.appendChild(link);
      searchResultsDiv.appendChild(resultDiv);
    });

    displayPagination(results.length);
  }
}

function displayPagination(totalResults) {
  var paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  var totalPages = Math.ceil(totalResults / resultsPerPage);
  for (var i = 1; i <= totalPages; i++) {
    var button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function() {
      currentPage = parseInt(this.textContent);
      displayResults(currentResults);
    });
    paginationDiv.appendChild(button);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    search();
  }
}



           // Typing effect for the welcome message
        const welcomeMessage = document.getElementById('welcome-message');
        const welcomeText = "Welcome to Lewis Scribe Site Platform! Click the buttons above to embark on a colorful journey.Dive into a world where learning is an adventure! Get ready to EXPLORE, LEARN, and CREATE with us!";
        let index = 0;

        function typeWelcomeMessage() {
            if (index < welcomeText.length) {
                welcomeMessage.innerHTML += welcomeText.charAt(index);
                index++;
                setTimeout(typeWelcomeMessage, 50); // Adjust typing speed here (milliseconds)
            }else{
                welcomeMessage.insertAdjacentHTML('afterend','<p>start your adventure now by exploring our diverse books and past exam papers and resources at lewis scribe site.</p>');
            }
        }

        // Call the function when the page loads
        window.onload = typeWelcomeMessage;



        // Chatbot messages
        const botMessages = [
            "Hello! How can I assist you today?",
            "What would you like to know?",
            "Feel free to ask me anything!",
            "I'm here to help. Ask away!"
        ];

        // Get DOM elements
        const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');
        const feedbackText = document.getElementById('feedback-text');

        // Function to send a message
        function sendMessage() {
            const userMessage = userInput.value.trim();
            if (userMessage !== '') {
                appendMessage(userMessage, 'user-message');
                // Simulate bot response (replace with actual chatbot logic)
                const botMessage = getRandomBotMessage();
                setTimeout(() => {
                    appendMessage(botMessage, 'bot-message');
                }, 500);
                userInput.value = '';
            }
        }

        // Function to append a message to the chat
        function appendMessage(message, className) {
            const messageElement = document.createElement('div');
            messageElement.classList.add(className);
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
        }

        // Function to get a random bot message
        function getRandomBotMessage() {
            const randomIndex = Math.floor(Math.random() * botMessages.length);
            return botMessages[randomIndex];
        }

        // Function to submit feedback
        function submitFeedback() {
            const feedback = feedbackText.value.trim();
            if (feedback !== '') {
                // Send feedback to server (replace with actual submission logic)
                console.log('Feedback submitted:', feedback);
                alert('Thank you for your feedback!');
                feedbackText.value = '';
            } else {
                alert('Please enter your feedback before submitting.');
            }
        }

        // Function to show content based on button click
        function showContent(section) {
            const content = document.getElementById('content');
            switch (section) {
                case 'home':
                    content.innerHTML = "<p>This is the home section. Get ready for a wild ride!</p>";
                    break;
                case 'about':
                    content.innerHTML = "<p>About us: We're as colorful as our background!</p>";
                    break;
                case 'exams':
                    content.innerHTML = `
                        <button onclick="showContent('diploma')">DIPLOMA IN ICT</button>
                        <button onclick="showContent('fashion')">DIPLOMA IN FASHION</button>
                        <button onclick="showContent('engineering')">DIPLOMA IN ENGINEERING</button>
                    `;
                    break;
                case 'books':
                    content.innerHTML = 
                    "<p>Discover our recommended books in this section.</p>";
                    break;
                case 'contact':
                    content.innerHTML = `
                        <p>Contact us: Dive into the rainbow of communication!</p>
                        <div id="contact-info">
                            <button onclick="openWhatsApp()">WhatsApp</button>
                            <button onclick="sendEmail()">Email</button>
                            <button onclick="visitFacebook()">Facebook</button>
                        </div>
                        <div id="comment-section">
                            <h3>Leave a Comment</h3>
                            <form id="comment-form">
                                <textarea id="comment-text" placeholder="Write your comment here..." required></textarea>
                                <button type="submit">Submit</button>
                            </form>
                            <div id="comments">
                                <!-- Comments will be displayed here -->
                            </div>
                        </div>
                    `;
                    break;
                case 'diploma':
                    content.innerHTML = `
                        
                        <button onclick="showContent('module1')">MODULE 1</button>
                        <button onclick="showContent('module2')">MODULE 2</button>
                        <button onclick="showContent('module3')">MODULE 3</button>

                        
                        
                       
                    `;
                    break;
                case 'fashion':
                    content.innerHTML = `
                  
                        <button onclick="showContent('module1_fashion')">MODULE 1</button>
                        <button onclick="showContent('module2_fashion')">MODULE 2</button>
                        <button onclick="showContent('module3_fashion')">MODULE 3</button>
                    `;
                    break;
                case 'engineering':
                    content.innerHTML = `
                        <button onclick="showContent('module1_engineering')">MODULE 1</button>
                        <button onclick="showContent('module2_engineering')">MODULE 2</button>
                        <button onclick="showContent('module3_engineering')">MODULE 3</button>
                        
                    `;
                    break;
                case 'module1':
                    content.innerHTML = `
                        <h2>MODULE 1 Units for ICT:</h2>
                        <h3>OPERATING SYSTEM:</h3>
                        <button style="background-color: #00ff00;" onclick="showContent('os2017J')">Operating System 2017J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2017N')">Operating System 2017N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2018N')">Operating System 2018N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2019J')">Operating System 2019J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2021J')">Operating System 2021J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2021N')">Operating System 2021N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2022')">Operating System 2022</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2023J')">Operating System 2023J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('os2024')">Operating System 2024</button>

                        <span class="arrow" onclick="showContent('diploma')">←</span>

                        <h3>COMMUNICATION SKILLS:</h3>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2018J')">Communication Skills 2018J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2018N')">Communication Skills 2018N</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2021J')">Communication Skills 2021J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2021N')">Communication Skills 2021N</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2022N')">Communication Skills 2022N</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('comm2023J')">Communication Skills 2023J</button>

                        <span class="arrow" onclick="showContent('diploma')">←</span>


                        <h3>COMPUTATIONAL MATHEMATICS:</h3>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2017J')">computational maths 2017J</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2017N')">computational maths 2017N</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2018J')">computational maths 2018J</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2018N')">computational maths 2018N</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2019J')">computational maths 2019J</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2021J')">computational maths 2021J</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2021N')">computational maths 2021N</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2022J')">computational maths 2022J</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2022N')">computational maths 2022N</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2023M')">computational maths 2023M</button>
                        <button style="background-color: #ff0000;" onclick="showContent('compMath2023J')">computational maths 2023J</button>

                        <span class="arrow" onclick="showContent('diploma')">←</span>

                        <h3>COMPUTER APPLICATION 1:</h3>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2017J')">computer application 1 2017J</button>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2017N')">computer application 1 2017N</button>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2019J')">computer application 1 2019J</button>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2021J')">computer application 1 2021J</button>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2021N')">computer application 1 2021N</button>
                        <button style="background-color: #ff9900;" onclick="showContent('computer application 1 2022N')">computer application 1 2022N</button>
                        
                        <span class="arrow" onclick="showContent('diploma')">←</span>


                        <h3>STRUCTURED PROGRAMMING:</h3>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2017J')">structured programming 2017J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2017N')">structured programming 2017N</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2018J')">structured programming 2018J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2019J')">structured programming 2019J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2021J')">structured programming 2021J</button>
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2021N')">structured programming 2021N</button> 
                        <button style="background-color: #ff69b4;" onclick="showContent('structured programming 2022J')">structured programming 2022J</button> 

                        <span class="arrow" onclick="showContent('diploma')">←</span>

                        <h3>PRACTICLES:</h3>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2017N')">practicles 2017N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2018J')">practicles 2018J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2018N')">practicles 2018N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2019J')">practicles 2019J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2021J')">practicles 2021J</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2021N')">practicles 2021N</button>
                        <button style="background-color: #00ff00;" onclick="showContent('practicles 2022J')">practicles 2022J</button>

                        <span class="arrow" onclick="showContent('diploma')">←</span>

                        <h3>INTRODUCTION TO ICT:</h3>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2017J')">introduction to ict 2017J</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2017N')">introduction to ict 2017N</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2018J')">introduction to ict 2018J</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2018N')">introduction to ict 2018N</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2019J')">introduction to ict 2019J</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2021J')">introduction to ict 2021J</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2021N')">introduction to ict 2021N</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2022J')">introduction to ict 2022J</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2022N')">introduction to ict 2022N</button>
                        <button style="background-color: #ffff00;" onclick="showContent('introduction to ict 2023M')">introduction to ict 2023M</button>











                        <span class="arrow" onclick="showContent('diploma')">←</span>
                    `;
                    break;
                case 'os2021J':
                    content.innerHTML = `
                        <h2>Operating System 2021J</h2>
                        <button onclick="downloadContent('https://drive.google.com/uc?id=1Mc7eTWxCw92BvPVMNCMKntzpBn6q3U75')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/file/d/1Mc7eTWxCw92BvPVMNCMKntzpBn6q3U75/view?usp=drivesdk')">Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'os2017J':
                    content.innerHTML = `
                        <h2>Operating System 2017J</h2>
                        <button onclick="downloadContent('https://drive.google.com/open?id=11Rs2ZGjMwp6Du_uhq-6IlLcN3VsZ-t1A&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11Rs2ZGjMwp6Du_uhq-6IlLcN3VsZ-t1A&usp=drive_fs')">Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'os2017N':
                    content.innerHTML = `
                        <h2>Operating System 2017N</h2>
                        <button onclick="downloadContent('https://drive.google.com/open?id=11QtJAXYfP2kY9vAvqffLKQl-9Mx4B2Nn&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11QtJAXYfP2kY9vAvqffLKQl-9Mx4B2Nn&usp=drive_fs')">Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 

                case 'os2018N':
                    content.innerHTML = `
                        <h2>Operating System 2018N</h2>
                        <button onclick="downloadContent('https://drive.google.com/open?id=1-uZ1CyJPQr4_Th5MNG4GmMJ6XWIMc1au&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1-uZ1CyJPQr4_Th5MNG4GmMJ6XWIMc1au&usp=drive_fs')">Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
      
              

                case 'os2023J':
                    content.innerHTML = `
                        <h2>Operating System 2023J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=1-tHpd-3W9PNgmkiYw8r3koay89oRVO-d&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1-tHpd-3W9PNgmkiYw8r3koay89oRVO-d&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                case 'os2019J':
                    content.innerHTML = `
                        <h2>Operating System 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=1-uE28GC87WYx2dTG7nBr1ME3Vz8t3I9w&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1-uE28GC87WYx2dTG7nBr1ME3Vz8t3I9w&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;     
                case 'comm2018J':
                    content.innerHTML = `
                        <h2>communication skills 2018J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=104JDqq37IvpNZRkd3r7k19m6MWwN0YPv&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=104JDqq37IvpNZRkd3r7k19m6MWwN0YPv&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                    
                case 'comm2018N':
                    content.innerHTML = `
                        <h2>communication skills 2018N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=103M461usMg3pqdqMcAa5Tqi4THkBP3Ac&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=103M461usMg3pqdqMcAa5Tqi4THkBP3Ac&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                       
                case 'comm2021J':
                    content.innerHTML = `
                        <h2>communication skills 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=1002YLRTc4kCz3Tg5BJ1AjJW0TD2vqV1y&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1002YLRTc4kCz3Tg5BJ1AjJW0TD2vqV1y&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                    
                case 'comm2021N':
                    content.innerHTML = `
                        <h2>communication skills 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10-XQ8qwVWDsaYcdz00SepWS6k9XMnmcN&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10-XQ8qwVWDsaYcdz00SepWS6k9XMnmcN&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  

                case 'comm2022N':
                    content.innerHTML = `
                        <h2>communication skills 2022N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=1-vPgqrsYRPzVipvRtVIZB833xGvvznmB&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1-vPgqrsYRPzVipvRtVIZB833xGvvznmB&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                    
                case 'comm2023J':
                    content.innerHTML = `
                        <h2>communication skills 2023J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=1-v1bUC92mtNqzU1xfi6zqoSIZmvrmDfq&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=1-v1bUC92mtNqzU1xfi6zqoSIZmvrmDfq&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;     
                    
                case 'compMath2017J':
                    content.innerHTML = `
                        <h2>computational maths 2017J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10vJONW9tqCCijXdnTJQaezMKVeDOBbhm&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10vJONW9tqCCijXdnTJQaezMKVeDOBbhm&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;         

                case 'compMath2017N':
                    content.innerHTML = `
                        <h2>computational maths 2017N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10v_UeHKBkRF4yEKRtU8PxENlsVJH8xl2&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10v_UeHKBkRF4yEKRtU8PxENlsVJH8xl2&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                    
                case 'compMath2018N':
                    content.innerHTML = `
                        <h2>computational maths 2018N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10xHSUesF0ppmHFSp64DTXh3DzKNeITnh&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10xHSUesF0ppmHFSp64DTXh3DzKNeITnh&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                    
                case 'compMath2019J':
                    content.innerHTML = `
                        <h2>computational maths 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10xkCEnlGTGxYd6a4rSvhSe4M59-fgB00&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10xkCEnlGTGxYd6a4rSvhSe4M59-fgB00&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'compMath2021J':
                    content.innerHTML = `
                        <h2>computational maths 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10yrecn9uIlt4VNsCKXJ11oIeln_RXqSJ&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10yrecn9uIlt4VNsCKXJ11oIeln_RXqSJ&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'compMath2021N':
                    content.innerHTML = `
                        <h2>computational maths 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=111zuaG1gY38nQUCgbwWPtrIbK_4IN-MT&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=111zuaG1gY38nQUCgbwWPtrIbK_4IN-MT&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;      

                case 'compMath2022J':
                    content.innerHTML = `
                        <h2>computational maths 2022J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=113W5N7DvrbC3WV8C_EQk6J_440OGRd3E&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=113W5N7DvrbC3WV8C_EQk6J_440OGRd3E&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                    
                case 'compMath2022N':
                    content.innerHTML = `
                        <h2>computational maths 2022N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=115ADFGq1VfKtAiuqRiQAF430i5myvm_I&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=115ADFGq1VfKtAiuqRiQAF430i5myvm_I&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break; 
                    
                case 'compMath2023J':
                    content.innerHTML = `
                        <h2>computational maths 2023J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=118ilEDi9XDjK9e1Vgn1uEsezKd3es9oX&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=118ilEDi9XDjK9e1Vgn1uEsezKd3es9oX&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;     

                case 'compMath2023M':
                    content.innerHTML = `
                        <h2>computational maths 2023M</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11761iUDJhmsE0AwwLVdu78O8pZ7Vm6cw&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11761iUDJhmsE0AwwLVdu78O8pZ7Vm6cw&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;     

                case 'computer application 1 2017J':
                    content.innerHTML = `
                        <h2>computer application 1 2017J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10RkOP_fYesWAWljijpU56f4u4rwAFxSQ&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10RkOP_fYesWAWljijpU56f4u4rwAFxSQ&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;     

                case 'computer application 1 2017N':
                    content.innerHTML = `
                        <h2>computer application 1 2017N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10SihyiQh8LpCXlqSWrweT__vk50zK5KE&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10SihyiQh8LpCXlqSWrweT__vk50zK5KE&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;   
                    
                case 'computer application 1 2019J':
                    content.innerHTML = `
                        <h2>computer application 1 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10TDCG9YVKpaqWnABs759d3EgSqriP3vu&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10TDCG9YVKpaqWnABs759d3EgSqriP3vu&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'computer application 1 2021J':
                    content.innerHTML = `
                        <h2>computer application 1 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10TH6smdWQ3YYgUZdWoeLP4K6G_qgjkas&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10TH6smdWQ3YYgUZdWoeLP4K6G_qgjkas&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'computer application 1 2021N':
                    content.innerHTML = `
                        <h2>computer application 1 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10TdnYL-91CIZ_iktnYKRznvkjJQHF3Eg&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10TdnYL-91CIZ_iktnYKRznvkjJQHF3Eg&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;      
                

                case 'computer application 1 2022N':
                    content.innerHTML = `
                        <h2>computer application 1 2022N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10XbZ04fSaEQ1J_L6opDQbh7lg2WD8g0l&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10XbZ04fSaEQ1J_L6opDQbh7lg2WD8g0l&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;      

                case 'structured programming 2017J':
                    content.innerHTML = `
                        <h2>structured programming 2017J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10H95ZsF-6xgdsyHIFxWO-YalEojlwo0d&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10H95ZsF-6xgdsyHIFxWO-YalEojlwo0d&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;      

                case 'structured programming 2017N':
                    content.innerHTML = `
                        <h2>structured programming 2017N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10JA2gRDW8yCJOzD44EYzFlOiwQQ7s59O&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10JA2gRDW8yCJOzD44EYzFlOiwQQ7s59O&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'structured programming 2018J':
                    content.innerHTML = `
                        <h2>structured programming 2018J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=104kDEOyYvyBvyWwey53Kc-CxwShvPU1g&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=104kDEOyYvyBvyWwey53Kc-CxwShvPU1g&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;      


                case 'structured programming 2019J':
                    content.innerHTML = `
                        <h2>structured programming 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=109WEGl9oy9aAIxPpwDyg-8ohpVmRVrFC&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=109WEGl9oy9aAIxPpwDyg-8ohpVmRVrFC&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;  
                    
                case 'structured programming 2021J':
                    content.innerHTML = `
                        <h2>structured programming 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=107OkCBp97tOtk4hWGwuPaW01wdoSWeGT&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=107OkCBp97tOtk4hWGwuPaW01wdoSWeGT&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'structured programming 2021N':
                    content.innerHTML = `
                        <h2>structured programming 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10CFSP0NJB1N80GcCT1ZH15f4gefJ57Kr&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10CFSP0NJB1N80GcCT1ZH15f4gefJ57Kr&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'structured programming 2022J':
                    content.innerHTML = `
                        <h2>structured programming 2022J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10CdbjPgdnoT9gBnbAjEVM9jaMnGm32u2&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10CdbjPgdnoT9gBnbAjEVM9jaMnGm32u2&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'practicles 2017N':
                    content.innerHTML = `
                        <h2>practicles 2017N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11BI_7qMU8qMh_ZF8_6blUjbM2jObXagZ&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11BI_7qMU8qMh_ZF8_6blUjbM2jObXagZ&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'practicles 2018J':
                    content.innerHTML = `
                        <h2>practicles 2018J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11CDnE62U1iNy92gCb90b_wG60KxV2N3I&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11CDnE62U1iNy92gCb90b_wG60KxV2N3I&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                case 'practicles 2018N':
                    content.innerHTML = `
                        <h2>practicles 2018N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11FZNHXnAaIE61BrwfEyBllXNaxwZLG6O&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11FZNHXnAaIE61BrwfEyBllXNaxwZLG6O&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                case 'practicles 2019J':
                    content.innerHTML = `
                        <h2>practicles 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11HeIRGjsulm9-5Ht2au7NCDPYhEgcC0t&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11HeIRGjsulm9-5Ht2au7NCDPYhEgcC0t&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'practicles 2021J':
                    content.innerHTML = `
                        <h2>practicles 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=11IhS2_UD0s72z-RT0ULwHsRfttEsu32F&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=11IhS2_UD0s72z-RT0ULwHsRfttEsu32F&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'practicles 2021N':
                    content.innerHTML = `
                        <h2>practicles 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10JaxbvKnr9kcW0fufrmfhQPk7BBBlnCn&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10JaxbvKnr9kcW0fufrmfhQPk7BBBlnCn&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'practicles 2022J':
                    content.innerHTML = `
                        <h2>practicles 2022J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10PgBwrNMGu-ZOA8s7bbsMUgHK2GiuTO7&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10PgBwrNMGu-ZOA8s7bbsMUgHK2GiuTO7&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2017J':
                    content.innerHTML = `
                        <h2>introduction to ict 2017J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10Zvblr3EZvcdhtralzvcy5PctbJ5e4eT&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10Zvblr3EZvcdhtralzvcy5PctbJ5e4eT&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                case 'introduction to ict 2017N':
                    content.innerHTML = `
                        <h2>introduction to ict 2017N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10_3c_MxM7oKJg4j0KRQ0YbzXVpMIBG3L&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10_3c_MxM7oKJg4j0KRQ0YbzXVpMIBG3L&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2018J':
                    content.innerHTML = `
                        <h2>introduction to ict 2018J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10dQupZu0IXtcBYRhcolufVA_9pGYLmEu&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10dQupZu0IXtcBYRhcolufVA_9pGYLmEu&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2018N':
                    content.innerHTML = `
                        <h2>introduction to ict 2018N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10fBQ9cQEXVqu7Eimuh96Crik15_AEhsS&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10fBQ9cQEXVqu7Eimuh96Crik15_AEhsS&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2019J':
                    content.innerHTML = `
                        <h2>introduction to ict 2019J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10gSHaDHAjTGouWFYDNbkCD_Z3hXOkeiU&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10gSHaDHAjTGouWFYDNbkCD_Z3hXOkeiU&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2021J':
                    content.innerHTML = `
                        <h2>introduction to ict 2021J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10hbZo2frOiqSiW6T0PPVxXimvzHvLmgs&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10hbZo2frOiqSiW6T0PPVxXimvzHvLmgs&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2021N':
                    content.innerHTML = `
                        <h2>introduction to ict 2021N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10kiwoNNHZZ9RzLHRLFaNkNmmK2LCwr39&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10kiwoNNHZZ9RzLHRLFaNkNmmK2LCwr39&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2022J':
                    content.innerHTML = `
                        <h2>introduction to ict 2022J</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10n3L_Xf6svfPPhTgZxnQBtU01D7Msukw&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10n3L_Xf6svfPPhTgZxnQBtU01D7Msukw&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;
                case 'introduction to ict 2022N':
                    content.innerHTML = `
                        <h2>introduction to ict 2022N</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10rftWfJFcsVh7PvFtpcYQYlkWd1g2JI2&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10rftWfJFcsVh7PvFtpcYQYlkWd1g2JI2&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

                case 'introduction to ict 2023M':
                    content.innerHTML = `
                        <h2>introduction to ict 2023M</h2> 
                        <button onclick="downloadContent('https://drive.google.com/open?id=10sHi80VCmW9-YAYUIGpQa_hdpmkPLjT4&usp=drive_fs')">Download</button>
                        <button onclick="previewContent('https://drive.google.com/open?id=10sHi80VCmW9-YAYUIGpQa_hdpmkPLjT4&usp=drive_fs')" >Preview</button>
                        <span class="arrow" onclick="showContent('module1')">←</span>
                    `;
                    break;

        case 'module2':

                    content.innerHTML = `
        <h2>MODULE 2 Units:</h2>
        <span class="arrow" onclick="showContent('diploma')">←</span>
        <h3>VISUAL BASIC:</h3>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2017J')">visual basic 2017J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2017N')">visual basic 2017N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2018J')">visual basic 2018J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2018N')">visual basic 2018N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2019J')">visual basic 2019J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2022N')">visual basic 2022N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual basic 2023J')">visual basic 2023J</button>
        <span class="arrow" onclick="showContent('diploma')">←</span>

        <h3>VISUAL PROGRAMMING:</h3>
        <span class="arrow" onclick="showContent('diploma')">←</span>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2017J')">visual programming 2017J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2017N')">visual programming 2017N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2018J')">visual programming 2018J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2018N')">visual programming 2018N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2019J')">visual programming 2019J</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2022N')">visual programming 2022N</button>
            <button style="background-color: #00ff00;" onclick="showContent('visual programming 2023J')">visual programming 2023J</button>

        <h3>OBJECT ORIENTED PROGRAMMING:</h3>
        <span class="arrow" onclick="showContent('diploma')">←</span>
            <button style="background-color: #00ff00;" onclick="showContent('object oriented programming 2017J')">object oriented programming 2017J</button>
            <button style="background-color: #00ff00;" onclick="showContent('object oriented programming 2017N')">object oriented programming 2017N</button>
            <button style="background-color: #00ff00;" onclick="showContent('object oriented programming 2018N')">object oriented programming 2018N</button> 
            <button style="background-color: #00ff00;" onclick="showContent('object oriented programming 2019J')">object oriented programming 2019J</button>
            <button style="background-color: #00ff00;" onclick="showContent('object oriented programming 2021N')">object oriented programming 2021N</button>




        <h3>SYSTEM ANALYSIS AND DESIGN:</h3>
        <span class="arrow" onclick="showContent('diploma')">←</span>
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>
            <button style="background-color: #00ff00;" onclick="showContent('system analysis and desiggn')">system analysis and design</button>    
   

        


    `;
    break;           

        










































                // Include other cases for operating system papers (os2019, os2020, os2022, etc.) as needed
                case 'blog': // Added case for the blog section
                    content.innerHTML = `
                        <h2>Explore Educational Content</h2>
                        <button onclick="openWebsite('https://www.bbc.com')">BBC</button>
                        <button onclick="openWebsite('https://www.khanacademy.org')">Khan Academy</button>
                        <button onclick="openWebsite('https://www.udemy.com')">Udemy</button>
                        <button onclick="openWebsite('https://www.edx.org')">edX</button>
                        <span class="arrow" onclick="showContent('home')">←</span>
                    `;
                    break;
            }
        }

        // Function to open website in a new tab
        function openWebsite(url) {
            window.open(url, '_blank');
        }

        // Function to open WhatsApp
        function openWhatsApp() {
            window.open('https://api.whatsapp.com/send?phone=+254784364514', '_blank');
        }

        // Function to send email
        function sendEmail() {
            window.location.href = 'mailto:lewismbogani46@gmail.com';
        }

        // Function to visit Facebook
        function visitFacebook() {
            window.open('https://www.facebook.com/lewis.tophiz.1', '_blank');
        }

        // Submit comment
        const commentForm = document.getElementById('comment-form');
        const commentText = document.getElementById('comment-text');
        const commentsSection = document.getElementById('comments');

        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const comment = commentText.value;
            if (comment.trim() !== '') {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                    <p>${comment}</p>
                    <button onclick="likeComment(this)">Like</button>
                    <span class="likes">0</span>
                `;
                commentsSection.appendChild(commentElement);
                commentText.value = ''; // Clear the comment input field after submission
            }
        });

        // Like comment
        function likeComment(button) {
            const likes = button.nextElementSibling;
            let currentLikes = parseInt(likes.textContent);
            likes.textContent = ++currentLikes;
            button.disabled = true; // Disable the like button after it's been clicked
        }

        // Function to download content
        function downloadContent(link) {
            window.location.href = link;
        }

        // Function to preview content
        function previewContent(link) {
            window.open(link, '_blank');
        }