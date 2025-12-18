import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'committees.json');

export async function GET() {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Here we expect the body to be the full array or an updated item.
        // For simplicity in this iteration, let's assume we replace the file content or handle updates.
        // If the body is an array, we replace. If it's an object, we might need logic.
        // Let's implement full replacement for now as it's easiest for atomic lists.
        
        await fs.writeFile(dataFilePath, JSON.stringify(body, null, 2));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
