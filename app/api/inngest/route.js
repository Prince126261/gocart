import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client.js";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inngest/functions.js";

export const { GET, POST, PUT } = serve({
            client: inngest,
            functions: [
                        syncUserUpdation,
                        syncUserCreation,
                        syncUserDeletion
            ],
});
