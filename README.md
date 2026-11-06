# AirDrop Gesture Share

## Build the Android APK

Install Node.js, Java, and the Android SDK, then run:

```powershell
npm install
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
npm run android:apk
```

The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.
The app requests camera access when gesture tracking is enabled. Internet access
is used for the sample photos and MediaPipe assets.

## Transfer files between devices

1. Open the app on both devices and keep them online.
2. Copy the room code from one device and enter it on the other.
3. Tap **Connect** on both devices and wait for the connected-device count.
4. Add or select a file, tap **Send**, and accept the incoming file on the other device.
5. Use **Save / share** on the receiving device to save or share the received file.

Peer discovery uses public Trystero signaling; file bytes are transferred directly
between peers over WebRTC. Both devices must have internet access for discovery,
and each file is limited to 100 MB. Some restrictive networks may block direct
peer connections.