import { ConfigService } from '@nestjs/config';
import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private configService;
    private readonly client;
    constructor(configService: ConfigService);
    get clientInstance(): SupabaseClient<any, "public", any>;
}
