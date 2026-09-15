//filter gmail addresses

const mail = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

const gmailCom = mail.filter(mails => mails.endsWith("@gmail.com"))

console.log(gmailCom);