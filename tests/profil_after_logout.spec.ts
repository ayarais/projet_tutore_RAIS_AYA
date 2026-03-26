import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Authentification - Déconnexion', async ({ page }) => {
    // 1. Connexion automatique
    await performLogin(page);

    // 2. Cliquer sur le menu utilisateur (Bienvenue...)
    const userMenu = page.getByRole('button', { name: /Bienvenue/i });
    await userMenu.click();

    // 3. Cliquer sur Se déconnecter
    await page.getByRole('button', { name: 'Se déconnecter' }).click();

    // 4. Vérifier la redirection vers la page de login
    await expect(page).toHaveURL(/.*login/);

    // 5. verofoer si bouton Connexion est displayed (preuve de déconnexion)
    await expect(page.getByRole('button', { name: 'Connexion' })).toBeVisible();

    console.log("Test Logout: Success!");
});