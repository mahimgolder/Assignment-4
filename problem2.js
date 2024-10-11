//****************** split use kore :
function sentNotification(email){
    const index = email.indexOf("@");
    if(index === -1){
        return "Invalid Email"
    }
    const emailArray = email.split("@");
    const userName = emailArray[0];
    const domainName = emailArray[1];
    const notificationMassage = userName + " sent you an email from " + domainName ;
    return notificationMassage;
}
// console.log(sentNotification("zihad@gmail.com"));
// console.log(sentNotification("farhan34@yahoo.com"));
// console.log(sentNotification("nadim.naem5@outlook.com"));
// console.log(sentNotification("fahim234.hotmail.com"));
// console.log(sentNotification("sadia8icloud.com"));


// ************slice method use kore:
function sentNotification(email){
    if(email.indexOf("@") === -1){
        return "Invalid Email";
    }
    const atIndex = email.indexOf("@");
    const userName = email.slice(0, atIndex);
    const domainName = email.slice(atIndex + 1);
    const notifacationMassage = userName + " sent you an email from " + domainName;
    return notifacationMassage

}
// console.log(sentNotification("zihad@gmail.com"));
// console.log(sentNotification("farhan34@yahoo.com"));
// console.log(sentNotification("nadim.naem5@outlook.com"));
// console.log(sentNotification("fahim234.hotmail.com"));
// console.log(sentNotification("sadia8icloud.com"));


