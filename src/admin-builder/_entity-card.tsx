import { AdminClientEntityBuilderContainer } from './_container'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GetEntitiesResult } from './_types'
import { Button } from '@/components/ui/button'


export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
	({deps: {config, action}}) => {
		return function EntityCard({entity}: {
			entity: GetEntitiesResult
		}) {
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
								<div key={key}>{key}: {String(value)}</div>
							)
						})}
					</CardContent>
					<CardFooter className='justify-end gap-3'>
						<Button>Edit</Button>
						<Button variant='destructive'>Delete</Button>
					</CardFooter>
				</Card>
			)
		}
	}
)
