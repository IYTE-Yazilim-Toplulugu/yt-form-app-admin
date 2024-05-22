import ConnectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";
import Application from '@/models/Application';
import { connect } from "http2";

export const GET = async (request: NextRequest) => {
    // TODO: Get the application data by given applicationId from the url

    try {
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const application = await Application.findById(id);
        return NextResponse.json({ application, id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Application Cannot be fetched"}, { status: 401 })
        
    }
}

export const PATCH = async (request : NextRequest) => {
    // TODO: Update the application data by given applicationId from the url and given request data
    //const { } = request.json();
    
    try {
        var d;
        const data = request.json();
        data.then((res) => {
            d = res;
        });
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const application = await Application.findOneAndUpdate({ _id: id },  d , { new: true});
        return NextResponse.json({ application}, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Application Cannot be updated"}, { status: 401 })
    }
}

export const DELETE = async (request : NextRequest) => {
    // TODO: Delete the application data by given applicationId from the url

    try {
        await ConnectDB();
        const url = request.url;
        const id = url.split('/').pop();
        const application = await Application.deleteOne({ _id: id });
        return NextResponse.json({ application, id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Delete operation failed"}, { status: 401 })
        
    }
}