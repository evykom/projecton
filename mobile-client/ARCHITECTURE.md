# React Native Mobile Client - Architecture & Data Flow

## Entry Point Flow

```
┌─────────────────────────────────────┐
│   Expo Router Entry Point           │
│   (expo-router/entry)               │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   app/_layout.js                     │
│   RootLayout()                       │
│   - Sets up Stack Navigator          │
│   - Configures screen: "index"       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   app/index.js                       │
│   - Imports App from '../src/App'    │
│   - Exports as default screen        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   src/App.js (Main Component)       │
│   ┌───────────────────────────────┐ │
│   │ State:                        │ │
│   │   articles: []                │ │
│   │                               │ │
│   │ Functions:                    │ │
│   │   loadArticles()              │ │
│   │   - Calls articleAPI.getAll() │ │
│   │   - Updates articles state    │ │
│   └───────────────────────────────┘ │
│                                      │
│   useEffect:                         │
│   - Loads articles on mount         │
│                                      │
│   Renders:                          │
│   - ScrollView (container)           │
│   - Title: "Article Manager"        │
│   - AddArticleForm                  │
│   - ArticleList                     │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
┌──────────────┐  ┌──────────────┐
│ AddArticleForm│  │ ArticleList  │
│              │  │              │
│ State:       │  │ Props:       │
│ - title      │  │ - articles[] │
│ - content    │  │ - onDelete() │
│              │  │              │
│ Props:       │  │ Renders:     │
│ - onSave()   │  │ - Article    │
│              │  │   cards      │
│ Renders:     │  │ - Delete     │
│ - TextInputs │  │   buttons    │
│ - Button     │  │              │
└──────┬───────┘  └──────┬───────┘
       │                 │
       │                 │
       └────────┬────────┘
                │
                ▼
        ┌───────────────┐
        │  src/api.js    │
        │                │
        │  articleAPI:   │
        │  - getAll()    │
        │  - create()    │
        │  - delete()    │
        │                │
        │  API_URL:      │
        │  Android:      │
        │  10.0.2.2:30000│
        │  iOS:          │
        │  localhost:30000│
        └───────┬─────────┘
                │
                │ HTTP Requests
                │ (GET, POST, DELETE)
                ▼
        ┌───────────────┐
        │ Backend Server │
        │ (Express)      │
        │ Port: 30000    │
        │                │
        │ Routes:        │
        │ /articles      │
        └───────────────┘
```

## Data Flow

### 1. Initial Load (App Mount)
```
App mounts
    │
    ├─> useEffect triggers
    │
    ├─> loadArticles() called
    │
    ├─> articleAPI.getAll()
    │
    ├─> HTTP GET /articles
    │
    ├─> Server returns articles[]
    │
    ├─> setArticles(articles)
    │
    └─> ArticleList re-renders with new data
```

### 2. Adding an Article
```
User types in AddArticleForm
    │
    ├─> User clicks "Add Article"
    │
    ├─> handleSubmit() called
    │
    ├─> Validates title & content
    │
    ├─> articleAPI.create(title, content)
    │
    ├─> HTTP POST /articles
    │     Body: { title, content }
    │
    ├─> Server creates article
    │
    ├─> Returns created article
    │
    ├─> onSave() callback called
    │
    ├─> loadArticles() refreshes list
    │
    └─> ArticleList shows new article
```

### 3. Deleting an Article
```
User clicks delete button (×)
    │
    ├─> handleDelete(id) called
    │
    ├─> articleAPI.delete(id)
    │
    ├─> HTTP DELETE /articles/:id
    │
    ├─> Server deletes article
    │
    ├─> onDelete() callback called
    │
    ├─> loadArticles() refreshes list
    │
    └─> ArticleList updates (article removed)
```

## File Structure

```
mobile-client/
│
├── app/
│   ├── _layout.js          # Expo Router layout configuration
│   └── index.js            # Entry screen (imports App)
│
├── src/
│   ├── App.js              # Main component (state management)
│   ├── api.js              # API client (HTTP requests)
│   ├── AddArticleForm.js   # Form component (create articles)
│   └── ArticleList.js      # List component (display & delete)
│
└── app.json                # Expo configuration
```

## Key Concepts

### State Management
- **App.js** holds the main state (`articles` array)
- State is passed down as props to child components
- Callbacks (`onSave`, `onDelete`) allow children to trigger parent updates

### API Layer
- **api.js** centralizes all HTTP requests
- Uses `fetch()` API for network calls
- Handles platform-specific URLs (Android vs iOS)
- Returns promises that components await

### Component Communication
- **Parent → Child**: Data passed via props
- **Child → Parent**: Actions via callback functions
- **Components → API**: Direct function calls
- **API → Server**: HTTP requests

### Platform Detection
- Uses `Platform.OS` to detect Android/iOS
- Android emulator: `10.0.2.2` (special IP for host machine)
- iOS simulator: `localhost` (works directly)

## Minimal Design Principles

1. **Single Responsibility**: Each file has one clear purpose
2. **No State Management Library**: Uses React's built-in `useState`
3. **No Routing Complexity**: Single screen app
4. **Direct API Calls**: No middleware or abstraction layers
5. **Simple Error Handling**: Basic try-catch with alerts
