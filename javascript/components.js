// initializing materialize ui components

export async function initializeUIComponents() {
  document.addEventListener('DOMContentLoaded', async function () {
    const sidenav = document.querySelectorAll('.sidenav');
    await M.Sidenav.init(sidenav);
  });
}