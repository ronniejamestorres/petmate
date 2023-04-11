import React from 'react'

function CarouselComponent() {
  return (
    <div className='bg-beige1 h-full-screen'>
      <h1 className='flex justify-center pt-8 pb-6 font-bold bg-beige1 text-lg text-brown lg:text-2xl'>G a l l e r y</h1>
      <div className="relative flex items-center justify-center w-full">
	
	<div className="flex items-center justify-start rounded-full w-2/3  h-64 gap-8 py-4 mx-auto overflow-auto md:rounded-lg md:w-2/3 md:h-80 lg:gap-8 lg:w-1/2 lg:h-full lg:rounded-lg">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-80 aspect-square" src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-80 aspect-square " src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-80 aspect-square " src="https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Image 3" />
		</div>
    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-80 aspect-square " src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Image 1" />
		</div>
    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-80 aspect-square " src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Image 2" />
		</div>

	
		
	</div>
	
</div>
    </div>
  )
}

export default CarouselComponent