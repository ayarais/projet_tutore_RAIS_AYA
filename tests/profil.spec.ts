import { test, expect } from '@playwright/test';
import { ProfilPage } from '../pages/ProfilPage';
import { performLogin } from '../utils/auth';

test.describe('Gestion du Profil', () => {
  let profilPage: ProfilPage;

  test.beforeEach(async ({ page }) => {
    profilPage = new ProfilPage(page);
    await performLogin(page); // Helper 
  });

 test('Update user profile name and verify changes', async ({ page }) => {
    // 1. Naviguer vers Profil
    await profilPage.profileMenuLink.waitFor({ state: 'visible' });
    await profilPage.profileMenuLink.click({ force: true });

    // 2. Modifier le profil
    const newLastName = 'rais';
    await profilPage.nomInput.fill(newLastName);
    await profilPage.updateBtn.click();

    // 3. Verification
    await expect(page.locator('.toast-container')).toBeVisible();
  });
});