import { EntityServerBuilder } from '@/admin-builder/server'
import { dbClient } from '@/shared/db-client'
import { entityConfig } from './config'

export const UserEntityServer = EntityServerBuilder.init({
	config: entityConfig,
	dbClient,
})