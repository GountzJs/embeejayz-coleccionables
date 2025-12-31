export interface BordersResponse {
  page: number;
  totalPages: number;
  totalItems: number;
  items: ({
    border: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      name: string;
      cover: string;
      isSpecial: boolean;
    };
  } & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    accountId: string;
    borderId: string;
  })[];
}
