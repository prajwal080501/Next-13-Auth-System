import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connect();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);
    } catch (error: any) {
        NextResponse.json(
            {
                message: error.message,
                status: 500
            }
        )
    }
}