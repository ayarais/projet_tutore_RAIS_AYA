import { test, expect } from '@playwright/test';

test('Inscription - Validation Erreurs Champs Vides', async ({ page }) => {
    // 1. Navigation
    await page.goto('https://opencruise-ok.sogeti-center.cloud/register');

    // 2. Interaction: On entre et on sort des champs pour déclencher la validation
    const mainForm = page.locator('form').first();
    
    // On focus puis blur sur un champ obligatoire pour forcer l'affichage du rouge
    await mainForm.locator('input[formcontrolname="prenom"]').focus();
    await mainForm.locator('input[formcontrolname="nom"]').focus(); // Le focus sur le 2ème fait le blur sur le 1er
    await mainForm.locator('input[formcontrolname="prenom"]').focus(); // On revient pour être sûr

    // 3. Click sur le bouton pour forcer la validation globale
    const submitBtn = mainForm.getByRole('button', { name: 'Créer votre compte' });
    await submitBtn.click();

    // 4. On attend que le message d'erreur apparaisse (le sélecteur peut varier selon le site)
    const errorMsg = page.getByText('merci de saisir', { exact: false }).first();
    
    // On utilise un timeout plus long car l'apparition peut être lente
    await expect(errorMsg).toBeVisible({ timeout: 7000 });

    // 5. verif si bouton "Créer" n est pas  enabled 
    // verif si tjrs sur la page register
    await expect(page).toHaveURL(/.*register/);
});