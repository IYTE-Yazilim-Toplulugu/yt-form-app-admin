import ConnectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";
import Application from '@/models/Application';

export const GET = async (request: NextRequest) => {
    // TODO: Get all applications by given formId from the url
    try {
        await ConnectDB(); 
        const url = request.url;
        const id = url.split('/').pop();
        const applications = await Application.find({ formId: id });
        return NextResponse.json({ applications, id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Applications Cannot be fetched"}, { status: 401 })
    }
}

export const DELETE = async (request: NextRequest) => {
    // TODO: Delete all applications by given formId from the url
    // Bu fonksiyon form silindiğinde de çalıştırılmalı ki veri kirliliğinin önüne geçilebilsin.

    try {
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const applications = await Application.deleteMany({ formId: id });
        return NextResponse.json({ applications, id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Delete operation failed"}, { status: 401 })
    }
}