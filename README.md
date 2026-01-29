## Setup

```bash
git clone https://github.com/evykom/projecton.git
cd projecton
```

### Server

```bash
cd web-server
npm install
```

- **MongoDB**: make sure MongoDB is running on `mongodb://localhost:27017`.
- **Env file**: edit `config/.env.local` if needed (default DB: `articles`, default port: `30000`).

### Web Client

```bash
cd web-client
npm install
```

### Mobile Client (React Native)

```bash
cd mobile-client
npm install
```

**Prerequisites:**
- Node.js and npm installed
- Expo CLI (or use `npx expo` - no need to install globally)
- For Android: Android Studio with Android SDK
- For iOS: Xcode (macOS only)

## Run

### Server

```bash
cd web-server
npm start
```

Server runs on `http://localhost:30000`.

### Web Client

```bash
cd web-client
npm start
```

Client usually runs on `http://localhost:3000` (or whatever port your client uses).

### Mobile Client (React Native)

**Important:** Make sure the backend server is running first!

```bash
cd mobile-client
npm start
```

This will start the Expo development server. You'll see a QR code and options to:
- Press `a` - Open in Android emulator
- Press `i` - Open in iOS simulator (macOS only)
- Press `w` - Open in web browser
- Scan QR code - Open in Expo Go app on your physical device

**Platform-specific API URLs:**
- **Android Emulator**: Uses `http://10.0.2.2:30000` (automatically configured)
- **iOS Simulator**: Uses `http://localhost:30000` (automatically configured)
- **Physical Device**: You may need to use your computer's local IP address (e.g., `http://192.168.1.100:30000`)

**Note:** The API URL is automatically configured based on the platform. For Android emulator, `10.0.2.2` is a special IP that points to the host machine's `localhost`.

