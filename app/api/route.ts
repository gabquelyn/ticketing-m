import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}

export async function POST(request: Request) {


    const params = await request.json();
  
    const response = await fetch('https://dirjxtnu6e.execute-api.ap-southeast-1.amazonaws.com/test/api ', {
        method: 'POST', // Specify the method
        headers: {
        'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(params), // Convert the data to JSON string
    });

    // Check if the request was successful
    const responseData = await response.json();

    if (response.ok) {
        console.log('Response data:', responseData);
    } else {
        console.error('Request failed with status:', response.status);
    }

    return NextResponse.json(responseData);

  }