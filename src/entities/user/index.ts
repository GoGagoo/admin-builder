import { EntityBuilder } from '@/admin-builder/entity-builder'
import { dbClient } from '@/shared/db-client'
import { entityConfig } from './config'

export const UserEntity = EntityBuilder.init({
	config: entityConfig,
	dbClient
})