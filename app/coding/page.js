// components/SignupForm.js
import "./uslub.css";
export default function page() {
  return (
   <section>
    <div class="leaves">
      <div class="set">
        <div><img src="https://i.ibb.co/S0VnkZq/leaf-01.png" alt="leaf-01" border="0"/></div>
        <div><img src="https://i.ibb.co/fFrnHYd/leaf-02.png" alt="leaf-02" border="0"/></div>
        <div><img src="https://i.ibb.co/vdx8Jh5/leaf-03.png" alt="leaf-03" border="0"/></div>
        <div><img src="https://i.ibb.co/SdcBCvr/leaf-04.png" alt="leaf-04" border="0"/></div>
        <div><img src="https://i.ibb.co/S0VnkZq/leaf-01.png" alt="leaf-01" border="0"/></div>
        <div><img src="https://i.ibb.co/fFrnHYd/leaf-02.png" alt="leaf-02" border="0"/></div>
        <div><img src="https://i.ibb.co/vdx8Jh5/leaf-03.png" alt="leaf-03" border="0"/></div>
        <div><img src="https://i.ibb.co/SdcBCvr/leaf-04.png" alt="leaf-04" border="0"/></div>
      </div>
    </div>
    <img class="bg" src="https://i.ibb.co/rfNqbQG/bg.jpg" alt="background"/>
    <img class="girl" src="https://i.ibb.co/W5ssvRf/girl.png" alt="girl"/>
    <img class="trees" src="https://i.ibb.co/QrMyLYc/trees.png" alt="trees"/>
    <form onsubmit="test()" action="#" class="login">
      <h2>Sign In</h2>
      <div class="inputBox">
        <input class="field" type="text" placeholder="Username"/>
      </div>
      <div class="inputBox">
        <input class="field" type="password" placeholder="Password"/>
      </div>
      <div class="inputBox">
        <input class="submit" type="button" value="Login" id="btn"/>
      </div>
      <div class="group">
        <a href="#">Forget Password</a>
        <a href="#">Sign up</a>
      </div>
    </form>
  </section>
  );
}
