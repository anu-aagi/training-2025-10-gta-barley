<script src="https://cdn.jsdelivr.net/npm/mermaid@11.6.0/dist/mermaid.min.js"></script>
<script> 
function refreshTime() {
  var timeDisplay = document.getElementById("mel-local-time");
  var timeString = new Date().toLocaleTimeString("en-US", {timeZone: "Australia/Melbourne"});
  timeDisplay.innerHTML = timeString;
}

setInterval(refreshTime, 1000);
</script>

<script>
function updateAncestor(el) {
  const ancestor = el.closest('.cell-output.cell-output-display');
  if (!ancestor) return;

  // Only check the form's own display
  const formDisplay = getComputedStyle(el).display;
  const formHidden = formDisplay === 'none';

  ancestor.style.display = formHidden ? 'none' : 'inline-block';
}

// Continuous monitoring
setInterval(() => {
  document.querySelectorAll('.oi-3a86ea').forEach(updateAncestor);
}, 500);



</script>