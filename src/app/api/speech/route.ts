import { NextRequest, NextResponse } from 'next/server';
import { ASRClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { audioData } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const asrClient = new ASRClient(config, customHeaders);

    const result = await asrClient.recognize({
      uid: 'user123',
      base64Data: audioData,
    });

    return NextResponse.json({
      success: true,
      text: result.text,
      duration: result.duration,
    });
  } catch (error) {
    console.error('Speech recognition error:', error);
    return NextResponse.json(
      { success: false, error: 'Speech recognition failed' },
      { status: 500 }
    );
  }
}
