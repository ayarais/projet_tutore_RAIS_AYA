import { test, expect } from '@playwright/test';

test('Inscription - Succès Final Fix Password', async ({ page }) => {
    await page.goto('https://opencruise-ok.sogeti-center.cloud/register');

    // 1. Selection Particulier
    await page.locator('input[name="type"][value="1"]').check();
    const mainForm = page.locator('form').first();

    // 2. Infos de base
    await mainForm.locator('input[formcontrolname="prenom"]').fill('Aya');
    await mainForm.locator('input[formcontrolname="nom"]').fill('RAÏS');
    await mainForm.locator('input[formcontrolname="dateNaissance"]').fill('1998-05-20');
    

    await mainForm.locator('select[formcontrolname="currentPays"]').selectOption({ label: 'Maroc' });
    const villeSelect = mainForm.locator('select[formcontrolname="ville"]');
    await expect(villeSelect.locator('option')).not.toHaveCount(0);
    await villeSelect.selectOption({ label: 'Casablanca' }); 

    await mainForm.locator('input[formcontrolname="adresse"]').fill('Aix-en-Provence');
    await mainForm.locator('input[formcontrolname="codePostal"]').fill('13100');
    await mainForm.locator('input[formcontrolname="passport"]').fill('A12345678');
    await mainForm.locator('input[formcontrolname="cin"]').fill('09876543');
    
    const uniqueEmail = `aya.qa.${Date.now()}@protonmail.com`;
    await mainForm.locator('input[formcontrolname="username"]').fill(uniqueEmail);
    await mainForm.locator('input[formcontrolname="tel"]').fill('+33699001122');

    // 4. FIX DEFINITIF PASSWORD
    const pass = 'Passw0rdAdmin';
    
    // On vide puis on remplit
    await mainForm.locator('#user_password').fill('');
    await mainForm.locator('#user_password').fill(pass);
    
    await mainForm.locator('#user_password_confirm').fill('');
    await mainForm.locator('#user_password_confirm').fill(pass);

    // On clique ailleurs pour forcer le script de validation à s'exécuter
    await mainForm.locator('input[formcontrolname="prenom"]').click();

    // 5. Attente de la disparition de l'erreur rouge
    await page.waitForTimeout(1000); 

    // 6. Validation
    const submitBtn = mainForm.getByRole('button', { name: 'Créer votre compte' });
    await submitBtn.click();

    // 7. Assertion finale: Redirection Login
    await expect(page).toHaveURL(/.*login/, { timeout: 10000 });
});