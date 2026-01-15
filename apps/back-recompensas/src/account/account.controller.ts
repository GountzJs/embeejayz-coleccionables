import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { TwitchService, UserTwitch } from "../lib/twitch/twitch.service";
import { profileAdapter } from "./adapters/profile.adapter";
import { rankingAdapter } from "./adapters/ranking.adapter";
import { AccountNotFoundException } from "./errors/account-not-found.error";
import { AccountNotRegisterException } from "./errors/account-not-register.error";
import { ProfileDTO } from "./models/dtos/profile.dto";
import { AccountImplRepositoryService } from "./services/account-impl-respository/account-impl-respository.service";

@Controller("accounts")
export class AccountController {
	constructor(
		private readonly accountService: AccountImplRepositoryService,
		private readonly twitchService: TwitchService,
	) {}

	@Get("ranking")
	@HttpCode(HttpStatus.OK)
	async getRanking() {
		try {
			const data = await this.accountService.getRanking();

			const twitch = await this.twitchService.getByIds(
				data.map(({ ref }) => ref),
			);

			const twitchMap = new Map(twitch.map((u) => [u.id, u.display_name]));

			return rankingAdapter(data, twitchMap);
		} catch (err) {
			console.log(err);
			throw new HttpException(
				"Error genérico del sistema",
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: err },
			);
		}
	}

	@Get('twitch/:username')
  @HttpCode(HttpStatus.OK)
  async getTwitchUser(@Param() { username }: ProfileDTO) {
    try {
      const { data } = await this.twitchService.getByUsername(username);
      return { user: data };
    } catch {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

	@Get('twitch/following/:username')
  @HttpCode(HttpStatus.OK)
  async getTwitchFollowing(@Param() { username }: ProfileDTO) {
    try {
      const { data } = await this.twitchService.getByUsername(username);
      const { followed_at } = await this.twitchService.getFollowing(data.id);
      return { followedAt: followed_at };
    } catch  {
      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

	@Get(':username')
  @HttpCode(HttpStatus.OK)
  async getProfile(@Param() { username }: ProfileDTO) {
    let userData: UserTwitch | null = null;
    try {
      const { data } = await this.twitchService.getByUsername(username);
      userData = data;
      const user = await this.accountService.findOne(data.id);
      const { total } = await this.accountService.findRewards(user.id);

      return profileAdapter({
        id: user.id,
        avatar: data.profile_image_url,
        username: data.display_name,
        team: user.team,
        total,
      });
    } catch (err) {
      if (err instanceof AccountNotRegisterException && userData)
        return profileAdapter({
          id: userData.id,
          avatar: userData.profile_image_url,
          username: userData.display_name,
          team: null,
          total: {
            borders: 0,
            cards: 0,
            general: 0,
          },
        });

      if (err instanceof AccountNotFoundException)
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

      throw new HttpException(
        'Error genérico del sistema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
