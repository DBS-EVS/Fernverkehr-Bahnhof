var currentPopup = undefined;
var isCoWebSiteOpened =  false;

export function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

/**
 * @param {String} popUpName
 * @param {String} msg
 * @param {String} label
 */
export function openPopUpOkOnly(popUpName, msg, label) {
    currentPopup = WA.ui.openPopup(popUpName, msg, [
        {
            label: label,
            callback: (popup => {
                closePopUp();
            })
        }]);
}

/**
 * @param {String} popUpName
 * @param {String} msg
 * @param {String} websiteUrl
 */
export function openPopupWithWebsiteYesNo(popUpName, msg, websiteUrl) {
    currentPopup = WA.ui.openPopup(popUpName, msg, [
        {
            label: "Nein",
            callback: (popup => {
                closePopUp();
            })
        },
        {
            label: "Ja",
            callback: (popup => {
                WA.nav.openTab(websiteUrl);
                closePopUp();
            })
        }
    ]);
}

export function closePopupWithWebsite() {
    closePopUp();
}