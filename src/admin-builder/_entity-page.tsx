import { Button } from '@/components/ui/button'
import { AdminClientEntityBuilderContainer } from './_container'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
	({ deps: { config, action } }) => {
		return function EntityPage() {
			return (
				<div className='p-5'>
					<h1>{config.title}</h1>
					<div className='flex gap-4'></div>
					<Button
						onClick={() => {
							action()
						}}
					>
						Create
					</Button>

					<div>
						{config.fields.map((field) => {
							return (
								<div key={field.name}>
									{field.type}: {field.name}
								</div>
							)
						})}
					</div>
				</div>
			)
		}
	}
)
