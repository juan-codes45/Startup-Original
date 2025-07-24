

/*Code to automate changing of the year*/

document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} My Theme. Design By <a href="index.html">Developer Juan</a>. All Rights Reserved.`;

// Interactivity for service cards
function addServiceCardInteractivity() {
  const cards = document.querySelectorAll('.wpo-features-item');
  cards.forEach(card => {
    // Tooltip text from data-tooltip or fallback
    const tooltipText = card.querySelector('.wpo-features-text h2')?.textContent + ': ' + (card.querySelector('.wpo-features-text p')?.textContent || '');
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'service-tooltip';
    tooltip.textContent = tooltipText;
    tooltip.style.display = 'none';
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = '1000';
    tooltip.style.background = '#22223b';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '8px 16px';
    tooltip.style.borderRadius = '8px';
    tooltip.style.fontSize = '0.98rem';
    tooltip.style.boxShadow = '0 2px 12px rgba(30,144,255,0.13)';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.transition = 'opacity 0.2s';
    document.body.appendChild(tooltip);

    // Animate card on hover/focus
    function showTooltip(e) {
      card.style.transform = 'scale(1.045)';
      card.style.boxShadow = '0 8px 32px rgba(30,144,255,0.18)';
      tooltip.style.display = 'block';
      tooltip.style.opacity = '1';
      // Position tooltip near mouse or card
      const rect = card.getBoundingClientRect();
      tooltip.style.left = (rect.left + window.scrollX + rect.width/2 - tooltip.offsetWidth/2) + 'px';
      tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 12) + 'px';
    }
    function hideTooltip() {
      card.style.transform = '';
      card.style.boxShadow = '';
      tooltip.style.display = 'none';
      tooltip.style.opacity = '0';
    }
    card.addEventListener('mouseenter', showTooltip);
    card.addEventListener('mouseleave', hideTooltip);
    card.addEventListener('focus', showTooltip);
    card.addEventListener('blur', hideTooltip);
    // For keyboard accessibility
    card.setAttribute('tabindex', '0');
  });
}

document.addEventListener('DOMContentLoaded', addServiceCardInteractivity);