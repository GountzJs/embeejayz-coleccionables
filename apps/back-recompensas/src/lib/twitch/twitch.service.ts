/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { AccountNotFoundException } from 'src/account/errors/account-not-found.error';

export type UserTwitch = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string;
};

interface TwitchUserReponse {
  data: UserTwitch[];
}

@Injectable()
export class TwitchService {
  private readonly baseUrl = 'https://api.twitch.tv';

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getByUsername(username: string): Promise<{ data: UserTwitch }> {
    const token = this.configService.get<string>('TWITCH_API_TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Client-ID': this.configService.get<string>('TWITCH_CLIENT_ID'),
    };

    const res = await firstValueFrom(
      this.httpService
        .get(`${this.baseUrl}/helix/users?login=${username}`, { headers })
        .pipe(
          map(({ data: { data } }: AxiosResponse<TwitchUserReponse>) => ({
            data: data[0],
          })),
        ),
    );

    if (!res.data) throw new AccountNotFoundException();

    return res;
  }

  async getByIds(ids: string[]) {
    const token = this.configService.get<string>('TWITCH_API_TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Client-ID': this.configService.get<string>('TWITCH_CLIENT_ID'),
    };

    const params = ids.map((id) => `id=${id}`).join('&');

    const res = await firstValueFrom(
      this.httpService
        .get(`${this.baseUrl}/helix/users?${params}`, { headers })
        .pipe(
          map(({ data: { data } }: AxiosResponse<TwitchUserReponse>) => ({
            data: data,
          })),
        ),
    );

    return res.data;
  }
}
