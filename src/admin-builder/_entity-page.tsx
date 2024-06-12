import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useEffect, useState, useTransition } from 'react'
import { AdminClientEntityBuilderContainer } from './_container'
import { EntityCardProvider } from './_entity-card'
import { GetEntitiesResult } from './_types'
import { UpsertEntityFormProvider } from './upsert-entity-form'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
	({ deps: { config, action }, innerDeps: { EntityCard, UpsertEntityForm } }) => {
		return function EntityPage() {
			const [entities, setEntities] = useState<GetEntitiesResult[]>([])
			const [isLoading, startTransition] = useTransition()

			useEffect(() => {
				startTransition(async () => {
					await action({ type: 'get' }).then((res) => {
						if (res) setEntities(res)
					})
				})
			}, [])

			return (
				<div className='p-12 max-w-[1200px] mx-auto'>
					<h1 className='text-5xl font-bold mb-8'>{config.title}</h1>
					<div className='flex gap-4 mb-8'>
						<Dialog>
							<DialogTrigger asChild>
								<Button variant='outline'>Create</Button>
							</DialogTrigger>
							<DialogContent className='sm:max-w-[425px]'>
								<DialogHeader>
									<DialogTitle>Create {config.title}</DialogTitle>
								</DialogHeader>
								<UpsertEntityForm />
							</DialogContent>
						</Dialog>
					</div>

					<div className='grid grid-cols-3 gap-3'>
						{isLoading && <p>Loading...</p>}
						{entities.map((entity) => (
							<EntityCard key={entity.id} entity={entity} />
						))}
					</div>
				</div>
			)
		}
	},
	{
		EntityCard: EntityCardProvider,
		UpsertEntityForm: UpsertEntityFormProvider,
	}
)
