import { EntityBuilder } from '@/admin-builder/entity-builder'
import { entityConfig } from './config'
import { EntitySchemaBuilder } from '@/admin-builder/entity-schema-builder'

export const UserSchemaEntity = EntitySchemaBuilder.init({
	config: entityConfig
})