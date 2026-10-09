(() => {
  const prefix = 'saylo.pages.v1.';
  let history = [];
  try {
    localStorage.removeItem(prefix + 'key');
    localStorage.removeItem(prefix + 'model');
    const stored = JSON.parse(localStorage.getItem(prefix + 'history') || '[]');
    if (Array.isArray(stored)) history = stored.slice(0, 30);
    document.getElementById('migration-status').textContent = 'Google key setup has been removed. Your new translator uses Manus.';
  } catch {
    document.getElementById('migration-status').textContent = 'Browser storage is unavailable. Open Saylo to continue.';
  }
  document.getElementById('backup-section').hidden = !history.length;
  document.getElementById('export').onclick = () => {
    const value = JSON.stringify({ format: 'saylo-local-backup-v1', history }, null, 2);
    const url = URL.createObjectURL(new Blob([value], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = 'saylo-history-backup.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.getElementById('export-status').textContent = 'Backup downloaded. Open Saylo, then import it in Settings.';
  };
})();
