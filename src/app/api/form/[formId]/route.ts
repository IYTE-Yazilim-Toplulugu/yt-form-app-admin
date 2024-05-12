import ConnectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";
import Form from '@/models/Form';

export const GET = async (request:NextRequest) => {
    // TODO: Get the form data by given formId from the url

    try {
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const form = await Form.findById(id);
        return NextResponse.json({ form }, { status: 200 });

    } catch (error) {
        
        return NextResponse.json({message: "Form Cannot be fetched"}, { status: 401 })
    }
}

export const UPDATE = async (request : NextRequest) => {
    // TODO: Update the form data by given formId from the url and given request data
    //const { } = request.json();

    try {
        const data = request.json();
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const form = await Form.updateOne({ _id: id }, { data });
        return NextResponse.json({ form, id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Form Cannot be updated"}, { status: 401 })
    }
}

export const DELETE = async (request : NextRequest) => {
    // TODO: Delete the form data by given formId from the url

    try {
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const form = await Form.deleteOne({ _id: id });
        return NextResponse.json({ form, id }, { status: 200 });

    } catch (error) {
         return NextResponse.json({ message: "Delete operation failed"}, { status: 401 })
    }
}