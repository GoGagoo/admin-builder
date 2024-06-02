import { createModule } from 'tiny-invert'
import { AdminEntityBuilderContainer } from './_container'
import { EntityPageProvider } from './entity_provider'

export type { AdminBuilderField, AdminEntityConfig } from './_types.ts'

const EntryProvider = AdminEntityBuilderContainer.provider(ctx => ctx.innerDeps, {
	EntityPage: EntityPageProvider
})

export const EntityBuilder = createModule(EntryProvider)