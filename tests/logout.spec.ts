import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';
import { LogoutPage } from '../pages/LogoutPage';

test('Verification de la déconnexion - Succès', async ({ page }) => {
    const logoutPage = new LogoutPage(page);

    // 1. Connexion
    await performLogin(page);

    // 2. Action de déconnexion
    await logoutPage.logout();

    // 3. Assertion: Thabbet elli rja3na lel Login page
    await expect(page).toHaveURL(/.*login/);
    
    // Check ken famma message success walla el bouton "Connexion" rja3 yban
    const loginBtn = page.getByRole('button', { name: 'Connexion' });
    await expect(loginBtn).toBeVisible();

    console.log("Déconnexion validée !");
});