import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Authentification - Déconnexion', async ({ page }) => {
    // 1. Connexion automatique
    await performLogin(page);

    // 2. Action: Cliquer sur le menu utilisateur (Bienvenue...)
    // Nesta3mlou Regex bech ken tbadal el esm yabda dima s7i7
    const userMenu = page.getByRole('button', { name: /Bienvenue/i });
    await userMenu.click();

    // 3. Action: Cliquer sur Se déconnecter
    // Kima l9itha enti f'el code mte3ek
    await page.getByRole('button', { name: 'Se déconnecter' }).click();

    // 4. Assertion: Vérifier la redirection vers la page de login
    // Hedhi el faza el QA el s7i7a: thabbet el URL
    await expect(page).toHaveURL(/.*login/);

    // 5. Verification: Thabbet elli el bouton Connexion rja3 (preuve de déconnexion)
    await expect(page.getByRole('button', { name: 'Connexion' })).toBeVisible();

    console.log("Test Logout: Success!");
});