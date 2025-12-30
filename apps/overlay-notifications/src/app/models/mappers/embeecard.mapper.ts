import { type EmbeecardEntity, embeecardCategory } from "@embeejayz/core-cards";
import type { LatestEmbeecardEntity } from "../entities/latest-embeecard.entity";
import type { Mapper } from "../interfaces/mapper.interface";

export class EmbeecardMapper
	implements Mapper<LatestEmbeecardEntity, EmbeecardEntity>
{
	mapFrom(entity: LatestEmbeecardEntity): EmbeecardEntity {
		return {
			quantity: entity.quantity,
			name: entity.name,
			description: entity.description,
			identify: entity.identity,
			cover: entity.cover,
			category: entity.category,
		};
	}

	from(entity: EmbeecardEntity): LatestEmbeecardEntity {
		return {
			isSpecial: entity.category === embeecardCategory.special,
			quantity: entity.quantity,
			name: entity.name,
			description: entity.description,
			identity: entity.identify,
			cover: entity.cover,
			category: entity.category,
		};
	}
}
