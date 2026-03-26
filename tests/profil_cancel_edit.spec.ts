import { test, expect } from '@playwright/test';
import { performLogin } from '../utils/auth';

test('Bug Report: Annuler ne réinitialise pas le champ Prénom', async ({ page }) => {
    await performLogin(page);
    await page.getByRole('button', { name: /Bienvenue/i }).click();
    await page.getByRole('button').nth(1).click();

    // 1.  On attend que le champ ne soit plus vide avant de lire la valeur
    const firstNameInput = page.getByRole('textbox', { name: "Prénom de l'utilisateur" }).first();
    await expect(firstNameInput).not.toHaveValue(""); // attendre  "Aya" apparait

    const originalValue = await firstNameInput.inputValue();
    console.log("Valeur originale détectée:", originalValue);

    // 2. Modifier le prénom
    await firstNameInput.fill('rayes');

    // 3.Annuler
    await page.getByRole('button', { name: 'Annuler' }).click();

    // 4. Navigation directe pour éviter les Toasts
    await page.goto('https://opencruise-ok.sogeti-center.cloud/profil/18582'); 

    // 5. Assertion finale: verif bug
    const valueAfterCancel = await page.getByRole('textbox', { name: "Prénom de l'utilisateur" }).first().inputValue();
    
    // Expected "Aya" , Received "rayes"
    expect(valueAfterCancel, "ERREUR: Le champ n'a pas été réinitialisé après Annuler")
        .toBe(originalValue);
});