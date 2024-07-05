
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [ctc, setCTC] = useState()
 const [band, setBand] = useState()
 const [message, setMessage] = useState('');
 const [success, setSuccess] = useState(false)

 const handleSubmit = (e) => {
  e.preventDefault()
  const currentTarget = e.currentTarget
  const totalCtc = currentTarget.elements.totalCtc.value
  const variable = currentTarget.elements.variable.value 
  
  let ctcInLakhs = totalCtc * 100000
  let fixedCTC = ctcInLakhs * 0.9
  let bandCheck = fixedCTC * (variable/100)
  console.log(fixedCTC, bandCheck)
  setCTC(fixedCTC)
  setBand(bandCheck)
  setSuccess(true)
  currentTarget.elements.totalCtc.value = ""
  currentTarget.elements.variable.value = ""
 }

useEffect(() => {
  success && setMessage(`Fixed CTC: ${ctc} Band: ${band}`)
}, [success, band, ctc])

  return (

          <form className="mt-8 space-y-6 mx-auto max-w-[500px]" onSubmit={handleSubmit}>
              <h2 className='text-xl font-serif'>Incentive Calc</h2>
              {message && 
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
      {message}
    </div>}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  name="totalCtc"
                  type='number'
                  step="0.01" min="0" max="100"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter CTC"
                />
              </div>
              <div>
                <input
                  id="variable"
                  name="variable"
                  type="number"
                   step="0.01" min="0" max="10"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Variable Percentage"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>



  )
}

export default App
