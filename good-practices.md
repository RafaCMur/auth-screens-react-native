## Good practices

- **"Reinstall" script:**

A script in **package.json** has been created for automatically installing all required dependencies. It deletes both node_modules and package.lock.json, ensuring the installation process runs smoothly without problems.

```bash
npm run reinstall   # Does the following: npx rimraf package-lock.json && npx rimraf node_modules && npm install && npx expo install
```

**Using `rimraf`** for cross-platform compatibility (Linux, Mac, Windows).

- **Modularized components** for better maintainability.
- Project structure and organization follows a pattern.
- **Global styles** for a uniform design across screens and avoiding code repetition.
- Doccumentation in every method.
- Methods names are self-descriptive, which means the reviewer can get an idea of what the code does even without reading the documentation.
- SafeAreaContext not valid for some Android deviced so I used SafeAreaProvider
- Configured ESLint
- Implemented **basic tests** using **Jest**.
- **Context API for authentication state management**, handling login/logout efficiently.
- Common validation methods have been carried to a script called validations.jsx.
- **Form validation with real-time feedback** for better user experience.
- **SafeAreaProvider instead of SafeAreaContext** for better Android compatibility.
- **Implemented Context API for authentication state management**, making login/logout state handling more efficient.

CI/CD

- **Environment variables stored securely in GitHub Secrets**, ensuring safe authentication.
- **EAS authentication with an access token** instead of username/password for better security.
- Linting setup with ESLint after every push.
- **Android APK build automation** using EAS (from EXPO) after every push.
- Tested it in Android studio virtual device (AVD) and also tested in 2 phisical devices with different android versions.

NAVIGATION

- **React Navigation implemented** for smooth screen transitions.
- **Optimized stack management** to prevent infinite memory allocation.
- **Login and Signup screens replace each other** to avoid unnecessary stacking.
- **Back navigation leads to Home**, preventing users from navigating incorrectly.
- **Navigation resets when neccessary**, ensuring users don’t return to login/signup after logging in.
