For any questions, send an email to rafacabanillasm@gmail.com

- **Find apk here:** https://drive.google.com/drive/u/1/folders/1xPe4Q_BJ_Ak6eR-cnpQL3h8cFmChiGYG

- **Good practices:** Find them visiting the file `good-practices.md` in the github repository

- **Further improvements:** Find them visiting the file `further-improvements.md` in the github repository

- **Github repository:** https://github.com/RafaCMur/auth-screens-react-native


# Getting Started

1. Clone the repository from Github

## Install dependencies

There are two ways to install the dependencies:

- Manually

```bash
npm install    # Will install all dependencies listed in the package.json
npx expo install    # Will ensure all the dependencies are up to date and correctly setup for expo
```

- Automatically

A script in **package.json** has been created for automatically installing all required dependencies. It deletes both node_modules and package.lock.json, ensuring the installation process runs smoothly without problems. If npm asks you to install **rimraf**, accept it.

```bash
npm run reinstall   # Does the following: npx rimraf package-lock.json && npx rimraf node_modules && npm install && npx expo install
```

## Running the app locally on Android

- **Using an Android Emulator:** Make sure you have an **AVD** (Android Virtual Device) installed and configured in **Android Studio**.

- **Using an external device:** Enable **USB Debugging** in Developer Options and connect via USB.

Running the following command will automatically launch the application either in the AVD or phone connected by USB.

```bash
npm run android
```

## Running the app locally on iOS

#### Prerequisites

- You **must have macOS** to run an iOS Simulator.
- To run the app on a **physical iPhone**, you need an **Apple Developer account (paid)**.

#### Using an iOS Simulator

1. Install **Xcode** from the Mac App Store.
2. Open **Xcode → Settings → Platforms**, then install the **iOS simulator**.
3. Start an iOS simulator from **Xcode → Open Developer Tool → Simulator**.
4. Run the following command:

```bash
npm run ios
```

# Project Structure

- **`components/`** → Reusable UI components.
- **`screens/`** → App screens (Login, Signup, Home, Dashboard).
- **`context/`** → Manages authentication state using Context API.
- **`utils/`** → Helper functions (validations, styles, etc.).

# Dependencies

### Core Dependencies

- Expo
- React
- React Native
- React Native Web

### Navigation

- React Navigation
- React Navigation Native Stack

### UI & Icons

- React Native Gesture Handler
- React Native Reanimated
- React Native Safe Area Context
- React Native Screens
- React Native Vector Icons

### Utilities & Helpers

- Expo Constants
- Expo Status Bar

### Testing & Linting

- Jest
- Jest Expo
- React Test Renderer
- @Testing Library Jest Native
- @Testing Library React Native
- ESLint
- ESLint Plugin React
- Globals

### Development Tools

- Babel Core
- @Expo Metro Runtime
- @Types Jest

# Testing

This project uses **Jest** as the testing framework.  
Tests are located in the `_tests/` folder.

Run all tests with:

```bash
npm run test
```

# CI/CD Setup Documentation

## Android apk

The APK can be obtained here:

https://drive.google.com/drive/folders/10lKVoedcbkPzhAtKl5FmcRv2IY9WRPTn?usp=drive_link

For the future, the process of obtaining the release link automatically without having to upload the apk could be implemented as an improvement.

Note, for more information please see the file `.github/workflows/ci.yml`. It is **totally documented**.

## Tools Used

- **GitHub Actions** → Automates linting & builds (`.github/workflows/ci.yml`).
- **Expo EAS** → Manages Android (`APK/AAB`) & iOS (`IPA`) builds.
- **Node.js + NPM** → Handles project dependencies.

## Workflow

1. **Linting (`lint` job)** → Runs ESLint on `push` to `main`.
2. **Build Android (`build-android` job)** → Runs on **Ubuntu** (virtual machine), generates **APK**, provides a download link via **Expo EAS**.
3. **Build iOS (`build-ios` job)** _(Mocked, see note below)_ → Runs on **macOS**, generates **IPA**, uploads to **TestFlight/App Store**.

---

### Note on iOS Build

The iOS build process is **mocked**, as I did not have access to a macOS device to run Xcode or test on an iOS device. Since Xcode is macOS-exclusive, I could not verify the build locally.

---

## Triggers

Triggered on `push` to `main` (`.github/workflows/ci.yml`):

```yaml
on:
  push:
    branches:
      - main
```

## How to Get Builds

- **Android (APK)** → Available for download via **Expo EAS**.
- **iOS (IPA)** → _(Mocked, not tested)_, normally uploaded to **TestFlight/App Store**.

The CI/CD pipeline is fully automated for deployments.

---

## Environment Variables & Secrets

To execute the CI/CD correctly, I created a token:

| Variable       | Description                       | Where is it set? |
| -------------- | --------------------------------- | ---------------- |
| **EXPO_TOKEN** | Expo authentication token for EAS | GitHub Secrets   |

To generate `EXPO_TOKEN`, I did it **from the expo website**, since they removed the command:

```bash
eas access-token:create
```

Then, I added it in **GitHub Secrets** as a variable.
