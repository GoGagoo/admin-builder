import { createModule } from 'tiny-invert'
import { AdminEntityBuilderContainer } from './_container'
import { EntityPageProvider } from './_entity-page'

export type { AdminBuilderField, AdminEntityConfig } from './_types.ts'

const EntryProvider = AdminEntityBuilderContainer.provider(ctx => ctx.innerDeps, {
	EntityPage: EntityPageProvider
})

export const EntityBuilder = createModule(EntryProvider)