function generateMealPlan() {
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
    var monday = document.getElementById('monday').value;
    var tuesday = document.getElementById('tuesday').value;
    var wednesday = document.getElementById('wednesday').value;
    var thursday = document.getElementById('thursday').value;
    var friday = document.getElementById('friday').value;
    var saturday = document.getElementById('saturday').value;
    var sunday = document.getElementById('sunday').value;
  
    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Generate new webpage content using document.write()
    var mealPlanPageContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Meal Plan</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <header>
          <h1>Perfectly Portioned Fitness</h1>
          <h2>Weekly Meal Plan</h2>
        </header>
        
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Goal for the Week: ${goal}</h3>
        
        <h3>Meal Plan:</h3>
        <ul>
          <li><strong>Monday:</strong> ${monday}</li>
          <li><strong>Tuesday:</strong> ${tuesday}</li>
          <li><strong>Wednesday:</strong> ${wednesday}</li>
          <li><strong>Thursday:</strong> ${thursday}</li>
          <li><strong>Friday:</strong> ${friday}</li>
          <li><strong>Saturday:</strong> ${saturday}</li>
          <li><strong>Sunday:</strong> ${sunday}</li>
        </ul>
        
        <button onclick="printPage()">Print</button>
        <button onclick="downloadAsHTML()">Download as HTML</button>
        
        <script src="projectJS.js"></script>
      </body>
      </html>
    `;
  
    // Open the generated content in a new window
    var newWindow = window.open('');
    newWindow.document.write(mealPlanPageContent);
  }
  
