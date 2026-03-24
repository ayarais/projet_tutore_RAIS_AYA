import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Authentification sur OpenCruise', () => {
    
    test('REQ-AUTH-01 : Connexion avec succès', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Navigation vers l'URL de test
        await page.goto('https://opencruise-ok.sogeti-center.cloud/login');

        // 2. Action de connexion
        // # Utilisation des identifiants récupérés
        await loginPage.login('eyarayes@protonmail.com', 'Passw0rdAdmin');

        // 3. Vérification
        // # On attend que l'URL ne contienne plus "/login" ou qu'on soit sur la home
        await expect(page).not.toHaveURL(/.*login/);
    });
});