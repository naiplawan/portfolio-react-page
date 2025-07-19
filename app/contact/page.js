'use client'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import NavBar from '../../components/portfolio/NavBar'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const form = useRef()
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_3wygx3u',
        'template_p6wyyhb',
        {
          senderEmail,
          message,
        },
        'BG8fz_8Cxun8YIhHv'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center m-10 pr-4 pl-4 md:pr-20 md:pl-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Image src="/assets/8690678_3969584.svg" alt="Contact" width={500} height={400} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto w-full"
        >
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Get In Touch</CardTitle>
              <p className="text-gray-700 dark:text-gray-300">
                Please contact me directly at{' '}
                <a className="underline hover:text-blue-600 transition-colors" href="mailto:rachaphol.plo@gmail.com">
                  rachaphol.plo@gmail.com
                </a>{' '}
                or through this form.
              </p>
            </CardHeader>
            <CardContent>
              <form ref={form} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    name="senderEmail"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                    maxLength={500}
                    placeholder="Your email"
                    className="h-12"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[150px] resize-none"
                  />
                </motion.div>
                
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full sm:w-1/2 h-12 text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  )
}