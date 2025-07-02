// ---- Configurable Data ---- //
const livesSaved = 91000000; // 91 million
const childrenSaved = 30000000; // 30 million
const startYear = 2001;
const endYear = 2021;

// Calculate the total number of seconds in the time period
const totalSeconds = (endYear - startYear + 1) * 365.25 * 24 * 60 * 60;

// Per-second rates
const livesSavedPerSecond = livesSaved / totalSeconds;
const childrenSavedPerSecond = childrenSaved / totalSeconds;

// Set the start timestamp (Jan 1, 2001 UTC)
const startTimestamp = new Date(`${startYear}-01-01T00:00:00Z`).getTime();

// Function to update counters
function updateCounters() {
  const now = Date.now();
  const elapsedSeconds = (now - startTimestamp) / 1000;
  document.getElementById('livesSaved').textContent = Math.floor(elapsedSeconds * livesSavedPerSecond).toLocaleString();
  document.getElementById('childrenSaved').textContent = Math.floor(elapsedSeconds * childrenSavedPerSecond).toLocaleString();
}

// Update every second
updateCounters();
setInterval(updateCounters, 1000);
