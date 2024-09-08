export function convertTimeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return (hours * 3600) + (minutes * 60) + seconds;
}

export function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  }

export function formatTimeMinutes(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    return `${hours}h ${minutes}m`;
}

export function getTotalSeconds(studyHistoryList){
    const totalTime = studyHistoryList.reduce((total, session) => {
        return total + session.session_duration_minutes;
    }, 0);
    return totalTime;
}
