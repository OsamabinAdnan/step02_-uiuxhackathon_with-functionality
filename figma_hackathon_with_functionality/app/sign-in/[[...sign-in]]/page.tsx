import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <>
    <div className='flex justify-center items-center sm:h-screen h-full py-10'>
        <SignIn />
    </div>
  </>
  )
}