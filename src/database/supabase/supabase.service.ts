import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

@Injectable()
export class SupabaseService {
  private readonly client: SupabaseClient

  constructor(private configService: ConfigService) {
    const url = configService.get<string>('SUPABASE_URL')
    const key = configService.get<string>('SUPABASE_KEY')

    if (!url || !key)
      throw new Error('Supabase environment variables are missing')

    this.client = createClient(url, key)
  }

  get clientInstance() {
    return this.client
  }
}
