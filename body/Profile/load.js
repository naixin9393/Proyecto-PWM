import { loadTemplate, replaceBody } from "/loadingFunctions.js";

export async function loadProfileBody() {
    let profile = await loadTemplate('./body/Profile/profile.html');
    replaceBody(profile);
}