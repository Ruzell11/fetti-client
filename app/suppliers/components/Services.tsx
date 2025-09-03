import Image from 'next/image';

// Define props type
type ServicesProps = {
  view: string;
};

const Services: React.FC<ServicesProps> = ({ view }) => {
  return (
    <>
      {/* Right Content */}
      <div className="flex-1">
        {view === "table" ? (
          <div className="grid grid-cols-4 gap-4">
            {/* Example Service 1 */}
            <div className="flex flex-col items-start gap-5 flex-1 cursor-pointer border rounded-md overflow-hidden">
              <Image
                src="/images/cake.png"
                alt="Event Planner"
                width={200}
                height={400}
                className="w-full h-100 object-cover"
              />
              <div className="px-3 pb-3">
                <h4 className="font-medium">Cake</h4>
                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>



          </div>


        ) : (
          <div className="grid grid-cols-2 gap-4">
            {/* Example Service 1 */}
            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Cake</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>

            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Flower</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>

            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Flower</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>

            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Flower</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>


            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Flower</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>

            <div className="flex p-2 items-center gap-5 flex-1 border-b-1 cursor-pointer">

              <Image
                src="/images/event-planner.png"
                alt="Event Planner"
                width={60}
                height={60}
                className="h-15 w-15 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">Flower</h4>

                <p className="text-sm text-gray-600">12 items</p>
              </div>
            </div>


          </div>


        )}
      </div>

    </>
  )
}

export default Services;