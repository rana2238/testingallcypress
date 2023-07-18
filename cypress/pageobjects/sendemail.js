const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function sendEmail() {
  // Create a transporter using your Gmail account credentials
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rahulrkrana25@gmail.com',
      pass: 'wnuyyqljpuskfqrp'
    }
  });

  try {
    // Read the Mocha report file
    const reportPath = 'C:\\Users\\rarana\\Desktop\\mocareporter\\cypress\\reports\\html\\index.html';
    const reportContent = fs.readFileSync(reportPath, 'utf8');

    // Read and attach multiple video files
    const videosDirectory = 'C:\\Users\\rarana\\Desktop\\mocareporter\\cypress\\videos';
    const files = fs.readdirSync(videosDirectory);

    const attachments = [];

    for (const file of files) {
      const filePath = path.join(videosDirectory, file);

      // Check if the file is not a directory
      if (!fs.statSync(filePath).isDirectory()) {
        const fileContent = fs.readFileSync(filePath);

        attachments.push({
          filename: file,
          content: fileContent,
          contentType: 'video/mp4'
        });
      }
    }

    // Send mail with defined transport object and attachments
    let info = await transporter.sendMail({
      from: 'rahulrkrana25@gmail.com',
      to: 'misharma@qasource.com',
      subject: 'Mocha reports',
      text: 'Pls find attached email for mocha reports',
      attachments: [
        {
          filename: 'mocha_report.html',
          content: reportContent
        },
        ...attachments // Spread the video attachments
      ]
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }
}

// Call the sendEmail function
sendEmail();
