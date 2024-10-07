
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const aiOutput = pgTable('AiOutput', {
    id: serial('id').primaryKey(),
    formData:varchar('formData'),
    AIResponse:text('AIRespone'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')
});
