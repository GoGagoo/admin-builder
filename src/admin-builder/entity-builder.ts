import { createModule } from 'tiny-invert'
import { AdminEntityBuilderContainer } from './_container'
import { EntityPageProvider } from './_entity_provider'


const EntryProvider = AdminEntityBuilderContainer.provider(cts => cts.innerDeps, {
	EntityPage: EntityPageProvider
})

export const EntityBuild = createModule(EntryProvider)