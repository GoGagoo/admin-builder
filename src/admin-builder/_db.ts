import { EntitySchemaProvider } from './_entity-schema';
import { drizzle } from 'drizzle-orm/postgres-js'
import { AdminEntityBuilderContainer } from './_container'


export const DbProvider = AdminEntityBuilderContainer.provider(ctx => {
	const db = drizzle(ctx.deps.dbClient, {
		schema: {
			entitySchema: ctx.innerDeps.entitySchema
		},
	})

		return db
	},
	{
		entitySchema: EntitySchemaProvider
	}
)