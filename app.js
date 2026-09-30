for (const link of document.querySelectorAll('[data-equipment]')) {
  link.addEventListener('click', () => {
    const equipment = link.dataset.equipment;
    document.getElementById('selected-equipment').textContent = equipment + ' service';
    document.getElementById('selection-status').textContent = 'Equipment selected: ' + equipment + '.';
  });
}
