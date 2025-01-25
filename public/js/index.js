document.addEventListener('DOMContentLoaded', function () {
   const loginContainer = document.createElement('div');
   loginContainer.id = "loginContainer";

   const labelUserName = document.createElement('label');
   labelUserName.htmlFor="username";
   labelUserName.textContent =  "Username";

   const userName = document.createElement('input');
   const userPassword = document.createElement('input');
   userPassword.type = 'password';
   
   loginContainer.append(userName, userPassword);
   document.body.appendChild(loginContainer);

});