import { NextResponse } from 'next/server'

/**
 * Sample GET request handler
 */
export async function GET() {
  const data = { message: 'Hello from the API!' }

  return NextResponse.json({ data })
}

/**
 * Sample POST request handler
 */
export async function POST(request: Request) {
  const res = await request.json()

  console.log('res is', res)

  return NextResponse.json({ success: true })
}
