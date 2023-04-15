import CardAdmin from '../components/CardAdmin'
import {HiViewGridAdd} from 'react-icons/hi'
import { FaList } from 'react-icons/fa'

function Admin() {
  return (
    <>
      <section className='py-14 max-w-[2400px]'>
        <div className="text-2xl text-center font-semibold text-title-color">Administrator Area</div>
        <section className='mt-8 flex flex-col gap-4 items-center lg:flex-row lg:gap-8 lg:justify-center'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <CardAdmin title="Add New Healthy Facility" link={'add-facility'} icon={<HiViewGridAdd/>} icon_bg={'bg-dark'} action={'Click to create new entry'}/>
            <CardAdmin title="List all Healthy Facility" link={'list-facility'} icon={<FaList/>} icon_bg={'bg-dark'} action={'Click to edit or delete'}/>
          </div>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <CardAdmin title="Add new sample" link={'add-sample'} icon={<HiViewGridAdd />} icon_bg={'bg-dark'} action={'Click to create new entry'}/>
            <CardAdmin title="List all sample" link={'list-sample'} icon={<FaList/>} icon_bg={'bg-dark'} action={'Click to edit or delete'}/>
          </div>
        </section>
      </section>
    </>
  )
}

export default Admin