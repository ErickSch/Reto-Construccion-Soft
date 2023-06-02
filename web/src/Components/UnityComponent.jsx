import React, { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
// ['An error occurred running the Unity content on this page.', 'The error was:', 'TypeError: canvas is null']
import "./styles/UnityComponent.css";
const width = 850;
const height = 562.5;
function UnityComponent() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "temp/Build/temp.loader.js",
    dataUrl: "temp/Build/temp.data",
    frameworkUrl: "temp/Build/temp.framework.js",
    codeUrl: "temp/Build/temp.wasm",
  });

  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  const handleChangePixelRatio = useCallback(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );
  const loadingPercentage = Math.round(loadingProgression * 100);
  return (
    <div className="UnityComponent" style={{ width: width, height: height }}>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
    <Unity
      unityProvider={unityProvider}
      style={{ width: width, height: height }}
      devicePixelRatio={devicePixelRatio}
    />
    </div>

  );
}
export default UnityComponent;