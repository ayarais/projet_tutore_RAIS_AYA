import { test, expect } from '@playwright/test';

test('Sécurité - Accès interdit sans authentification', async ({ page }) => {
    // 1. acces direct au profil (Sans faire de Login)
    // utilisation url profil directement
    const profileUrl = 'https://opencruise-ok.sogeti-center.cloud/profil/18582';
    await page.goto(profileUrl);

    // 2. site doit faire "Redirect" automatique au Login
    await expect(page).toHaveURL(/.*login/);

    // 3. Verification le form de login displayed
    const loginButton = page.getByRole('button', { name: 'Connexion' });
    await expect(loginButton).toBeVisible();

    // 4. Verification si xomponents du profil sont pas là
    //  label "Nom" de profil n'est visible
    const profileName = page.locator('text=Nom');
    await expect(profileName).not.toBeVisible();

    console.log("Test Sécurité: Accès bloqué et redirection vers Login validée.");
});