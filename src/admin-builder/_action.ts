import { AdminActionEntityBuilderContainer } from './_container'

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
	ctx => async () => {

		console.log('server component', ctx.deps.config)
	}
)