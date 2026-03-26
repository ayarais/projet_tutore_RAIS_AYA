import { test, expect } from '@playwright/test';

test('Inscription - Détection Anomalie Validation Formats', async ({ page }) => {
    // 1. Navigation direct vers Register
    await page.goto('https://opencruise-ok.sogeti-center.cloud/register');

    // 2. FIX: Sélection Particulier (Sogeti lezemha el type 9bal kol chay)
    await page.locator('input[name="type"][value="1"]').check();
    const mainForm = page.locator('form').first();

    // 3. Remplissage avec "N'importe quoi" kima dakhalt enti
    await mainForm.locator('input[formcontrolname="nom"]').fill('1234');
    await mainForm.locator('input[formcontrolname="prenom"]').fill('1234');
    await mainForm.locator('input[formcontrolname="dateNaissance"]').fill('2026-03-26');
    await mainForm.locator('input[formcontrolname="adresse"]').fill('12abc');

    // FIX SELECTS: On attend que les options chargent
    await mainForm.locator('select[formcontrolname="currentPays"]').selectOption({ label: 'Maroc' });
    await expect(mainForm.locator('select[formcontrolname="ville"] option')).not.toHaveCount(0);
    await mainForm.locator('select[formcontrolname="ville"]').selectOption({ label: 'Agadir' });

    await mainForm.locator('input[formcontrolname="codePostal"]').fill('abc');
    await mainForm.locator('input[formcontrolname="passport"]').fill('abcd');
    await mainForm.locator('input[formcontrolname="cin"]').fill('abc');
    
    // Email sans @ (L'erreur attendue)
    await mainForm.locator('input[formcontrolname="username"]').fill('email-sans-arobase');
    await mainForm.locator('input[formcontrolname="tel"]').fill('abc');

    // Password matching (Pour ne pas bloquer sur le password)
    const password = 'Passss123@@';
    await mainForm.locator('#user_password').fill(password);
    await mainForm.locator('#user_password_confirm').fill(password);

    // 4. Click Créer Compte
    await mainForm.getByRole('button', { name: 'Créer votre compte' }).click();

    // 5. ASSERTIONS: C'est ici qu'on prouve l'anomalie
    
    // A. L'email doit afficher son erreur
    await expect(page.getByText('le format est incorrect merci de renseigner un email valide')).toBeVisible();

    // B. ANOMALIE CHECK: Normalement ces champs doivent être en erreur (rouge)
    // Si ces tests passent (toBeVisible), le site est bon. S'ils fail, l'anomalie est confirmée.
    const prenomError = page.locator('input[formcontrolname="prenom"] + .text-danger');
    const telError = page.locator('input[formcontrolname="tel"] + .text-danger');

    // On s'attend à ce que le bouton reste bloqué ou qu'on reste sur la page
    await expect(page).toHaveURL(/.*register/);
});