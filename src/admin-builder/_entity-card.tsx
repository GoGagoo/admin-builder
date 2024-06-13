import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useTransition } from 'react'
import { AdminClientEntityBuilderContainer } from './_container'
import { GetEntitiesResult } from './_types'

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
	({ deps: { config, action } }) => {
		return function EntityCard({
			entity,
			onDelete,
		}: {
			entity: GetEntitiesResult
			onDelete?: () => void
		}) {
			const [isLoading, startTransition] = useTransition()

			return (
				<Card>
					<CardHeader>
						<CardTitle>ID: {entity.id}</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						{Object.entries(entity).map(([key, value]) => {
							if (!config.fields.find((field) => field.name === key)) {
								return null
							}

							return (
								<div key={key}>
									{key}: {String(value)}
								</div>
							)
						})}
					</CardContent>
					<CardFooter className='justify-end gap-3'>
						<Button>Edit</Button>
						<Button
							variant='destructive'
							onClick={() => startTransition(async () => {
								await action({ type: 'delete', id: entity.id })
								onDelete?.()
							})}
						>
							Delete
						</Button>
					</CardFooter>
				</Card>
			)
		}
	}
)
