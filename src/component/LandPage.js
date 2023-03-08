
function LandPage() {
  return (
    <>
     <div class="container">
    <form id="form" class="form">
        <h2>Register With Us</h2>
        <div class="form-control">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username"/>
            <small>Error Message</small>
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email"/>
            <small>Error Message</small>
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password"/>
            <small>Error Message</small>
        </div>
        <div class="form-control">
            <label for="password2">Confirm Password</label>
            <input type="password" id="password2" placeholder="Enter password again"/>
            <small>Error Message</small>
        </div>
        <button>Submit</button>
    </form>
</div>
    
    
    
    
    
    </>
  );
}

export default LandPage;