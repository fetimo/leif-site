import { SvelteKitAuth } from "@auth/sveltekit";
import Keycloak from "@auth/core/providers/keycloak";
import { KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET, KEYCLOAK_ISSUER } from "$env/static/private";

export const handle = SvelteKitAuth({
    providers: [Keycloak({
        clientId: KEYCLOAK_CLIENT_ID,
        clientSecret: KEYCLOAK_CLIENT_SECRET,
        issuer: KEYCLOAK_ISSUER,
    })],
});

