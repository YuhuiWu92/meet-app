import React from "react";
import "./WelcomeScreen.css";
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen" text-align="center">
      <br /> <br />
      <h1 text-align="center">Welcome to the Meet app</h1>
      <h4 text-align="center">
        Log in to see what's happening in the Tech World! Just search the
        upcoming events around the world for full-stack developers.
      </h4>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            class="btn-text"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a
        href="https://yuhuiwu92.github.io/meet-app/privacy.html"
        rel="nofollow noopener"
        text-align="center"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
}
export default WelcomeScreen;
