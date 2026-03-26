import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Mot de passe - Cas non identique', async ({ page }) => {
    // 1. Connexion et navigation
    await performLogin(page);
    await page.getByRole('button').nth(1).click();
    await page.getByRole('link', { name: /Modifier votre mot de passe/i }).click();

    // 2.  Saisir deux mots de passe différents
    await page.locator('#user_password').fill('Passw0rdAdmin');
    await page.locator('input[formcontrolname="confirmPassword"]').fill('Passw0rdAdmi'); 

    // 3. Cliquer sur Enregistrer
    await page.getByRole('button', { name: 'Enregistrer' }).click();

    // 4. verifier les deux messages d'erreur en rouge
    const errorMsg = page.getByText(/les mots de passe doivent être identiques/i);
    await expect(errorMsg).toBeVisible({ timeout: 10000 });

    // 5. Annuler pour fermer proprement
    await page.locator('.modal-content').getByRole('button', { name: 'Annuler' }).click();

    console.log("Test Passed: Erreur de correspondance validée.");
});