const cartIcon = document.querySelector('.navbar-cart-icon');
const sidebarContainer = document.querySelector('.sidebar-container');
const overlay = document.querySelector('.overlay');

// ================================== SIDEBAR =================================================
// ============= OPEN SIDEBAR =============
const openSidebar = () => {
  sidebarContainer.style.transform = 'translateX(0)';
  overlay.style.display = 'block';
};
cartIcon.addEventListener('click', openSidebar);

// ============= CLOSE SIDEBAR =============
const closeSiderbar = () => {
  sidebarContainer.style.transform = 'translateX(100%)';
  overlay.style.display = 'none';
};
overlay.addEventListener('click', closeSiderbar);
