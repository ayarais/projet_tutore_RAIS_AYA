import { Page, Locator } from '@playwright/test';

export class ProfilPage {
    readonly page: Page;
    readonly nomInput: Locator;
    readonly prenomInput: Locator;
    readonly updateBtn: Locator;
    readonly userMenuBtn: Locator;
    readonly profileMenuLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // D'après el HTML: formcontrolname="nom" w "prenom"
        this.nomInput = page.locator('input[formcontrolname="nom"]');
        this.prenomInput = page.locator('input[formcontrolname="prenom"]');
        this.updateBtn = page.getByRole('button', { name: 'Mettre à jour' });
        
        // Selector lel menu dropdown (Bienvenue...)
        this.userMenuBtn = page.locator('#dropdownMenu2');
        //  bouton profil dans dropdown (nth(1) code )
       // target  button SVG direct
this.profileMenuLink = page.locator('button.btn.ng-star-inserted').filter({ has: page.locator('svg') });
    }

    async updateProfileInfo(firstname: string, lastname: string) {
        await this.prenomInput.fill(firstname);
        await this.nomInput.fill(lastname);
        await this.updateBtn.click();
    }
}