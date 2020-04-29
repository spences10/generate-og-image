import { IncomingMessage, ServerResponse } from 'http'
import { writeTempFile } from './file'
import { parseReqs } from './parser'
import { getHtml } from './template'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const parsedReqs = parseReqs(req)
    const html = getHtml(parsedReqs)

    const { title, author } = parsedReqs
    const filename = [title, author].join('-')
    const filePath = await writeTempFile(filename, html)
    const fileUrl = `file://${filePath}`

    console.log('=====================')
    console.log(fileUrl)
    console.log('=====================')

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, an error. I derp!</p>')
    console.log(e)
  }
}
