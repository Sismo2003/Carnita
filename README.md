# Carnita 🌮

Automated Reddit-to-TikTok content pipeline. Fetches top Reddit posts, rewrites them with AI, converts them to speech, assembles a video, and uploads to TikTok — all on a schedule.

---

## Project structure

```
/src
  /reddit       - Reddit API client (read-only, fetch top posts)
  /ai           - Claude API integration (rewrite scripts)
  /tts          - ElevenLabs text-to-speech integration
  /video        - FFmpeg video assembly module
  /uploader     - TikTok upload API module
  /utils        - helpers: logger, file manager, config loader
  index.js      - main pipeline entry point
/crons
  pipeline.js   - cron job definition
/config
  env.template  - environment variable template
/output         - generated video files (git-ignored)
.env.example    - all required API keys listed (no values)
package.json    - project manifest and dependencies
```

---

## Tech stack

| Tool | Purpose |
|---|---|
| Node.js (≥ 18) + ES modules | Runtime |
| [axios](https://axios-http.com/) | HTTP requests |
| [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) | Video processing |
| [node-cron](https://github.com/node-cron/node-cron) | Scheduling |
| [dotenv](https://github.com/motdotla/dotenv) | Environment config |

---

## Setup

### 1. Prerequisites

- Node.js 18 or later
- FFmpeg installed and available on your `PATH`

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in the required values:

| Variable | Description |
|---|---|
| `REDDIT_CLIENT_ID` | Reddit OAuth2 app client ID |
| `REDDIT_CLIENT_SECRET` | Reddit OAuth2 app client secret |
| `REDDIT_USERNAME` | Reddit account username |
| `REDDIT_PASSWORD` | Reddit account password |
| `ANTHROPIC_API_KEY` | Anthropic (Claude) API key |
| `ELEVENLABS_API_KEY` | ElevenLabs TTS API key |
| `TIKTOK_ACCESS_TOKEN` | TikTok Content Posting API access token |

### 4. Run the pipeline manually

```bash
npm start
```

### 5. Run on a schedule (cron)

```bash
npm run cron
```

By default, the cron job runs every day at 09:00. The schedule can be customised by passing a cron expression to `startPipelineCron()` in `crons/pipeline.js`.

---

## Pipeline stages

```
Reddit API → Claude AI → ElevenLabs TTS → FFmpeg → TikTok Upload
```

1. **Fetch** – pulls the top posts from a configured subreddit via Reddit's OAuth2 API.
2. **Rewrite** – sends the post content to Claude to generate a short, engaging TikTok script.
3. **TTS** – converts the script to audio using ElevenLabs.
4. **Assemble** – combines a background video with the generated audio using FFmpeg.
5. **Upload** – posts the finished video to TikTok via the Content Posting API.

---

## License

MIT
