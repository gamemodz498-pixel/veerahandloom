// Stub backend - frontend-only app, no backend calls needed

export interface backendInterface {
  _initializeAccessControlWithSecret: (secret: string) => Promise<void>;
}

export interface CreateActorOptions {
  agentOptions?: Record<string, unknown>;
  agent?: unknown;
  processError?: (e: unknown) => never;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActorConfig = Record<string, any>;

export class ExternalBlob {
  static fromURL(url: string): ExternalBlob {
    return new ExternalBlob(url);
  }
  constructor(private url: string) {
    void this.url;
  }
  async getBytes(): Promise<Uint8Array> { return new Uint8Array(); }
  onProgress?: (progress: number) => void;
}

export async function createActor(
  _canisterId: string,
  _upload: (file: ExternalBlob) => Promise<Uint8Array>,
  _download: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: unknown,
): Promise<backendInterface> {
  return {
    _initializeAccessControlWithSecret: async () => {},
  };
}
