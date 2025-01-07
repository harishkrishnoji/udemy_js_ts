let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknow User");
}

if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("moderator user");
else console.log("Unknown User");
