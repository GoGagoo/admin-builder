import { Sql } from 'postgres'
import { createContainer, mergeContainers } from 'tiny-invert'
import { AdminBuilderAction, AdminEntityConfig } from './_types'

export const DbClientContainer = createContainer<{
	dbClient: Sql
}>()

export const ConfigContainer = createContainer<{
	config: AdminEntityConfig
}>()


export const AdminDbEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer
])

export const AdminServerEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer
])

export const AdminActionEntityBuilderContainer = mergeContainers([
	DbClientContainer,
	ConfigContainer
]).extend<{
	client: {
		CreateEntityForm: () => JSX.Element
	}
}>('AdminActionEntityBuilderContainer')

export const AdminClientEntityBuilderContainer = mergeContainers([
	ConfigContainer
]).extend<{
	action: AdminBuilderAction
}>('AdminClientEntityBuilderContainer')