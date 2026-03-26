import { test, expect } from '@playwright/test';

test('Sécurité - Accès interdit sans authentification', async ({ page }) => {
    // 1. Action: Jarreb todkhel lel profil direct (Sans faire de Login)
    // Nesta3mlou URL mta3 profil mawjoud kima elli f'el tsawer mte3ek
    const profileUrl = 'https://opencruise-ok.sogeti-center.cloud/profil/18582';
    await page.goto(profileUrl);

    // 2. Assertion: El site lezem ya3mel "Redirect" automatique lel Login
    // Ma3neha el URL mta3 el page lezem twalli fiha kelmet "login"
    await expect(page).toHaveURL(/.*login/);

    // 3. Verification: Thabbet elli el form mta3 el login dhoher
    const loginButton = page.getByRole('button', { name: 'Connexion' });
    await expect(loginButton).toBeVisible();

    // 4. Verification supplementaire: Thabbet elli el xomponents mta3 el profil ma thomch
    // El label "Nom" walla "Prénom" mta3 el profil lezem may'kounouch visible
    const profileName = page.locator('text=Nom');
    await expect(profileName).not.toBeVisible();

    console.log("Test Sécurité: Accès bloqué et redirection vers Login validée.");
});