import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Profil - Vider les champs et attendre le message', async ({ page }) => {
    await performLogin(page);
    await page.getByRole('button').nth(1).click();

    // 1. Vider les champs avec le Keyboard pour trigger l'erreur Angular
    const inputs = [
        page.getByRole('textbox', { name: /Email/i }),
        page.getByRole('textbox', { name: /Prénom/i }).first(),
        page.getByRole('textbox', { name: /Nom/i }).first()
    ];

    for (const input of inputs) {
        await input.click();
        await page.keyboard.press('Control+A');
        await page.keyboard.press('Backspace');
        await input.blur(); //  pour que le message d'erreur apparaisse
    }

    // 2. Action: Cliquer sur Mettre à jour 
    // On utilise force: true au cas où le bouton est grisé (disabled) par Angular
    await page.getByRole('button', { name: 'Mettre à jour' }).click({ force: true });

    // 3. Assertion: Attendre le message d'erreur (Toast ou Texte rouge)
    // On utilise un timeout de 10s pour contrer la latence du site
    const errorMsg = page.getByText(/merci de saisir/i).first();
    await expect(errorMsg).toBeVisible({ timeout: 10000 });

    // 4. Finir proprement
    await page.getByRole('button', { name: 'Annuler' }).click();
    
    console.log("Test Passed: Messages d'erreur détectés avec succès.");
});