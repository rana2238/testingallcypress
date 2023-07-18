import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

def send_email():
    # Gmail SMTP configuration
    sender_email = 'rahulrkrana25@gmail.com'
    sender_password = 'wnuyyqljpuskfqrp'
    recipient_email = 'rahulrkrana25@gmail.com'
    subject = 'Mocha Report'
    message_content = 'This email contains the Mocha report.'

    # Create the email message
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = recipient_email
    message['Subject'] = subject
    message.attach(MIMEText(message_content, 'plain'))

    # Attach the Mocha report file
    report_path = r'C:\Users\rarana\Desktop\mocareporter\cypress\reports\html\index.html'  
    with open(report_path, 'rb') as file:
        report_attachment = MIMEApplication(file.read(), 'html')
    report_attachment.add_header('Content-Disposition', 'attachment', filename='mocha_report.html')
    message.attach(report_attachment)

    # Send the email
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(message)
        print("Email sent successfully!")
    except smtplib.SMTPException as e:
        print(f"Error sending email: {str(e)}")

# Invoke the send_email function
send_email()
