$(document).ready(function(){
     $('.carousel').carousel();

     window.replace=`  <div class="row"><br>
         <h1>SIGN UP</h1>
         <h2>Create your account !</h2>
       </div>
         <div class="row">
           <div id="signup1" class="col s6">
             <h3> I'm a student </h3>
             <button id="sups"> STUDENT </button>
           </div>
           <div id="signup2" class="col s6">
             <h3>I'm an expert </h3>
             <button id="supe"> EXPERT </button>
           </div>
         </div>`;
     $(window).scroll(function(){
         $("#sc").css("opacity", 1 - $(window).scrollTop() / 250);
       });
       $('#a').click(function(){
         $('#signup').children.remove();
         $('#signup').append(replace);
       });
       $('#sups').click(function(){
         console.log("in sups");
         $('#signuphide').remove();
         $('#signup').append(`<div id="formu">
           <div class="container">
           <h3>Enter your details </h3>
             <div class="row">
               <form action="#" method="post" class="col s12">
                 <div class="row">
                   <div class="input-field col s6">
                     <input id="first_name" type="text" class="validate" name="fname">
                     <label for="first_name">First Name</label>
                   </div>
                   <div class="input-field col s6">
                     <input id="last_name" type="text" class="validate" name="lname">
                     <label for="last_name">Last Name</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="age" type="number" class="validate">
                     <label for="age">Age</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="username" type="text" class="validate" name="userid">
                     <label for="username">Username</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="password" type="password" class="validate" name="pwd">
                     <label for="password">Password</label>
                   </div>
                 </div>
                 <input id="a" class="submit" type="submit">
               </form>
             </div>
           </div>
         </div>`);
       });
       $('#supe').click(function(){
          console.log("in supe");
         $('#signuphide').remove();
         $('#signup').append(`<div id="forme">
           <div class="container">
           <h3>Enter your details </h3>
             <div class="row">
               <form action="#" method="post" class="col s12">
                 <div class="row">
                   <div class="input-field col s6">
                     <input id="first_name" type="text" class="validate" name="fname">
                     <label for="first_name">First Name</label>
                   </div>
                   <div class="input-field col s6">
                     <input id="last_name" type="text" class="validate" name="lname">
                     <label for="last_name">Last Name</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="email" type="email" class="validate">
                     <label for="email">Email</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="email" type="number" class="validate" name="regno">
                     <label for="email">Registration Number</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="username" type="text" class="validate" name="userid">
                     <label for="username">Username</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <input id="password" type="password" class="validate" name="pwd">
                     <label for="password">Password</label>
                   </div>
                 </div>
                 <input id="a" class="submit" type="submit">
               </form>
             </div>
           </div>
         </div>`);
       });

       $('#sis').click(function(){
         $('#hidesi').remove();
         $('#signin').append(`<div id="fsigns">
           <div class="container">
             <div class="row">
               <form action="#" method="post" class="col s12">
                 <div class="row">
                   <div class="input-field col s12">
                     <i class="material-icons prefix">account_circle</i>
                     <input id="username" type="text" class="validate" name="userid">
                     <label for="username">Username</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <i class="material-icons prefix">lock</i>
                     <input id="password" type="password" class="validate" name="pwd">
                     <label for="password">Password</label>
                   </div>
                 </div>
                 <input class="submit" type="submit">
               </form>
             </div>
           </div>
         </div>`);
       });

       $('#sie').click(function(){
         $('#hidesi').remove();
         $('#signin').append(`<div id="fsigne">
           <div class="container">
             <div class="row">
               <form action="#" method="post" class="col s12">
                 <div class="row">
                   <div class="input-field col s12">
                     <i class="material-icons prefix">account_circle</i>
                     <input id="username" type="text" class="validate" name="userid">
                     <label for="username">Username</label>
                   </div>
                 </div>
                 <div class="row">
                   <div class="input-field col s12">
                     <i class="material-icons prefix">lock</i>
                     <input id="password" type="password" class="validate" name="pwd">
                     <label for="password">Password</label>
                   </div>
                 </div>
                 <input class="submit" type="submit">
               </form>
             </div>
           </div>
         </div>`);
       });


});
