import { Button } from '@/components/ui/button'
import { EntityCardProvider } from './_entity-card'
import { AdminClientEntityBuilderContainer } from './_container'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
	({ deps: { config, action }, innerDeps: { EntityCard } }) => {
		return function EntityPage() {
			return (
				<div className='p-12 max-w-[1200px] mx-auto'>
					<h1 className='text-5xl font-bold mb-8'>{config.title}</h1>
					<div className='flex gap-4 mb-8'>
						<Button
							onClick={() => {
								action()
							}}
						>
							Create
						</Button>
					</div>

					<div className='grid grid-cols-3'>
						<EntityCard />
					</div>
				</div>
			)
		}
	},
	{
		EntityCard: EntityCardProvider,
	}
)
