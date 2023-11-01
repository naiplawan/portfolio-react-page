import { Button } from "antd";

export default function Contact() {
  return (
    <>
    <div className="flex flex-col m-5"> 
    <div className="text-gray-700 mt-1 dark:text-white-80 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </div>
    
      <form className="mt-5 flex flex-col dark:text-black">

        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex justify-center"> 
        <Button
          className="mt-4 w-full sm:w-1/2 sm:ml-2 items-center justify-center bg-black text-white rounded-lg h-14 hover:bg-gray-700 transition-all"
          type="submit"
        >
          Send
        </Button>
        </div>
    </form>
    </div>
    </>
  )
}

