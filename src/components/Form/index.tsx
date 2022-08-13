interface FormProps {
  getWeather: (x: any) => void
  loading: boolean
}

const Form = ({ getWeather, loading }: FormProps) => (
  <form
    onSubmit={getWeather}
    className="mt-4 w-full flex flex-col items-center"
  >
    <input
      type="text"
      name="cityInput"
      placeholder="Your City Name"
      className="border rounded-md py-2 px-4 w-5/6 mt-2 outline-none focus:border-sky-300"
    />
    <button
      className="disabled:opacity-75 bg-sky-300 rounded-md py-2 px-4 w-5/6 mt-2"
      disabled={loading}
    >
      Search
    </button>
  </form>
)

export default Form
