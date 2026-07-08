import { useState } from 'react'

export default function Input({ icon: Icon, type, placeholder }) {
  const [focus, setFocus] = useState(false)

  return (
    <div className='relative'>
      <Icon
        size='18'
        stroke='currentColor'
        className={`absolute left-2 top-1/2 -translate-y-1/2 ${focus ? 'text-primary-end' : 'text-gray-400'} transition-colors duration-400`}
      ></Icon>
      <input
        className=' pl-8 placeholder:text-gray-400 border-0 border-b border-gray-400 outline-none px-1 py-0 bg-transparent focus:border-primary-end transition-colors duration-400'
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}
