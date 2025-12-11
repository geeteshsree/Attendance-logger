📝 Smart Attendance Logger

A fully serverless attendance tracking system built with *AWS Lambda, **S3, *DynamoDB, and a static HTML frontend.

📁 Project Structure
inalproject/ ├── backend/ # Node.js Lambda function │ └── attendance.mjs ├── frontend/ # HTML frontend for marking attendance │   └── index.html

⚙ Tech Stack
Frontend: Static HTML hosted on Amazon S3
Backend: Node.js (Lambda function)
Database: Amazon DynamoDB
API Gateway: For exposing Lambda function as REST API
S3: Static website hosting
🚀 Features
✅ Mark attendance from a web page
✅ Store records in DynamoDB with timestamps
✅ View today's attendance manually or download as CSV
✅ Ready for CI/CD and GitHub Actions deployment
📦 How to Deploy
Upload index.html to your S3 bucket (with static website hosting enabled)
Deploy attendance.mjs to Lambda
Connect Lambda to API Gateway (set POST method)
Give Lambda permission to write to DynamoDB
Update HTML to call your API endpoint
Use DynamoDB → Explore table items to view or export attendance data

📊 Sample DynamoDB Record
{
  "studentId": "sudharshan",
  "timestamp": "2025-06-29T12:34:56Z"
}
 

