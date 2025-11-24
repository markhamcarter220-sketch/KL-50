# Better Bets — Real‑Time Sports Betting Analytics (MVP)

Better Bets scans multiple sportsbooks in real time to surface:
- +EV (Expected Value) bets
- Arbitrage opportunities
- Bonus bet optimization
- Per‑bet “books used” count
- ALL‑sports scanning

## Tech
- **Frontend:** React + Vite + Tailwind (no CRA)
- **Backend:** Node.js + Express (port 4000)

## Run Locally
### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment (backend/.env)
```env
ODDS_API_KEY=your_key
BETTERBETS_API_KEY=test-secret-key
CORS_ORIGINS=http://localhost:5173
```

## Notes
- Project scrubbed of Create React App scaffolding and Emergent sync artifacts.
- Keep Vite as the only frontend build system.
