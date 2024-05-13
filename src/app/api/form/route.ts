import ConnectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";
import Form from '@/models/Form';


export const POST = async (request : NextRequest) => {
    // TODO: Add new form data

    try {
        const data = await request.json();3
        await ConnectDB();
        await Form.create(data);
        return NextResponse.json({ message: "Form Created"}, { status: 201 });


    } catch (error) {
        return NextResponse.json({ message: "Form Cannot Created",error}, { status: 401 });

    }
}


export const GET = async () => {
    // TODO: Get all forms data from database

    try {
        await ConnectDB();
        const forms = await Form.find({isActive: true});
        return NextResponse.json({ forms }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Forms Cannot be fetched"}, { status: 401 });

    }
}