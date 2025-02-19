import React, { useState } from "react";
import "./index.css";
import { CreateUserWithEmailAndPassword } from "../../utils/FirebaseConnector";

const Index = () => {
  const [email, setEmail] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const [password, setPassword] = useState("");
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const [repeatPassword, setRepeatPassword] = useState("");
  const onRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    console.log(repeatPassword);
  };

  const createAccount = (event) => {
    if (password === repeatPassword) {
      CreateUserWithEmailAndPassword(email, password).then((user) => {
        let loginUser = user;
        console.log(`User - ${JSON.stringify(loginUser)}`);
      });
    } else {
      alert("Passwords don't match");
    }
    event.preventDefault();
  };

  return (
    <div>
      <div class="sign-up-box">
        <div class="create-title">Create an account on Gekch.io</div>

        <hr class="hr"></hr>
        <form>
          <div class="sign-up-form">
            <div class="form-input">
              <div class="input">
                <label for="new-username">Create username</label>
                <br></br>
                <input
                  type="text"
                  id="new-username"
                  name="new-usernamee"
                  placeholder="username"
                  autofocus
                ></input>
              </div>

              <div class="input">
                <label for="password">Password</label>
                <br></br>
                <input
                  type="text"
                  id="password1"
                  name="password"
                  placeholder="password"
                  autofocus
                  onChange={onPasswordChange}
                ></input>
              </div>

              <div class="input">
                <label for="repeat-password">Repeat Password</label>
                <br></br>
                <input
                  type="text"
                  id="repeat-password"
                  name="repeat-password"
                  placeholder="password"
                  autofocus
                  onChange={onRepeatPasswordChange}
                ></input>
              </div>

              <div class="input">
                <label for="email-address">Email Address</label>
                <br></br>
                <input
                  type="text"
                  id="email-address"
                  name="email-adress"
                  placeholder="email address"
                  autofocus
                  onChange={onEmailChange}
                ></input>
              </div>

              <div class="submit-button">
                <input
                  type="submit"
                  class="button"
                  value="Create account"
                  onClick={createAccount}
                ></input>
                <div>
                  <p class="login-option">
                    or already have an account?{" "}
                    <a href="/login-page">Login in</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="vl"></div>

            <div class="right-side-signup">
              <div>
                <p class="register">Why register?</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum delectus facilis dolores pariatur veritatis quas
                  molestias natus quo dolor qui velit nesciunt hic odio,
                  repellendus quaerat corporis unde sed veniam!
                </p>
                <p class="register">
                  I want to start a collection of new content!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum delectus facilis dolores pariatur veritatis quas
                  molestias natus quo dolor qui velit nesciunt hic odio,
                  repellendus quaerat corporis unde sed veniam
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
