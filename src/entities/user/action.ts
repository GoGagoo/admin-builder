'use server'
import { EntityActionBuilder } from '@/admin-builder/action'
import { dbClient } from '@/shared/db-client'
import { entityConfig } from './config'

export const userAction = EntityActionBuilder.init({
	config: entityConfig,
	dbClient
})